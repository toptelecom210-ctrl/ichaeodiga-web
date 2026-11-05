export interface ReviewItem {
  id: string;
  starType?: "seven" | "five" | "fourNine";
  starBadge?: string;
  starQuote?: string;
  customerName: string;
  region: string;
  carModel: string;
  yearAndMileage: string;
  previousOffer: string;
  finalExportPrice: string;
  extraGain: string;
  rating: number;
  title: string;
  content: string;
  tags: string[];
  date: string;
  imageUrl?: string;
  exportCountry?: string;
}

interface SeedSpec {
  carModel: string;
  year: string;
  km: number;
  prevType: "폐차장" | "조기폐차" | "내수매매" | "딜러감가";
  prevMan: number;
  exportMan: number;
  imageUrl: string;
  country: string;
  tag1: string;
  tag2: string;
  sorrowStory: string;
  rebirthStory: string;
  heartBadge: string;
  highlight: string;
}

const REVIEW_SEEDS: SeedSpec[] = [
  {
    carModel: "현대 아반떼 MD 1.6 럭셔리",
    year: "2012년식",
    km: 265000,
    prevType: "폐차장",
    prevMan: 75,
    exportMan: 365,
    imageUrl: "/images/kpro/car_6.jpg?v=navyplate1",
    country: "리비아",
    tag1: "아반떼MD직수출",
    tag2: "선루프웃돈100%",
    sorrowStory: "폐차장·내수: 26만km 넘었다고 엔진·선루프 옵션값 0원 처리 (고철가 제시)",
    rebirthStory: "병국이 직통: 중간 브로커 수수료 0원 + 리비아 바이어 [선루프·스마트키] 웃돈 직행",
    heartBadge: "고철값 대신 바이어 웃돈 직행",
    highlight: "폐차장에선 고철 무게만 달던 첫차 아반떼, 선루프·스마트키 웃돈까지 다 챙겨 받았습니다",
  },
  {
    carModel: "현대 포터2 초장축 더블캡 수동",
    year: "2014년식",
    km: 342000,
    prevType: "조기폐차",
    prevMan: 165,
    exportMan: 495,
    imageUrl: "/images/vehicles/porter2-doublecab.jpg?v=navyplate1",
    country: "요르단 · 시리아",
    tag1: "포터2수동우대",
    tag2: "조기폐차역전",
    sorrowStory: "조기폐차·내수: 적재함 녹슬고 34만km 탔다며 몇 달 걸리는 조기폐차만 권유",
    rebirthStory: "병국이 직통: 적재함 흠집 감가 ZERO + 중동 바이어 1순위 [수동·더블캡] 당일 정산",
    heartBadge: "적재함 감가 0원 · 당일 칼정산",
    highlight: "새벽마다 함께 달린 34만km 포터2, 적재함 흠집 트집 하나 없이 수동미션 최고 대우 받았습니다",
  },
  {
    carModel: "기아 쏘렌토 R 2.0 디젤 TLX",
    year: "2011년식",
    km: 291000,
    prevType: "딜러감가",
    prevMan: 130,
    exportMan: 450,
    imageUrl: "/images/vehicles/santafe-dm.jpg?v=navyplate1",
    country: "키르기스스탄",
    tag1: "쏘렌토R수출1위",
    tag2: "얼굴믿고선탁송",
    sorrowStory: "내수 딜러: 뒤쪽 접촉사고 이력과 29만km 디젤이라며 반값 이하로 후려치기",
    rebirthStory: "병국이 직통: 키르기스스탄 [7인승 + 파노라마 선루프] 바이어 직매칭 무감가 인수",
    heartBadge: "유튜브 얼굴 믿고 선탁송 완료",
    highlight: "아이들 키우며 정든 쏘렌토R, 병국이님 얼굴만 믿고 먼저 탁송 보냈는데 감가 0원으로 정산받았습니다",
  },
  {
    carModel: "기아 스포티지 R 2.0 디젤 프레스티지",
    year: "2011년식",
    km: 278000,
    prevType: "폐차장",
    prevMan: 100,
    exportMan: 420,
    imageUrl: "/images/kpro/car_20.jpg?v=navyplate1",
    country: "알제리 · 리비아",
    tag1: "스포티지R직수출",
    tag2: "타사견적비교승",
    sorrowStory: "내수·타업체: 전화로는 높게 부르더니 현장에선 키로수·외판 흠집으로 말 바꾸기",
    rebirthStory: "병국이 직통: 알제리 수출 회전율 1위 SUV! 중간 알선 마진 없이 출발 전 확정가 그대로 입금",
    heartBadge: "타 업체 미끼견적 물리친 진짜 최고가",
    highlight: "다른 곳 미끼 견적에 데일 뻔했는데, 병국이님은 약속한 금액에서 단 1원도 안 깎고 주셨습니다",
  },
  {
    carModel: "현대 투싼 ix 2.0 디젤 스마트",
    year: "2010년식",
    km: 315000,
    prevType: "폐차장",
    prevMan: 95,
    exportMan: 370,
    imageUrl: "/images/kpro/car_19.jpg?v=navyplate1",
    country: "이집트 · 중남미",
    tag1: "투싼ix무감가",
    tag2: "30만km현역",
    sorrowStory: "폐차장·내수: 31만km 넘은 노후 경유차라며 차가운 고철 무게로만 산정",
    rebirthStory: "병국이 직통: 이집트·중남미 바이어가 찾는 건강한 디젤 엔진 가치 100% 인정",
    heartBadge: "31만km 엔진 가치 전액 인정",
    highlight: "31만km 넘게 내 발이 되어준 투싼ix, 계기판 숫자 대신 건강한 엔진 소리만 보고 대우해주셨네요",
  },
  {
    carModel: "기아 포르테 1.6 가솔린 Si",
    year: "2009년식",
    km: 244000,
    prevType: "폐차장",
    prevMan: 70,
    exportMan: 350,
    imageUrl: "/images/kpro/car_18.jpg?v=navyplate1",
    country: "리비아 · 요르단",
    tag1: "포르테폐차역전",
    tag2: "중동인기세단",
    sorrowStory: "폐차장: 연식이 15년 넘었다며 무조건 폐차 고철비만 받고 넘기라고 안내",
    rebirthStory: "병국이 직통: 타이밍체인 엔진 내구성을 아는 리비아·요르단 바이어 현역 세단 오더 직결",
    heartBadge: "폐차 고철값 대비 압도적 역전",
    highlight: "폐차장에 보내기엔 너무 멀쩡하고 아까웠던 포르테, 중동 수출 효자 차종이라며 귀하게 모셔가셨습니다",
  },
  {
    carModel: "쉐보레 올란도 2.0 디젤 LTZ",
    year: "2012년식",
    km: 256000,
    prevType: "내수매매",
    prevMan: 110,
    exportMan: 285,
    imageUrl: "/images/kpro/car_17.jpg?v=navyplate1",
    country: "중남미 · 이집트",
    tag1: "올란도7인승우대",
    tag2: "쉐보레감가탈출",
    sorrowStory: "국내 매매상사: 국내에서 비인기인 쉐보레 디젤 차량이라며 매입 거부 및 헐값 제시",
    rebirthStory: "병국이 직통: 글로벌 쉐보레 브랜드 파워로 중남미·이집트 7인승 패밀리카 직수출",
    heartBadge: "국내 비인기 브랜드 설움 완전 역전",
    highlight: "삼남매 태우던 튼튼한 올란도, 국내 딜러들의 브랜드 편견 감가 없이 해외 바이어에게 제값 받았습니다",
  },
  {
    carModel: "벤츠 E220d 아방가르드 (W213/W212)",
    year: "2016년식",
    km: 248000,
    prevType: "딜러감가",
    prevMan: 1450,
    exportMan: 1960,
    imageUrl: "/images/kpro/car_16.jpg?v=navyplate1",
    country: "조지아 · 두바이",
    tag1: "벤츠E클래스직수출",
    tag2: "수리비감가ZERO",
    sorrowStory: "국내 수입차 딜러: 주행거리 많고 보험이력·경고등 있다며 수백만 원 수리비 감가 요구",
    rebirthStory: "병국이 직통: 조지아·두바이 명차 전문 바이어 직통으로 수리비 감가 0원 당일 인수",
    heartBadge: "경고등·보험이력 감가 0원 보장",
    highlight: "내 인생 첫 벤츠를 트집 잡는 국내 딜러에게 넘기기 싫었는데, 명차 대접 제대로 받으며 보냈습니다",
  },
  {
    carModel: "아우디 A6 35 TDI 콰트로",
    year: "2015년식",
    km: 232000,
    prevType: "딜러감가",
    prevMan: 980,
    exportMan: 1530,
    imageUrl: "/images/kpro/car_15.jpg?v=navyplate1",
    country: "키르기스스탄 · 조지아",
    tag1: "아우디콰트로우대",
    tag2: "얼굴믿고선탁송",
    sorrowStory: "국내 매매단지: 수입 디젤 감가에 센서 경고등까지 겹쳐 내수 판매가 막막했던 상황",
    rebirthStory: "병국이 직통: 눈 많은 중앙아시아 바이어가 가장 선호하는 아우디 콰트로(4WD) 최고 대우",
    heartBadge: "고객 60%처럼 얼굴 믿고 선탁송",
    highlight: "바빠서 병국이님 유튜브 얼굴만 믿고 탁송으로 차부터 보냈는데, 단 1원 감가 없이 정산해주셨습니다",
  },
  {
    carModel: "현대 올 뉴 투싼 2.0 디젤 모던",
    year: "2017년식",
    km: 229000,
    prevType: "내수매매",
    prevMan: 420,
    exportMan: 830,
    imageUrl: "/images/kpro/car_14.jpg?v=navyplate1",
    country: "요르단 · 알제리",
    tag1: "올뉴투싼수출",
    tag2: "단순교환무감가",
    sorrowStory: "내수 딜러: 단순교환 이력과 22만km 주행거리를 핑계로 시세보다 큰 폭 감가",
    rebirthStory: "병국이 직통: 요르단 바이어가 가장 선호하는 순백색(화이트) SUV 1순위 프리미엄 적용",
    heartBadge: "단순교환 감가 0원 + 화이트 우대",
    highlight: "단순교환 하나로 사고차 취급받던 우리 부부 첫 SUV, 요르단 직통 오더로 속 시원하게 역전했습니다",
  },
  {
    carModel: "르노삼성 QM6 2.0 dCi RE",
    year: "2016년식",
    km: 214000,
    prevType: "내수매매",
    prevMan: 680,
    exportMan: 980,
    imageUrl: "/images/kpro/car_13.jpg?v=navyplate1",
    country: "유럽 · 중동",
    tag1: "QM6콜레오스수출",
    tag2: "중간수수료0원",
    sorrowStory: "국내 매매상사: 현대·기아 SUV가 아니라는 이유로 비인기 감가를 크게 적용",
    rebirthStory: "병국이 직통: 유럽·중동에서 ‘르노 콜레오스’로 인지도 높은 QM6 전용 바이어 직매칭",
    heartBadge: "중간 알선 수수료 0원 직거래",
    highlight: "사진 4장 보내드리고 안내받은 금액 그대로, 중간 브로커 수수료 없이 깔끔하게 정산받았습니다",
  },
  {
    carModel: "쉐보레 더 넥스트 스파크 LT",
    year: "2017년식",
    km: 198000,
    prevType: "폐차장",
    prevMan: 180,
    exportMan: 390,
    imageUrl: "/images/kpro/car_12.jpg?v=navyplate1",
    country: "가나 · 이집트",
    tag1: "스파크수출우대",
    tag2: "경차고철값탈출",
    sorrowStory: "폐차장·내수: 20만km 다 된 경차라며 고철값 수준으로만 평가",
    rebirthStory: "병국이 직통: 가나·이집트 도심에서 가장 사랑받는 튼튼한 해치백으로 현역 수출",
    heartBadge: "경차 폐차 대신 현역 수출 대우",
    highlight: "아이 등하원 책임지던 스파크, 고철로 부수지 않고 해외 바이어 최고 대우로 기분 좋게 보냈습니다",
  },
  {
    carModel: "현대 올 뉴 아반떼 CN7 1.6 가솔린",
    year: "2021년식",
    km: 185000,
    prevType: "딜러감가",
    prevMan: 950,
    exportMan: 1320,
    imageUrl: "/images/kpro/car_11.jpg?v=navyplate1",
    country: "요르단 · 사우디",
    tag1: "아반떼CN7직수출",
    tag2: "유채색과다주행OK",
    sorrowStory: "국내 딜러: 단기간 장거리 영업 주행(18만km)과 유채색 컬러를 이유로 큰 폭 감가",
    rebirthStory: "병국이 직통: 사우디·요르단 최신형 한국 세단 오더로 키로수·컬러 감가 전혀 없이 매입",
    heartBadge: "장거리 주행·유채색 감가 ZERO",
    highlight: "전국 거래처 뛰며 18만km 달린 내 영업 파트너 CN7, 주행거리 트집 없이 신차급 대우로 보냈습니다",
  },
  {
    carModel: "기아 더 뉴 K9 3.8 가솔린 AWD",
    year: "2019년식",
    km: 245000,
    prevType: "딜러감가",
    prevMan: 1480,
    exportMan: 1900,
    imageUrl: "/images/kpro/car_10.jpg?v=navyplate1",
    country: "중앙아시아 · 러시아",
    tag1: "K9대형세단수출",
    tag2: "법인원스톱말소",
    sorrowStory: "국내 매매단지: 법인 임원용 고주행 대형 가솔린 세단이라 국내 감가 폭이 가장 큼",
    rebirthStory: "병국이 직통: 중앙아시아·러시아 VIP 의전용 플래그십 오더 직결 + 당일 세금계산서·말소",
    heartBadge: "대형 기함 VIP 프리미엄 직수출",
    highlight: "아버지 은퇴까지 함께한 K9, 국내 대형차 감가 설움 없이 해외 귀빈용 세단으로 당당히 보냈습니다",
  },
  {
    carModel: "현대 YF 쏘나타 2.0 가솔린 프리미어",
    year: "2010년식",
    km: 288000,
    prevType: "폐차장",
    prevMan: 80,
    exportMan: 410,
    imageUrl: "/images/kpro/car_4.jpg?v=navyplate1",
    country: "리비아 · 요르단",
    tag1: "YF쏘나타직수출",
    tag2: "외판흠집무감가",
    sorrowStory: "폐차장·내수: 세월의 외판 스크래치와 28만km 주행거리 때문에 폐차장행 권유",
    rebirthStory: "병국이 직통: 리비아·요르단 국민 중형세단 1위! 외관 흠집 감가 0원으로 현역 선적",
    heartBadge: "외판 스크래치 감가 ZERO",
    highlight: "명절마다 고향 오가던 YF쏘나타, 범퍼 흠집 하나 트집 잡지 않고 바이어 직통가로 챙겨주셨습니다",
  },
  {
    carModel: "현대 그랜저 HG 240 모던",
    year: "2012년식",
    km: 304000,
    prevType: "폐차장",
    prevMan: 95,
    exportMan: 445,
    imageUrl: "/images/kpro/car_1.jpg?v=navyplate1",
    country: "키르기스스탄 · 중동",
    tag1: "그랜저HG수출",
    tag2: "30만km무감가",
    sorrowStory: "폐차장: 계기판 30만km가 넘었다는 이유만으로 멀쩡한 차를 고철값에 넘기라 함",
    rebirthStory: "병국이 직통: 키르기스스탄·중동에서 가장 선호하는 파노라마 선루프 대형 세단으로 직수출",
    heartBadge: "30만km 돌파 차량도 명차 대우",
    highlight: "30만km 넘도록 속 한 번 안 썩인 그랜저HG, 폐차장 압축기 대신 중앙아시아 도로로 멋지게 보냈습니다",
  },
  {
    carModel: "현대 아반떼 AD 1.6 GDi 밸류플러스",
    year: "2016년식",
    km: 237000,
    prevType: "내수매매",
    prevMan: 280,
    exportMan: 620,
    imageUrl: "/images/vehicles/avante-ad.jpg?v=navyplate1",
    country: "요르단 · 이집트",
    tag1: "아반떼AD수출1위",
    tag2: "유튜브실명보증",
    sorrowStory: "타 업체 미끼광고: 인터넷 허위 시세로 유인한 뒤 현장에서 감가하려는 브로커들",
    rebirthStory: "병국이 직통: 유튜브·인스타·틱톡 얼굴 실명 보증! 중간 마진 없이 처음 약속한 금액 100% 정산",
    heartBadge: "광고비 거품 뺀 바이어 직통가",
    highlight: "유튜브 이차어디가 방송에서 보던 병국이님 그대로, 미끼 숫자 없이 정직하게 최고 대우해주셨어요",
  },
  {
    carModel: "기아 K5 2.0 가솔린 프레스티지 (1세대)",
    year: "2013년식",
    km: 262000,
    prevType: "폐차장",
    prevMan: 85,
    exportMan: 435,
    imageUrl: "/images/vehicles/kia-k5-tf.jpg?v=navyplate1",
    country: "키르기스스탄 · 요르단",
    tag1: "K5선루프우대",
    tag2: "화이트최고가",
    sorrowStory: "폐차장·내수: 구형 1세대 K5라며 파노라마 선루프와 스마트키 옵션 가치를 무시함",
    rebirthStory: "병국이 직통: 해외 바이어 로망 1위 [화이트 K5 + 파노라마 선루프] 프리미엄 전액 인정",
    heartBadge: "화이트 + 선루프 바이어 웃돈 직결",
    highlight: "아이들이 밤하늘 보며 좋아하던 선루프 옵션을 해외 바이어가 제일 귀하게 봐준다며 최고로 쳐주셨습니다",
  },
  {
    carModel: "현대 그랜드 스타렉스 12인승 왜건",
    year: "2014년식",
    km: 375000,
    prevType: "조기폐차",
    prevMan: 150,
    exportMan: 560,
    imageUrl: "/images/vehicles/grand-starex.jpg?v=navyplate1",
    country: "러시아 · 카자흐스탄",
    tag1: "스타렉스학원차",
    tag2: "도색그대로수출",
    sorrowStory: "조기폐차: 태권도장 아이들 태우던 37만km 노란 차라 조기폐차밖에 답이 없다 함",
    rebirthStory: "병국이 직통: 노란 도색 그대로 러시아·카자흐스탄 마을 통학버스로 당일 현금 매입",
    heartBadge: "학원차 도색 제거비 0원 · 당일정산",
    highlight: "37만km 달린 태권도장 스타렉스, 몇 달 걸리는 조기폐차 대신 당일 직수출로 훨씬 유리하게 정리했습니다",
  },
  {
    carModel: "기아 올 뉴 모닝 (JA) 1.0 럭셔리",
    year: "2017년식",
    km: 194000,
    prevType: "내수매매",
    prevMan: 160,
    exportMan: 450,
    imageUrl: "/images/vehicles/kia-morning-ja.jpg?v=navyplate1",
    country: "시리아 · 가나",
    tag1: "올뉴모닝직수출",
    tag2: "비대면10분정산",
    sorrowStory: "내수 딜러: 20만km 육박한 경차라며 알선 수수료 떼고 헐값에 넘기라고 권유",
    rebirthStory: "병국이 직통: 시리아·가나 바이어 스마트키·밝은 색상 우대 오더로 인감 없이 10분 만에 정산",
    heartBadge: "인감 불필요 · 비대면 당일 말소",
    highlight: "우리 가족 첫 복덩이였던 모닝, 병국이님 얼굴 믿고 편하게 보내드렸는데 끝까지 완벽히 챙겨주셨어요",
  },
];

