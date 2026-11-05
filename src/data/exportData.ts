export const SITE_CONFIG = {
  siteUrl: "https://ichaeodiga.kr",
  brandName: "이차어디가",
  subBrandName: "중고차수출 다이렉트 센터",
  slogan: "폐차하기엔 아깝고, 국내 매매는 감가가 심할 때!",
  phone: "010-6277-7417",
  phoneFormatted: "010-6277-7417",
  phoneIntl: "+82-10-6277-7417",
  smsBody:
    "안녕하세요! [이차어디가] 홈페이지 보고 내 차 수출 견적 문의드립니다. (차종/연식/지역: )",
  kakaoUrl: "https://open.kakao.com/",
  youtubeUrl: "https://www.youtube.com/@ichaeodiga12",
  instagramUrl: "https://www.instagram.com/ichaeodiga12",
  tiktokUrl: "https://www.tiktok.com/@ichaeodiga12",
  businessHours: "연중무휴 24시간 실시간 무료 견적 상담",
  lastUpdatedDate: "2026-11-05",
  companyInfo: {
    companyName: "이차어디가 중고차수출 (병국이수출)",
    representative: "대표 상담사",
    businessNumber: "123-45-67890 (임시 사업자번호 - 추후 수정)",
    exportComplex: "인천광역시 연수구 능허대로 수출단지 (전국 무료 출장 매입)",
    postalCode: "21984",
    latitude: 37.4195,
    longitude: 126.6438,
    email: "contact@ichaeodiga.kr",
  },
};

export interface LiveTickerItem {
  id: string;
  timeAgo: string;
  region: string;
  carModel: string;
  year: string;
  mileage: string;
  domesticQuote: string;
  exportPrice: string;
  bonusDiff: string;
  status: "송금완료" | "검수진행" | "말소완료" | "견적산출";
}

export const LIVE_TICKER_ITEMS: LiveTickerItem[] = [
  {
    id: "t1",
    timeAgo: "방금 전",
    region: "경기 수원 · 김*수(4821)",
    carModel: "더 뉴 K5 2.0 가솔린",
    year: "2014년식",
    mileage: "24만km",
    domesticQuote: "신혼 때부터 탄 차 · 내수 감가 설움",
    exportPrice: "키르기스스탄 새 가족에게 직수출",
    bonusDiff: "얼굴 믿고 선탁송 · 감가 0원",
    status: "송금완료",
  },
  {
    id: "t2",
    timeAgo: "1분 전",
    region: "서울 강서 · 박*준(9104)",
    carModel: "아반떼 MD 1.6 GDi",
    year: "2012년식",
    mileage: "21만km",
    domesticQuote: "사회초년생 첫차 · 범퍼흠집 감가",
    exportPrice: "리비아 현역 세단으로 새 출발",
    bonusDiff: "추억 존중 · 무감가 칼정산",
    status: "말소완료",
  },
  {
    id: "t3",
    timeAgo: "2분 전",
    region: "충남 천안 · 이*철(3318)",
    carModel: "포터2 초장축 슈퍼캡 (수동)",
    year: "2013년식",
    mileage: "33만km",
    domesticQuote: "삼남매 키운 트럭 · 폐차장 고철 판정",
    exportPrice: "요르단 농장 일꾼으로 제2의 인생",
    bonusDiff: "시골 카센터에서 차부터 선탁송",
    status: "송금완료",
  },
  {
    id: "t4",
    timeAgo: "3분 전",
    region: "부산 해운대 · 최*호(7742)",
    carModel: "쏘렌토 R 2.0 디젤 TLX",
    year: "2011년식",
    mileage: "28만km",
    domesticQuote: "아이들과 캠핑 다닌 차 · 조기폐차 권유",
    exportPrice: "중앙아시아 산악 패밀리카 배정",
    bonusDiff: "선루프 우대 · 약속 그대로 정산",
    status: "검수진행",
  },
  {
    id: "t5",
    timeAgo: "4분 전",
    region: "대구 달서 · 정*훈(5580)",
    carModel: "그랜드 스타렉스 12인승",
    year: "2015년식",
    mileage: "26만km",
    domesticQuote: "아이들 태우던 정든 학원차",
    exportPrice: "몽골 마을 통학버스로 새 생명",
    bonusDiff: "도색·스티커 그대로 무감가 인수",
    status: "송금완료",
  },
  {
    id: "t6",
    timeAgo: "5분 전",
    region: "인천 부평 · 강*민(1920)",
    carModel: "스포티지 R 2.0 디젤",
    year: "2012년식",
    mileage: "25만km",
    domesticQuote: "청춘을 함께한 첫 SUV · 키로수 감가",
    exportPrice: "알제리 청년의 드림카로 선적",
    bonusDiff: "병국이 얼굴 믿고 비대면 인계",
    status: "말소완료",
  },
  {
    id: "t7",
    timeAgo: "6분 전",
    region: "경기 화성 · 윤*석(6045)",
    carModel: "올 뉴 쏘렌토 UM 2.0 4WD",
    year: "2015년식",
    mileage: "27만km",
    domesticQuote: "온 가족 여행 동반자 · 보험이력 감가",
    exportPrice: "카자흐스탄 대가족 패밀리카 확정",
    bonusDiff: "사고이력 트집 ZERO · 당일정산",
    status: "송금완료",
  },
  {
    id: "t8",
    timeAgo: "7분 전",
    region: "서울 송파 · 조*영(8812)",
    carModel: "벤츠 E220 CDI (W212)",
    year: "2014년식",
    mileage: "29만km",
    domesticQuote: "내 인생 첫 삼각별 · 수리비 부담",
    exportPrice: "조지아 명차 복원 바이어 직매칭",
    bonusDiff: "경고등·누유 수리 없이 그대로",
    status: "견적산출",
  },
  {
    id: "t9",
    timeAgo: "9분 전",
    region: "경남 창원 · 장*태(2491)",
    carModel: "봉고3 1톤 더블캡 4륜(4WD)",
    year: "2014년식",
    mileage: "36만km",
    domesticQuote: "현장 누빈 땀방울 · 적재함 부식",
    exportPrice: "동남아 건설 현장 현역 트럭으로",
    bonusDiff: "얼굴 믿고 차 키 먼저 보내주심",
    status: "송금완료",
  },
  {
    id: "t10",
    timeAgo: "11분 전",
    region: "대전 유성 · 한*희(7390)",
    carModel: "아반떼 AD 1.6 스마트",
    year: "2016년식",
    mileage: "22만km",
    domesticQuote: "출퇴근 든든한 발 · 접촉사고 흠집",
    exportPrice: "요르단 신혼부부 세단으로 출고",
    bonusDiff: "직장 주차장에서 비대면 안심탁송",
    status: "송금완료",
  },
  {
    id: "t11",
    timeAgo: "12분 전",
    region: "광주 북구 · 오*진(4117)",
    carModel: "싼타페 DM 2.0 7인승",
    year: "2013년식",
    mileage: "31만km",
    domesticQuote: "삼남매 키운 7인승 · 폐차장 권유",
    exportPrice: "키르기스스탄 7인승 귀빈 SUV로",
    bonusDiff: "31만km 주행거리 감가 0원",
    status: "검수진행",
  },
  {
    id: "t12",
    timeAgo: "14분 전",
    region: "경기 고양 · 신*우(5029)",
    carModel: "BMW 520d F10 럭셔리",
    year: "2013년식",
    mileage: "28만km",
    domesticQuote: "달리는 즐거움 주던 차 · 누유 걱정",
    exportPrice: "알바니아·조지아 오너에게 직수출",
    bonusDiff: "자존심 지켜드리는 무감가 인수",
    status: "송금완료",
  },
  {
    id: "t13",
    timeAgo: "15분 전",
    region: "울산 남구 · 권*도(3901)",
    carModel: "그랜저 HG 240 모던",
    year: "2013년식",
    mileage: "29만km",
    domesticQuote: "아버지의 자부심 · 연식 감가 설움",
    exportPrice: "아제르바이잔 의전 세단으로",
    bonusDiff: "유튜브 보고 차부터 편하게 탁송",
    status: "말소완료",
  },
  {
    id: "t14",
    timeAgo: "17분 전",
    region: "충북 청주 · 황*성(6614)",
    carModel: "포터2 냉동탑차 초장축",
    year: "2015년식",
    mileage: "38만km",
    domesticQuote: "창업부터 함께한 동업자 · 랩핑흔적",
    exportPrice: "중동 식자재 유통 파트너로 새출발",
    bonusDiff: "상호 스티커 제거 없이 그대로",
    status: "송금완료",
  },
  {
    id: "t15",
    timeAgo: "18분 전",
    region: "전북 전주 · 서*람(8123)",
    carModel: "올 뉴 카니발 9인승 디젤",
    year: "2015년식",
    mileage: "27만km",
    domesticQuote: "부모님·아이들 여행 추억 가득",
    exportPrice: "키르기스스탄 VIP 패밀리밴 배정",
    bonusDiff: "실내 사용감 트집 ZERO 정산",
    status: "견적산출",
  },
  {
    id: "t16",
    timeAgo: "20분 전",
    region: "경기 평택 · 안*기(1784)",
    carModel: "기아 K3 1.6 트렌디",
    year: "2014년식",
    mileage: "23만km",
    domesticQuote: "10년 무고장 출퇴근 친구 · 고철가",
    exportPrice: "이집트 현역 베스트셀러로 선적",
    bonusDiff: "얼굴 믿고 맡기는 당일 칼정산",
    status: "송금완료",
  },
  {
    id: "t17",
    timeAgo: "22분 전",
    region: "강원 원주 · 유*호(9450)",
    carModel: "기아 모하비 KV300 4WD",
    year: "2012년식",
    mileage: "35만km",
    domesticQuote: "눈길 지켜주던 든든한 가장 같은 차",
    exportPrice: "몽골 대초원을 달리는 4WD 명차로",
    bonusDiff: "하부 세월 흔적 무감가 존중",
    status: "송금완료",
  },
  {
    id: "t18",
    timeAgo: "24분 전",
    region: "서울 노원 · 문*숙(3048)",
    carModel: "올 뉴 모닝 JA 스마트키",
    year: "2017년식",
    mileage: "19만km",
    domesticQuote: "아이 등하원 함께한 엄마의 든든한 발",
    exportPrice: "시리아·가나 도심 인기 경차로",
    bonusDiff: "문콕·스크래치 감가 0원 안심인수",
    status: "말소완료",
  },
  {
    id: "t19",
    timeAgo: "25분 전",
    region: "경기 용인 · 배*현(7216)",
    carModel: "렉서스 ES300h 하이브리드",
    year: "2013년식",
    mileage: "26만km",
    domesticQuote: "10년 정숙함 선물한 차 · 배터리 걱정",
    exportPrice: "몽골·요르단 최고급 하이브리드로",
    bonusDiff: "하이브리드 진가 100% 인정",
    status: "검수진행",
  },
  {
    id: "t20",
    timeAgo: "27분 전",
    region: "경북 구미 · 손*재(5832)",
    carModel: "LF 쏘나타 2.0 스마트",
    year: "2015년식",
    mileage: "25만km",
    domesticQuote: "전국 출장길 함께 뛴 고마운 세단",
    exportPrice: "요르단 현지 패밀리 세단으로",
    bonusDiff: "인스타 보고 믿음으로 선탁송",
    status: "송금완료",
  },
  {
    id: "t21",
    timeAgo: "29분 전",
    region: "인천 서구 · 백*철(4409)",
    carModel: "현대 마이티 2.5톤 카고",
    year: "2012년식",
    mileage: "44만km",
    domesticQuote: "20년 생계 책임진 트럭 · 은퇴의 날",
    exportPrice: "아프리카·중동 물류 현장 주역으로",
    bonusDiff: "사장님 땀방울 존중 · 당일정산",
    status: "송금완료",
  },
  {
    id: "t22",
    timeAgo: "31분 전",
    region: "전남 순천 · 남*우(6192)",
    carModel: "투싼 ix 2.0 디젤",
    year: "2012년식",
    mileage: "27만km",
    domesticQuote: "주말 바다낚시 동반자 · 매연등급",
    exportPrice: "리비아 해안도로 현역 SUV로",
    bonusDiff: "조기폐차 대신 당당한 새출발",
    status: "말소완료",
  },
  {
    id: "t23",
    timeAgo: "33분 전",
    region: "경기 남양주 · 심*규(2087)",
    carModel: "아우디 A6 35 TDI 콰트로",
    year: "2014년식",
    mileage: "24만km",
    domesticQuote: "눈길 든든했던 콰트로 · 내수 저평가",
    exportPrice: "키르기스스탄 설원 달리는 명차로",
    bonusDiff: "경고등 트집 없이 약속 그대로",
    status: "견적산출",
  },
  {
    id: "t24",
    timeAgo: "35분 전",
    region: "경남 김해 · 노*원(8765)",
    carModel: "포터2 윙바디 파워게이트",
    year: "2016년식",
    mileage: "32만km",
    domesticQuote: "비바람 막아주던 고마운 윙바디",
    exportPrice: "동남아 유통 현장 핵심 화물차로",
    bonusDiff: "특장 장비 가치 그대로 인정",
    status: "송금완료",
  },
];

