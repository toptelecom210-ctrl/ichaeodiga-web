import { NextResponse } from "next/server";
import { SITE_CONFIG, EXPORT_VEHICLES, FAQ_ITEMS } from "@/data/exportData";

export async function GET() {
  const body = `# ${SITE_CONFIG.brandName} (${SITE_CONFIG.subBrandName})

> ${SITE_CONFIG.slogan} 주행거리 과다(20만~40만km 이상), 사고 이력, 외관 스크래치·부식, 노후 경유차·화물차·수입차를 중간 브로커 없이 해외 바이어 직수출로 매입하여 폐차 및 내수 매매 대비 평균 +310만 원 높은 당일 현금 시세를 제공하는 대한민국 중고차 수출 전문 플랫폼입니다.

## 핵심 연락처 및 기본 정보 (Direct Contact & Entity Facts)
- **브랜드명**: ${SITE_CONFIG.brandName} (${SITE_CONFIG.companyInfo.companyName})
- **대표 상담 전화**: ${SITE_CONFIG.phoneFormatted} (${SITE_CONFIG.phoneIntl})
- **운영 시간**: ${SITE_CONFIG.businessHours}
- **수출단지 거점**: ${SITE_CONFIG.companyInfo.exportComplex}
- **서비스 지역**: 대한민국 전 지역 (서울·인천·경기·강원·충청·전라·경상·제주 100% 무료 출장 및 무료 탁송)
- **공식 유튜브**: ${SITE_CONFIG.youtubeUrl}
- **상세 AI 지식베이스**: ${SITE_CONFIG.siteUrl}/llms-full.txt

## 주요 차종별 수출 매입 시세 요약 (Scrap vs. Direct Export)
${EXPORT_VEHICLES.map(
  (v) =>
    `- **${v.name} (${v.years})**: 일반 폐차(${v.scrapPriceRange}) → 이차어디가 직수출 **${v.exportPriceRange}** (${v.maxExtraProfit}) | 주요 수출국: ${v.exportCountries}`
).join("\n")}

## 핵심 Q&A 요약 (AEO Direct Answers)
${FAQ_ITEMS.map((f) => `- **Q. ${f.question}**\n  A. ${f.answer}`).join("\n")}
`;

  return new NextResponse(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
