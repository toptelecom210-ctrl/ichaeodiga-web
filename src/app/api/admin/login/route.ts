import { NextResponse } from "next/server";
import {
  ADMIN_COOKIE_NAME,
  createAdminSessionToken,
  verifyAdminPassword,
} from "@/lib/securityAuth";
import {
  checkLoginBruteForce,
  clearLoginFailures,
  logSecurityEvent,
  recordLoginFailure,
} from "@/lib/quoteDb";

function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  return request.headers.get("x-real-ip") || "127.0.0.1";
}

export async function POST(request: Request) {
  const headers = {
    Vary: "Sec-Fetch-Dest, Sec-Fetch-Mode, Sec-Fetch-Site",
    "X-Content-Type-Options": "nosniff",
    "Cross-Origin-Resource-Policy": "same-origin",
  };

  // Reject cross-site requests BEFORE authentication check (per `security` guide §3.7)
  const secFetchSite = request.headers.get("sec-fetch-site");
  if (
    secFetchSite &&
    !["same-origin", "same-site", "none"].includes(secFetchSite)
  ) {
    return NextResponse.json(
      { ok: false, message: "외부 사이트에서의 인증 요청은 차단됩니다." },
      { status: 403, headers }
    );
  }

  const ip = getClientIp(request);
  const bruteCheck = checkLoginBruteForce(ip);
  if (!bruteCheck.allowed) {
    return NextResponse.json(
      {
        ok: false,
        message: `비밀번호 오류 횟수 초과로 보안 잠금되었습니다. (${bruteCheck.remainingSeconds}초 후 재시도 가능)`,
      },
      { status: 429, headers }
    );
  }

  try {
    const body = (await request.json()) as {
      username?: string;
      password?: string;
    };
    const username = String(body.username || "");
    const password = String(body.password || "");

    const isValid = verifyAdminPassword(username, password);
    if (!isValid) {
      const failStatus = recordLoginFailure(ip);
      return NextResponse.json(
        {
          ok: false,
          message: failStatus.locked
            ? "비밀번호 5회 오류로 해당 IP가 10분간 강제 차단되었습니다."
            : `관리자 아이디 또는 보안코드가 일치하지 않습니다. (실패 ${failStatus.attempts}/5회)`,
        },
        { status: 401, headers }
      );
    }

    clearLoginFailures(ip);
    const token = createAdminSessionToken("byungguk");
    logSecurityEvent(
      "ADMIN_LOGIN_SUCCESS",
      ip,
      "수출마스터 병국 관리자 보안 인증 성공 (HMAC-SHA256 세션 발급)",
      "INFO"
    );

    const response = NextResponse.json(
      {
        ok: true,
        message: "관리자 보안 인증이 완료되었습니다.",
      },
      { status: 200, headers }
    );

    response.cookies.set({
      name: ADMIN_COOKIE_NAME,
      value: token,
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 12,
    });

    return response;
  } catch {
    return NextResponse.json(
      { ok: false, message: "잘못된 인증 요청 형식입니다." },
      { status: 400, headers }
    );
  }
}
