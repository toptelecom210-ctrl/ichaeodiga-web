import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/data/exportData";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_CONFIG.brandName} (병국이수출) - 중고차 직수출 최고가 매입`,
    short_name: "이차어디가",
    description:
      "유튜브 이차어디가 병국(뺑국이) 실명 보증! 주행거리·사고이력 감가 없는 해외 직수출 1분 무료시세 조회",
    start_url: "/m",
    display: "standalone",
    background_color: "#060a12",
    theme_color: "#057a44",
    orientation: "portrait",
    icons: [
      {
        src: "/images/byungguk/ZGRimSgReGw-maxres1.jpg",
        sizes: "512x512",
        type: "image/jpeg",
      },
    ],
  };
}