export type VehicleCategory =
  | "전체"
  | "승용·세단"
  | "SUV·RV"
  | "화물·트럭"
  | "수입차";

export interface ExportVehicleItem {
  id: string;
  category: Exclude<VehicleCategory, "전체">;
  name: string;
  years: string;
  exportCountries: string;
  scrapPriceRange: string;
  exportPriceRange: string;
  minPriceKRW: number;
  maxPriceKRW: number;
  maxExtraProfit: string;
  keyPoints: string[];
  badge: string;
  imageUrl: string;
  imageAlt: string;
  sampleSpec: string;
}

import { EXPORT_VEHICLES_CATALOG } from "./exportVehiclesCatalog";

export const EXPORT_VEHICLES: ExportVehicleItem[] = EXPORT_VEHICLES_CATALOG;

export interface ComparisonRow {
  criteria: string;
  scrap: string;
  domesticDealer: string;
  ichaeodigaExport: string;
}

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    criteria: "주행거리 20만km 이상",
    scrap: "고철 무게로만 산정 (최저가)",
    domesticDealer: "심각한 감가 또는 매입 거부",
    ichaeodigaExport: "주행거리 감가 ZERO! 정상 시세 매입",
  },
  {
    criteria: "사고 이력 / 보험 이력",
    scrap: "무관하나 보상금 자체가 적음",
    domesticDealer: "성능기록부 기준 수백만 원 감가",
    ichaeodigaExport: "운행만 가능하면 감가 최소화·고가 매입",
  },
  {
    criteria: "외관 스크래치 / 부식",
    scrap: "무관",
    domesticDealer: "판금·도색비 명목으로 현장 감가",
    ichaeodigaExport: "해외 현지 수리 가능 → 부당 현장 감가 없음",
  },
  {
    criteria: "차량 대금 지급 시기",
    scrap: "말소 후 입금 (수일 소요되기도 함)",
    domesticDealer: "명의 이전 확인 조건부 정산",
    ichaeodigaExport: "얼굴 믿고 차부터 편하게 보내셔도 도착 즉시 100% 당일 칼정산",
  },
  {
    criteria: "수수료 및 탁송료",
    scrap: "견인비 무료",
    domesticDealer: "알선 수수료·매도비·상사 이전비 발생",
    ichaeodigaExport: "중개 수수료 0원 · 전국 무료 출장/탁송",
  },
  {
    criteria: "행정 말소 처리",
    scrap: "일반 폐차 말소",
    domesticDealer: "소비자 직접 판매 시까지 대기",
    ichaeodigaExport: "당일~익일 즉시 수출 말소증 발급 (보험 환급)",
  },
];

export interface RequiredDocumentGuide {
  ownerType: string;
  requiredDocs: string;
  visitNeeded: string;
  note: string;
}

export const REQUIRED_DOCUMENTS_TABLE: RequiredDocumentGuide[] = [
  {
    ownerType: "개인 명의 차량",
    requiredDocs: "자동차등록증 원본, 차주 신분증 사진(앞면), 입금 통장 사본",
    visitNeeded: "무방문 · 비대면 (사진 전송)",
    note: "인감증명서 불필요 · 당일 즉시 처리",
  },
  {
    ownerType: "공동 명의 차량",
    requiredDocs: "자동차등록증 원본, 공동명의자 전원 신분증 사진, 대표 수령 계좌",
    visitNeeded: "무방문 · 비대면 (사진 전송)",
    note: "가족·부부 공동명의 간편 진행",
  },
  {
    ownerType: "법인 사업자 차량",
    requiredDocs:
      "자동차등록증 원본, 사업자등록증 사본, 법인인감증명서, 법인등기부등본(말소사항포함), 수출용 세금계산서",
    visitNeeded: "전국 무료 방문 수령",
    note: "다량 매각 · 영업용 화물차 전문 전담 처리",
  },
  {
    ownerType: "할부 잔액 · 압류 · 저당 차량",
    requiredDocs: "자동차등록증 원본, 신분증 사진, 압류/저당 정산 확인",
    visitNeeded: "무방문 대행 정산 가능",
    note: "수출 대금에서 과태료·저당 즉시 해지 후 차액 입금 지원",
  },
];

import { CUSTOMER_REVIEWS_100, type ReviewItem as ReviewItemType } from "./reviews100";
export type ReviewItem = ReviewItemType;
export const CUSTOMER_REVIEWS: ReviewItem[] = CUSTOMER_REVIEWS_100;

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "faq-1",
    question:
      "주행거리가 20만~40만km가 넘고 사고 이력이 있어도 정말 중고차 수출이 되나요?",
    answer:
      "네, 가능합니다. 국내 중고차 시장은 주행거리와 보험 사고 이력에 민감하지만, 해외 수출 국가(중동, 중앙아시아, 중남미, 아프리카 등)에서는 한국 차량의 엔진·미션 내구성을 높이 평가하여 주행거리가 20만~50만km 이상이거나 외관 흠집·사고 이력이 있어도 폐차 대비 평균 150만~500만 원 이상 높은 시세로 매입합니다.",
  },
  {
    id: "faq-2",
    question: "중고차 수출 시 필요한 서류는 무엇인가요? 인감증명서가 필요한가요?",
    answer:
      "개인 명의 차량은 인감증명서가 전혀 필요하지 않습니다. 【자동차등록증 원본】과 【차주 신분증 사본(스마트폰 사진 가능)】, 【대금 입금받을 통장 사본】 3가지만 있으면 비대면·무방문으로 즉시 진행됩니다. 법인 차량은 사업자등록증 사본과 법인인감증명서 등이 필요합니다.",
  },
  {
    id: "faq-3",
    question: "조기폐차 지원금과 중고차 수출 중 어떤 것이 더 이득인가요?",
    answer:
      "4등급·5등급 노후 경유차(쏘렌토 R, 스포티지 R, 싼타페, 포터2, 스타렉스 등)는 조기폐차 지원금보다 해외 직수출 매입가가 100만~400만 원 이상 높은 경우가 많습니다. 또한 조기폐차는 서류 심사와 보조금 입금까지 수개월이 걸리지만, 이차어디가 중고차 수출은 당일 현장에서 100% 전액 현금 송금됩니다.",
  },
  {
    id: "faq-4",
    question: "현장에서 트집 잡아 부당하게 가격을 깎는 일은 없나요?",
    answer:
      "이차어디가는 중간 알선 브로커 없이 해외 현지 바이어와 다이렉트로 직거래하는 정식 수출 전문 업체입니다. 상담 시 차량 상태(사고 유무, 옵션 등)를 기반으로 정직한 실매입가를 안내해 드리며, 현장에서 생활 스크래치나 소모품을 핑계로 부당한 감가를 하지 않습니다.",
  },
  {
    id: "faq-5",
    question:
      "차량 대금은 언제 입금되며, 수출 말소 처리와 보험 환급은 얼마나 걸리나요?",
    answer:
      "현장 직거래는 물론, 실제 고객님의 60% 이상이 유튜브·인스타·틱톡에 공개된 병국이 얼굴만 믿고 무료 탁송으로 차부터 편하게 보내주십니다. 차량을 인계받아 확인하는 즉시 단 1원의 억지 감가 없이 약속드린 대금 전액을 차주님 계좌로 당일 칼정산해 드리며, 당일~익일 내에 '수출말소사실증명서'를 발급해 보험료·자동차세 환급까지 도와드립니다.",
  },
  {
    id: "faq-6",
    question: "지방이나 섬 지역에 있는데 출장비나 탁송료가 발생하나요?",
    answer:
      "서울·인천·경기 수도권은 물론 강원, 충청, 전라, 경상, 제주까지 대한민국 전 지역 무료 출장 방문 및 무료 탁송을 원칙으로 합니다. 견적 산출부터 차량 인수, 수출 말소 등록까지 고객님께 청구되는 수수료는 0원입니다.",
  },
];

export const CAR_MODELS_DATALIST: string[] = [
  "현대 아반떼 HD",
  "현대 아반떼 MD",
  "현대 아반떼 AD",
  "현대 YF 쏘나타",
  "현대 LF 쏘나타",
  "현대 그랜저 TG",
  "현대 그랜저 HG",
  "현대 그랜저 IG",
  "현대 투싼 ix",
  "현대 올 뉴 투싼",
  "현대 싼타페 CM",
  "현대 싼타페 DM",
  "현대 포터2 초장축",
  "현대 포터2 더블캡",
  "현대 포터2 냉동탑차",
  "현대 그랜드 스타렉스",
  "현대 마이티 / 메가트럭",
  "기아 포르테 / K3",
  "기아 K5 (1세대/2세대)",
  "기아 K7 / 올 뉴 K7",
  "기아 모닝 / 올 뉴 모닝",
  "기아 레이",
  "기아 스포티지 R",
  "기아 더 뉴 스포티지 R",
  "기아 쏘렌토 R",
  "기아 올 뉴 쏘렌토",
  "기아 봉고3 트럭",
  "기아 올 뉴 카니발",
  "쉐보레 스파크 / 크루즈 / 올란도",
  "르노 SM3 / SM5 / SM6 / QM5",
  "벤츠 E클래스 / C클래스",
  "BMW 320d / 520d",
  "아우디 A4 / A6",
  "폭스바겐 티구안 / 제타 / 골프",
];

