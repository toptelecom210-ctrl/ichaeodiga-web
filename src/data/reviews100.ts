export interface ReviewItem {
  id: string;
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
    imageUrl: "/images/kpro/car_6.jpg?v=sleek5",
    country: "리비아",
    tag1: "첫차의추억",
    tag2: "리비아새출발",
    sorrowStory: "사회초년생 시절부터 12년간 함께한 첫차인데 국내에선 고철값만 부름",
    rebirthStory: "리비아 신혼부부의 자랑스러운 첫 패밀리카로 제2의 인생 출발",
    heartBadge: "첫차의 추억을 지켜준 수출",
    highlight: "스물여섯 첫 출근길부터 함께한 아반떼, 폐차장 대신 리비아 가족의 새 차로 보내주었습니다",
  },
  {
    carModel: "현대 포터2 초장축 더블캡 수동",
    year: "2014년식",
    km: 342000,
    prevType: "조기폐차",
    prevMan: 165,
    exportMan: 495,
    imageUrl: "/images/vehicles/porter2-doublecab.jpg?v=sleek5",
    country: "요르단 · 시리아",
    tag1: "아버지의땀방울",
    tag2: "수동트럭우대",
    sorrowStory: "아이들 대학까지 다 보낸 고마운 트럭인데 적재함 흠집 때문에 폐차 권유",
    rebirthStory: "중동 재건 현장을 누비는 가장 든든한 현역 일꾼으로 새 출발",
    heartBadge: "아버지의 땀방울을 인정받은 날",
    highlight: "새벽마다 함께 달린 34만km 포터2, 적재함 흠집 트집 하나 없이 최고의 일꾼으로 대접받았습니다",
  },
  {
    carModel: "기아 쏘렌토 R 2.0 디젤 TLX",
    year: "2011년식",
    km: 291000,
    prevType: "딜러감가",
    prevMan: 130,
    exportMan: 450,
    imageUrl: "/images/vehicles/santafe-dm.jpg?v=sleek5",
    country: "키르기스스탄",
    tag1: "우리가족캠핑카",
    tag2: "파노라마선루프",
    sorrowStory: "아이들 어릴 때 전국 캠핑장을 누비던 차인데 사고이력 핑계로 반값 후려치기",
    rebirthStory: "키르기스스탄 산악 마을 대가족을 태우는 든든한 7인승 보물로 탄생",
    heartBadge: "가족의 웃음이 담긴 SUV의 재탄생",
    highlight: "아이들 키우며 정들었던 쏘렌토R, 병국이님 얼굴 믿고 먼저 탁송 보냈는데 감가 0원으로 감동받았습니다",
  },
  {
    carModel: "기아 스포티지 R 2.0 디젤 프레스티지",
    year: "2011년식",
    km: 278000,
    prevType: "폐차장",
    prevMan: 100,
    exportMan: 420,
    imageUrl: "/images/kpro/car_20.jpg?v=sleek5",
    country: "알제리 · 리비아",
    tag1: "청춘의드라이브",
    tag2: "얼굴믿고탁송",
    sorrowStory: "연애 시절부터 결혼까지 함께한 차인데 27만km 넘었다고 찬밥 취급",
    rebirthStory: "알제리 바이어가 가장 아끼는 탄탄한 현역 디젤 SUV로 새 삶 시작",
    heartBadge: "청춘의 시간을 명예롭게 배웅",
    highlight: "아내와 연애할 때부터 타던 스포티지R, 고철로 부수지 않고 좋은 주인 만나게 해주셔서 눈물 났습니다",
  },
  {
    carModel: "현대 투싼 ix 2.0 디젤 스마트",
    year: "2010년식",
    km: 315000,
    prevType: "폐차장",
    prevMan: 95,
    exportMan: 370,
    imageUrl: "/images/kpro/car_19.jpg?v=sleek5",
    country: "이집트 · 중남미",
    tag1: "30만km무감가",
    tag2: "심장만보고매입",
    sorrowStory: "31만km 동안 단 한 번도 멈춘 적 없는데 국내에선 숫자만 보고 폐차장행",
    rebirthStory: "이집트와 중남미 도로를 달리는 가장 튼튼한 한국산 SUV로 활약",
    heartBadge: "31만km 정직한 엔진의 승리",
    highlight: "31만km 넘게 내 발이 되어준 투싼ix, 엔진 소리만 듣고 아껴 탄 정성을 그대로 알아주셨네요",
  },
  {
    carModel: "기아 포르테 1.6 가솔린 Si",
    year: "2009년식",
    km: 244000,
    prevType: "폐차장",
    prevMan: 70,
    exportMan: 350,
    imageUrl: "/images/kpro/car_18.jpg?v=sleek5",
    country: "리비아 · 요르단",
    tag1: "15년정든애마",
    tag2: "폐차대신수출",
    sorrowStory: "15년 넘게 잔고장 없이 출퇴근을 지켜준 차인데 연식 때문에 폐차만 권유받음",
    rebirthStory: "중동 젊은이들이 가장 좋아하는 짱짱한 한국 세단으로 새 출발",
    heartBadge: "15년 세월의 정성을 인정받음",
    highlight: "폐차장에 보내기엔 너무 멀쩡하고 미안했던 포르테, 바다 건너 현역으로 달린다니 마음이 놓입니다",
  },
  {
    carModel: "쉐보레 올란도 2.0 디젤 LTZ",
    year: "2012년식",
    km: 256000,
    prevType: "내수매매",
    prevMan: 110,
    exportMan: 285,
    imageUrl: "/images/kpro/car_17.jpg?v=sleek5",
    country: "중남미 · 이집트",
    tag1: "다둥이아빠차",
    tag2: "7인승패밀리카",
    sorrowStory: "삼남매 태우고 어디든 든든히 다니던 차인데 국내에선 쉐보레 디젤이라며 외면",
    rebirthStory: "중남미 대가족의 나들이를 책임지는 가장 안전한 7인승 패밀리카로 귀환",
    heartBadge: "삼남매의 추억을 실은 새 출발",
    highlight: "우리 삼남매 키워낸 튼튼한 올란도, 국내 감가 설움 씻고 중남미 가족 품으로 멋지게 보냈습니다",
  },
  {
    carModel: "벤츠 E220d 아방가르드 (W213/W212)",
    year: "2016년식",
    km: 248000,
    prevType: "딜러감가",
    prevMan: 1450,
    exportMan: 1960,
    imageUrl: "/images/kpro/car_16.jpg?v=sleek5",
    country: "조지아 · 두바이",
    tag1: "성공의삼각별",
    tag2: "명차의품격유지",
    sorrowStory: "열심히 일해 처음으로 장만했던 드림카인데 키로수와 보험이력으로 헐값 취급",
    rebirthStory: "조지아와 두바이에서 여전히 선망받는 프리미엄 명차로 당당히 새 출발",
    heartBadge: "삼각별의 자부심을 끝까지 지킴",
    highlight: "내 인생 첫 벤츠를 트집 잡는 딜러에게 넘기기 싫었는데, 명차 대접 제대로 받으며 보냈습니다",
  },
  {
    carModel: "아우디 A6 35 TDI 콰트로",
    year: "2015년식",
    km: 232000,
    prevType: "딜러감가",
    prevMan: 980,
    exportMan: 1530,
    imageUrl: "/images/kpro/car_15.jpg?v=sleek5",
    country: "키르기스스탄 · 조지아",
    tag1: "눈길지켜준콰트로",
    tag2: "얼굴믿고선탁송",
    sorrowStory: "겨울 눈길마다 가족을 안전하게 지켜준 차인데 미세 경고등 하나로 내수 판매 막막",
    rebirthStory: "눈 많은 중앙아시아에서 최고의 4륜구동 명차로 귀하게 모셔감",
    heartBadge: "유튜브 얼굴 믿고 차부터 보낸 거래",
    highlight: "바빠서 병국이님 유튜브 얼굴만 믿고 탁송으로 차부터 보냈는데, 단 1원 감가 없이 정산해주셨습니다",
  },
  {
    carModel: "현대 올 뉴 투싼 2.0 디젤 모던",
    year: "2017년식",
    km: 229000,
    prevType: "내수매매",
    prevMan: 420,
    exportMan: 830,
    imageUrl: "/images/kpro/car_14.jpg?v=sleek5",
    country: "요르단 · 알제리",
    tag1: "신혼부부첫SUV",
    tag2: "흰색차량우대",
    sorrowStory: "신혼여행 다녀온 날부터 아껴 탄 흰색 투싼인데 단순교환 이력으로 감가 폭탄",
    rebirthStory: "요르단 바이어가 가장 선호하는 순백색 패밀리 SUV 1순위로 낙점",
    heartBadge: "신혼의 단꿈을 이어가는 수출",
    highlight: "단순교환 하나로 사고차 취급받던 우리 부부 첫 SUV, 요르단에서 최고 대우를 받아 속이 다 시원합니다",
  },
  {
    carModel: "르노삼성 QM6 2.0 dCi RE",
    year: "2016년식",
    km: 214000,
    prevType: "내수매매",
    prevMan: 680,
    exportMan: 980,
    imageUrl: "/images/kpro/car_13.jpg?v=sleek5",
    country: "유럽 · 중동",
    tag1: "정숙한패밀리카",
    tag2: "비대면믿음거래",
    sorrowStory: "잔고장 없이 조용하고 튼튼하게 잘 탔는데 국내에선 비인기 차종이라며 저평가",
    rebirthStory: "유럽·중동에서 르노 콜레오스(QM6)의 진가를 아는 새 주인에게 인계",
    heartBadge: "내 차의 진가를 알아준 해외 바이어",
    highlight: "국내 딜러들의 편견 때문에 속상했는데, 내 차의 가치를 진짜로 알아주는 곳으로 보내 뿌듯합니다",
  },
  {
    carModel: "쉐보레 더 넥스트 스파크 LT",
    year: "2017년식",
    km: 198000,
    prevType: "폐차장",
    prevMan: 180,
    exportMan: 390,
    imageUrl: "/images/kpro/car_12.jpg?v=sleek5",
    country: "가나 · 이집트",
    tag1: "아이등하원단짝",
    tag2: "작지만강한차",
    sorrowStory: "비 오는 날이나 눈 오는 날이나 아이 등하원을 책임진 고마운 경차인데 헐값 취급",
    rebirthStory: "이집트 도심에서 가장 사랑받는 튼튼하고 안전한 해치백으로 새 출발",
    heartBadge: "아이와 엄마의 추억을 지킨 배웅",
    highlight: "아이 초등학교 졸업할 때까지 발이 되어준 스파크, 떠나보낼 때 아이와 함께 고마웠다고 인사했습니다",
  },
  {
    carModel: "현대 올 뉴 아반떼 CN7 1.6 가솔린",
    year: "2021년식",
    km: 185000,
    prevType: "딜러감가",
    prevMan: 950,
    exportMan: 1320,
    imageUrl: "/images/kpro/car_11.jpg?v=sleek5",
    country: "요르단 · 사우디",
    tag1: "열정적인영업파트너",
    tag2: "장거리주행무감가",
    sorrowStory: "전국 거래처를 발로 뛰며 3년 만에 18만km를 달린 내 영업 동반자인데 과다주행 감가",
    rebirthStory: "사우디·요르단에서 최신형 한국 세단으로 가장 귀한 대접을 받으며 출고",
    heartBadge: "치열했던 3년의 땀방울을 보상받음",
    highlight: "고속도로 위에서 내 청춘과 함께 달린 CN7, 주행거리 트집 없이 신차급 대우로 보내주셨습니다",
  },
  {
    carModel: "기아 더 뉴 K9 3.8 가솔린 AWD",
    year: "2019년식",
    km: 245000,
    prevType: "딜러감가",
    prevMan: 1480,
    exportMan: 1900,
    imageUrl: "/images/kpro/car_10.jpg?v=sleek5",
    country: "중앙아시아 · 러시아",
    tag1: "아버지의은퇴차량",
    tag2: "기함의품격",
    sorrowStory: "평생 일하신 아버지의 마지막 출퇴근길을 모신 대형 세단인데 감가가 너무 심함",
    rebirthStory: "중앙아시아에서 귀빈을 모시는 최고급 플래그십 의전 세단으로 재탄생",
    heartBadge: "아버지의 명예로운 은퇴와 함께한 차",
    highlight: "아버지 정년퇴직까지 함께한 K9, 고철이나 헐값 매매가 아닌 귀빈용 세단으로 보내드려 효도한 기분입니다",
  },
  {
    carModel: "현대 YF 쏘나타 2.0 가솔린 프리미어",
    year: "2010년식",
    km: 288000,
    prevType: "폐차장",
    prevMan: 80,
    exportMan: 410,
    imageUrl: "/images/kpro/car_4.jpg?v=sleek5",
    country: "리비아 · 요르단",
    tag1: "명절귀성길동반자",
    tag2: "외관흠집무감가",
    sorrowStory: "명절마다 고향 부모님 댁 오가며 정들었는데 세월의 잔흠집 때문에 폐차장행 위기",
    rebirthStory: "중동과 리비아에서 가장 신뢰받는 대한민국 대표 중형 세단으로 부활",
    heartBadge: "고향길의 따뜻한 추억을 간직한 차",
    highlight: "세월의 흔적이 묻은 YF쏘나타, 흠집 하나 트집 잡지 않고 아껴 탄 마음까지 헤아려주셔서 감사합니다",
  },
  {
    carModel: "현대 그랜저 HG 240 모던",
    year: "2012년식",
    km: 304000,
    prevType: "폐차장",
    prevMan: 95,
    exportMan: 445,
    imageUrl: "/images/kpro/car_1.jpg?v=sleek5",
    country: "키르기스스탄 · 중동",
    tag1: "가장의자부심",
    tag2: "30만km현역",
    sorrowStory: "30만km를 넘기도록 한 번도 속 썩이지 않은 내 자부심인데 국내에선 수명 다한 차 취급",
    rebirthStory: "키르기스스탄에서 성공한 가장들이 가장 타고 싶어 하는 명품 세단으로 새 출발",
    heartBadge: "30만km를 달린 심장의 새로운 여정",
    highlight: "계기판 30만km 찍던 날 쓰다듬어줬던 그랜저HG, 폐차장 압축기 대신 해외 도로를 달린다니 뭉클합니다",
  },
  {
    carModel: "현대 아반떼 AD 1.6 GDi 밸류플러스",
    year: "2016년식",
    km: 237000,
    prevType: "내수매매",
    prevMan: 280,
    exportMan: 620,
    imageUrl: "/images/vehicles/avante-ad.jpg?v=sleek5",
    country: "요르단 · 이집트",
    tag1: "출퇴근든든한발",
    tag2: "얼굴실명보증",
    sorrowStory: "매일 왕복 100km 출퇴근길을 버텨준 고마운 친구인데 내수 딜러들은 키로수만 탓함",
    rebirthStory: "요르단과 이집트에서 가장 인기 있는 수출 1위 베스트셀러로 금의환향",
    heartBadge: "유튜브 방송 그대로 정직한 약속",
    highlight: "유튜브 이차어디가에서 보던 병국이님 얼굴 그대로, 미끼 숫자 없이 정직하게 대우해주셔서 감동했습니다",
  },
  {
    carModel: "기아 K5 2.0 가솔린 프레스티지 (1세대)",
    year: "2013년식",
    km: 262000,
    prevType: "폐차장",
    prevMan: 85,
    exportMan: 435,
    imageUrl: "/images/vehicles/kia-k5-tf.jpg?v=sleek5",
    country: "키르기스스탄 · 요르단",
    tag1: "설레던첫세단",
    tag2: "선루프최고우대",
    sorrowStory: "파노라마 선루프 열고 밤하늘 보던 추억이 가득한데 연식 오래됐다고 폐차 권유",
    rebirthStory: "중앙아시아 젊은이들의 로망인 흰색 파노라마 선루프 K5로 화려하게 부활",
    heartBadge: "추억이 깃든 선루프까지 인정받음",
    highlight: "아이들이 하늘 보며 좋아하던 선루프 옵션을 해외 바이어가 제일 귀하게 봐준다며 최고로 대접해주셨습니다",
  },
  {
    carModel: "현대 그랜드 스타렉스 12인승 왜건",
    year: "2014년식",
    km: 375000,
    prevType: "조기폐차",
    prevMan: 150,
    exportMan: 560,
    imageUrl: "/images/vehicles/grand-starex.jpg?v=sleek5",
    country: "러시아 · 카자흐스탄",
    tag1: "아이들웃음소리",
    tag2: "학원차량새출발",
    sorrowStory: "태권도장 아이들의 웃음소리를 싣고 37만km를 달린 노란 차인데 조기폐차밖에 답이 없다 함",
    rebirthStory: "카자흐스탄과 러시아 마을 사람들을 실어 나르는 가장 든든한 승합차로 재탄생",
    heartBadge: "아이들의 꿈을 싣고 달리던 차의 제2막",
    highlight: "관원 아이들 안전하게 태우며 정들었던 스타렉스, 고철이 아니라 다시 사람들을 태우러 간다니 기쁩니다",
  },
  {
    carModel: "기아 올 뉴 모닝 (JA) 1.0 럭셔리",
    year: "2017년식",
    km: 194000,
    prevType: "내수매매",
    prevMan: 160,
    exportMan: 450,
    imageUrl: "/images/vehicles/kia-morning-ja.jpg?v=sleek5",
    country: "시리아 · 가나",
    tag1: "작은거인모닝",
    tag2: "10분원스톱배웅",
    sorrowStory: "좁은 골목길도 척척 누비며 우리 집 살림을 도맡았던 모닝인데 경차라며 홀대받음",
    rebirthStory: "시리아와 가나에서 가장 사랑받는 고연비 스마트키 해치백으로 귀한 대접",
    heartBadge: "우리 집 복덩이 모닝의 행복한 이별",
    highlight: "우리 가족 첫 복덩이였던 모닝, 병국이님 얼굴 믿고 편하게 보내드렸는데 끝까지 따뜻하게 챙겨주셨어요",
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

// Generate 100 realistic story-driven reviews spanning 24 months (2024-11 to 2026-11)
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

    // Spread dates evenly across the last 24 months (from 2026-11 down to 2024-11)
    const daysAgo = index * 7 + (index % 5); // ~700 days (~2 years)
    const baseDate = new Date(Date.UTC(2026, 10, 4)); // 2026-11-04
    baseDate.setUTCDate(baseDate.getUTCDate() - daysAgo);
    const yyyy = baseDate.getUTCFullYear();
    const mm = String(baseDate.getUTCMonth() + 1).padStart(2, "0");
    const dd = String(baseDate.getUTCDate()).padStart(2, "0");
    const dateStr = `${yyyy}-${mm}-${dd}`;

    const adjustedKm = seed.km + cycle * 14000 - (index % 3) * 6000;

    const reviewOpeners = [
      `우리 가족의 기쁨과 설움, 수많은 추억을 함께하며 ${(adjustedKm / 10000).toFixed(1)}만km를 달려준 소중한 ${seed.carModel} 차량이었습니다.`,
      `동네 매매상사와 폐차장에 물어보니 연식과 키로수 숫자만 보고 차가운 고철 취급을 해서 떠나보내기가 참 마음 아팠습니다.`,
      `유튜브와 인스타, 틱톡에서 얼굴을 걸고 진심으로 차를 대하는 '이차어디가' 병국이님 영상을 보고 믿음이 생겨 연락드렸습니다.`,
      `터무니없는 미끼 가격으로 낚는 곳들과 달리, 내 차가 바다 건너 ${seed.country}에서 어떻게 새 삶을 살게 되는지 따뜻하게 설명해주셨습니다.`,
      `${region}에서 일하느라 바빴는데, 고객 60% 이상이 병국이님 얼굴 믿고 차부터 보낸다길래 저도 마음 편히 탁송으로 먼저 보냈습니다.`,
    ];

    const reviewClosers = [
      `차를 먼저 보냈는데도 외판 흠집 하나 트집 잡지 않으시고 약속한 그대로 당일 깔끔하게 정산해주셨습니다. 내 소중한 차가 폐차장이 아닌 새로운 가족의 보물로 간다니 정말 마음이 놓입니다!`,
      `오랜 세월 정들었던 내 차의 마지막 가는 길을 고철이 아닌 ${seed.country} 현역 차량으로 명예롭게 배웅해주셔서 진심으로 감사드립니다. 당일 수출말소증까지 보내주셔서 끝까지 든든했습니다.`,
      `인감증명서 없이 자동차등록증과 신분증 사진만으로 모든 절차가 끝났고, 무엇보다 내 차에 담긴 추억과 가치를 존중해주시는 모습에 큰 감동을 받았습니다. 주변 지인들에게도 꼭 추천하겠습니다!`,
    ];

    return {
      id: `rev-${index + 1}`,
      customerName,
      region,
      carModel: `${seed.year} ${seed.carModel}`,
      yearAndMileage: `${seed.year} · ${adjustedKm.toLocaleString()}km 동행`,
      previousOffer: seed.sorrowStory,
      finalExportPrice: seed.rebirthStory,
      extraGain: seed.heartBadge,
      rating: 5,
      title: `[${region}] ${seed.highlight}`,
      content: `${reviewOpeners[index % reviewOpeners.length]} ${reviewClosers[index % reviewClosers.length]}`,
      tags: [seed.tag1, seed.tag2, `${seed.country}직수출`],
      date: dateStr,
      imageUrl: seed.imageUrl,
      exportCountry: seed.country,
    };
  }
);
