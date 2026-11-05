import type { Metadata } from "next";
import "./globals.css";
import { SITE_CONFIG } from "@/data/exportData";
import StructuredDataJsonLd from "@/components/StructuredDataJsonLd";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.siteUrl),
  title: {
    default: `${SITE_CONFIG.brandName} | 중고차수출 다이렉트 최고가 매입·당일말소 센터`,
    template: `%s | ${SITE_CONFIG.brandName} 중고차수출`,
  },
  description:
    "폐차하기엔 아깝고 내수 매매는 감가가 심한 차량! 주행거리 20만~40만km 과다·사고차·노후 경유차·포터2 화물차·수입차 전 차종 해외 바이어 직수출 최고가 당일 현금 매입. 인감 없이 등록증·신분증 사진으로 전국 무료 출장 및 당일 수출 말소.",
  keywords: [
    "이차어디가",
    "중고차수출",
    "중고차수출다이렉트",
    "클린중고차수출",
    "중고차수출시세",
    "폐차대신수출",
    "조기폐차수출비교",
    "아반떼MD수출",
    "쏘렌토R수출",
    "포터2수출",
    "스포티지R수출",
    "K5수출",
    "사고차수출",
    "수입차수출",
    "인천중고차수출단지",
  ],
  authors: [{ name: SITE_CONFIG.brandName, url: SITE_CONFIG.siteUrl }],
  creator: SITE_CONFIG.brandName,
  publisher: SITE_CONFIG.companyInfo.companyName,
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  alternates: {
    canonical: "/",
    types: {
      "text/plain": [
        { url: "/llms.txt", title: "이차어디가 AI 요약 지식베이스 (llms.txt)" },
        {
          url: "/llms-full.txt",
          title: "이차어디가 전체 AI 지식베이스 (llms-full.txt)",
        },
      ],
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: `${SITE_CONFIG.brandName} - 중고차수출 다이렉트 최고가 당일 현금 매입`,
    description:
      "주행거리 20만~40만km 이상 감가 ZERO! 폐차·내수 대비 평균 +310만 원 추가 수익. 전국 무료 출장 & 1분 무료 수출 견적 조회.",
    url: SITE_CONFIG.siteUrl,
    siteName: `${SITE_CONFIG.brandName} 중고차수출`,
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.brandName} | 중고차수출 다이렉트 최고가 매입`,
    description:
      "폐차 전 필수 비교! 주행거리·사고이력 감가 없이 해외 바이어 직수출 시세로 당일 현금 매입합니다.",
  },
  other: {
    "geo.region": "KR-28",
    "geo.placename": "인천광역시 연수구",
    "geo.position": `${SITE_CONFIG.companyInfo.latitude};${SITE_CONFIG.companyInfo.longitude}`,
    ICBM: `${SITE_CONFIG.companyInfo.latitude}, ${SITE_CONFIG.companyInfo.longitude}`,
    "ai-content-declaration": "verified-first-party-business-data",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <StructuredDataJsonLd />
      </head>
      <body>{children}</body>
    </html>
  );
}