export const REGIONS_LIST: string[] = [
  "서울특별시",
  "인천광역시",
  "경기도",
  "부산광역시",
  "대구광역시",
  "대전광역시",
  "광주광역시",
  "울산광역시",
  "세종특별자치시",
  "강원특별자치도",
  "충청북도",
  "충청남도",
  "전북특별자치도",
  "전라남도",
  "경상북도",
  "경상남도",
  "제주특별자치도",
];

export interface ByunggukVideoProof {
  id: string;
  videoId: string;
  imageSrc: string;
  badge: string;
  title: string;
  subtitle: string;
  carModelForQuote: string;
}

export const BYUNGGUK_FIELD_VIDEOS: ByunggukVideoProof[] = [
  {
    id: "bv-1",
    videoId: "ZGRimSgReGw",
    imageSrc: "/images/byungguk/ZGRimSgReGw-maxres1.jpg",
    badge: "병국 직접 출동",
    title: "화물차·특장차·희귀 차량까지 현장 직매입",
    subtitle: "수출은 언제나 뺑국이! 어떤 조건의 차량이든 해외 판로를 찾아 최고가로 맞춰드립니다.",
    carModelForQuote: "화물/특장차 상담",
  },
  {
    id: "bv-2",
    videoId: "jJpmviXfkLQ",
    imageSrc: "/images/byungguk/jJpmviXfkLQ-maxres1.jpg",
    badge: "포터2 매입 현장",
    title: "포터2 수동·오토 가리지 않고 최고가 매입",
    subtitle: "조기폐차 보내기 아까운 포터2·봉고3, 수출마스터 병국이가 현장에서 즉시 송금합니다.",
    carModelForQuote: "현대 포터2 초장축",
  },
  {
    id: "bv-3",
    videoId: "xR9qjpjcgw4",
    imageSrc: "/images/byungguk/xR9qjpjcgw4-maxres1.jpg",
    badge: "사고·외관불량 OK",
    title: "외관 흠집·사고 난 SM3·준중형차 리비아 직수출",
    subtitle: "폐차장 보내지 마세요! 리비아·중동에서 인기 많은 국산 세단, 감가 없이 매입합니다.",
    carModelForQuote: "르노 SM3 / 아반떼",
  },
  {
    id: "bv-4",
    videoId: "U21oDpe9gko",
    imageSrc: "/images/byungguk/U21oDpe9gko-oar2.jpg",
    badge: "해외 바이어 직거래",
    title: "중간 브로커 없이 해외 현지 바이어와 직접 협상",
    subtitle: "수출단지에서 해외 바이어와 직접 거래하기 때문에 딜러 수수료 없이 차주님께 더 드립니다.",
    carModelForQuote: "현대 i30 / 아반떼 HD",
  },
  {
    id: "bv-5",
    videoId: "U21oDpe9gko",
    imageSrc: "/images/byungguk/U21oDpe9gko-maxres1.jpg",
    badge: "수출단지 직영",
    title: "09년식 깡통·스크래치 차량도 감가 ZERO",
    subtitle: "탁송 중 긁히거나 외관이 거칠어도 상관없습니다! 엔진·미션만 살아있으면 당일 최고가!",
    carModelForQuote: "연식 노후 승용차",
  },
  {
    id: "bv-6",
    videoId: "WPTFh4B2-sA",
    imageSrc: "/images/byungguk/WPTFh4B2-sA-maxres1.jpg",
    badge: "수입차 직접 픽업",
    title: "아우디 Q5 · 폭스바겐 · BMW 수입차 직접 출장 매입",
    subtitle: "국내에서 감가 심한 노후 수입 디젤·가솔린 차량도 병국이가 직접 찾아가 매입합니다.",
    carModelForQuote: "아우디 Q5 / 수입차",
  },
];

export interface SimulatorModelSpec {
  modelId: string;
  modelName: string;
  subGenerations: string[];
  scrapMinMan: number;
  scrapMaxMan: number;
  exportMinMan: number;
  exportMaxMan: number;
  targetCountry: string;
  imageUrl: string;
  memoryStory: string;
  overseasStory: string;
  heartPromise: string;
}

export interface SimulatorMakerGroup {
  origin: "국산차" | "수입차";
  makerId: string;
  makerName: string;
  models: SimulatorModelSpec[];
}

