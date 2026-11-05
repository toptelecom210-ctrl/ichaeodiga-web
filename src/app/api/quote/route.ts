import { NextResponse } from "next/server";
import {
  detectMaliciousPayload,
  sanitizeInputText,
} from "@/lib/securityAuth";
import {
  checkQuoteRateLimit,
  insertQuoteRecord,
  logSecurityEvent,
} from "@/lib/quoteDb";

function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  return request.headers.get("x-real-ip") || "127.0.0.1";
}

function buildSecurityHeaders(): Record<string, string> {
  return {
    Vary: "Sec-Fetch-Dest, Sec-Fetch-Mode, Sec-Fetch-Site",
    "X-Content-Type-Options": "nosniff",
    "Cross-Origin-Resource-Policy": "same-origin",
  };
}

// Block all GET requests to /api/quote — DB reading is strictly isolated to authenticated Admin
export async function GET(request: Request) {
  const ip = getClientIp(request);
  logSecurityEvent(
    "UNAUTHORIZED_DB_BLOCK",
    ip,
    "비인가자의 /api/quote DB 직접 열람(GET) 시도 — Zero-Trust 정책으로 완전 차단됨",
    "WARNING"
  );
  return NextResponse.json(
    {
      ok: false,
      error: "FORBIDDEN_DB_ACCESS",
      message:
        "보안 정책에 의해 고객 DB 열람이 완전 차단되었습니다. 관리자 인증 후에만 조회할 수 있습니다.",
    },
    { status: 403, headers: buildSecurityHeaders() }
  );
}

export async function POST(request: Request) {
  const ip = getClientIp(request);

  // Fetch Metadata Resource Isolation (per `security` guide §3.7)
  const secFetchSite = request.headers.get("sec-fetch-site");
  if (
    secFetchSite &&
    !["same-origin", "same-site", "none"].includes(secFetchSite)
  ) {
    logSecurityEvent(
      "RATE_LIMIT_BLOCK",
      ip,
      `외부 출처(Sec-Fetch-Site: ${secFetchSite}) 위조 요청 차단`,
      "WARNING"
    );
    return NextResponse.json(
      { ok: false, message: "비정상적인 외부 출처 요청이 차단되었습니다." },
      { status: 403, headers: buildSecurityHeaders() }
    );
  }

  if (!checkQuoteRateLimit(ip)) {
    return NextResponse.json(
      {
        ok: false,
        message: "단시간 내 과도한 요청이 감지되어 일시 차단되었습니다.",
      },
      { status: 429, headers: buildSecurityHeaders() }
    );
  }

  try {
    const contentType = request.headers.get("content-type") || "";
    let payload: Record<string, unknown> = {};

    if (contentType.includes("application/json")) {
      payload = await request.json();
    } else {
      const formData = await request.formData();
      payload = Object.fromEntries(formData.entries());
    }

    const rawSerialized = JSON.stringify(payload);
    if (detectMaliciousPayload(rawSerialized)) {
      logSecurityEvent(
        "WAF_BLOCK",
        ip,
        "견적 폼 내 악성 스크립트/SQL 인젝션 공격 시그니처 감지 및 즉시 차단",
        "CRITICAL"
      );
      return NextResponse.json(
        {
          ok: false,
          message: "보안 방화벽(WAF)에 의해 비정상적인 입력이 차단되었습니다.",
        },
        { status: 400, headers: buildSecurityHeaders() }
      );
    }

    const carModel = sanitizeInputText(payload.carModel, 80);
    const year = sanitizeInputText(payload.year, 50);
    const mileageBand = sanitizeInputText(payload.mileageBand, 40);
    const region = sanitizeInputText(payload.region, 60);
    const phone = sanitizeInputText(payload.phone, 25);
    const notes = sanitizeInputText(payload.notes, 250);
    const funnelSource = sanitizeInputText(
      payload.funnelSource || "홈페이지 다이렉트 접수",
      60
    );

    if (!phone || phone.length < 8) {
      return NextResponse.json(
        { ok: false, message: "올바른 연락처를 입력해 주세요." },
        { status: 400, headers: buildSecurityHeaders() }
      );
    }

    const saved = insertQuoteRecord({
      carModel,
      year,
      mileageBand,
      region,
      phone,
      notes,
      funnelSource,
      ip,
    });

    return NextResponse.json(
      {
        ok: true,
        message: "무료 수출 견적 상담 신청이 보안 DB에 안전하게 접수되었습니다.",
        quoteId: saved.id,
        receivedAt: saved.createdAt,
      },
      { status: 200, headers: buildSecurityHeaders() }
    );
  } catch {
    return NextResponse.json(
      { ok: false, message: "요청 처리 중 오류가 발생했습니다." },
      { status: 400, headers: buildSecurityHeaders() }
    );
  }
}
