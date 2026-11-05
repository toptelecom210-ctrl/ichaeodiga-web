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
    domesticQuote: "폐차장: 고철 무게만 산정",
    exportPrice: "키르기스스탄 선루프 최고가 직통",
    bonusDiff: "중간 브로커 수수료 0원",
    status: "송금완료",
  },
  {
    id: "t2",
    timeAgo: "1분 전",
    region: "서울 강서 · 박*준(9104)",
    carModel: "아반떼 MD 1.6 GDi",
    year: "2012년식",
    mileage: "21만km",
    domesticQuote: "내수딜러: 키로수 과다 감가",
    exportPrice: "리비아 바이어 1순위 무감가 매입",
    bonusDiff: "얼굴 믿고 선탁송 · 당일정산",
    status: "말소완료",
  },
  {
    id: "t3",
    timeAgo: "2분 전",
    region: "충남 천안 · 이*철(3318)",
    carModel: "포터2 초장축 슈퍼캡 (수동)",
    year: "2013년식",
    mileage: "33만km",
    domesticQuote: "조기폐차: 수개월 대기·고철값",
    exportPrice: "중동 수동(스틱) 트럭 특별 우대",
    bonusDiff: "적재함 흠집 감가 ZERO",
    status: "송금완료",
  },
  {
    id: "t4",
    timeAgo: "3분 전",
    region: "부산 해운대 · 최*호(7742)",
    carModel: "쏘렌토 R 2.0 디젤 TLX",
    year: "2011년식",
    mileage: "28만km",
    domesticQuote: "내수매매: 노후 디젤 매입거부",
    exportPrice: "중앙아시아 7인승 SUV 바이어 직매칭",
    bonusDiff: "타 업체 견적 비교 후 최종선택",
    status: "검수진행",
  },
  {
    id: "t5",
    timeAgo: "4분 전",
    region: "대구 달서 · 정*훈(5580)",
    carModel: "그랜드 스타렉스 12인승",
    year: "2015년식",
    mileage: "26만km",
    domesticQuote: "내수딜러: 영업이력 대폭 감가",
    exportPrice: "러시아·카자흐스탄 승합 직수출",
    bonusDiff: "알선 수수료 0원 전액 차주몫",
    status: "송금완료",
  },
  {
    id: "t6",
    timeAgo: "5분 전",
    region: "인천 부평 · 강*민(1920)",
    carModel: "스포티지 R 2.0 디젤",
    year: "2012년식",
    mileage: "25만km",
    domesticQuote: "내수매매: 단순교환 사고 감가",
    exportPrice: "알제리 바이어 파노라마 선루프 우대",
    bonusDiff: "단순교환 감가 0원 보장",
    status: "말소완료",
  },
  {
    id: "t7",
    timeAgo: "6분 전",
    region: "경기 화성 · 윤*석(6045)",
    carModel: "올 뉴 쏘렌토 UM 2.0 4WD",
    year: "2015년식",
    mileage: "27만km",
    domesticQuote: "내수딜러: 고주행 감가 폭탄",
    exportPrice: "키르기스스탄 4WD 패밀리 SUV 우대",
    bonusDiff: "유튜브 얼굴 보증 · 무감가",
    status: "송금완료",
  },
  {
    id: "t8",
    timeAgo: "7분 전",
    region: "서울 송파 · 조*영(8812)",
    carModel: "벤츠 E220 CDI (W212)",
    year: "2014년식",
    mileage: "29만km",
    domesticQuote: "내수딜러: 경고등·수리비 감가",
    exportPrice: "조지아·두바이 명차 바이어 직통",
    bonusDiff: "수리비 감가 없이 현상태 인수",
    status: "견적산출",
  },
  {
    id: "t9",
    timeAgo: "9분 전",
    region: "경남 창원 · 장*태(2491)",
    carModel: "봉고3 1톤 더블캡 4륜(4WD)",
    year: "2014년식",
    mileage: "36만km",
    domesticQuote: "조기폐차: 하부 세월흔적 헐값",
    exportPrice: "산악·농장용 4륜 수동 최고가 직행",
    bonusDiff: "조기폐차 대비 압도적 실익",
    status: "송금완료",
  },
  {
    id: "t10",
    timeAgo: "11분 전",
    region: "대전 유성 · 한*희(7390)",
    carModel: "아반떼 AD 1.6 스마트",
    year: "2016년식",
    mileage: "22만km",
    domesticQuote: "내수매매: 보험이력 감가",
    exportPrice: "요르단 자유무역특구 1순위 선적",
    bonusDiff: "스마트키·흰색 바이어 웃돈",
    status: "송금완료",
  },
  {
    id: "t11",
    timeAgo: "12분 전",
    region: "광주 북구 · 오*진(4117)",
    carModel: "싼타페 DM 2.0 7인승",
    year: "2013년식",
    mileage: "31만km",
    domesticQuote: "폐차장: 30만km 돌파 고철취급",
    exportPrice: "중앙아시아 대가족 7인승 프리미엄",
    bonusDiff: "31만km 엔진 가치 100% 인정",
    status: "검수진행",
  },
  {
    id: "t12",
    timeAgo: "14분 전",
    region: "경기 고양 · 신*우(5029)",
    carModel: "BMW 520d F10 럭셔리",
    year: "2013년식",
    mileage: "28만km",
    domesticQuote: "내수딜러: 미세누유 대폭 감가",
    exportPrice: "조지아·CIS 독일차 전문 바이어 직통",
    bonusDiff: "미세누유 트집 감가 ZERO",
    status: "송금완료",
  },
  {
    id: "t13",
    timeAgo: "15분 전",
    region: "울산 남구 · 권*도(3901)",
    carModel: "그랜저 HG 240 모던",
    year: "2013년식",
    mileage: "29만km",
    domesticQuote: "폐차장: 구형 대형세단 고철가",
    exportPrice: "중동·중앙아시아 의전 세단 직수출",
    bonusDiff: "파노라마 선루프 특별 우대",
    status: "말소완료",
  },
  {
    id: "t14",
    timeAgo: "17분 전",
    region: "충북 청주 · 황*성(6614)",
    carModel: "포터2 냉동탑차 초장축",
    year: "2015년식",
    mileage: "38만km",
    domesticQuote: "내수매매: 특장탑 해체비 요구",
    exportPrice: "동남아·중동 콜드체인 바이어 직매칭",
    bonusDiff: "탑 해체·랩핑 제거 없이 인수",
    status: "송금완료",
  },
  {
    id: "t15",
    timeAgo: "18분 전",
    region: "전북 전주 · 서*람(8123)",
    carModel: "올 뉴 카니발 9인승 디젤",
    year: "2015년식",
    mileage: "27만km",
    domesticQuote: "내수딜러: 장거리 키로수 감가",
    exportPrice: "중동·중앙아시아 VIP 패밀리밴 우대",
    bonusDiff: "듀얼선루프·오토도어 웃돈",
    status: "견적산출",
  },
  {
    id: "t16",
    timeAgo: "20분 전",
    region: "경기 평택 · 안*기(1784)",
    carModel: "기아 K3 1.6 트렌디",
    year: "2014년식",
    mileage: "23만km",
    domesticQuote: "폐차장: 단순 고철비만 안내",
    exportPrice: "이집트·리비아 준중형 1순위 오더",
    bonusDiff: "고철값 대신 현역 수출차 대우",
    status: "송금완료",
  },
  {
    id: "t17",
    timeAgo: "22분 전",
    region: "강원 원주 · 유*호(9450)",
    carModel: "기아 모하비 KV300 4WD",
    year: "2012년식",
    mileage: "35만km",
    domesticQuote: "내수딜러: 35만km·하부부식 감가",
    exportPrice: "몽골·카자흐스탄 V6 프레임바디 우대",
    bonusDiff: "프레임바디 4WD 최고가 직통",
    status: "송금완료",
  },
  {
    id: "t18",
    timeAgo: "24분 전",
    region: "서울 노원 · 문*숙(3048)",
    carModel: "올 뉴 모닝 JA 스마트키",
    year: "2017년식",
    mileage: "19만km",
    domesticQuote: "폐차장: 경차 고철 무게 산정",
    exportPrice: "시리아·가나 고연비 도심형 급구",
    bonusDiff: "스마트키·밝은색상 특별 우대",
    status: "말소완료",
  },
  {
    id: "t19",
    timeAgo: "25분 전",
    region: "경기 용인 · 배*현(7216)",
    carModel: "렉서스 ES300h 하이브리드",
    year: "2013년식",
    mileage: "26만km",
    domesticQuote: "내수매매: 하이브리드 배터리 감가",
    exportPrice: "몽골·중앙아시아 렉서스 전담 오더",
    bonusDiff: "배터리·고주행 감가 ZERO",
    status: "검수진행",
  },
  {
    id: "t20",
    timeAgo: "27분 전",
    region: "경북 구미 · 손*재(5832)",
    carModel: "LF 쏘나타 2.0 스마트",
    year: "2015년식",
    mileage: "25만km",
    domesticQuote: "내수딜러: 법인·영업이력 감가",
    exportPrice: "요르단·리비아 중형세단 직통 선적",
    bonusDiff: "용도이력 감가 없이 당일정산",
    status: "송금완료",
  },
  {
    id: "t21",
    timeAgo: "29분 전",
    region: "인천 서구 · 백*철(4409)",
    carModel: "현대 마이티 2.5톤 카고",
    year: "2012년식",
    mileage: "44만km",
    domesticQuote: "조기폐차: 44만km 노후화물 취급",
    exportPrice: "중동·아프리카 상용 트럭 바이어 직통",
    bonusDiff: "44만km 상용 엔진 최고 대우",
    status: "송금완료",
  },
  {
    id: "t22",
    timeAgo: "31분 전",
    region: "전남 순천 · 남*우(6192)",
    carModel: "투싼 ix 2.0 디젤",
    year: "2012년식",
    mileage: "27만km",
    domesticQuote: "폐차장: 노후 경유 고철가 안내",
    exportPrice: "이집트·중남미 컴팩트 SUV 직수출",
    bonusDiff: "조기폐차 대기 없이 당일정산",
    status: "말소완료",
  },
  {
    id: "t23",
    timeAgo: "33분 전",
    region: "경기 남양주 · 심*규(2087)",
    carModel: "아우디 A6 35 TDI 콰트로",
    year: "2014년식",
    mileage: "24만km",
    domesticQuote: "내수딜러: 수입 디젤 폭락 감가",
    exportPrice: "키르기스스탄 눈길 콰트로 4WD 우대",
    bonusDiff: "얼굴 믿고 선탁송 · 감가 0원",
    status: "견적산출",
  },
  {
    id: "t24",
    timeAgo: "35분 전",
    region: "경남 김해 · 노*원(8765)",
    carModel: "포터2 윙바디 파워게이트",
    year: "2016년식",
    mileage: "32만km",
    domesticQuote: "내수매매: 특장 윙바디 감가",
    exportPrice: "동남아 물류 바이어 특장차 직매칭",
    bonusDiff: "파워게이트·특장 옵션 인정",
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
    criteria: "중간 유통 수수료 구조",
    scrap: "폐차 대행 브로커 수수료 차감",
    domesticDealer: "알선딜러 → 매매상사 → 수출브로커 (3중 마진 차감)",
    ichaeodigaExport: "중간 브로커 0명! 병국이 ↔ 해외 바이어 직통으로 차주 몫 극대화",
  },
  {
    criteria: "주행거리 20만~50만km",
    scrap: "멀쩡한 엔진·옵션값 0원 (고철 무게만 계산)",
    domesticDealer: "과다주행 핑계로 반값 감가 또는 매입 거부",
    ichaeodigaExport: "주행거리 감가 ZERO! 엔진·미션만 정상 작동하면 현역 최고가",
  },
  {
    criteria: "사고 이력 / 외관 흠집",
    scrap: "무관하나 고철 보상금 자체가 극소액",
    domesticDealer: "단순교환·판금·도색비 명목으로 현장에서 수백만 원 감가",
    ichaeodigaExport: "해외 현지 직접 정비 → 외판 스크래치·단순교환 부당 감가 0원",
  },
  {
    criteria: "선루프 · 스마트키 · 수동/4WD",
    scrap: "옵션 가치 전액 0원 처리 (철거·압축)",
    domesticDealer: "노후 연식이라며 옵션 가치 거의 불인정",
    ichaeodigaExport: "해외 바이어 최우선 선호 옵션으로 항목별 특별 웃돈 가산",
  },
  {
    criteria: "차량 인계 및 정산 신뢰도",
    scrap: "입고 후 수일 뒤 고철비 입금",
    domesticDealer: "현장 도착 후 트집 감가 합의 강요",
    ichaeodigaExport: "고객 60%가 병국이 얼굴만 믿고 먼저 탁송 보낼 만큼 투명한 당일 칼정산",
  },
  {
    criteria: "행정 말소 및 보험·세금 환급",
    scrap: "일반 폐차 (조기폐차는 수개월 소요)",
    domesticDealer: "다음 구매자가 나타날 때까지 명의 유지 부담",
    ichaeodigaExport: "당일~24시간 내 공식 수출말소증 발급 (보험료·세금 즉시 환급)",
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
      "왜 다른 사이트처럼 ‘무조건 800만 원, +300만 원 UP’ 같은 고정 가격표를 적어두지 않나요?",
    answer:
      "인터넷에 돌아다니는 고정 고가 시세표의 99%는 일단 차주님을 유인한 뒤 현장에서 흠집과 키로수를 트집 잡아 깎으려는 ‘미끼 숫자’이기 때문입니다. 유튜브·인스타·틱톡에 얼굴을 걸고 일하는 병국이는 거짓 숫자로 낚지 않고, 중간 알선 브로커 수수료를 없앤 오늘 해외 바이어의 ‘진짜 실매입가’만 정직하게 말씀드립니다.",
  },
  {
    id: "faq-2",
    question:
      "주행거리가 20만~40만km가 넘고 사고 이력이 있어도 왜 해외 수출이 더 유리한가요?",
    answer:
      "폐차장은 멀쩡한 엔진과 선루프·스마트키 옵션을 모두 0원(고철 무게)으로 계산하고, 국내 딜러는 20만km 이상·사고이력을 이유로 큰 폭의 감가를 합니다. 반면 중동·중앙아시아·중남미·아프리카 바이어는 한국 차의 건강한 엔진·미션과 옵션을 현역 가치로 그대로 인정하기 때문에 폐차나 내수 매매보다 훨씬 유리한 조건으로 거래됩니다.",
  },
  {
    id: "faq-3",
    question: "중고차 수출 시 필요한 서류는 무엇인가요? 인감증명서가 필요한가요?",
    answer:
      "개인 명의 차량은 인감증명서가 전혀 필요하지 않습니다. 【자동차등록증 원본】과 【차주 신분증 사진】, 【대금 입금받을 계좌】 3가지만 있으면 관공서 방문 없이 비대면으로 즉시 진행됩니다. 법인 차량은 사업자등록증 사본과 법인인감증명서 등이 필요합니다.",
  },
  {
    id: "faq-4",
    question: "조기폐차 지원금과 중고차 수출 중 어떤 것이 더 유리한가요?",
    answer:
      "쏘렌토 R, 스포티지 R, 싼타페, 포터2, 봉고3, 스타렉스 등 노후 경유차는 몇 달씩 기다려야 하는 조기폐차보다 해외 바이어 직수출로 보내실 때 차주님 손에 쥐는 실수령액이 훨씬 유리한 경우가 많습니다. 게다가 복잡한 환경협회 심사 대기 없이 당일 즉시 정산과 말소가 끝납니다.",
  },
  {
    id: "faq-5",
    question:
      "정말 병국이 얼굴만 믿고 차부터 먼저 탁송으로 보내도 괜찮나요?",
    answer:
      "네! 실제로 저희와 거래하시는 차주님 10분 중 6분(60%) 이상이 바쁜 일상 속에서 유튜브·인스타·틱톡 속 병국이 얼굴만 믿고 무료 탁송으로 차부터 편하게 보내주십니다. 물론 원하시면 현장 방문 시 즉시 송금도 가능하며, 차를 먼저 보내주시더라도 단 1원의 억지 감가 없이 약속드린 대금 정산과 당일~24시간 내 수출말소증 발급을 철저히 지킵니다.",
  },
  {
    id: "faq-6",
    question: "다른 업체에서 받은 견적이 있는데 비교만 해봐도 출장비나 수수료가 없나요?",
    answer:
      "완전 0원입니다. 이미 다른 수출업체나 딜러에게 받은 견적이 있다면 마지막에 병국이에게 딱 한 번만 물어보세요. 그 업체가 던진 금액이 현장에서 깎으려는 ‘미끼 사기 견적’인지 판독해 드리고, 실제 진성 견적이라면 병국이가 제 마진을 줄여서라도 자존심 걸고 더 좋은 조건을 맞춰드립니다.",
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
        imageUrl: "/images/vehicles/avante-ad.jpg?v=navyplate1",
        memoryStory: "⚠️ 딜러·폐차장의 꼼수: ❌ 폐차·국내매매 시: 첫 출근길부터 함께한 고마운 차인데 20만km 넘었다고 엔진·옵션값은 0원 처리하거나 사고이력 핑계로 반값 후려치기를 당합니다. 그래놓고 뒤돌아서면 인천 수출단지에 되팔아 뒷돈을 챙깁니다!",
        overseasStory: "🔥 병국이 직통 폭격: ⭕ 병국이 바이어 직통 시: 중간 알선 브로커 수수료 0원! 리비아·요르단 바이어가 가장 좋아하는 [선루프·스마트키·흰색] 프리미엄을 100% 얹어 현역 최고가로 직행합니다. 중간 딜러가 해먹던 뒷마진까지 사장님 통장에 100% 꽂아드립니다!",
        heartPromise: "다른 데 3군데 다 알아보고 맨 마지막에 오세요! 타사 견적 무조건 이겨드리며, 10원이라도 깎으면 제 유튜브 댓글에 박제하셔도 됩니다!",
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
        imageUrl: "/images/vehicles/santafe-dm.jpg?v=navyplate1",
        memoryStory: "⚠️ 딜러·폐차장의 꼼수: ❌ 폐차·국내매매 시: 온 가족 캠핑과 여행을 책임진 든든한 SUV인데 노후 디젤·고주행이라는 이유로 몇 달 걸리는 조기폐차나 헐값 매매를 권유받습니다. 그래놓고 뒤돌아서면 인천 수출단지에 되팔아 뒷돈을 챙깁니다!",
        overseasStory: "🔥 병국이 직통 폭격: ⭕ 병국이 바이어 직통 시: 산악 지형이 많은 키르기스스탄·러시아 바이어에게 [7인승 + 파노라마 선루프 + 4WD] 가치를 전액 인정받아 내수 시세를 완벽히 역전합니다. 중간 딜러가 해먹던 뒷마진까지 사장님 통장에 100% 꽂아드립니다!",
        heartPromise: "다른 데 3군데 다 알아보고 맨 마지막에 오세요! 타사 견적 무조건 이겨드리며, 10원이라도 깎으면 제 유튜브 댓글에 박제하셔도 됩니다!",
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
        imageUrl: "/images/vehicles/porter2-doublecab.jpg?v=navyplate1",
        memoryStory: "⚠️ 딜러·폐차장의 꼼수: ❌ 폐차·국내매매 시: 새벽 별 보며 가족 먹여 살린 아버지의 땀방울인데 적재함 녹·스크래치·30만km 주행거리를 핑계로 고철값만 부릅니다. 그래놓고 뒤돌아서면 인천 수출단지에 되팔아 뒷돈을 챙깁니다!",
        overseasStory: "🔥 병국이 직통 폭격: ⭕ 병국이 바이어 직통 시: 중동·동남아 현장에선 적재함 흠집은 신경도 안 씁니다! [수동(스틱) 기어 · 더블캡 · 특장탑]이면 바이어가 웃돈을 얹어 당일 모셔갑니다. 중간 딜러가 해먹던 뒷마진까지 사장님 통장에 100% 꽂아드립니다!",
        heartPromise: "다른 데 3군데 다 알아보고 맨 마지막에 오세요! 타사 견적 무조건 이겨드리며, 10원이라도 깎으면 제 유튜브 댓글에 박제하셔도 됩니다!",
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
        imageUrl: "/images/vehicles/grand-starex.jpg?v=navyplate1",
        memoryStory: "⚠️ 딜러·폐차장의 꼼수: ❌ 폐차·국내매매 시: 학원 아이들과 현장 자재를 실어 나르며 30만~40만km를 버텨준 차인데 노란 도색·격벽 손상 때문에 국내에선 폐차만 권유받습니다. 그래놓고 뒤돌아서면 인천 수출단지에 되팔아 뒷돈을 챙깁니다!",
        overseasStory: "🔥 병국이 직통 폭격: ⭕ 병국이 바이어 직통 시: 노란 학원차 도색·상호 랩핑 그대로 OK! 러시아·카자흐스탄·몽골에서 마을버스와 만능 화물밴으로 부르는 게 값입니다. 중간 딜러가 해먹던 뒷마진까지 사장님 통장에 100% 꽂아드립니다!",
        heartPromise: "다른 데 3군데 다 알아보고 맨 마지막에 오세요! 타사 견적 무조건 이겨드리며, 10원이라도 깎으면 제 유튜브 댓글에 박제하셔도 됩니다!",
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
        imageUrl: "/images/vehicles/avante-ad.jpg?v=navyplate1",
        memoryStory: "⚠️ 딜러·폐차장의 꼼수: ❌ 폐차·국내매매 시: 명절 귀성길과 가장의 자부심을 지켜준 세단인데 신형 모델 출시와 LPI·고주행 이력 때문에 국내 딜러에게 헐값 취급을 받습니다. 그래놓고 뒤돌아서면 인천 수출단지에 되팔아 뒷돈을 챙깁니다!",
        overseasStory: "🔥 병국이 직통 폭격: ⭕ 병국이 바이어 직통 시: 중동·중앙아시아에선 대한민국 중대형 세단이 ‘성공한 리더의 상징’입니다! 가솔린·LPI·하이브리드 불문하고 바이어 직통 웃돈이 붙습니다. 중간 딜러가 해먹던 뒷마진까지 사장님 통장에 100% 꽂아드립니다!",
        heartPromise: "다른 데 3군데 다 알아보고 맨 마지막에 오세요! 타사 견적 무조건 이겨드리며, 10원이라도 깎으면 제 유튜브 댓글에 박제하셔도 됩니다!",
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
        imageUrl: "/images/vehicles/santafe-dm.jpg?v=navyplate1",
        memoryStory: "⚠️ 딜러·폐차장의 꼼수: ❌ 폐차·국내매매 시: 사계절 잔고장 없이 달려준 고마운 SUV인데 작은 접촉사고(단순교환)나 20만km 주행거리 때문에 내수에서 수백만 원 감가를 당합니다. 그래놓고 뒤돌아서면 인천 수출단지에 되팔아 뒷돈을 챙깁니다!",
        overseasStory: "🔥 병국이 직통 폭격: ⭕ 병국이 바이어 직통 시: 알제리·이집트·요르단 바이어는 단순교환 이력을 전혀 감가하지 않으며, 한국산 컴팩트 디젤/가솔린 SUV 1순위로 모셔갑니다. 중간 딜러가 해먹던 뒷마진까지 사장님 통장에 100% 꽂아드립니다!",
        heartPromise: "다른 데 3군데 다 알아보고 맨 마지막에 오세요! 타사 견적 무조건 이겨드리며, 10원이라도 깎으면 제 유튜브 댓글에 박제하셔도 됩니다!",
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
        imageUrl: "/images/vehicles/kia-k5-tf.jpg?v=navyplate1",
        memoryStory: "⚠️ 딜러·폐차장의 꼼수: ❌ 폐차·국내매매 시: 처음 출고할 때 밤잠 설레게 했던 멋진 세단인데 국내에선 구형 연식·렌트/사고이력·고주행이라며 제 가치를 인정받지 못합니다. 그래놓고 뒤돌아서면 인천 수출단지에 되팔아 뒷돈을 챙깁니다!",
        overseasStory: "🔥 병국이 직통 폭격: ⭕ 병국이 바이어 직통 시: 요르단·중앙아시아 청년들이 가장 열광하는 디자인 1위 세단! [흰색·진주색 + 파노라마 선루프] 조합이면 바이어 최고가 경매가 붙습니다. 중간 딜러가 해먹던 뒷마진까지 사장님 통장에 100% 꽂아드립니다!",
        heartPromise: "다른 데 3군데 다 알아보고 맨 마지막에 오세요! 타사 견적 무조건 이겨드리며, 10원이라도 깎으면 제 유튜브 댓글에 박제하셔도 됩니다!",
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
        imageUrl: "/images/vehicles/santafe-dm.jpg?v=navyplate1",
        memoryStory: "⚠️ 딜러·폐차장의 꼼수: ❌ 폐차·국내매매 시: 3대가 함께 타도 든든했던 우리 집 보물 1호인데, 이제 세월이 흘러 보내려니 국내 딜러들은 키로수만 보고 찬밥 취급을 합니다. 그래놓고 뒤돌아서면 인천 수출단지에 되팔아 뒷돈을 챙깁니다!",
        overseasStory: "🔥 병국이 직통 폭격: ⭕ 병국이 바이어 직통 시: 키르기스스탄·몽골·러시아 수출 단가 전체 1위 SUV! 2.0/2.2 R엔진과 7인승·선루프·4WD를 최고급 패밀리카로 극진히 대접합니다. 중간 딜러가 해먹던 뒷마진까지 사장님 통장에 100% 꽂아드립니다!",
        heartPromise: "다른 데 3군데 다 알아보고 맨 마지막에 오세요! 타사 견적 무조건 이겨드리며, 10원이라도 깎으면 제 유튜브 댓글에 박제하셔도 됩니다!",
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
        imageUrl: "/images/vehicles/sportage-r.jpg?v=navyplate1",
        memoryStory: "⚠️ 딜러·폐차장의 꼼수: ❌ 폐차·국내매매 시: 출퇴근부터 주말 레저까지 한 번도 퍼진 적 없는 짱짱한 차인데 25만km 넘었다고 폐차장 고철값 언저리만 제시받아 속상하셨을 겁니다. 그래놓고 뒤돌아서면 인천 수출단지에 되팔아 뒷돈을 챙깁니다!",
        overseasStory: "🔥 병국이 직통 폭격: ⭕ 병국이 바이어 직통 시: 인천 수출단지 입고 즉시 팔려나가는 회전율 1위 모델! 알제리·중남미 바이어가 외판 흠집 감가 없이 현역 최고가로 즉시 매입합니다. 중간 딜러가 해먹던 뒷마진까지 사장님 통장에 100% 꽂아드립니다!",
        heartPromise: "다른 데 3군데 다 알아보고 맨 마지막에 오세요! 타사 견적 무조건 이겨드리며, 10원이라도 깎으면 제 유튜브 댓글에 박제하셔도 됩니다!",
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
        imageUrl: "/images/vehicles/porter2-doublecab.jpg?v=navyplate1",
        memoryStory: "⚠️ 딜러·폐차장의 꼼수: ❌ 폐차·국내매매 시: 거친 현장과 농장 흙길을 달릴 때마다 든든히 버텨준 일꾼인데 하부 세월 흔적과 주행거리 때문에 폐차장으로 보내기엔 너무 아깝습니다. 그래놓고 뒤돌아서면 인천 수출단지에 되팔아 뒷돈을 챙깁니다!",
        overseasStory: "🔥 병국이 직통 폭격: ⭕ 병국이 바이어 직통 시: 특히 봉고3 [4륜구동(4WD) + 수동 기어]와 더블캡·특장차는 아프리카·중앙아시아 비포장 마을에서 ‘기적의 트럭’으로 불리며 최고 대우를 받습니다. 중간 딜러가 해먹던 뒷마진까지 사장님 통장에 100% 꽂아드립니다!",
        heartPromise: "다른 데 3군데 다 알아보고 맨 마지막에 오세요! 타사 견적 무조건 이겨드리며, 10원이라도 깎으면 제 유튜브 댓글에 박제하셔도 됩니다!",
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
        imageUrl: "/images/vehicles/kia-morning-ja.jpg?v=navyplate1",
        memoryStory: "⚠️ 딜러·폐차장의 꼼수: ❌ 폐차·국내매매 시: 아이 등하원길과 좁은 골목길 출퇴근을 책임진 고마운 차인데 경소형차라는 이유로 폐차장에선 고철 무게로만 쳐서 몇십만 원만 부릅니다. 그래놓고 뒤돌아서면 인천 수출단지에 되팔아 뒷돈을 챙깁니다!",
        overseasStory: "🔥 병국이 직통 폭격: ⭕ 병국이 바이어 직통 시: 이집트·시리아·리비아 도심에서는 고연비 모닝·K3·포르테가 최고 인기 생활차입니다! 밝은 색상과 스마트키가 있으면 바이어 웃돈이 즉시 붙습니다. 중간 딜러가 해먹던 뒷마진까지 사장님 통장에 100% 꽂아드립니다!",
        heartPromise: "다른 데 3군데 다 알아보고 맨 마지막에 오세요! 타사 견적 무조건 이겨드리며, 10원이라도 깎으면 제 유튜브 댓글에 박제하셔도 됩니다!",
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
        imageUrl: "/images/vehicles/avante-ad.jpg?v=navyplate1",
        memoryStory: "⚠️ 딜러·폐차장의 꼼수: ❌ 폐차·국내매매 시: 정숙한 엔진과 안락한 승차감으로 아껴 타온 애마인데 국내 중고차 시장에서는 비인기 브랜드라는 편견 때문에 감가가 가장 심합니다. 그래놓고 뒤돌아서면 인천 수출단지에 되팔아 뒷돈을 챙깁니다!",
        overseasStory: "🔥 병국이 직통 폭격: ⭕ 병국이 바이어 직통 시: 이집트·요르단·유럽 바이어는 닛산 계열 타이밍체인 엔진(SM3/SM5)과 르노 콜레오스(QM6)의 탄탄한 내구성을 정확히 알아보고 고가에 모셔갑니다. 중간 딜러가 해먹던 뒷마진까지 사장님 통장에 100% 꽂아드립니다!",
        heartPromise: "다른 데 3군데 다 알아보고 맨 마지막에 오세요! 타사 견적 무조건 이겨드리며, 10원이라도 깎으면 제 유튜브 댓글에 박제하셔도 됩니다!",
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
        imageUrl: "/images/vehicles/kia-morning-ja.jpg?v=navyplate1",
        memoryStory: "⚠️ 딜러·폐차장의 꼼수: ❌ 폐차·국내매매 시: 가족 안전을 위해 선택한 단단한 차체인데 국내에선 수리비·감가 핑계로 헐값 취급을 받아 팔 때마다 가장 억울한 브랜드입니다. 그래놓고 뒤돌아서면 인천 수출단지에 되팔아 뒷돈을 챙깁니다!",
        overseasStory: "🔥 병국이 직통 폭격: ⭕ 병국이 바이어 직통 시: 전 세계 어디서나 통하는 글로벌 쉐보레(Chevrolet) 엠블럼 덕분에 중남미·이집트·중앙아시아에서 가족용 베스트셀러로 귀한 대접을 받습니다. 중간 딜러가 해먹던 뒷마진까지 사장님 통장에 100% 꽂아드립니다!",
        heartPromise: "다른 데 3군데 다 알아보고 맨 마지막에 오세요! 타사 견적 무조건 이겨드리며, 10원이라도 깎으면 제 유튜브 댓글에 박제하셔도 됩니다!",
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
        imageUrl: "/images/vehicles/sportage-r.jpg?v=navyplate1",
        memoryStory: "⚠️ 딜러·폐차장의 꼼수: ❌ 폐차·국내매매 시: 캠핑장과 험로를 거침없이 누비던 든든한 차인데 국내에선 노후 디젤 규제와 픽업 화물 감가로 제 가치를 인정받지 못합니다. 그래놓고 뒤돌아서면 인천 수출단지에 되팔아 뒷돈을 챙깁니다!",
        overseasStory: "🔥 병국이 직통 폭격: ⭕ 병국이 바이어 직통 시: 강인한 프레임 바디와 4륜구동(4WD)을 갖춘 코란도·렉스턴 스포츠는 몽골 초원과 러시아 설원에서 ‘절대 부서지지 않는 명차’로 통합니다. 중간 딜러가 해먹던 뒷마진까지 사장님 통장에 100% 꽂아드립니다!",
        heartPromise: "다른 데 3군데 다 알아보고 맨 마지막에 오세요! 타사 견적 무조건 이겨드리며, 10원이라도 깎으면 제 유튜브 댓글에 박제하셔도 됩니다!",
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
        imageUrl: "/images/vehicles/benz-w212-eclass.jpg?v=navyplate1",
        memoryStory: "⚠️ 딜러·폐차장의 꼼수: ❌ 폐차·국내매매 시: 열심히 살아온 나에게 선물했던 삼각별 드림카인데 보증 만료·경고등·보험이력 핑계로 국내 딜러들이 수백만 원씩 후려치기를 시도합니다. 그래놓고 뒤돌아서면 인천 수출단지에 되팔아 뒷돈을 챙깁니다!",
        overseasStory: "🔥 병국이 직통 폭격: ⭕ 병국이 바이어 직통 시: 조지아·두바이·알바니아 바이어는 한국 차주님이 관리한 벤츠를 세계 최고로 치며, 경고등·고주행 수리비 감가 없이 명차 그대로 모셔갑니다. 중간 딜러가 해먹던 뒷마진까지 사장님 통장에 100% 꽂아드립니다!",
        heartPromise: "다른 데 3군데 다 알아보고 맨 마지막에 오세요! 타사 견적 무조건 이겨드리며, 10원이라도 깎으면 제 유튜브 댓글에 박제하셔도 됩니다!",
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
        imageUrl: "/images/vehicles/benz-w212-eclass.jpg?v=navyplate1",
        memoryStory: "⚠️ 딜러·폐차장의 꼼수: ❌ 폐차·국내매매 시: 짜릿한 주행감을 주던 명차인데 미세 누유나 체인 소음, 주행거리 20만km 돌파를 이유로 국내 매매단지에서 헐값 감가를 당합니다. 그래놓고 뒤돌아서면 인천 수출단지에 되팔아 뒷돈을 챙깁니다!",
        overseasStory: "🔥 병국이 직통 폭격: ⭕ 병국이 바이어 직통 시: 유럽 부품망이 직결된 조지아·러시아·카자흐스탄 BMW 전문 바이어에게 직통 연결하여 누유·경고등 트집 없이 당일 최고가로 정산합니다. 중간 딜러가 해먹던 뒷마진까지 사장님 통장에 100% 꽂아드립니다!",
        heartPromise: "다른 데 3군데 다 알아보고 맨 마지막에 오세요! 타사 견적 무조건 이겨드리며, 10원이라도 깎으면 제 유튜브 댓글에 박제하셔도 됩니다!",
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
        memoryStory: "⚠️ 딜러·폐차장의 꼼수: ❌ 폐차·국내매매 시: 눈길·빗길에서도 든든했던 콰트로 4륜구동과 명품 하이브리드인데 국내 중고차 시장에서는 유독 가혹한 감가를 당해 떠나보내기 억울한 차량입니다. 그래놓고 뒤돌아서면 인천 수출단지에 되팔아 뒷돈을 챙깁니다!",
        overseasStory: "🔥 병국이 직통 폭격: ⭕ 병국이 바이어 직통 시: 눈 많은 중앙아시아·몽골 바이어는 아우디 콰트로·폭스바겐 TDI·렉서스 하이브리드의 내구성에 열광하며 내수 대비 압도적 우대 조건을 제시합니다. 중간 딜러가 해먹던 뒷마진까지 사장님 통장에 100% 꽂아드립니다!",
        heartPromise: "다른 데 3군데 다 알아보고 맨 마지막에 오세요! 타사 견적 무조건 이겨드리며, 10원이라도 깎으면 제 유튜브 댓글에 박제하셔도 됩니다!",
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
  { id: "sunroof", label: "선루프 / 파노라마 선루프", bonusMan: 45, desc: "바이어 웃돈 1순위" },
  { id: "smartkey", label: "스마트키 (버튼시동)", bonusMan: 25, desc: "현지 최고급형 인정" },
  { id: "manual_4wd", label: "화물 수동(스틱) 또는 SUV 4륜(4WD)", bonusMan: 40, desc: "사막·산악 특별우대" },
  { id: "white_bright", label: "흰색 · 진주색 · 밝은 유채색", bonusMan: 20, desc: "더운 기후 최우선 입찰" },
  { id: "navi_autoac", label: "순정 내비게이션 · 풀오토 에어컨", bonusMan: 20, desc: "풀옵션 프리미엄 직결" },
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
    yearMileage: "28만km · 파노라마 선루프",
    scrapEstimate: "내수: 고주행 디젤 감가",
    exportConfirmed: "키르기스스탄 7인승·선루프 바이어 직통 우대 (중간수수료 0원)",
    status: "당일송금완료",
  },
  {
    id: "qb-2",
    date: "오늘 실시간",
    region: "서울 송파",
    ownerMasked: "박*영 차주님",
    carModel: "2016년식 현대 아반떼 AD 1.6 GDi",
    yearMileage: "23만km · 접촉사고 이력",
    scrapEstimate: "내수: 사고이력 대폭 감가",
    exportConfirmed: "요르단 신혼부부 인기 1위 세단 무감가 직수출 (얼굴 믿고 선탁송)",
    status: "당일송금완료",
  },
  {
    id: "qb-3",
    date: "오늘 실시간",
    region: "인천 남동",
    ownerMasked: "이*철 사장님",
    carModel: "2013년식 현대 포터2 초장축 더블캡 수동",
    yearMileage: "34만km · 적재함 사용감",
    scrapEstimate: "조기폐차: 수개월 대기·고철가",
    exportConfirmed: "중동 건설현장 수동(스틱)·더블캡 특별 웃돈 (적재함 감가 ZERO)",
    status: "수출말소완료",
  },
  {
    id: "qb-4",
    date: "오늘 실시간",
    region: "충남 천안",
    ownerMasked: "최*호 차주님",
    carModel: "2013년식 기아 K5 2.0 프레스티지",
    yearMileage: "25만km · 화이트·선루프",
    scrapEstimate: "폐차장: 단순 고철 무게 산정",
    exportConfirmed: "중앙아시아 디자인 선호 1위 화이트+선루프 최고가 입찰",
    status: "바이어최고가매칭",
  },
  {
    id: "qb-5",
    date: "오늘 실시간",
    region: "대구 달서",
    ownerMasked: "정*훈 차주님",
    carModel: "2014년식 현대 싼타페 DM 2.0 7인승",
    yearMileage: "31만km · 단순교환",
    scrapEstimate: "폐차장: 30만km 돌파 고철취급",
    exportConfirmed: "산악 지형용 7인승 패밀리 SUV 현역 최고 대우 (타사 견적 역전)",
    status: "당일송금완료",
  },
  {
    id: "qb-6",
    date: "오늘 실시간",
    region: "부산 해운대",
    ownerMasked: "강*석 차주님",
    carModel: "2014년식 벤츠 E220 CDI (W212)",
    yearMileage: "27만km · 경고등 점등",
    scrapEstimate: "내수: 수리비 명목 수백만 감가",
    exportConfirmed: "조지아·두바이 명차 바이어 현상태 무감가 직통 인수",
    status: "무료출장검수중",
  },
  {
    id: "qb-7",
    date: "오늘 실시간",
    region: "광주 북구",
    ownerMasked: "조*민 사장님",
    carModel: "2015년식 그랜드 스타렉스 11인승",
    yearMileage: "36만km · 학원 운행 차량",
    scrapEstimate: "조기폐차: 노란 도색 고철가",
    exportConfirmed: "러시아·카자흐스탄 통학 승합차 도색 그대로 직수출",
    status: "당일송금완료",
  },
  {
    id: "qb-8",
    date: "오늘 실시간",
    region: "대전 유성",
    ownerMasked: "윤*희 차주님",
    carModel: "2017년식 기아 올 뉴 모닝 (JA)",
    yearMileage: "19만km · 스마트키",
    scrapEstimate: "폐차장: 경차 고철 무게 계산",
    exportConfirmed: "시리아·이집트 도심형 고연비 스마트키 특별 우대",
    status: "수출말소완료",
  },
  {
    id: "qb-9",
    date: "오늘 실시간",
    region: "경기 고양",
    ownerMasked: "신*우 차주님",
    carModel: "2013년식 BMW 520d (F10) 럭셔리",
    yearMileage: "28만km · 미세누유",
    scrapEstimate: "내수: 누유·키로수 헐값 감가",
    exportConfirmed: "유럽 인접국(조지아·CIS) BMW 전문 바이어 무감가 직매칭",
    status: "당일송금완료",
  },
  {
    id: "qb-10",
    date: "오늘 실시간",
    region: "경남 창원",
    ownerMasked: "장*태 사장님",
    carModel: "2014년식 기아 봉고3 1톤 더블캡 4WD",
    yearMileage: "36만km · 수동(스틱)",
    scrapEstimate: "조기폐차: 하부 세월흔적 헐값",
    exportConfirmed: "아프리카·동남아 험로용 4륜 수동 트럭 최고가 직행",
    status: "당일송금완료",
  },
  {
    id: "qb-11",
    date: "오늘 실시간",
    region: "충북 청주",
    ownerMasked: "황*성 사장님",
    carModel: "2015년식 현대 포터2 초장축 냉동탑차",
    yearMileage: "38만km · 메인냉동 정상",
    scrapEstimate: "내수: 특장탑 해체비 요구",
    exportConfirmed: "동남아 식자재 유통 바이어 냉동탑 그대로 무감가 매입",
    status: "바이어최고가매칭",
  },
  {
    id: "qb-12",
    date: "오늘 실시간",
    region: "전북 전주",
    ownerMasked: "서*람 차주님",
    carModel: "2015년식 기아 올 뉴 카니발 9인승",
    yearMileage: "27만km · 듀얼선루프",
    scrapEstimate: "내수: 장거리 주행 대폭 감가",
    exportConfirmed: "중동·중앙아시아 대가족 VIP 리무진 밴 특별 우대",
    status: "당일송금완료",
  },
  {
    id: "qb-13",
    date: "오늘 실시간",
    region: "울산 남구",
    ownerMasked: "권*도 차주님",
    carModel: "2013년식 현대 그랜저 HG 240 모던",
    yearMileage: "29만km · 파노라마 선루프",
    scrapEstimate: "폐차장: 30만km 육박 고철가",
    exportConfirmed: "아제르바이잔·중동 의전용 대형 세단 프리미엄 직수출",
    status: "수출말소완료",
  },
  {
    id: "qb-14",
    date: "오늘 실시간",
    region: "강원 원주",
    ownerMasked: "유*호 차주님",
    carModel: "2012년식 기아 모하비 KV300 4WD",
    yearMileage: "35만km · 프레임바디",
    scrapEstimate: "내수: 연식·하부 세월 감가",
    exportConfirmed: "몽골 초원·카자흐스탄 V6 정통 SUV 바이어 최고 대우",
    status: "당일송금완료",
  },
  {
    id: "qb-15",
    date: "오늘 실시간",
    region: "경기 용인",
    ownerMasked: "배*현 차주님",
    carModel: "2013년식 렉서스 ES300h 하이브리드",
    yearMileage: "26만km · 선루프",
    scrapEstimate: "내수: 하이브리드 배터리 감가",
    exportConfirmed: "글로벌 환금성 1위 렉서스 하이브리드 전담 바이어 직통",
    status: "무료출장검수중",
  },
  {
    id: "qb-16",
    date: "오늘 실시간",
    region: "인천 서구",
    ownerMasked: "백*철 사장님",
    carModel: "2012년식 현대 마이티 2.5톤 슈퍼캡",
    yearMileage: "44만km · 바닥철판 보강",
    scrapEstimate: "조기폐차: 노후 중형화물 취급",
    exportConfirmed: "중동·아프리카 건설 물류용 2.5톤 상용 트럭 최고가 선적",
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
    dispatchTime: "전국 당일 방문 · 얼굴 믿고 편하게 보내는 무료 탁송",
    hubCenter: "인천 송도·옥련동 본사 수출단지 + 전국 8개 권역 출장팀",
    managerComment:
      "계신 곳이 어디든 매매단지 방문하실 필요 없습니다! 병국이 직영팀이 직접 찾아뵙거나, 고객 60% 이상처럼 병국이 얼굴만 믿고 무료 탁송으로 차부터 편하게 보내주셔도 단 1원 감가 없이 당일 깔끔하게 정산해 드립니다.",
    highlights: ["전국 출장비·탁송비 0원", "중간 알선 브로커 수수료 0원", "고객 60% 얼굴 믿고 선탁송 · 무감가"],
  },
  {
    id: "seoul",
    tabLabel: "서울",
    regionValue: "서울특별시",
    dispatchTime: "평균 40분 내 현장 도착",
    hubCenter: "서울 강남·송파·강서·영등포·노원 상시 대기조 운영",
    managerComment:
      "서울 전역 퇴근 시간·주말 방문 모두 가능합니다! 바쁘신 직장인 차주님들은 병국이 얼굴 믿고 차키만 전달해 주셔도 당일 정산과 수출말소까지 깔끔하게 끝납니다.",
    highlights: ["서울 전역 40분 내 방문", "당일 오후 신청 시 당일 말소", "비대면 탁송·당일 칼정산"],
  },
  {
    id: "incheon-gyeonggi",
    tabLabel: "인천 / 경기",
    regionValue: "경기도",
    dispatchTime: "평균 30분 내 최단시간 도착",
    hubCenter: "인천항 수출단지 직결 (수원·화성·용인·일산·부천·안산·평택)",
    managerComment:
      "수출 선적항과 가장 가까운 수도권 핵심 지역으로, 중간 유통 마진 제로(0원) 바이어 직통 단가와 당일 2시간 내 초고속 수출말소가 가능합니다.",
    highlights: ["인천항 수출단지 바이어 직통", "당일 입고 후 2시간 내 말소증", "화물·법인 대량 매입 우대"],
  },
  {
    id: "gangwon",
    tabLabel: "강원",
    regionValue: "강원특별자치도",
    dispatchTime: "춘천·원주·강릉 당일 출장",
    hubCenter: "강원 영서·영동 전담 출장 매입팀",
    managerComment:
      "강원도 산간·해안 지역 특성상 하부 세월 흔적이나 주행거리가 많은 SUV·4륜 트럭이 많습니다. 내수 딜러 감가 없이 해외 4WD 우대 조건으로 매입합니다!",
    highlights: ["4륜(4WD)·디젤 SUV 최고 대우", "하부 세월 흔적 감가 최소화", "장거리 탁송비 전액 무료"],
  },
  {
    id: "chungcheong",
    tabLabel: "대전 / 충청",
    regionValue: "충청남도",
    dispatchTime: "대전·세종·천안·청주 1시간 내 방문",
    hubCenter: "중부권(대전·천안·아산·청주·충주·서산) 직영 출장망",
    managerComment:
      "충청권 산업단지 출퇴근 차량 및 농가·영업용 포터2·봉고3 화물차 최다 매입 지역입니다. 얼굴 믿고 편하게 맡겨주시면 당일 투명하게 정산합니다.",
    highlights: ["포터2·봉고3 농가/영업용 우대", "대전·천안·청주 1시간 내 도착", "현장 트집 감가 ZERO 보증"],
  },
  {
    id: "gyeongbuk",
    tabLabel: "대구 / 경북",
    regionValue: "대구광역시",
    dispatchTime: "대구·구미·포항·경산 당일 방문",
    hubCenter: "영남 북부권(대구·구미·포항·경주·안동) 전담 매입팀",
    managerComment:
      "대구·경북 차주님들, 사진 4장만 문자로 보내주셔도 출발 전 확정가를 먼저 말씀드리고, 차를 먼저 보내주셔도 현장 감가 0원으로 기분 좋게 정산합니다!",
    highlights: ["출발 전 사진 확정가 보증", "현장 트집·감가 0원 원칙", "익일 오전까지 말소증 발급"],
  },
  {
    id: "jeolla",
    tabLabel: "광주 / 전라",
    regionValue: "광주광역시",
    dispatchTime: "광주·전주·익산·순천·여수 당일 방문",
    hubCenter: "호남권(광주·전북·전남 전역) 직영 방문팀",
    managerComment:
      "호남권 전 지역 무료 출장! 주행거리 30만~50만km 넘은 디젤 SUV·화물트럭·세단 모두 폐차 보내기 전 꼭 병국이 바이어 직통 조건부터 확인하세요.",
    highlights: ["호남권 무료 방문·무료 탁송", "고주행(30만km+) 무감가 매입", "비대면 서류 간소화 진행"],
  },
  {
    id: "gyeongnam-jeju",
    tabLabel: "부산 / 경남 · 제주",
    regionValue: "부산광역시",
    dispatchTime: "부산·울산·창원·김해·제주 당일 진행",
    hubCenter: "부산·경남 항만 연계팀 및 제주 탁송 매입팀",
    managerComment:
      "부산·울산·경남은 물론 제주도 차량까지 비대면 무료 탁송 및 현장 출장으로 전국 동일하게 해외 바이어 직거래 최고 대우를 보장해 드립니다.",
    highlights: ["부산·울산·창원 당일 출장", "수입차·대형 상용차 전문", "얼굴 믿고 맡기는 안심 당일정산"],
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
    titleHtml: '"폐차밖에 안 된다"는 딜러 말 믿지 마세요! 그 차 사서 내일 수출로 되팔아먹습니다',
    highlightText: "다른 곳 3군데 다 알아보고 맨 마지막에 오세요! 무조건 그 위를 쳐드립니다!",
    subtitle: "딜러 호주머니로 들어갈 수출 뒷마진, 얼굴·실명 다 까고 일하는 병국이가 사장님 통장에 100% 그대로 꽂아드립니다.",
  },
  {
    id: "visual-2",
    imageUrl: "/images/kpro/visual_2.jpg",
    titleHtml: "현장 와서 10원이라도 깎으면 차 안 파셔도 됩니다! 제 유튜브 댓글에 실명 박제하세요!",
    highlightText: "손님 10명 중 6명은 병국이 얼굴 하나 믿고 돈 받기 전에 차키만 넣어 탁송부터 보내십니다!",
    subtitle: "유튜브·인스타·틱톡에 얼굴 걸고 장사하는 놈은 도망갈 구멍이 없습니다. 차부터 보내셔도 도착 즉시 칼같이 쏴드립니다.",
  },
  {
    id: "visual-3",
    imageUrl: "/images/kpro/visual_3.jpg",
    titleHtml: "비바람 막아주며 20만·40만km 달린 정든 내 차, 고철값에 뺏기면 잠이 오십니까?",
    highlightText: "국내 딜러가 욕하는 킬로수·사고이력, 해외 바이어는 현찰 싸들고 줄 서서 사갑니다!",
    subtitle: "선루프·스마트키·수동미션·4륜구동 숨은 웃돈까지 싹 다 긁어모아 자존심 걸고 최고가로 보내드립니다.",
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
    id: "kpro-1",
    carName: "기아 올 뉴 K7",
    year: "2016년식",
    domesticPrice: "킬로수·사고 트집 후려치기 (뒤에서 수출로 빼돌림)",
    exportPrice: "딜러 뒷마진 전액 회수 + 파노라마·스마트키 바이어 웃돈 직통!",
    diffMan: 310,
    diffNumber: "딜러 뒷마진 100% 회수 + 타사 견적 격파!",
    imageUrl: "/images/vehicles/kia-k5-pearl.jpg?v=navyplate1",
  },
  {
    id: "kpro-2",
    carName: "현대 아반떼 HD",
    year: "2009년식",
    domesticPrice: "연식 오래됐다며 옵션값 0원 고철가 유인",
    exportPrice: "리비아·요르단 현역 1순위! 고철값 대신 바이어 현찰 웃돈 직격!",
    diffMan: 260,
    diffNumber: "폐차장 고철값 탈출 · 바이어 웃돈 폭발!",
    imageUrl: "/images/kpro/car_6.jpg?v=navyplate1",
  },
  {
    id: "kpro-3",
    carName: "기아 K5 (1세대)",
    year: "2012년식",
    domesticPrice: "20만km 넘었다고 반값 칼질 + 알선 수수료 차감",
    exportPrice: "중동 바이어 지명 1위! 파노라마 선루프 특급 웃돈 100% 직행!",
    diffMan: 280,
    diffNumber: "중간 딜러 수수료 0원 · 타사 최고가 격파!",
    imageUrl: "/images/vehicles/kia-k5-tf.jpg?v=navyplate1",
  },
  {
    id: "kpro-4",
    carName: "현대 YF 쏘나타",
    year: "2011년식",
    domesticPrice: "외판 스크래치·단순교환 핑계로 현장 억지 감가",
    exportPrice: "흠집·사고 감가 단 10원도 ZERO! 중동·중앙아시아 최고가 직행!",
    diffMan: 240,
    diffNumber: "현장 감가 10원도 없음 · 유튜브 실명 보증!",
    imageUrl: "/images/kpro/car_7.jpg?v=navyplate1",
  },
  {
    id: "kpro-5",
    carName: "현대 투싼 ix",
    year: "2012년식",
    domesticPrice: "노후 경유차라며 몇 달 걸리는 조기폐차만 강요",
    exportPrice: "기다림 ZERO! 디젤 SUV 바이어 경쟁 입찰로 당일 현찰 꽂아드림!",
    diffMan: 320,
    diffNumber: "조기폐차 기다림 끝 · 당일 현찰 최고가!",
    imageUrl: "/images/kpro/car_8.jpg?v=navyplate1",
  },
  {
    id: "kpro-6",
    carName: "기아 스포티지 R",
    year: "2013년식",
    domesticPrice: "주행거리·외관 트집 잡아 헐값 매입 후 수출로 되팔기",
    exportPrice: "딜러 배 안 불리고 수출단지 바이어에게 다이렉트 최고가 직행!",
    diffMan: 350,
    diffNumber: "남 좋은 일 끝! 수출단지 바이어 직통!",
    imageUrl: "/images/vehicles/sportage-r.jpg?v=navyplate1",
  },
  {
    id: "kpro-7",
    carName: "현대 그랜저 HG",
    year: "2013년식",
    domesticPrice: "30만km 대형 세단이라며 폐차 고철 무게로만 후려치기",
    exportPrice: "중동 부유층 VIP 세단 대우! 배기량·선루프 웃돈 끝까지 챙겨드림!",
    diffMan: 300,
    diffNumber: "고철 취급 역전 · 중동 VIP 프리미엄!",
    imageUrl: "/images/kpro/car_9.jpg?v=navyplate1",
  },
  {
    id: "kpro-8",
    carName: "기아 더 뉴 K7",
    year: "2014년식",
    domesticPrice: "보험 사고이력 핑계로 매매상사에서 수백만 원 칼질",
    exportPrice: "보험이력 조회 안 하는 해외 바이어 직매칭으로 감가분 전액 구제!",
    diffMan: 320,
    diffNumber: "보험이력 감가 0원 · 깎인 돈 전액 구제!",
    imageUrl: "/images/vehicles/kia-k5-white.jpg?v=navyplate1",
  },
  {
    id: "kpro-9",
    carName: "현대 LF 쏘나타",
    year: "2016년식",
    domesticPrice: "장거리 영업·렌트 이력이라며 내수 매입 기피·후려치기",
    exportPrice: "용도이력 신경 안 쓰는 바이어 직통! 일반 자가용 특A급 단가 보장!",
    diffMan: 310,
    diffNumber: "렌트·영업이력 감가 ZERO · 최고가 직격!",
    imageUrl: "/images/kpro/car_10.jpg?v=navyplate1",
  },
  {
    id: "kpro-10",
    carName: "기아 뉴 쏘렌토 R",
    year: "2014년식",
    domesticPrice: "다자녀 험하게 탄 차라며 실내·외관 감가 폭탄",
    exportPrice: "키르기스스탄 1순위 [7인승+4륜+선루프] 웃돈 폭격! 감가 0원!",
    diffMan: 380,
    diffNumber: "7인승·4륜 웃돈 폭격 · 타사 견적 격파!",
    imageUrl: "/images/kpro/car_11.jpg?v=navyplate1",
  },
  {
    id: "kpro-11",
    carName: "현대 제네시스 DH",
    year: "2015년식",
    domesticPrice: "고배기량·수리비 핑계로 딜러 매입가 대폭 삭감",
    exportPrice: "3.3/3.8 엔진·AWD 프리미엄 그대로 인정! 바이어 직통 최고 대우!",
    diffMan: 460,
    diffNumber: "대형 세단 감가 구제 · 바이어 직통 웃돈!",
    imageUrl: "/images/kpro/car_12.jpg?v=navyplate1",
  },
  {
    id: "kpro-12",
    carName: "현대 싼타페 DM",
    year: "2014년식",
    domesticPrice: "킬로수 많은 노후 디젤이라며 조기폐차·헐값 유도",
    exportPrice: "중앙아시아 패밀리카 1위! 얼굴 믿고 차부터 보내도 당일 칼정산!",
    diffMan: 380,
    diffNumber: "60% 얼굴 믿고 선탁송 · 당일 칼정산!",
    imageUrl: "/images/vehicles/santafe-dm.jpg?v=navyplate1",
  },
  {
    id: "kpro-13",
    carName: "기아 올 뉴 카니발",
    year: "2016년식",
    domesticPrice: "장거리 운행·슬라이딩 도어 스크래치 트집 감가",
    exportPrice: "9인승·11인승 해외 대가족 바이어 직통! 외판 흠집 감가 단 10원도 없음!",
    diffMan: 410,
    diffNumber: "외판 흠집 무감가 · 바이어 직통 최고가!",
    imageUrl: "/images/kpro/car_13.jpg?v=navyplate1",
  },
  {
    id: "kpro-14",
    carName: "현대 벨로스터",
    year: "2013년식",
    domesticPrice: "비주류 매니아 차종이라며 내수 매매상 매입 거절·후려치기",
    exportPrice: "중동·중남미 젊은 층 인기 폭발! 유채색·선루프 특별 웃돈 지급!",
    diffMan: 290,
    diffNumber: "내수 비인기 설움 끝 · 해외 특별 웃돈!",
    imageUrl: "/images/kpro/car_14.jpg?v=navyplate1",
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
    title: "내 차종·연식 알려주시고 3대 경로(폐차·내수·수출) 비교 신청",
    desc: "복잡한 서류 없이 전화 또는 간편 폼으로 10초 만에 신청합니다.",
    iconUrl: "/images/kpro/step1.png",
  },
  {
    stepNumber: "02",
    title: "해외 바이어 웃돈 포인트(선루프·스마트키·수동·4륜) 정밀 판독",
    desc: "중간 알선 브로커 수수료를 뺀 오늘 바이어 직통 실매입가를 산출합니다.",
    iconUrl: "/images/kpro/step2.png",
  },
  {
    stepNumber: "03",
    title: "타 업체 견적 비교 및 현장 감가 0원 확정가 보증",
    desc: "타 업체 미끼 견적 여부를 판독해 드리고 출발 전 확정가를 보증합니다.",
    iconUrl: "/images/kpro/step3.png",
  },
  {
    stepNumber: "04",
    title: "얼굴 믿고 편하게 차량을 보내주시면 당일 투명하게 칼정산",
    desc: "고객 60% 이상이 병국이 얼굴만 믿고 무료 탁송으로 차부터 보내주실 만큼 단 1원 감가 없이 정산합니다.",
    iconUrl: "/images/kpro/step4.png",
  },
  {
    stepNumber: "05",
    title: "차량을 보낸 후 당일~24시간 안에 공식 수출말소증 발송",
    desc: "무료 탁송 인수와 동시에 신속히 수출말소 처리 후 보험·세금 환급을 돕습니다.",
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
    title: "중간 브로커 수수료 0원 · 바이어 직통 구조",
    subtitle:
      "일반 딜러 거래처럼 중간에서 알선상·브로커가 두세 번 떼먹지 않습니다. 인천 수출단지 바이어 직통 연결로 중간 마진을 차주님 통장에 그대로 얹어드립니다.",
    iconUrl: "/images/kpro/differ_ico1.png",
  },
  {
    id: "diff-2",
    title: "광고비 수천만 원 대신 유튜브 얼굴 실명 보증",
    subtitle:
      "포털 상단 광고비로 매달 수천만 원 쓰는 업체는 결국 차주님 차값을 깎아 메꿉니다. 병국이는 유튜브·인스타·틱톡을 직접 운영해 아낀 광고비를 차값에 보태드립니다.",
    iconUrl: "/images/kpro/differ_ico2.png",
  },
  {
    id: "diff-3",
    title: "고객 60%가 얼굴 믿고 차부터 보내는 안심 거래",
    subtitle:
      "실제 차주님 10분 중 6분 이상이 영상 속 병국이 얼굴만 믿고 무료 탁송으로 차부터 편하게 보내주십니다. 만약 약속과 달리 억지 감가를 하면 제 유튜브 댓글에 박제하셔도 좋습니다.",
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
    averageBonusVsScrap: "폐차장 고철값 처분 대신 현역 수출차 가치 + 옵션 웃돈 전액 인정",
    keyBuyerPoints: [
      "연식 제한이 없어 10년~20년 이상 정들었던 노후 국산차도 현역으로 전량 매입",
      "외판 스크래치나 단순교환보다 오랜 세월 길들여진 엔진·미션 상태를 최우선 평가",
      "폐차장에서 고철 무게만 달던 차량이 가장 극적으로 가격 역전되는 핵심 국가",
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
    averageBonusVsScrap: "내수 딜러 고주행·사고 감가분 완벽 만회 + 선루프·4WD 특별 웃돈",
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
    averageBonusVsScrap: "보험이력·과다주행으로 깎인 내수 매매가 대비 확실한 직수출 우위",
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
    averageBonusVsScrap: "수개월 걸리는 조기폐차보다 높은 당일 현금 실익 + 도색·랩핑 무감가",
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
    category: "1. ‘내수 500만 vs 수출 800만’ 허위 미끼 광고 vs 3대 경로 정직 판독",
    badBrokerPractice:
      "인터넷에 말도 안 되는 허위 시세표를 박아놓고 차주를 유인한 뒤, 막상 차를 보면 사고·흠집·키로수를 핑계로 수백만 원을 후려침",
    byunggukGuarantee:
      "지키지도 못할 가짜 숫자로 낚지 않습니다. [폐차 vs 국내매매 vs 해외바이어 직수출] 중 어디가 진짜 이득인지 팩트로 비교해 드리고 처음 약속한 금액을 끝까지 지킵니다.",
  },
  {
    category: "2. 3단계 알선 브로커 수수료 뜯김 vs 병국이 바이어 직통",
    badBrokerPractice:
      "직영 수출업체인 척 광고하지만 실제로는 알선 딜러여서 중간 브로커 마진을 두세 번 떼어먹고 차주에게는 헐값만 남김",
    byunggukGuarantee:
      "인천 수출단지에서 해외 바이어와 직접 거래하는 병국이가 중간 알선 수수료 거품을 완전히 없애고, 그 차액을 차주님 통장에 그대로 얹어드립니다.",
  },
  {
    category: "3. 고객 60% 이상이 얼굴 믿고 차부터 보내는 투명한 정산·말소",
    badBrokerPractice:
      "익명 브로커에게 차를 보냈다가 황당한 트집 감가를 당하거나 말소 처리가 늦어질까 봐 차주님이 끝까지 불안해함",
    byunggukGuarantee:
      "실제 차주님 10분 중 6분 이상이 유튜브·인스타·틱톡 속 병국이 얼굴만 믿고 무료 탁송으로 차부터 편하게 보내주십니다. 단 1원의 억지 감가 없는 당일 정산과 24시간 내 수출말소증을 보장합니다.",
  },
  {
    category: "4. 타 업체 견적 비교 환영 & 불발 시 비용 완전 0원",
    badBrokerPractice:
      "다른 곳과 비교하지 못하게 재촉하거나, 현장에서 감가를 거부하면 왕복 탁송비·출장비 명목으로 10~20만 원을 요구함",
    byunggukGuarantee:
      "다른 업체 3곳에 먼저 물어보시고 마지막에 연락하셔도 좋습니다! 진성 견적이면 자존심 걸고 더 챙겨드리며, 거래하지 않으셔도 출장비·위약금은 단 1원도 없습니다.",
  },
];