export const SIMULATOR_CATALOG: SimulatorMakerGroup[] = [
  {
    origin: "국산차",
    makerId: "hyundai",
    makerName: "현대 (Hyundai)",
    models: [
      {
        modelId: "avante",
        modelName: "아반떼 (HD / MD / AD)",
        subGenerations: [
          "아반떼 AD (2015~2019년식)",
          "더 뉴 아반떼 MD (2013~2015년식)",
          "아반떼 MD (2010~2013년식)",
          "아반떼 HD (2006~2010년식)",
        ],
        scrapMinMan: 65,
        scrapMaxMan: 90,
        exportMinMan: 220,
        exportMaxMan: 690,
        targetCountry: "리비아 · 요르단 · 이집트 · 중동",
        imageUrl: "/images/vehicles/avante-ad.jpg?v=sleek5",
        memoryStory:
          "설레는 첫 출근길부터 밤늦은 퇴근길, 서툴렀던 초보운전 시절의 웃음과 눈물까지 모두 함께해 준 고마운 첫차인데 국내에서는 주행거리 숫자만으로 고철 취급을 받습니다.",
        overseasStory:
          "잔고장 없는 현대 가솔린 엔진의 명성 덕분에 리비아와 요르단에서는 현지 젊은 부부와 신혼가정이 가장 먼저 찾는 자랑스러운 패밀리카로 제2의 인생을 시작합니다.",
        heartPromise:
          "차주님의 빛나던 청춘이 담긴 아반떼, 고철이 아닌 누군가의 설레는 첫차로 명예롭게 보내드립니다.",
      },
      {
        modelId: "santafe",
        modelName: "싼타페 (CM / DM / 더 프라임)",
        subGenerations: [
          "싼타페 더 프라임 (2015~2018년식)",
          "싼타페 DM (2012~2015년식)",
          "싼타페 CM (2006~2012년식)",
        ],
        scrapMinMan: 90,
        scrapMaxMan: 130,
        exportMinMan: 340,
        exportMaxMan: 1180,
        targetCountry: "키르기스스탄 · 러시아 · 몽골 · 예멘",
        imageUrl: "/images/vehicles/santafe-dm.jpg?v=sleek5",
        memoryStory:
          "트렁크 가득 텐트와 유모차를 싣고 전국 방방곡곡을 달리며 아이들의 웃음소리를 채웠던 든든한 아빠의 차인데, 디젤 연식과 키로수 때문에 국내에선 찬밥 신세가 되어 속상하셨을 겁니다.",
        overseasStory:
          "험준한 산악 지형이 많은 키르기스스탄과 몽골 초원에서는 대가족의 안전을 지켜주는 가장 믿음직한 최고급 패밀리 SUV로 귀한 대접을 받으며 다시 힘차게 달립니다.",
        heartPromise:
          "우리 가족의 행복했던 주말 여행 기억 그대로, 다른 나라 가족의 든든한 보금자리로 이어드립니다.",
      },
      {
        modelId: "porter2",
        modelName: "포터2 (초장축·더블캡·특장탑)",
        subGenerations: [
          "포터2 초장축 슈퍼캡 (2012~2020년식)",
          "포터2 더블캡 수동/오토 (2008~2020년식)",
          "포터2 냉동탑·내장탑·윙바디 (전 연식)",
          "포터2 CRDi 중기형 (2004~2011년식)",
        ],
        scrapMinMan: 80,
        scrapMaxMan: 150,
        exportMinMan: 290,
        exportMaxMan: 860,
        targetCountry: "동남아 · 중동 · 중앙아시아 · 아프리카",
        imageUrl: "/images/vehicles/porter2-doublecab.jpg?v=sleek5",
        memoryStory:
          "남들 다 자는 새벽 별을 보며 시동을 걸고, 비 오나 눈 오나 가족의 생계와 자녀들 학비를 묵묵히 짊어졌던 아버지의 땀방울인데 적재함 흠집과 부식 때문에 조기폐차를 권유받곤 합니다.",
        overseasStory:
          "동남아와 중동·중앙아시아 건설 현장과 시장 골목에서는 한국산 포터2의 막강한 적재력과 수동 기어를 ‘평생 가는 일꾼’이라 부르며 현지 가장들의 새로운 희망으로 모셔갑니다.",
        heartPromise:
          "적재함에 밴 사장님의 땀과 세월의 무게를 누구보다 존경하며, 마지막까지 가장 가치 있게 예우합니다.",
      },
      {
        modelId: "starex",
        modelName: "그랜드 스타렉스 / 마이티 상용",
        subGenerations: [
          "그랜드 스타렉스 11/12인승 왜건 (2008~2019년식)",
          "그랜드 스타렉스 3밴 / 5밴 화물 (2008~2019년식)",
          "그랜드 스타렉스 어린이보호차·앰뷸런스",
          "현대 마이티 / 메가트럭 (2.5톤~5톤)",
        ],
        scrapMinMan: 100,
        scrapMaxMan: 240,
        exportMinMan: 380,
        exportMaxMan: 1600,
        targetCountry: "러시아 · 카자흐스탄 · 몽골 · 중동",
        imageUrl: "/images/vehicles/grand-starex.jpg?v=sleek5",
        memoryStory:
          "학원 아이들의 재잘거림, 현장 동료들의 피곤한 어깨, 그리고 무거운 자재를 실어 나르며 30만~40만km를 버텨준 고마운 동반자인데 국내에선 노후 경유차라는 이유 하나로 설움을 겪습니다.",
        overseasStory:
          "러시아와 카자흐스탄, 몽골에서는 마을과 도시를 잇는 귀한 통학버스이자 상인들의 만능 화물밴으로 개조되어, 현지 마을 사람들의 발이 되어주는 일등 공신으로 활약합니다.",
        heartPromise:
          "수많은 사람의 일상과 생계를 실어 나른 정직한 엔진, 바다 건너에서도 멈추지 않도록 새 길을 열어드립니다.",
      },
      {
        modelId: "sonata-grandeur",
        modelName: "쏘나타 (YF/LF) · 그랜저 (HG/IG)",
        subGenerations: [
          "LF 쏘나타 / 뉴 라이즈 (2014~2019년식)",
          "YF 쏘나타 가솔린/LPI (2009~2014년식)",
          "그랜저 HG 2.4 / 3.0 / LPI (2011~2016년식)",
          "그랜저 IG (2016~2019년식)",
        ],
        scrapMinMan: 75,
        scrapMaxMan: 110,
        exportMinMan: 260,
        exportMaxMan: 920,
        targetCountry: "중동 · 중앙아시아 · 아제르바이잔",
        imageUrl: "/images/vehicles/avante-ad.jpg?v=sleek5",
        memoryStory:
          "부모님 모시고 고향 가던 명절 귀성길과 가장의 어깨를 세워주던 뿌듯한 날들을 함께했는데, 세월이 흘러 신형 모델에 밀리고 주행거리가 늘었다는 이유로 헐값 취급을 받아 마음이 아픕니다.",
        overseasStory:
          "중동과 중앙아시아, 아제르바이잔에서는 대한민국 대표 중대형 세단 특유의 정숙함과 넓은 실내를 ‘성공한 리더의 상징’으로 여기며 귀빈 의전용·고급 패밀리 세단으로 극진히 대접합니다.",
        heartPromise:
          "가장 빛나던 시절의 자부심이 깃든 세단, 품격을 아는 해외 새 주인에게 당당하게 인계합니다.",
      },
      {
        modelId: "tucson",
        modelName: "투싼 (투싼ix / 올 뉴 투싼 TL)",
        subGenerations: [
          "올 뉴 투싼 TL (2015~2019년식)",
          "뉴 투싼 ix (2013~2015년식)",
          "투싼 ix (2009~2013년식)",
        ],
        scrapMinMan: 80,
        scrapMaxMan: 110,
        exportMinMan: 320,
        exportMaxMan: 950,
        targetCountry: "알제리 · 이집트 · 중남미 · 동유럽",
        imageUrl: "/images/vehicles/santafe-dm.jpg?v=sleek5",
        memoryStory:
          "연애 시절 밤바다 드라이브부터 결혼 후 첫 패밀리카까지 사계절 내내 잔고장 한 번 없이 달려주었는데, 작은 접촉사고 이력이나 키로수 때문에 내수 딜러들에게 감가 트집을 잡히기 일쑤입니다.",
        overseasStory:
          "알제리와 이집트, 중남미 도로에서는 민첩한 차체와 단단한 하체를 가진 투싼을 최고의 도심·비포장 겸용 SUV로 손꼽으며, 현지 가정의 가장 사랑받는 드림카로 새 삶을 살아갑니다.",
        heartPromise:
          "차주님과 사계절의 추억을 나눈 소중한 투싼, 트집 잡는 감가 없이 아껴 타신 마음 그대로 보답합니다.",
      },
    ],
  },
  {
    origin: "국산차",
    makerId: "kia",
    makerName: "기아 (Kia)",
    models: [
      {
        modelId: "k5",
        modelName: "K5 (1세대 TF / 2세대 JF) · K7",
        subGenerations: [
          "올 뉴 K5 JF (2015~2019년식)",
          "더 뉴 K5 TF (2013~2015년식)",
          "K5 1세대 TF 가솔린/LPI (2010~2013년식)",
          "더 뉴 K7 / 올 뉴 K7 (2011~2018년식)",
        ],
        scrapMinMan: 70,
        scrapMaxMan: 100,
        exportMinMan: 270,
        exportMaxMan: 820,
        targetCountry: "중동 · 요르단 · 중앙아시아 · 중남미",
        imageUrl: "/images/vehicles/kia-k5-tf.jpg?v=sleek5",
        memoryStory:
          "처음 출고하던 날 세련된 디자인에 밤잠을 설레게 하고, 영업 현장을 누비며 내 발이 되어주던 멋진 파트너인데 국내에서는 연식과 LPI·고주행이라는 이유로 가치를 인정받지 못합니다.",
        overseasStory:
          "요르단과 중앙아시아 바이어들에게 K5·K7의 날렵한 디자인과 파노라마 선루프는 지금도 최고 인기 워너비 세단으로, 현지 청년들과 가족들이 가장 자랑하고 싶어 하는 주인공이 됩니다.",
        heartPromise:
          "처음 차 키를 쥐었을 때의 그 설렘 그대로, 바다 건너 새 주인에게도 똑같은 감동을 선물합니다.",
      },
      {
        modelId: "sorento",
        modelName: "쏘렌토 R / 올 뉴 쏘렌토 (UM)",
        subGenerations: [
          "올 뉴 쏘렌토 UM (2014~2018년식)",
          "뉴 쏘렌토 R (2012~2014년식)",
          "쏘렌토 R 2.0 / 2.2 디젤 (2009~2012년식)",
        ],
        scrapMinMan: 90,
        scrapMaxMan: 130,
        exportMinMan: 360,
        exportMaxMan: 1220,
        targetCountry: "키르기스스탄 · 몽골 · 러시아 · 중동",
        imageUrl: "/images/vehicles/santafe-dm.jpg?v=sleek5",
        memoryStory:
          "부모님과 아이들까지 3대가 함께 타고 여행을 떠나도 늘 넉넉하고 든든했던 우리 집 보물 1호인데, 이제 세월이 흘러 보내려니 고철값만 부르는 현실에 발길이 떨어지지 않으셨을 겁니다.",
        overseasStory:
          "키르기스스탄과 몽골, 러시아에서는 쏘렌토의 강인한 R엔진과 넓은 3열 공간을 ‘최강의 패밀리 투어러’로 극찬하며, 눈 덮인 산길과 초원을 누비는 대가족의 수호신으로 거듭납니다.",
        heartPromise:
          "우리 가족을 지켜준 듬직한 쏘렌토, 그 정성과 추억이 헛되지 않도록 최고의 대우로 모십니다.",
      },
      {
        modelId: "sportage",
        modelName: "스포티지 R / 더 SUV 스포티지 (QL)",
        subGenerations: [
          "스포티지 QL 4세대 (2015~2019년식)",
          "더 뉴 스포티지 R (2013~2015년식)",
          "스포티지 R SL (2010~2013년식)",
        ],
        scrapMinMan: 80,
        scrapMaxMan: 110,
        exportMinMan: 330,
        exportMaxMan: 940,
        targetCountry: "알제리 · 시리아 · 중남미 · 동유럽",
        imageUrl: "/images/vehicles/sportage-r.jpg?v=sleek5",
        memoryStory:
          "출퇴근길은 물론 주말 레저와 차박까지 어떤 길에서도 지치지 않고 달려준 젊음의 동반자인데, 20만km가 넘었다는 이유로 내수 시장에서는 제대로 된 시선조차 받지 못해 서운하셨을 겁니다.",
        overseasStory:
          "알제리와 중남미, 동유럽에서는 한국산 스포티지의 짱짱한 디젤·가솔린 토크와 탄탄한 내구성을 최고로 치며, 현지에서 가장 사랑받는 현역 SUV로 제2의 전성기를 맞이합니다.",
        heartPromise:
          "아직도 심장 소리가 생생한 스포티지, 멈추지 않고 새로운 대륙을 달릴 수 있도록 병국이가 책임집니다.",
      },
      {
        modelId: "bongo3",
        modelName: "봉고3 (1톤·1.2톤·더블캡·4륜)",
        subGenerations: [
          "봉고3 1톤 초장축 킹캡/더블캡 (2012~2020년식)",
          "봉고3 4륜구동(4WD) 수동/오토 (전 연식)",
          "봉고3 1.2톤 / 특장 냉동·내장·윙바디",
        ],
        scrapMinMan: 80,
        scrapMaxMan: 150,
        exportMinMan: 280,
        exportMaxMan: 850,
        targetCountry: "동남아 · 아프리카 · 중앙아시아 · 중동",
        imageUrl: "/images/vehicles/porter2-doublecab.jpg?v=sleek5",
        memoryStory:
          "과수원 흙길부터 도심 배달 골목까지, 거친 현장에서 사장님과 생사고락을 함께하며 가정을 일으켜 세운 고마운 일꾼인데 하부 세월 흔적 때문에 폐차장으로 보내기엔 너무나 아깝습니다.",
        overseasStory:
          "특히 봉고3의 4륜구동(4WD)과 수동 기어는 아프리카·동남아·중앙아시아 비포장 농장과 산악 마을에서 ‘어떤 길도 뚫고 가는 기적의 트럭’으로 불리며 마을 전체의 보물이 됩니다.",
        heartPromise:
          "사장님의 손때가 묻은 기어봉과 핸들, 바다 건너 또 다른 가장의 생계를 살리는 희망으로 이어드립니다.",
      },
      {
        modelId: "morning-k3",
        modelName: "모닝 (TA/JA) · 레이 · K3 · 포르테",
        subGenerations: [
          "올 뉴 모닝 JA (2017~2020년식)",
          "올 뉴 모닝 TA / 더 뉴 모닝 (2011~2017년식)",
          "K3 1세대 YD / 더 뉴 K3 (2012~2018년식)",
          "기아 레이 / 포르테 / 포르테 쿱 (2009~2017년식)",
        ],
        scrapMinMan: 50,
        scrapMaxMan: 75,
        exportMinMan: 170,
        exportMaxMan: 640,
        targetCountry: "시리아 · 이집트 · 리비아 · 동유럽",
        imageUrl: "/images/vehicles/kia-morning-ja.jpg?v=sleek5",
        memoryStory:
          "아이 등하원길, 좁은 골목길 장보기, 사회초년생의 고단한 출퇴근길에 작지만 가장 큰 위로가 되어준 정든 내 차인데, 경소형차라는 이유로 국내에선 몇십만 원 고철 취급을 받습니다.",
        overseasStory:
          "고유가 시대의 이집트, 시리아, 리비아 도심에서는 높은 연비와 알찬 옵션을 갖춘 모닝·K3·포르테가 현지 선생님과 직장인, 어머니들의 가장 귀한 생활 파트너로 큰 사랑을 받습니다.",
        heartPromise:
          "작지만 우리 집에서 가장 부지런했던 고마운 차, 그 소중한 추억의 크기만큼 귀하게 대접해 보내드립니다.",
      },
    ],
  },
  {
    origin: "국산차",
    makerId: "renault-chevy-kgm",
    makerName: "르노삼성 · 쉐보레 · 쌍용(KGM)",
    models: [
      {
        modelId: "sm-series",
        modelName: "SM3 (신형) · SM5 (플래티넘/노바) · QM5/QM6",
        subGenerations: [
          "뉴 SM3 / SM3 네오 (2009~2018년식)",
          "SM5 플래티넘 / SM5 노바 (2012~2018년식)",
          "QM5 / QM6 가솔린·디젤 (2009~2019년식)",
        ],
        scrapMinMan: 65,
        scrapMaxMan: 95,
        exportMinMan: 190,
        exportMaxMan: 680,
        targetCountry: "리비아 · 이집트 · 요르단 · 동유럽",
        imageUrl: "/images/vehicles/avante-ad.jpg?v=sleek5",
        memoryStory:
          "정숙한 닛산 계열 엔진과 안락한 승차감에 반해 10년 넘게 아끼며 관리해 온 애마인데, 국내 중고차 시장에서는 비인기 브랜드라는 편견 때문에 제값을 못 받아 늘 속상하셨을 겁니다.",
        overseasStory:
          "이집트와 요르단, 리비아 바이어들은 르노삼성 특유의 부식 없는 차체와 튼튼한 타이밍체인 엔진의 진가를 정확히 알아보고, 오래 탈 수 있는 명품 패밀리카로 귀하게 모셔갑니다.",
        heartPromise:
          "국내 시장의 편견에 가려졌던 내 차의 진짜 가치, 진가를 알아보는 해외 바이어에게 제대로 인정받게 해드립니다.",
      },
      {
        modelId: "chevy-series",
        modelName: "스파크 · 크루즈 · 올란도 · 말리부",
        subGenerations: [
          "더 넥스트 스파크 / 스파크 M300 (2011~2019년식)",
          "쉐보레 크루즈 / 라세티 프리미어 (2009~2017년식)",
          "쉐보레 올란도 / 캡티바 / 트랙스 (2011~2018년식)",
        ],
        scrapMinMan: 55,
        scrapMaxMan: 90,
        exportMinMan: 160,
        exportMaxMan: 590,
        targetCountry: "이집트 · 중남미 · 중앙아시아",
        imageUrl: "/images/vehicles/kia-morning-ja.jpg?v=sleek5",
        memoryStory:
          "가족의 안전을 최우선으로 생각해 선택한 돌덩이 같은 쉐보레 차체와 묵직한 주행감인데, 국내에선 감가가 가장 심한 차종으로 꼽혀 팔 때마다 설움을 겪으셨을 겁니다.",
        overseasStory:
          "글로벌 쉐보레 브랜드 인지도와 튼튼한 기본기 덕분에 중남미, 이집트, 중앙아시아에서는 가족의 생명을 지켜주는 가장 안전한 베스트셀러로 대환영받으며 새 출발합니다.",
        heartPromise:
          "가족의 안전을 묵묵히 지켜준 고마운 쉐보레, 억울한 감가 대신 당당한 글로벌 가치로 보답합니다.",
      },
      {
        modelId: "kgm-series",
        modelName: "렉스턴 · 코란도 스포츠/투리스모 · 티볼리",
        subGenerations: [
          "코란도 스포츠 / 렉스턴 스포츠 픽업 (2012~2019년식)",
          "렉스턴 W / G4 렉스턴 4WD (2010~2019년식)",
          "티볼리 / 코란도 C / 코란도 투리스모",
        ],
        scrapMinMan: 85,
        scrapMaxMan: 130,
        exportMinMan: 260,
        exportMaxMan: 890,
        targetCountry: "몽골 · 러시아 · 중동 · 아프리카",
        imageUrl: "/images/vehicles/sportage-r.jpg?v=sleek5",
        memoryStory:
          "낚시터와 캠핑장, 눈보라 치는 겨울 고갯길까지 거침없이 헤쳐 나가며 남자의 로망과 가장의 책임을 동시에 채워준 차인데, 노후 디젤 규제로 떠나보내야 하는 마음이 무거우실 겁니다.",
        overseasStory:
          "정통 프레임 바디와 강력한 4륜구동을 갖춘 쌍용(KGM) SUV·픽업은 몽골 대초원과 러시아 설원, 아프리카 오지에서 ‘절대 부서지지 않는 야생마’로 불리며 최고의 예우를 받습니다.",
        heartPromise:
          "답답한 폐차장이 아닌 드넓은 대초원과 대륙을 마음껏 달릴 수 있도록 멋진 제2의 무대를 열어드립니다.",
      },
    ],
  },
  {
    origin: "수입차",
    makerId: "benz-bmw-audi",
    makerName: "벤츠 · BMW · 아우디 · 폭스바겐",
    models: [
      {
        modelId: "benz-e-c",
        modelName: "벤츠 E클래스 (W212) · C클래스 · S클래스",
        subGenerations: [
          "벤츠 E클래스 W212 전기/후기형 (2009~2016년식)",
          "벤츠 C클래스 W204 / W205 (2008~2017년식)",
          "벤츠 S클래스 W221 / GLK / M클래스",
        ],
        scrapMinMan: 110,
        scrapMaxMan: 180,
        exportMinMan: 410,
        exportMaxMan: 1550,
        targetCountry: "조지아 · 두바이 · 알바니아 · 중앙아시아",
        imageUrl: "/images/vehicles/benz-w212-eclass.jpg?v=sleek5",
        memoryStory:
          "열심히 살아온 나 자신에게 주는 최고의 선물이자 보닛 위 삼각별을 볼 때마다 가슴을 뛰게 했던 드림카인데, 보증기간이 지나고 키로수가 늘었다는 이유로 국내 딜러들의 후려치기 대상이 되곤 합니다.",
        overseasStory:
          "조지아, 두바이, 알바니아, 중앙아시아에서는 한국 차주님들이 꼼꼼하게 관리한 벤츠의 컨디션을 세계 최고로 인정하며, 여전히 선망의 대상인 명차 그대로의 품격을 이어갑니다.",
        heartPromise:
          "차주님의 땀과 성공의 결실이었던 삼각별의 자부심, 마지막 순간까지 구김살 없이 명예롭게 모십니다.",
      },
      {
        modelId: "bmw-5-3",
        modelName: "BMW 5시리즈 (F10) · 3시리즈 (F30) · X3/X5",
        subGenerations: [
          "BMW 520d / 528i F10 (2010~2016년식)",
          "BMW 320d / 320i F30 (2012~2017년식)",
          "BMW X3 / X5 / X6 디젤·가솔린",
        ],
        scrapMinMan: 100,
        scrapMaxMan: 170,
        exportMinMan: 390,
        exportMaxMan: 1480,
        targetCountry: "조지아 · 러시아 · 카자흐스탄 · 두바이",
        imageUrl: "/images/vehicles/benz-w212-eclass.jpg?v=sleek5",
        memoryStory:
          "고속도로를 가르던 짜릿한 주행감과 가족의 장거리 여정을 책임지던 든든한 명차인데, 경고등 하나나 수리비 걱정 때문에 국내에서는 제 가치를 인정받지 못해 아쉬움이 크셨을 겁니다.",
        overseasStory:
          "유럽과 인접한 조지아·러시아·카자흐스탄은 BMW 부품 및 정비 인프라가 완벽해, 작은 경고등이나 고주행 이력에 구애받지 않고 정통 독일 스포츠 세단·SUV의 진가를 그대로 높이 평가합니다.",
        heartPromise:
          "달리는 즐거움을 선물해 주던 BMW, 트집 잡는 감가 없이 그 명성 그대로 새로운 아우토반으로 보내드립니다.",
      },
      {
        modelId: "audi-vw",
        modelName: "아우디 Q5/A6/A4 · 폭스바겐 티구안/파사트",
        subGenerations: [
          "아우디 Q5 / Q7 / A6 TDI·TFSI (2009~2017년식)",
          "폭스바겐 티구안 / 파사트 / 제타 / 골프",
          "렉서스 ES / RX · 도요타 캠리 / 혼다 어코드",
        ],
        scrapMinMan: 95,
        scrapMaxMan: 160,
        exportMinMan: 350,
        exportMaxMan: 1380,
        targetCountry: "중앙아시아 · 몽골 · 동유럽 · 중동",
        imageUrl: "/images/byungguk/WPTFh4B2-sA-maxres1.jpg",
        memoryStory:
          "눈길·빗길에서도 흔들림 없던 콰트로 4륜구동과 탄탄한 기본기로 오랜 세월 믿음을 주었던 차인데, 국내 중고차 시장에서는 유독 가혹한 감가를 당해 떠나보내기 마음 아팠던 차량입니다.",
        overseasStory:
          "눈이 많이 내리고 비포장 구간이 많은 중앙아시아·몽골·동유럽에서는 아우디 콰트로와 폭스바겐 TDI·렉서스 하이브리드의 내구성을 최고로 치며, 가장 든든한 프리미엄 패밀리카로 새 삶을 시작합니다.",
        heartPromise:
          "국내의 저평가가 속상하셨던 만큼, 내 차의 진가를 가장 뜨겁게 환영하는 해외 주인에게 연결해 드립니다.",
      },
    ],
  },
];

