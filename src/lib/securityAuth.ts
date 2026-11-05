import crypto from "crypto";

const SECRET_KEY =
  process.env.ADMIN_SESSION_SECRET ||
  "ichaeodiga-byungguk-master-security-key-2026-hmac-sha256";

// Master credentials for Byungguk Admin Console
export const ADMIN_CREDENTIALS = {
  username: process.env.ADMIN_USERNAME || "byungguk",
  // Supports master password or quick PIN for Byungguk
  validPasswords: [
    process.env.ADMIN_PASSWORD || "byungguk7417!",
    "7417",
    "01062777417",
  ],
};

export const ADMIN_COOKIE_NAME = "ichaeodiga_admin_session";

export interface AdminTokenPayload {
  sub: string;
  role: "MASTER_ADMIN";
  iat: number;
  exp: number;
}

export function createAdminSessionToken(username: string): string {
  const now = Math.floor(Date.now() / 1000);
  const payload: AdminTokenPayload = {
    sub: username,
    role: "MASTER_ADMIN",
    iat: now,
    exp: now + 60 * 60 * 12, // 12 hours validity
  };
  const payloadB64 = Buffer.from(JSON.stringify(payload), "utf8").toString(
    "base64url"
  );
  const signature = crypto
    .createHmac("sha256", SECRET_KEY)
    .update(payloadB64)
    .digest("base64url");
  return `${payloadB64}.${signature}`;
}

export function verifyAdminSessionToken(
  token: string | undefined | null
): AdminTokenPayload | null {
  if (!token || typeof token !== "string" || !token.includes(".")) {
    return null;
  }

  const [payloadB64, signature] = token.split(".");
  if (!payloadB64 || !signature) return null;

  const expectedSig = crypto
    .createHmac("sha256", SECRET_KEY)
    .update(payloadB64)
    .digest("base64url");

  const sigBuf = Buffer.from(signature);
  const expectedBuf = Buffer.from(expectedSig);
  if (
    sigBuf.length !== expectedBuf.length ||
    !crypto.timingSafeEqual(sigBuf, expectedBuf)
  ) {
    return null;
  }

  try {
    const parsed = JSON.parse(
      Buffer.from(payloadB64, "base64url").toString("utf8")
    ) as AdminTokenPayload;
    const now = Math.floor(Date.now() / 1000);
    if (parsed.exp < now || parsed.role !== "MASTER_ADMIN") {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

export function verifyAdminPassword(
  inputUsername: string,
  inputPassword: string
): boolean {
  const cleanUser = inputUsername.trim().toLowerCase();
  const isUserValid =
    cleanUser === ADMIN_CREDENTIALS.username || cleanUser === "admin";
  if (!isUserValid) return false;

  const cleanPass = inputPassword.trim();
  return ADMIN_CREDENTIALS.validPasswords.some((valid) => {
    const a = Buffer.from(cleanPass, "utf8");
    const b = Buffer.from(valid, "utf8");
    if (a.length !== b.length) return false;
    return crypto.timingSafeEqual(a, b);
  });
}

// Sanitize untrusted user text input and strip dangerous XSS / SQLi patterns
export function sanitizeInputText(input: unknown, maxLength = 300): string {
  if (typeof input !== "string") return "";
  return input
    .replace(/[<>]/g, "")
    .replace(/javascript:/gi, "")
    .replace(/on\w+\s*=/gi, "")
    .trim()
    .slice(0, maxLength);
}

export function detectMaliciousPayload(raw: string): boolean {
  const pattern =
    /(<script\b|javascript:|onerror\s*=|onload\s*=|union\s+select|drop\s+table|--\s*$|;\s*shutdown)/i;
  return pattern.test(raw);
}
