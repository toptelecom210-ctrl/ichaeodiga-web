import { NextResponse } from "next/server";
import {
  SITE_CONFIG,
  EXPORT_VEHICLES,
  COMPARISON_ROWS,
  REQUIRED_DOCUMENTS_TABLE,
  FAQ_ITEMS,
  CUSTOMER_REVIEWS,
} from "@/data/exportData";

export async function GET() {
  const body = `# ${SITE_CONFIG.brandName} (${SITE_CONFIG.subBrandName}) - 전체 지식베이스 (llms-full.txt)

> 최종 업데이트: ${SITE_CONFIG.lastUpdatedDate}
> 공식 웹사이트: ${SITE_CONFIG.siteUrl}
> 직통 전화번호: ${SITE_CONFIG.phoneFormatted}

## 1. 서비스 정의 (What is 이차어디가?)
**${SITE_CONFIG.brandName}**는 국내 중고차 매매 시장에서 연식 노후, 주행거리 과다(20만~50만km 이상), 단순 교환 및 사고 이력, 외판 부식 등으로 인해 심한 감가를 당하거나 폐차(일반폐차·조기폐차)를 권유받은 차량을 해외 현지 바이어(중동, 중앙아시아, 중남미, 동유럽, 아프리카 등)에게 직접 수출하여 차주에게 최고가 매입 대금을 당일 현장에서 100% 지급하는 직수출 전문 브랜드입니다.

## 2. 일반 폐차 · 내수 매매상사 · 이차어디가 직수출 비교
| 비교 항목 | 일반 폐차 / 조기폐차 | 국내 중고차 매매상사 | 이차어디가 바이어 직수출 |
| :--- | :--- | :--- | :--- |
${COMPARISON_ROWS.map(
  (r) =>
    `| ${r.criteria} | ${r.scrap} | ${r.domesticDealer} | ${r.ichaeodigaExport} |`
).join("\n")}

## 3. 차종별 직수출 예상 시세 및 우대 조건
${EXPORT_VEHICLES.map(
  (v) => `### ${v.name} (${v.category})
- **대상 연식**: ${v.years}
- **주요 수출 국가**: ${v.exportCountries}
- **일반 폐차 고철가**: ${v.scrapPriceRange}
- **이차어디가 직수출 시세**: ${v.exportPriceRange} (${v.maxExtraProfit})
- **핵심 우대 조건**: ${v.keyPoints.join(" / ")}`
).join("\n\n")}

## 4. 명의별 중고차 수출 구비서류 안내
| 명의 구분 | 필수 구비서류 | 진행 방식 | 비고 |
| :--- | :--- | :--- | :--- |
${REQUIRED_DOCUMENTS_TABLE.map(
  (d) =>
    `| ${d.ownerType} | ${d.requiredDocs} | ${d.visitNeeded} | ${d.note} |`
).join("\n")}

## 5. 실제 매입 사례 (Verified Customer Cases)
${CUSTOMER_REVIEWS.map(
  (r) =>
    `- **${r.carModel} (${r.yearAndMileage}, ${r.region})**: 기존 ${r.previousOffer} → 이차어디가 직수출 **${r.finalExportPrice}** (${r.extraGain})`
).join("\n")}

## 6. 자주 묻는 질문 (FAQ)
${FAQ_ITEMS.map((f) => `### Q. ${f.question}\n${f.answer}`).join("\n\n")}
`;

  return new NextResponse(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