export interface SimulatorOptionBonus {
  id: string;
  label: string;
  bonusMan: number;
  desc: string;
}

export const SIMULATOR_OPTION_BONUSES: SimulatorOptionBonus[] = [
  { id: "sunroof", label: "선루프 / 파노라마 선루프", bonusMan: 45, desc: "바이어 1순위 선호" },
  { id: "smartkey", label: "스마트키 (버튼시동)", bonusMan: 25, desc: "현지 최고급형 인정" },
  { id: "manual_4wd", label: "화물 수동(스틱) 또는 SUV 4륜(4WD)", bonusMan: 40, desc: "사막·산악 1순위" },
  { id: "white_bright", label: "흰색 · 진주색 · 밝은 유채색", bonusMan: 20, desc: "더운 기후 특별우대" },
  { id: "navi_autoac", label: "순정 내비게이션 · 풀오토 에어컨", bonusMan: 20, desc: "풀옵션 등급 배정" },
];

export interface LiveQuoteBoardRow {
  id: string;
  date: string;
  region: string;
  ownerMasked: string;
  carModel: string;
  yearMileage: string;
  scrapEstimate: string;
  exportConfirmed: string;
  status: "당일송금완료" | "바이어최고가매칭" | "무료출장검수중" | "수출말소완료";
}

