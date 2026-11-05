import { NextResponse } from "next/server";
import { ADMIN_COOKIE_NAME } from "@/lib/securityAuth";

export async function POST() {
  const response = NextResponse.json(
    { ok: true, message: "관리자 세션이 안전하게 종료되었습니다." },
    {
      status: 200,
      headers: {
        // Use Clear-Site-Data on logout endpoints per `security` & `privacy` guides
        "Clear-Site-Data": '"cookies", "storage"',
        "X-Content-Type-Options": "nosniff",
        "Cross-Origin-Resource-Policy": "same-origin",
      },
    }
  );

  response.cookies.set({
    name: ADMIN_COOKIE_NAME,
    value: "",
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });

  return response;
}
