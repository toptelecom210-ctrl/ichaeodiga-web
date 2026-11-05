import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Fetch Metadata Resource Isolation for API routes (per `security` guide §3.7)
  if (pathname.startsWith("/api/")) {
    const secFetchSite = request.headers.get("sec-fetch-site");
    const secFetchMode = request.headers.get("sec-fetch-mode");
    const secFetchDest = request.headers.get("sec-fetch-dest");

    if (
      secFetchSite &&
      !["same-origin", "same-site", "none"].includes(secFetchSite)
    ) {
      const isSafeNavigate =
        secFetchSite === "cross-site" &&
        secFetchMode === "navigate" &&
        request.method === "GET" &&
        !["object", "embed"].includes(secFetchDest || "");

      if (!isSafeNavigate) {
        return new NextResponse(
          JSON.stringify({
            ok: false,
            error: "CROSS_SITE_BLOCKED",
            message: "보안 정책(Fetch Metadata)에 의해 외부 사이트 요청이 차단되었습니다.",
          }),
          {
            status: 403,
            headers: {
              "Content-Type": "application/json",
              Vary: "Sec-Fetch-Dest, Sec-Fetch-Mode, Sec-Fetch-Site",
            },
          }
        );
      }
    }
  }

  const response = NextResponse.next();

  response.headers.set(
    "Vary",
    "Sec-Fetch-Dest, Sec-Fetch-Mode, Sec-Fetch-Site"
  );
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Permissions-Policy",
    "camera=(), geolocation=(), microphone=(), accelerometer=()"
  );
  response.headers.set(
    "Content-Security-Policy",
    [
      "default-src 'self' https: http: data: blob:",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https: http:",
      "style-src 'self' 'unsafe-inline' https: http:",
      "font-src 'self' https: http: data:",
      "img-src 'self' data: blob: https: http:",
      "frame-src 'self' https://www.youtube-nocookie.com https://www.youtube.com https:",
      "connect-src 'self' ws: wss: https: http:",
      "object-src 'none'",
      "base-uri 'self'",
    ].join("; ")
  );

  if (pathname.startsWith("/admin") || pathname.startsWith("/api/admin")) {
    response.headers.set(
      "Cache-Control",
      "no-store, no-cache, must-revalidate, private"
    );
    response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|images/).*)",
  ],
};