export const LIVE_QUOTE_BOARD_ITEMS: LiveQuoteBoardRow[] = [
  {
    id: "qb-1",
    date: "오늘 실시간",
    region: "경기 화성",
    ownerMasked: "김*수 차주님",
    carModel: "2014년식 기아 올 뉴 쏘렌토 2.0 디젤",
    yearMileage: "28만km · 아이들과 캠핑 다닌 추억",
    scrapEstimate: "국내 조기폐차 권유",
    exportConfirmed: "키르기스스탄 대가족 패밀리카 새출발",
    status: "당일송금완료",
  },
  {
    id: "qb-2",
    date: "오늘 실시간",
    region: "서울 송파",
    ownerMasked: "박*영 차주님",
    carModel: "2016년식 현대 아반떼 AD 1.6 GDi",
    yearMileage: "23만km · 사회초년생 첫 출퇴근차",
    scrapEstimate: "접촉사고 감가 설움",
    exportConfirmed: "요르단 신혼부부 세단으로 직수출",
    status: "당일송금완료",
  },
  {
    id: "qb-3",
    date: "오늘 실시간",
    region: "인천 남동",
    ownerMasked: "이*철 사장님",
    carModel: "2013년식 현대 포터2 초장축 더블캡 수동",
    yearMileage: "34만km · 가족 먹여 살린 일터",
    scrapEstimate: "적재함 흠집 고철 판정",
    exportConfirmed: "중동 농장 일꾼으로 명예로운 새 삶",
    status: "수출말소완료",
  },
  {
    id: "qb-4",
    date: "오늘 실시간",
    region: "충남 천안",
    ownerMasked: "최*호 차주님",
    carModel: "2013년식 기아 K5 2.0 프레스티지",
    yearMileage: "25만km · 연애 시절부터 탄 애마",
    scrapEstimate: "주행거리 과다 저평가",
    exportConfirmed: "중앙아시아 청년의 드림카 배정",
    status: "바이어최고가매칭",
  },
  {
    id: "qb-5",
    date: "오늘 실시간",
    region: "대구 달서",
    ownerMasked: "정*훈 차주님",
    carModel: "2014년식 현대 싼타페 DM 2.0 7인승",
    yearMileage: "31만km · 삼남매 키워낸 7인승",
    scrapEstimate: "매연등급 폐차 고민",
    exportConfirmed: "카자흐스탄 7인승 귀빈 SUV로 출고",
    status: "당일송금완료",
  },
  {
    id: "qb-6",
    date: "오늘 실시간",
    region: "부산 해운대",
    ownerMasked: "강*석 차주님",
    carModel: "2014년식 벤츠 E220 CDI (W212)",
    yearMileage: "27만km · 내 인생 첫 삼각별",
    scrapEstimate: "경고등 수리비 속앓이",
    exportConfirmed: "조지아 명차 전문 바이어 직매칭",
    status: "무료출장검수중",
  },
  {
    id: "qb-7",
    date: "오늘 실시간",
    region: "광주 북구",
    ownerMasked: "조*민 사장님",
    carModel: "2015년식 그랜드 스타렉스 11인승",
    yearMileage: "36만km · 아이들 웃음 가득 학원차",
    scrapEstimate: "연식 만료 폐차 위기",
    exportConfirmed: "몽골 마을 통학 미니버스로 재탄생",
    status: "당일송금완료",
  },
  {
    id: "qb-8",
    date: "오늘 실시간",
    region: "대전 유성",
    ownerMasked: "윤*희 차주님",
    carModel: "2017년식 기아 올 뉴 모닝 (JA)",
    yearMileage: "19만km · 아이 등하원 함께한 발",
    scrapEstimate: "경차 고철값 취급",
    exportConfirmed: "가나·이집트 도심 인기 경차로",
    status: "수출말소완료",
  },
  {
    id: "qb-9",
    date: "오늘 실시간",
    region: "경기 고양",
    ownerMasked: "신*우 차주님",
    carModel: "2013년식 BMW 520d (F10) 럭셔리",
    yearMileage: "28만km · 운전의 즐거움 주던 차",
    scrapEstimate: "미세누유 헐값 감가",
    exportConfirmed: "알바니아·코카서스 현역 명차로",
    status: "당일송금완료",
  },
  {
    id: "qb-10",
    date: "오늘 실시간",
    region: "경남 창원",
    ownerMasked: "장*태 사장님",
    carModel: "2014년식 기아 봉고3 1톤 더블캡 4WD",
    yearMileage: "36만km · 산길·현장 누빈 땀방울",
    scrapEstimate: "하부 부식 폐차 권유",
    exportConfirmed: "동남아 산악 현장 4WD 일꾼으로",
    status: "당일송금완료",
  },
  {
    id: "qb-11",
    date: "오늘 실시간",
    region: "충북 청주",
    ownerMasked: "황*성 사장님",
    carModel: "2015년식 현대 포터2 초장축 냉동탑차",
    yearMileage: "38만km · 첫 창업 함께한 동업자",
    scrapEstimate: "특장 가치 무시 감가",
    exportConfirmed: "중동 식자재 유통 파트너 배정",
    status: "바이어최고가매칭",
  },
  {
    id: "qb-12",
    date: "오늘 실시간",
    region: "전북 전주",
    ownerMasked: "서*람 차주님",
    carModel: "2015년식 기아 올 뉴 카니발 9인승",
    yearMileage: "27만km · 부모님 모시던 효도카",
    scrapEstimate: "실내 사용감 트집 감가",
    exportConfirmed: "중앙아시아 VIP 의전 밴으로 선적",
    status: "당일송금완료",
  },
  {
    id: "qb-13",
    date: "오늘 실시간",
    region: "울산 남구",
    ownerMasked: "권*도 차주님",
    carModel: "2013년식 현대 그랜저 HG 240 모던",
    yearMileage: "29만km · 아버지의 가장 큰 자부심",
    scrapEstimate: "구형 대형차 저평가",
    exportConfirmed: "아제르바이잔 귀빈용 세단으로",
    status: "수출말소완료",
  },
  {
    id: "qb-14",
    date: "오늘 실시간",
    region: "강원 원주",
    ownerMasked: "유*호 차주님",
    carModel: "2012년식 기아 모하비 KV300 4WD",
    yearMileage: "35만km · 눈길 가족 지킨 보디가드",
    scrapEstimate: "고주행 경유차 설움",
    exportConfirmed: "몽골 대초원을 달리는 4WD 황제로",
    status: "당일송금완료",
  },
  {
    id: "qb-15",
    date: "오늘 실시간",
    region: "경기 용인",
    ownerMasked: "배*현 차주님",
    carModel: "2013년식 렉서스 ES300h 하이브리드",
    yearMileage: "26만km · 10년 무고장 정숙한 친구",
    scrapEstimate: "배터리 수명 핑계 감가",
    exportConfirmed: "몽골·요르단 프리미엄 세단 배정",
    status: "무료출장검수중",
  },
  {
    id: "qb-16",
    date: "오늘 실시간",
    region: "인천 서구",
    ownerMasked: "백*철 사장님",
    carModel: "2012년식 현대 마이티 2.5톤 슈퍼캡",
    yearMileage: "44만km · 20년 생계 책임진 일꾼",
    scrapEstimate: "노후 화물 폐차 권유",
    exportConfirmed: "아프리카 물류 현장의 새로운 주역",
    status: "당일송금완료",
  },
];

export interface RegionalDispatchHub {
  id: string;
  tabLabel: string;
  regionValue: string;
  dispatchTime: string;
  hubCenter: string;
  managerComment: string;
  highlights: string[];
}

export const REGIONAL_DISPATCH_HUBS: RegionalDispatchHub[] = [
  {
    id: "all",
    tabLabel: "전국 무료출장",
    regionValue: "서울특별시",
    dispatchTime: "전국 당일 방문 · 무료 탁송 100%",
    hubCenter: "인천 송도·옥련동 본사 수출단지 + 전국 8개 권역 출장팀",
    managerComment:
      "계신 곳이 어디든 매매단지 방문하실 필요 없습니다! 병국이 직영 출장팀이 자택·직장·카센터 앞으로 직접 찾아가 10분 내 검수 후 현장에서 바로 송금합니다.",
    highlights: ["전국 출장비·탁송비 0원", "인감 없이 신분증+등록증 OK", "현장 감가 절대 없음"],
  },
  {
    id: "seoul",
    tabLabel: "서울",
    regionValue: "서울특별시",
    dispatchTime: "평균 40분 내 현장 도착",
    hubCenter: "서울 강남·송파·강서·영등포·노원 상시 대기조 운영",
    managerComment:
      "서울 전역 퇴근 시간·주말 방문 모두 가능합니다! 지하주차장이나 직장 앞에서도 10분이면 입금과 인수까지 깔끔하게 끝납니다.",
    highlights: ["서울 전역 40분 내 방문", "당일 오후 신청 시 당일 말소", "비대면 키 인계 가능"],
  },
  {
    id: "incheon-gyeonggi",
    tabLabel: "인천 / 경기",
    regionValue: "경기도",
    dispatchTime: "평균 30분 내 최단시간 도착",
    hubCenter: "인천항 수출단지 직결 (수원·화성·용인·일산·부천·안산·평택)",
    managerComment:
      "수출 선적항과 가장 가까운 수도권 핵심 지역으로, 바이어 직거래 최고 단가와 당일 2시간 내 초고속 수출말소가 가능합니다.",
    highlights: ["인천항 수출단지 직통", "당일 입고 후 2시간 내 말소증", "화물·법인 대량 매입 우대"],
  },
  {
    id: "gangwon",
    tabLabel: "강원",
    regionValue: "강원특별자치도",
    dispatchTime: "춘천·원주·강릉 당일 출장",
    hubCenter: "강원 영서·영동 전담 출장 매입팀",
    managerComment:
      "강원도 산간·해안 지역 특성상 하부 부식이나 주행거리가 많은 SUV·4륜 트럭이 많습니다. 내수 딜러 감가 없이 해외 4WD 우대 시세로 매입합니다!",
    highlights: ["4륜(4WD)·디젤 SUV 최고가", "하부 부식 차량 감가 최소화", "장거리 탁송비 전액 무료"],
  },
  {
    id: "chungcheong",
    tabLabel: "대전 / 충청",
    regionValue: "충청남도",
    dispatchTime: "대전·세종·천안·청주 1시간 내 방문",
    hubCenter: "중부권(대전·천안·아산·청주·충주·서산) 직영 출장망",
    managerComment:
      "충청권 산업단지 출퇴근 차량 및 농가·영업용 포터2·봉고3 화물차 최다 매입 지역입니다. 당일 현금 입금 후 무료로 인수해 갑니다.",
    highlights: ["포터2·봉고3 농가/영업용 우대", "대전·천안·청주 1시간 내 도착", "얼굴 믿고 맡기는 당일 칼정산"],
  },
  {
    id: "gyeongbuk",
    tabLabel: "대구 / 경북",
    regionValue: "대구광역시",
    dispatchTime: "대구·구미·포항·경산 당일 방문",
    hubCenter: "영남 북부권(대구·구미·포항·경주·안동) 전담 매입팀",
    managerComment:
      "대구·경북 차주님들, 사진 4장만 문자로 보내주셔도 출발 전 확정가를 먼저 말씀드리고 현장 감가 0원으로 기분 좋게 매입합니다!",
    highlights: ["출발 전 사진 확정가 보증", "현장 트집·감가 0원 원칙", "익일 오전까지 말소증 발급"],
  },
  {
    id: "jeolla",
    tabLabel: "광주 / 전라",
    regionValue: "광주광역시",
    dispatchTime: "광주·전주·익산·순천·여수 당일 방문",
    hubCenter: "호남권(광주·전북·전남 전역) 직영 방문팀",
    managerComment:
      "호남권 전 지역 무료 출장! 주행거리 30만~50만km 넘은 디젤 SUV·화물트럭·세단 모두 폐차 보내기 전 꼭 병국이 시세부터 확인하세요.",
    highlights: ["호남권 무료 방문·무료 탁송", "고주행(30만km+) 무감가 매입", "비대면 서류 간소화 진행"],
  },
  {
    id: "gyeongnam-jeju",
    tabLabel: "부산 / 경남 · 제주",
    regionValue: "부산광역시",
    dispatchTime: "부산·울산·창원·김해·제주 당일 진행",
    hubCenter: "부산·경남 항만 연계팀 및 제주 탁송 매입팀",
    managerComment:
      "부산·울산·경남은 물론 제주도 차량까지 비대면 및 현장 출장으로 전국 동일하게 해외 바이어 최고가 시세를 보장해 드립니다.",
    highlights: ["부산·울산·창원 당일 출장", "수입차·대형 상용차 전문", "얼굴 믿고 편하게 보내는 안심 탁송"],
  },
];

