import type { Metadata } from "next";
import MobileAppClient from "@/components/MobileAppClient";
import { SITE_CONFIG } from "@/data/exportData";

export const metadata: Metadata = {
  title: `${SITE_CONFIG.brandName} 모바일 전용버전 | 10초 내차 수출시세 조회`,
  description:
    "스마트폰 전용 이차어디가(병국이수출) 모바일 다이렉트 센터. 차량번호 또는 차량명만으로 10초 내 해외 바이어 최고가 수출 시세를 확인하세요.",
};

export default function MobileVersionPage() {
  return <MobileAppClient />;
}
