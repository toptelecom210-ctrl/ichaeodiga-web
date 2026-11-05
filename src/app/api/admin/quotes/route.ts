import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import {
  ADMIN_COOKIE_NAME,
  sanitizeInputText,
  verifyAdminSessionToken,
} from "@/lib/securityAuth";
import {
  deleteQuoteRecordByAdmin,
  getAllAdminDbData,
  logSecurityEvent,
  updateQuoteRecordByAdmin,
  type QuoteStatus,
} from "@/lib/quoteDb";

function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  return request.headers.get("x-real-ip") || "127.0.0.1";
}

function buildAdminHeaders(): Record<string, string> {
  return {
    Vary: "Sec-Fetch-Dest, Sec-Fetch-Mode, Sec-Fetch-Site",
    "Cache-Control": "no-store, no-cache, must-revalidate, private",
    "X-Content-Type-Options": "nosniff",
    "Cross-Origin-Resource-Policy": "same-origin",
  };
}

async function ensureAdminAuthenticated(request: Request) {
  // Reject cross-site requests BEFORE authentication check (per `security` guide §3.7)
  const secFetchSite = request.headers.get("sec-fetch-site");
  if (
    secFetchSite &&
    !["same-origin", "same-site", "none"].includes(secFetchSite)
  ) {
    return null;
  }

  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE_NAME)?.value;
  return verifyAdminSessionToken(token);
}

export async function GET(request: Request) {
  const ip = getClientIp(request);
  const admin = await ensureAdminAuthenticated(request);

  if (!admin) {
    logSecurityEvent(
      "UNAUTHORIZED_DB_BLOCK",
      ip,
      "비인가자의 관리자 DB API(/api/admin/quotes) 접근 시도 — 403 완전 차단",
      "CRITICAL"
    );
    return NextResponse.json(
      {
        ok: false,
        error: "ADMIN_ONLY_ACCESS",
        message: "관리자 외에는 데이터베이스 접근이 완전히 차단되어 있습니다.",
      },
      { status: 403, headers: buildAdminHeaders() }
    );
  }

  const dbData = getAllAdminDbData();
  return NextResponse.json(
    {
      ok: true,
      adminUser: admin.sub,
      ...dbData,
    },
    { status: 200, headers: buildAdminHeaders() }
  );
}

export async function PATCH(request: Request) {
  const ip = getClientIp(request);
  const admin = await ensureAdminAuthenticated(request);

  if (!admin) {
    logSecurityEvent(
      "UNAUTHORIZED_DB_BLOCK",
      ip,
      "비인가자의 DB 상태 수정(PATCH) 시도 — 403 완전 차단",
      "CRITICAL"
    );
    return NextResponse.json(
      { ok: false, message: "관리자 권한이 없습니다." },
      { status: 403, headers: buildAdminHeaders() }
    );
  }

  try {
    const body = (await request.json()) as {
      id?: string;
      status?: QuoteStatus;
      adminMemo?: string;
      estimatedPriceRange?: string;
    };

    if (!body.id) {
      return NextResponse.json(
        { ok: false, message: "레코드 ID가 필요합니다." },
        { status: 400, headers: buildAdminHeaders() }
      );
    }

    const updated = updateQuoteRecordByAdmin({
      id: sanitizeInputText(body.id, 40),
      status: body.status,
      adminMemo:
        typeof body.adminMemo === "string"
          ? sanitizeInputText(body.adminMemo, 300)
          : undefined,
      estimatedPriceRange:
        typeof body.estimatedPriceRange === "string"
          ? sanitizeInputText(body.estimatedPriceRange, 80)
          : undefined,
    });

    if (!updated) {
      return NextResponse.json(
        { ok: false, message: "해당 견적 데이터를 찾을 수 없습니다." },
        { status: 404, headers: buildAdminHeaders() }
      );
    }

    return NextResponse.json(
      { ok: true, record: updated },
      { status: 200, headers: buildAdminHeaders() }
    );
  } catch {
    return NextResponse.json(
      { ok: false, message: "DB 업데이트 중 오류가 발생했습니다." },
      { status: 400, headers: buildAdminHeaders() }
    );
  }
}

export async function DELETE(request: Request) {
  const ip = getClientIp(request);
  const admin = await ensureAdminAuthenticated(request);

  if (!admin) {
    logSecurityEvent(
      "UNAUTHORIZED_DB_BLOCK",
      ip,
      "비인가자의 DB 삭제(DELETE) 시도 — 403 완전 차단",
      "CRITICAL"
    );
    return NextResponse.json(
      { ok: false, message: "관리자 권한이 없습니다." },
      { status: 403, headers: buildAdminHeaders() }
    );
  }

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (!id) {
    return NextResponse.json(
      { ok: false, message: "삭제할 ID가 필요합니다." },
      { status: 400, headers: buildAdminHeaders() }
    );
  }

  const deleted = deleteQuoteRecordByAdmin(id);
  return NextResponse.json(
    { ok: deleted },
    { status: deleted ? 200 : 404, headers: buildAdminHeaders() }
  );
}