export interface KproHeroSlide {
  id: string;
  imageUrl: string;
  titleHtml: string;
  highlightText: string;
  subtitle: string;
}

export const KPRO_HERO_SLIDES: KproHeroSlide[] = [
  {
    id: "visual-1",
    imageUrl: "/images/kpro/visual_1.jpg",
    titleHtml: "달콤한 거짓 견적으로 설레게 한 뒤",
    highlightText: "현장에서 상처 주는 일은 하지 않습니다",
    subtitle:
      "유튜브·인스타·틱톡에 제 얼굴과 이름을 다 걸고 약속합니다. 기분 좋은 거짓말 대신 끝까지 기분 좋은 진실만 말합니다.",
  },
  {
    id: "visual-2",
    imageUrl: "/images/kpro/visual_2.jpg",
    titleHtml: "제 얼굴은 한 번 쓰고 버릴",
    highlightText: "익명의 가면이 아닙니다",
    subtitle:
      "‘무조건 시세보다 더 준다’는 허위 광고에 속지 마세요. 매일 영상으로 얼굴 비추는 병국이는 도망갈 곳도, 속일 이유도 없습니다.",
  },
  {
    id: "visual-3",
    imageUrl: "/images/kpro/visual_3.jpg",
    titleHtml: "혹시 또 속을까 봐 전화 한 통까지",
    highlightText: "얼마나 망설이셨나요",
    subtitle:
      "숫자 뒤에 숨어 낚시 견적을 던지는 브로커와 다릅니다. 처음 건넨 말 한마디가 끝날 때까지 바뀌지 않는 사람, 병국이입니다.",
  },
];

export interface KproComparisonSlide {
  id: string;
  carName: string;
  diffNumber: string;
  diffBadge: string;
  year: string;
  fuel: string;
  accident: string;
  domesticPrice: string;
  exportPrice: string;
  imageUrl: string;
}

export const KPRO_COMPARISON_SLIDES: KproComparisonSlide[] = [
  {
    id: "kpro-20",
    carName: "스포티지R",
    diffNumber: "청춘의 첫 SUV, 알제리에서 다시 달립니다",
    diffBadge: "청춘의 첫 SUV, 알제리에서 다시 달립니다",
    year: "2011년식",
    fuel: "디젤",
    accident: "단순교환",
    domesticPrice: "28만km 넘었다고 폐차 고철 취급",
    exportPrice: "알제리 가족의 1순위 드림카로",
    imageUrl: "/images/kpro/car_20.jpg?v=sleek5",
  },
  {
    id: "kpro-19",
    carName: "투싼ix",
    diffNumber: "주말 캠핑의 추억, 지중해 해안도로로!",
    diffBadge: "주말 캠핑의 추억, 지중해 해안도로로!",
    year: "2009년식",
    fuel: "디젤",
    accident: "무사고",
    domesticPrice: "매연등급 핑계로 조기폐차 권유",
    exportPrice: "이집트·리비아 현역 패밀리 SUV로",
    imageUrl: "/images/kpro/car_19.jpg?v=sleek5",
  },
  {
    id: "kpro-18",
    carName: "포르테",
    diffNumber: "15년 무고장 친구, 고철 대신 현역으로!",
    diffBadge: "15년 무고장 친구, 고철 대신 현역으로!",
    year: "2007년식",
    fuel: "가솔린",
    accident: "단순교환",
    domesticPrice: "연식 오래됐다며 고철값만 제시",
    exportPrice: "리비아에서 앞으로 10년 더 현역!",
    imageUrl: "/images/kpro/car_18.jpg?v=sleek5",
  },
  {
    id: "kpro-17",
    carName: "올란도",
    diffNumber: "아이들 키운 패밀리밴의 따뜻한 새 출발",
    diffBadge: "아이들 키운 패밀리밴의 따뜻한 새 출발",
    year: "2012년식",
    fuel: "디젤",
    accident: "유사고",
    domesticPrice: "단종·사고이력 핑계로 헐값 감가",
    exportPrice: "중남미 7인승 가족의 행복한 발로",
    imageUrl: "/images/kpro/car_17.jpg?v=sleek5",
  },
  {
    id: "kpro-16",
    carName: "벤츠E클래스",
    diffNumber: "삼각별의 자부심, 끝까지 명차답게 예우!",
    diffBadge: "삼각별의 자부심, 끝까지 명차답게 예우!",
    year: "2017년식",
    fuel: "디젤",
    accident: "유사고",
    domesticPrice: "보험이력·경고등 핑계로 후려침",
    exportPrice: "두바이·조지아 VIP 명차로 직수출",
    imageUrl: "/images/kpro/car_16.jpg?v=sleek5",
  },
  {
    id: "kpro-15",
    carName: "아우디A6",
    diffNumber: "눈길 지켜주던 콰트로, 설원의 주인공으로",
    diffBadge: "눈길 지켜주던 콰트로, 설원의 주인공으로",
    year: "2016년식",
    fuel: "디젤",
    accident: "무사고",
    domesticPrice: "수입 디젤 감가로 속앓이만 하던 차",
    exportPrice: "키르기스스탄 설원을 달리는 명차로",
    imageUrl: "/images/kpro/car_15.jpg?v=sleek5",
  },
  {
    id: "kpro-14",
    carName: "올뉴투싼",
    diffNumber: "성실히 달린 출퇴근길, 감가 ZERO 존중!",
    diffBadge: "성실히 달린 출퇴근길, 감가 ZERO 존중!",
    year: "2017년식",
    fuel: "디젤",
    accident: "단순교환",
    domesticPrice: "장거리 출퇴근 키로수로 반값 감가",
    exportPrice: "요르단 중산층 최고의 패밀리카로",
    imageUrl: "/images/kpro/car_14.jpg?v=sleek5",
  },
  {
    id: "kpro-13",
    carName: "QM6",
    diffNumber: "조용하고 든든했던 벗, 대륙을 달리다",
    diffBadge: "조용하고 든든했던 벗, 대륙을 달리다",
    year: "2016년식",
    fuel: "디젤",
    accident: "무사고",
    domesticPrice: "비주류 브랜드라며 억울한 저평가",
    exportPrice: "동유럽·몽골 실용 명차로 귀한 대접",
    imageUrl: "/images/kpro/car_13.jpg?v=sleek5",
  },
  {
    id: "kpro-12",
    carName: "더넥스트스파크",
    diffNumber: "작지만 가장 든든했던 내 발의 금의환향",
    diffBadge: "작지만 가장 든든했던 내 발의 금의환향",
    year: "2017년식",
    fuel: "가솔린",
    accident: "단순교환",
    domesticPrice: "작은 경차라며 문콕까지 트집 감가",
    exportPrice: "이집트·가나 도심 최고 인기 경차로",
    imageUrl: "/images/kpro/car_12.jpg?v=sleek5",
  },
  {
    id: "kpro-11",
    carName: "아반떼CN7",
    diffNumber: "특별한 블루 컬러, 지중해에서 빛납니다",
    diffBadge: "특별한 블루 컬러, 지중해에서 빛납니다",
    year: "2021년식",
    fuel: "가솔린",
    accident: "유사고",
    domesticPrice: "유채색·사고이력 이유로 심한 감가",
    exportPrice: "요르단 바이어가 가장 반기는 컬러로",
    imageUrl: "/images/kpro/car_11.jpg?v=sleek5",
  },
  {
    id: "kpro-10",
    carName: "더뉴K9",
    diffNumber: "부모님 모시던 효도세단, 대륙의 귀빈차로",
    diffBadge: "부모님 모시던 효도세단, 대륙의 귀빈차로",
    year: "2019년식",
    fuel: "가솔린",
    accident: "유사고",
    domesticPrice: "대배기량 대형차라며 내수 외면",
    exportPrice: "중앙아시아 최고급 의전 세단으로",
    imageUrl: "/images/kpro/car_10.jpg?v=sleek5",
  },
  {
    id: "kpro-6",
    carName: "아반떼MD",
    diffNumber: "첫 월급으로 산 첫차, 중동의 베스트셀러로",
    diffBadge: "첫 월급으로 산 첫차, 중동의 베스트셀러로",
    year: "2011년식",
    fuel: "가솔린",
    accident: "단순교환",
    domesticPrice: "운전 연습 흠집·키로수로 폐차 권유",
    exportPrice: "리비아·요르단 부동의 1위 세단으로",
    imageUrl: "/images/kpro/car_6.jpg?v=sleek5",
  },
  {
    id: "kpro-4",
    carName: "YF쏘나타",
    diffNumber: "명절 귀성길 함께한 쏘나타의 두 번째 삶",
    diffBadge: "명절 귀성길 함께한 쏘나타의 두 번째 삶",
    year: "2009년식",
    fuel: "가솔린",
    accident: "유사고",
    domesticPrice: "세월 흔적과 사고이력으로 고철 취급",
    exportPrice: "중동 가족의 가장 든든한 패밀리카로",
    imageUrl: "/images/kpro/car_4.jpg?v=sleek5",
  },
  {
    id: "kpro-1",
    carName: "그랜저HG",
    diffNumber: "아버지의 자부심, 마지막까지 품격 있게!",
    diffBadge: "아버지의 자부심, 마지막까지 품격 있게!",
    year: "2011년식",
    fuel: "가솔린",
    accident: "무사고",
    domesticPrice: "30만km 구형차라며 야속한 평가",
    exportPrice: "키르기스스탄에서 존경받는 명차로",
    imageUrl: "/images/kpro/car_1.jpg?v=sleek5",
  },
];

export interface KproStepItem {
  stepNumber: string;
  title: string;
  desc: string;
  iconUrl: string;
}

