import React from "react";
import {
  SITE_CONFIG,
  EXPORT_VEHICLES,
  FAQ_ITEMS,
  CUSTOMER_REVIEWS,
  REGIONS_LIST,
} from "@/data/exportData";

export default function StructuredDataJsonLd() {
  const jsonLdGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_CONFIG.siteUrl}/#website`,
        url: SITE_CONFIG.siteUrl,
        name: `${SITE_CONFIG.brandName} - ${SITE_CONFIG.subBrandName}`,
        alternateName: ["이차어디가", "이차어디가 중고차수출", "병국이수출"],
        inLanguage: "ko-KR",
        description:
          "폐차하기엔 아깝고 내수 매매는 감가가 심한 주행거리 과다·사고차·노후 화물차를 해외 바이어 직수출로 최고가 당일 현금 매입하는 중고차 수출 다이렉트 플랫폼입니다.",
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: [
            "#aeo-direct-answer",
            "#why-export",
            "#faq-section",
          ],
        },
      },
      {
        "@type": ["AutoDealer", "LocalBusiness"],
        "@id": `${SITE_CONFIG.siteUrl}/#organization`,
        name: `${SITE_CONFIG.brandName} (${SITE_CONFIG.subBrandName})`,
        legalName: SITE_CONFIG.companyInfo.companyName,
        url: SITE_CONFIG.siteUrl,
        telephone: SITE_CONFIG.phoneIntl,
        email: SITE_CONFIG.companyInfo.email,
        priceRange: "₩1,500,000 - ₩20,000,000",
        currenciesAccepted: "KRW",
        paymentAccepted: "Cash, Bank Transfer (현장 100% 즉시 계좌 송금)",
        address: {
          "@type": "PostalAddress",
          streetAddress: SITE_CONFIG.companyInfo.exportComplex,
          addressLocality: "연수구",
          addressRegion: "인천광역시",
          postalCode: SITE_CONFIG.companyInfo.postalCode,
          addressCountry: "KR",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: SITE_CONFIG.companyInfo.latitude,
          longitude: SITE_CONFIG.companyInfo.longitude,
        },
        areaServed: REGIONS_LIST.map((regionName) => ({
          "@type": "AdministrativeArea",
          name: regionName,
        })),
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        ],
        sameAs: [SITE_CONFIG.youtubeUrl],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          bestRating: "5",
          worstRating: "1",
          ratingCount: "328",
          reviewCount: String(CUSTOMER_REVIEWS.length),
        },
        review: CUSTOMER_REVIEWS.map((rev) => ({
          "@type": "Review",
          author: {
            "@type": "Person",
            name: rev.customerName,
          },
          datePublished: rev.date,
          name: rev.title,
          reviewBody: rev.content,
          itemReviewed: {
            "@id": `${SITE_CONFIG.siteUrl}/#organization`,
          },
          reviewRating: {
            "@type": "Rating",
            ratingValue: String(rev.rating),
            bestRating: "5",
          },
        })),
      },
      {
        "@type": "Service",
        "@id": `${SITE_CONFIG.siteUrl}/#export-service`,
        name: "이차어디가 중고차 해외 직수출 최고가 당일 매입 서비스",
        serviceType: "중고차 수출 · 노후차/사고차/화물차 직수출 매입 및 당일 수출말소",
        provider: {
          "@id": `${SITE_CONFIG.siteUrl}/#organization`,
        },
        areaServed: {
          "@type": "Country",
          name: "대한민국 (전국 무료 출장 및 무료 탁송)",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "차종별 중고차 직수출 매입 시세표",
          itemListElement: EXPORT_VEHICLES.map((v) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: `${v.name} (${v.years}) 중고차 수출 매입`,
              category: v.category,
              image: `${SITE_CONFIG.siteUrl}${v.imageUrl}`,
              description: `주요 수출국: ${v.exportCountries}. 일반 폐차(${v.scrapPriceRange}) 대비 ${v.maxExtraProfit} (${v.keyPoints.join(", ")})`,
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              priceCurrency: "KRW",
              minPrice: v.minPriceKRW,
              maxPrice: v.maxPriceKRW,
            },
          })),
        },
      },
      {
        "@type": "HowTo",
        "@id": `${SITE_CONFIG.siteUrl}/#howto-export`,
        name: "중고차 수출 당일 현금 매입 및 말소 4단계 진행 방법",
        description:
          "인감증명서나 매매단지 방문 없이 전화 한 통으로 당일 현금 수령부터 수출 말소까지 완료하는 절차입니다.",
        totalTime: "PT1H",
        supply: [
          {
            "@type": "HowToSupply",
            name: "자동차등록증 원본",
          },
          {
            "@type": "HowToSupply",
            name: "차주 신분증 사진 (앞면)",
          },
          {
            "@type": "HowToSupply",
            name: "대금 입금 계좌번호",
          },
        ],
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "1분 무료 수출 견적 상담",
            text: `홈페이지 견적 신청 또는 직통 전화(${SITE_CONFIG.phoneFormatted})·문자로 차종, 연식, 옵션을 알려주시면 실시간 해외 바이어 최고 시세를 안내받습니다.`,
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "전국 무료 출장 및 비대면 검수",
            text: "고객님이 계신 자택·직장 등 전국 어디든 원하는 시간에 방문하여 10분 내외로 간단히 차량을 검수합니다.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "현장 100% 즉시 대금 송금",
            text: "부당한 현장 감가 없이 약속된 매입 대금 전액을 차량 인수 전에 차주님 계좌로 현장에서 즉시 입금합니다.",
          },
          {
            "@type": "HowToStep",
            position: 4,
            name: "무료 탁송 및 당일 수출말소증 발급",
            text: "입고 후 당일~익일 내에 수출말소사실증명서를 발급하여 카카오톡/문자로 전달하며 자동차세·보험료 환급을 지원합니다.",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_CONFIG.siteUrl}/#faq`,
        mainEntity: FAQ_ITEMS.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
    />
  );
}
