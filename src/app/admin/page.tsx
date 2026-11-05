import type { Metadata } from "next";
import { cookies } from "next/headers";
import {
  ADMIN_COOKIE_NAME,
  verifyAdminSessionToken,
} from "@/lib/securityAuth";
import { getAllAdminDbData } from "@/lib/quoteDb";
import AdminConsoleClient from "@/components/AdminConsoleClient";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "관리자 전용 보안 DB 센터 | 이차어디가(병국이수출)",
  description:
    "이차어디가(병국이수출) 관리자 외 접근 완전 차단 보안 데이터베이스 및 WAF 관제 콘솔",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function AdminPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE_NAME)?.value;
  const verifiedAdmin = verifyAdminSessionToken(token);

  const initialDb = verifiedAdmin ? getAllAdminDbData() : null;

  return (
    <AdminConsoleClient
      initialAuthenticated={Boolean(verifiedAdmin)}
      adminUsername={verifiedAdmin?.sub || "byungguk"}
      initialDb={initialDb}
    />
  );
}