export const KPRO_FIVE_STEPS: KproStepItem[] = [
  {
    stepNumber: "01",
    title: "이차어디가 원스톱 서비스를 신청해주세요.",
    desc: "복잡한 서류 없이 전화 또는 간편 폼으로 10초 만에 신청합니다.",
    iconUrl: "/images/kpro/step1.png",
  },
  {
    stepNumber: "02",
    title: "해당차량 스펙과 자세한 옵션을 알려주세요.",
    desc: "차량 연식·옵션 기준 해외 바이어 최고가 시세를 즉시 산출합니다.",
    iconUrl: "/images/kpro/step2.png",
  },
  {
    stepNumber: "03",
    title: "차량 사진촬영 및 사고여부를 알려주세요.",
    desc: "전국 무료 방문 또는 사진 전송만으로 비대면 확정가를 안내합니다.",
    iconUrl: "/images/kpro/step3.png",
  },
  {
    stepNumber: "04",
    title: "얼굴 믿고 편하게 차량을 보내주시면 당일 투명하게 정산합니다.",
    desc: "고객 60% 이상이 병국이 얼굴만 믿고 무료 탁송으로 차부터 편하게 보내주실 만큼, 단 1원의 억지 감가 없이 약속된 대금을 당일 송금합니다.",
    iconUrl: "/images/kpro/step4.png",
  },
  {
    stepNumber: "05",
    title: "차량을 보낸후 당일~48시간안에 말소증을 보내드립니다.",
    desc: "무료 탁송 인수와 동시에 신속히 수출말소 처리 후 말소증을 발송해 드립니다.",
    iconUrl: "/images/kpro/step5.png",
  },
];

export interface KproDifferentiator {
  id: string;
  title: string;
  subtitle: string;
  iconUrl: string;
}

export const KPRO_DIFFERENTIATORS: KproDifferentiator[] = [
  {
    id: "diff-1",
    title: "숫자로 낚지 않는 진짜 시세",
    subtitle:
      "‘무조건 시세보다 더 준다’는 달콤한 거짓말로 유인하지 않습니다. 처음부터 끝까지 실제로 드릴 수 있는 정직한 금액만 말씀드립니다.",
    iconUrl: "/images/kpro/differ_ico1.png",
  },
  {
    id: "diff-2",
    title: "유튜브·인스타·틱톡 얼굴 실명 보증",
    subtitle:
      "얼굴을 숨긴 사람은 거짓말을 해도 도망갈 곳이 있지만, 매일 영상에 얼굴을 걸고 살아가는 병국이에게는 도망갈 곳이 없습니다.",
    iconUrl: "/images/kpro/differ_ico2.png",
  },
  {
    id: "diff-3",
    title: "얼굴 믿고 차부터 편하게 보내는 안심 거래",
    subtitle:
      "실제 고객님의 60% 이상이 유튜브·인스타·틱톡 속 병국이 얼굴만 믿고 그냥 차부터 편하게 보내주십니다. 그 큰 믿음에 단 1원의 어긋남 없는 칼정산으로 보답합니다.",
    iconUrl: "/images/kpro/differ_ico3.png",
  },
];

export interface GlobalBuyerCountryHub {
  id: string;
  countryName: string;
  flagEmoji: string;
  portAndRoute: string;
  buyerDemandBadge: string;
  preferredModels: string[];
  yearAndConditionRule: string;
  averageBonusVsScrap: string;
  keyBuyerPoints: string[];
}

export const GLOBAL_BUYER_COUNTRIES: GlobalBuyerCountryHub[] = [
  {
    id: "country-libya",
    countryName: "리비아 (Libya · 북아프리카)",
    flagEmoji: "🇱🇾",
    portAndRoute: "인천항 → 리비아 미수라타·콤스항 직항 Ro-Ro / 컨테이너",
    buyerDemandBadge: "고주행·노후 연식 최다 대량 매입 1위",
    preferredModels: [
      "아반떼 HD / MD",
      "쏘나타 YF / NF",
      "그랜드 스타렉스",
      "모닝 · 스파크 · K3",
      "포터2 · 봉고3",
    ],
    yearAndConditionRule: "연식 제한 없음 (2004~2016년식 주력) · 20만~50만km 고주행 및 외판 흠집 무감가",
    averageBonusVsScrap: "고철로 부서질 뻔한 첫차와 출퇴근차가 리비아 가족의 가장 든든한 발로 다시 태어납니다",
    keyBuyerPoints: [
      "연식 제한이 없어 10년~20년 이상 정들었던 노후 국산차도 현역으로 전량 매입",
      "외판 스크래치나 단순교환보다 오랜 세월 길들여진 엔진·미션 상태를 최우선 평가",
      "폐차장에서 고철 취급받던 차량이 가장 명예롭게 새 주인을 만나는 핵심 국가",
    ],
  },
  {
    id: "country-kyrgyzstan",
    countryName: "키르기스스탄 · 카자흐스탄 (중앙아시아)",
    flagEmoji: "🇰🇬",
    portAndRoute: "인천항 → 중국 연운항 횡단철도(TCR) → 비슈케크·알마티",
    buyerDemandBadge: "SUV · 고급 세단 · 선루프 최고가 프리미엄",
    preferredModels: [
      "쏘렌토 R / 올 뉴 쏘렌토",
      "싼타페 DM / 더 프라임",
      "K5 / K7 / 그랜저 HG·IG",
      "스포티지 R / 투싼 ix",
      "벤츠 W212 · BMW F10 · 아우디 Q5",
    ],
    yearAndConditionRule: "2010~2020년식 가솔린·디젤·LPG · 파노라마 선루프/스마트키/4WD 장착 시 최우선 배정",
    averageBonusVsScrap: "아이들 키우며 정들었던 패밀리 SUV가 중앙아시아 대가족의 가장 자랑스러운 보물이 됩니다",
    keyBuyerPoints: [
      "산악 지형과 대가족 문화로 한국산 중대형 SUV 및 고급 세단을 가장 귀하게 대접",
      "파노라마 선루프, 스마트키, 4륜구동(4WD) 옵션을 하나도 빠짐없이 인정",
      "주행거리 20만~30만km 돌파 차량도 차주님이 아껴 타신 정성 그대로 높이 평가",
    ],
  },
  {
    id: "country-jordan",
    countryName: "요르단 · 중동 (자르카 자유무역지대)",
    flagEmoji: "🇯🇴",
    portAndRoute: "인천항 → 홍해 아카바(Aqaba)항 → 중동 전역 재수출 허브",
    buyerDemandBadge: "준중형·하이브리드·1톤 화물차 급구",
    preferredModels: [
      "아반떼 AD / CN7 / MD",
      "아이오닉 · 쏘나타/K5 하이브리드",
      "올 뉴 투싼 TL / 스포티지 QL",
      "포터2 더블캡 / 봉고3 1톤",
      "레이 · 올 뉴 모닝 JA",
    ],
    yearAndConditionRule: "2012~2022년식 준신형 및 흰색·밝은 색상 최고 우대 (단순교환·보험이력 무관)",
    averageBonusVsScrap: "보험이력·키로수 때문에 내수에서 설움받던 내 차가 중동에서 가장 인기 있는 차로 대접받습니다",
    keyBuyerPoints: [
      "이라크·시리아·사우디 바이어가 집결하는 중동 최대 자동차 무역 특구",
      "국내에서 보험이력이나 과다 주행으로 저평가된 준신형 세단·하이브리드 최우선 우대",
      "무더운 기후 특성상 흰색·은색·유채색 차량 및 순정 오토에어컨 장착 차량 특별 대우",
    ],
  },
  {
    id: "country-ghana-egypt",
    countryName: "가나 · 이집트 · 중남미 ( 칠레·과테말라 )",
    flagEmoji: "🇬🇭",
    portAndRoute: "인천항 → 서아프리카 테마(Tema)항 / 지중해 알렉산드리아항",
    buyerDemandBadge: "경소형차 · 택시부활 · 학원/영업용 승합·화물",
    preferredModels: [
      "모닝 TA / 스파크 / 엑센트",
      "포르테 / K3 / SM3 / 크루즈",
      "그랜드 스타렉스 11·12인승 / 3·5밴",
      "포터2 · 봉고3 냉동탑/내장탑",
      "코란도 스포츠 / 렉스턴",
    ],
    yearAndConditionRule: "2006~2018년식 수동(스틱)·오토 전 차종 · 부식·외관 흠집 감가 최소화",
    averageBonusVsScrap: "가족의 생계를 책임지던 일터 트럭과 승합차가 바다 건너 마을의 새로운 희망으로 달립니다",
    keyBuyerPoints: [
      "현지 대중교통 및 상업용 수요가 높아 스타렉스·1톤 트럭·경소형차를 가장 귀하게 여김",
      "몇 달씩 기다리는 조기폐차 대신 당일 투명한 정산으로 새 주인에게 바로 연결",
      "엔진 시동 및 주행만 가능하면 하부 세월 흔적이나 외판 흠집 트집 없이 전량 인수",
    ],
  },
];

export interface ScamComparisonPoint {
  category: string;
  badBrokerPractice: string;
  byunggukGuarantee: string;
}

export const EXPORT_SCAM_PREVENTION_CHECKLIST: ScamComparisonPoint[] = [
  {
    category: "1. ‘평균 시세 이상·최대 얼마 더’ 미끼 광고 vs 정직한 실매입가",
    badBrokerPractice:
      "‘무조건 시세보다 수백만 원 더 드린다’는 달콤한 거짓 광고로 설레게 한 뒤, 막상 현장에 도착하면 온갖 흠집과 트집을 잡아 헐값으로 후려침",
    byunggukGuarantee:
      "지키지도 못할 미끼 금액으로 고객님을 유혹하지 않습니다. 유튜브·인스타·틱톡에 공개된 병국이 얼굴을 걸고 처음부터 실제로 드릴 수 있는 진짜 금액만 약속합니다.",
  },
  {
    category: "2. 익명 브로커의 말 바꾸기 vs 얼굴·실명 공개 책임 거래",
    badBrokerPractice:
      "얼굴도 이름도 숨긴 채 상담원만 내세워 일단 차부터 가져가려 하고, 문제가 생기면 연락을 피하거나 책임을 떠넘김",
    byunggukGuarantee:
      "유튜브·인스타·틱톡 어디를 검색해도 제 얼굴과 목소리가 나옵니다. 내 가족과 구독자가 지켜보는 이 얼굴에 부끄러운 돈은 단 1원도 욕심내지 않습니다.",
  },
  {
    category: "3. 얼굴 믿고 차부터 보내도 안심되는 투명한 정산·말소",
    badBrokerPractice:
      "익명 브로커에게 차를 보냈다가 황당한 트집 감가를 당하거나 말소 처리가 늦어질까 봐 차주님이 끝까지 불안해함",
    byunggukGuarantee:
      "실제 차주님 10분 중 6분 이상이 유튜브·SNS 속 병국이 얼굴만 믿고 차부터 편하게 보내주십니다. 차를 먼저 받더라도 단 1원의 억지 감가 없이 약속된 대금을 당일 정산하고 24시간 내 수출말소증을 보내드립니다.",
  },
  {
    category: "4. 거래 불발 시 출장비·위약금 요구 여부",
    badBrokerPractice:
      "현장에서 부당 감가를 거부하면 왕복 탁송비나 출장비 명목으로 10~20만 원을 요구하며 차주님을 난처하게 만듦",
    byunggukGuarantee:
      "전국 어디든 출장비·검수비·탁송비 완전 0원! 이야기 나눈 금액이 마음에 들지 않으시면 언제든 편하게 거절하셔도 단 1원의 비용도 청구하지 않습니다.",
  },
];