const CUSTOMER_SURNAMES = [
  "김*현", "박*성", "이*정", "최*우", "정*훈", "강*석", "조*민", "윤*희", "장*호", "임*규",
  "한*수", "오*진", "서*석", "신*철", "권*영", "황*준", "안*배", "송*섭", "전*환", "홍*기",
];

const KOREAN_REGIONS = [
  "경기 화성시", "서울 송파구", "인천 연수구", "충북 청주시", "대구 달서구",
  "부산 해운대구", "광주 북구", "대전 유성구", "경기 수원시", "충남 천안시",
  "경남 김해시", "전북 전주시", "강원 원주시", "경북 구미시", "울산 남구",
  "경기 남양주시", "서울 강서구", "전남 순천시", "경기 평택시", "제주 제주시",
];

// Generate 100 realistic 3-route comparison & hook reviews spanning 24 months (2024-11 to 2026-11)
export const CUSTOMER_REVIEWS_100: ReviewItem[] = Array.from(
  { length: 100 },
  (_, index) => {
    const seed = REVIEW_SEEDS[index % REVIEW_SEEDS.length];
    const cycle = Math.floor(index / REVIEW_SEEDS.length); // 0..4
    const customerName =
      CUSTOMER_SURNAMES[(index + cycle * 3) % CUSTOMER_SURNAMES.length] +
      (index % 3 === 0 ? " 사장님" : " 차주님");
    const region =
      KOREAN_REGIONS[(index * 3 + cycle) % KOREAN_REGIONS.length];

    // Daily 2 purchases per day (매일 2대씩 매입 기록 자동 갱신)
    const nowKst = new Date(Date.now() + 9 * 3600 * 1000);
    const daySeed = Math.floor(nowKst.getTime() / 86400000);
    const rotatedIdx = (index + daySeed * 2) % 100;
    const activeSeed = REVIEW_SEEDS[rotatedIdx % REVIEW_SEEDS.length];
    const activeCycle = Math.floor(rotatedIdx / REVIEW_SEEDS.length);

    const daysAgo = Math.floor(index / 2); // Exactly 2 cars per day!
    const slotInDay = (index % 2) + 1; // 1호차 or 2호차
    const targetDate = new Date(nowKst.getTime() - daysAgo * 86400000);
    const yyyy = targetDate.getUTCFullYear();
    const mm = String(targetDate.getUTCMonth() + 1).padStart(2, "0");
    const dd = String(targetDate.getUTCDate()).padStart(2, "0");
    const dateStr =
      daysAgo === 0
        ? `${yyyy}-${mm}-${dd} (오늘 ${slotInDay}호차 매입완료)`
        : daysAgo === 1
          ? `${yyyy}-${mm}-${dd} (어제 ${slotInDay}호차 매입완료)`
          : `${yyyy}-${mm}-${dd} (일일 2대 · ${slotInDay}호차)`;

    const adjustedKm = activeSeed.km + activeCycle * 14000 - (rotatedIdx % 3) * 6000;

    const sevenStarQuotes = [
      "별 5개밖에 못 누르는 게 아쉽네요! 폐차장 고철값 받을 뻔한 정든 내 차 살려줘서 저는 별 7개 드립니다!",
      "유튜브 얼굴 믿고 돈 받기 전에 차부터 보냈는데 도착 1분 만에 칼입금! 별 5개 만점에 7개 드립니다!",
      "현장에서 적재함·범퍼 기스 10원도 안 깎고 처음 약속 그대로 현찰 쏴주셔서 무조건 별 7개 줍니다!",
      "다른 곳 3군데 먼저 알아보고 마지막에 전화했는데 진짜 제일 많이 쳐주시네요! 별 7개도 모자랍니다!",
      "인감도 필요 없고 집 앞에서 10분 만에 송금·말소까지 끝! 너무 고마워서 별 5개 만점에 7개 찍습니다!",
    ];

    const fiveStarQuotes = [
      "타사 견적 문자 보여드렸더니 딜러 뒷마진 빼고 그 자리에서 바로 위 금액으로 맞춰주셨습니다!",
      "출발 전 확정가 그대로 현장에서 단 10원 감가 없이 정산해 주셔서 믿음이 확 갔습니다.",
      "당일 오후에 바로 수출말소증까지 카톡으로 보내주셔서 자동차보험료 환급까지 완벽히 받았습니다!",
    ];

    const fourNineQuotes = [
      "입금이 너무 빨라서 정들었던 내 차 작별 인사할 틈도 없이 탁송 기사님이 가져가셔서 0.1점 뺐습니다ㅋㅋ 최고!",
      "진작 병국이님께 연락할 걸 다른 딜러들한테 감정 상하며 시간 낭비한 게 아까워서 0.1점 뺍니다ㅎㅎ 대만족!",
    ];

    const mod = rotatedIdx % 5;
    const starType: "seven" | "five" | "fourNine" =
      mod === 0 || mod === 1 || mod === 3 ? "seven" : mod === 4 ? "fourNine" : "five";
    const starBadge =
      starType === "seven"
        ? "⭐⭐⭐⭐⭐⭐⭐ (별 5개 만점에 7개 돌파!)"
        : starType === "fourNine"
          ? "⭐⭐⭐⭐⭐ 4.9 / 5.0 (별 5개 중 4.9개)"
          : "⭐⭐⭐⭐⭐ (별 5개 중 5.0 만점)";
    const starQuote =
      starType === "seven"
        ? sevenStarQuotes[rotatedIdx % sevenStarQuotes.length]
        : starType === "fourNine"
          ? fourNineQuotes[rotatedIdx % fourNineQuotes.length]
          : fiveStarQuotes[rotatedIdx % fiveStarQuotes.length];

    const reviewOpeners = [
      `폐차장이랑 매매상 딜러가 ${(adjustedKm / 10000).toFixed(1)}만km 넘은 ${activeSeed.carModel} 보더니 '이건 고철값밖에 안 나와요'라며 후려치길래 속으로 진짜 열받았습니다. 알고 보니 그렇게 헐값에 사서 자기들이 수출단지에 되파는 거더군요.`,
      `다른 수출업체 3군데 먼저 찔러봤는데 전화로만 높게 부르고 사진 보내니까 슬슬 말 바꾸며 깎으려 하길래, 유튜브·인스타에 얼굴 다 까고 장사하는 '이차어디가' 병국이님께 마지막으로 전화했습니다.`,
      `솔직히 반신반의하면서 타사에서 받은 최고 견적 문자를 그대로 보여드렸는데, 병국이님이 '사장님, 딜러 뒷마진 빼고 바이어 웃돈 얹어서 제가 무조건 이겨드리겠습니다!' 하고 그 자리에서 바로 위 금액을 맞춰주셨습니다.`,
      `일하느라 바빠서 만날 시간도 없었는데, 손님 10명 중 6명은 병국이님 유튜브 얼굴 하나 믿고 돈 받기 전에 차키만 넣어서 탁송부터 보낸다길래 저도 얼굴 믿고 그냥 차부터 먼저 보냈습니다.`,
      `국내 딜러들은 킬로수 많고 단순교환 있다고 찬밥 취급하던 내 소중한 ${activeSeed.carModel}였는데, 병국이님은 ${activeSeed.country} 바이어가 제일 찾는 특A급 엔진이라며 숨은 옵션 웃돈까지 싹 다 찾아주셨습니다.`,
    ];

    const reviewClosers = [
      `차를 먼저 보냈는데도 기스나 사고 트집 잡으며 10원 한 장 깎는 일 없이, 단지 도착하자마자 약속한 최고가 그대로 칼같이 통장에 꽂아주셨습니다! 역시 얼굴 걸고 방송하는 분은 클라스가 다릅니다!`,
      `만약 모르고 동네 폐차장이나 딜러한테 넘겼으면 내 피 같은 돈이 고스란히 딜러 호주머니로 들어갈 뻔했습니다. 다른 데 다 알아보고 무조건 맨 마지막에 병국이님 부르세요!`,
      `인감증명서도 필요 없고 등록증·신분증 사진만 카톡으로 보냈는데 당일 수출말소증까지 바로 날아와서 보험료랑 세금 환급까지 싹 다 받았습니다. 주변 지인들 차 팔 때 무조건 병국이님만 추천합니다!`,
    ];

    return {
      id: `rev-${index + 1}`,
      customerName,
      region,
      carModel: `${activeSeed.year} ${activeSeed.carModel}`,
      yearAndMileage: `${activeSeed.year} · ${adjustedKm.toLocaleString()}km`,
      previousOffer: activeSeed.prevOfferText || `${activeSeed.prevType} 헐값 감가`,
      finalExportPrice: activeSeed.exportOfferText || `${activeSeed.country} 바이어 직통 최고가`,
      extraGain: activeSeed.extraGainText || "타사 견적 완벽 격파 · 무감가 칼정산!",
      rating: starType === "seven" ? 7 : 5,
      starType,
      starBadge,
      starQuote,
      title: `[${region}] ${activeSeed.highlight}`,
      content: `${reviewOpeners[rotatedIdx % reviewOpeners.length]} ${reviewClosers[rotatedIdx % reviewClosers.length]}`,
      tags: [activeSeed.tag1, activeSeed.tag2, `${activeSeed.country}직수출`],
      date: dateStr,
      imageUrl: activeSeed.imageUrl,
      exportCountry: activeSeed.country,
    };
  }
);
