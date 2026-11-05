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
    tag1: "아반떼MD수출",
    tag2: "고주행무감가",
    highlight: "선루프·스마트키 옵션을 그대로 인정받아 폐차가 대비 290만 원이나 더 받았습니다",
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
    tag1: "포터2수출",
    tag2: "조기폐차비교",
    highlight: "적재함 스크래치와 34만km 주행거리에도 수동미션 우대로 당일 495만 원 입금받았습니다",
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
    tag1: "쏘렌토R수출",
    tag2: "파노라마선루프",
    highlight: "뒤쪽 접촉사고 이력이 있었는데도 해외 바이어 직거래라 단 1원 감가 없이 송금해주셨어요",
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
    tag1: "스포티지R수출",
    tag2: "당일현금송금",
    highlight: "내수 매매상사에서 100만 원 부르던 차량을 병국이수출에서 420만 원에 당일 매입해주셨습니다",
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
    tag1: "투싼ix수출",
    tag2: "30만km돌파",
    highlight: "31만km 넘게 탄 디젤 SUV라 걱정했는데 엔진 소리만 듣고 10분 만에 전액 입금해주셨네요",
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
    tag1: "포르테수출",
    tag2: "폐차대신수출",
    highlight: "연식이 15년 넘은 포르테도 중동 바이어 인기 차종이라며 폐차비의 5배를 챙겨주셨습니다",
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
    tag1: "올란도수출",
    tag2: "7인승RV우대",
    highlight: "국내에서 감가가 심한 쉐보레 디젤 차량인데도 수출 시세로 175만 원 더 받았습니다",
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
    tag1: "벤츠E클래스수출",
    tag2: "수입차최고가",
    highlight: "주행거리 많고 보험이력 있는 벤츠라 국내 딜러 감가가 심했는데 510만 원이나 더 받았습니다",
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
    tag1: "아우디A6수출",
    tag2: "4륜콰트로우대",
    highlight: "경고등 때문에 내수 판매가 막막했는데 해외 직수출로 감가 없이 550만 원 이득 봤습니다",
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
    tag1: "올뉴투싼수출",
    tag2: "흰색차량우대",
    highlight: "단순교환 이력이 있는 22만km 투싼을 내수보다 410만 원 더 높게 당일 현금으로 받았습니다",
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
    tag1: "QM6수출",
    tag2: "비대면원스톱",
    highlight: "사진 4장 문자로 보내드리고 확정받은 금액 그대로 집 앞 주차장에서 입금받았습니다",
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
    tag1: "스파크수출",
    tag2: "경차고가매입",
    highlight: "20만km 가까이 탄 경차도 해외에서 인기라며 매매상사 대비 210만 원 더 챙겨주셨어요",
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
    tag1: "아반떼CN7수출",
    tag2: "사고차무감가",
    highlight: "장거리 영업용으로 타서 주행거리가 많았는데 중동 직수출로 370만 원 더 받았습니다",
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
    tag1: "대형세단수출",
    tag2: "법인차량전문",
    highlight: "법인 임원용으로 주행거리가 많던 K9을 세금계산서 처리부터 당일 말소까지 완벽히 끝냈습니다",
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
    tag1: "YF쏘나타수출",
    tag2: "부당감가ZERO",
    highlight: "외판 스크래치가 많았는데도 리비아 수출 물량이라 감가 0원으로 410만 원 송금받았습니다",
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
    tag1: "그랜저HG수출",
    tag2: "30만km무감가",
    highlight: "30만km 넘은 그랜저 HG를 폐차하지 않고 병국이님 통해 350만 원이나 더 받았습니다",
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
    tag1: "아반떼AD수출",
    tag2: "수출1위차종",
    highlight: "유튜브 이차어디가 방송 그대로 출발 전 확정가 말씀해주시고 현장에서 바로 입금해주셨어요",
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
    tag1: "K5수출",
    tag2: "파노라마선루프",
    highlight: "선루프 들어간 흰색 K5가 해외에서 제일 비싸다며 폐차가의 5배 넘는 금액을 주셨습니다",
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
    tag1: "스타렉스수출",
    tag2: "학원차량우대",
    highlight: "태권도장 차량으로 37만km 뛴 스타렉스를 조기폐차 대신 수출 보내 410만 원 더 건졌습니다",
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
    tag1: "올뉴모닝수출",
    tag2: "스마트키우대",
    highlight: "인감증명서도 필요 없이 신분증 사진과 등록증만으로 퇴근길에 10분 만에 거래 완료했습니다",
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

// Generate 100 realistic reviews spanning 24 months (2024-11 to 2026-11)
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
    const adjustedPrevMan = seed.prevMan + (cycle % 2 === 0 ? 5 : -5);
    const adjustedExportMan = seed.exportMan + cycle * 15;
    const diffMan = adjustedExportMan - adjustedPrevMan;

    const reviewOpeners = [
      `출퇴근과 영업용으로 오래 타던 ${seed.carModel} 차량이라 주행거리가 ${(adjustedKm / 10000).toFixed(1)}만km를 넘겼습니다.`,
      `동네 매매상사와 폐차장 두 곳에 먼저 물어보니 ${seed.prevType} 기준으로 ${adjustedPrevMan}만 원밖에 안 나온다고 해서 포기하려던 참이었습니다.`,
      `유튜브에서 '이차어디가' 병국이(뺑국이)님 영상을 보고 반신반의하며 차량번호와 사진 4장을 문자로 보내드렸습니다.`,
      `타 업체에서는 전화로 높은 금액을 부른 뒤 현장에서 깎는다는 후기가 많아 걱정했는데, 이차어디가는 출발 전 확정가를 문자로 먼저 보증해주셨습니다.`,
      `${region}까지 무료 출장으로 당일 방문해주셔서 주차장에서 10분 만에 검수부터 송금까지 마쳤습니다.`,
    ];

    const reviewClosers = [
      `차량 키를 건네드리기도 전에 제 계좌로 ${adjustedExportMan.toLocaleString()}만 원 전액이 먼저 입금되는 걸 확인하고 정말 믿음이 갔습니다. 당일 오후에 수출말소증까지 카톡으로 받아 보험료 환급까지 완벽히 챙겼습니다!`,
      `외판 스크래치나 연식 트집을 전혀 잡지 않으시고 ${seed.country} 바이어 직수출 최고가로 맞춰주셔서 기존 견적보다 무려 +${diffMan.toLocaleString()}만 원이나 더 받았습니다. 주변 지인들에게도 적극 추천 중입니다.`,
      `인감증명서 발급하러 동사무소 갈 필요도 없이 자동차등록증 원본과 신분증 사진만으로 비대면 처리가 되니 이렇게 간편할 수가 없네요. 다음 차량 정리할 때도 무조건 병국이님께 연락드리겠습니다!`,
    ];

    return {
      id: `rev-${index + 1}`,
      customerName,
      region,
      carModel: `${seed.year} ${seed.carModel}`,
      yearAndMileage: `${seed.year} · ${adjustedKm.toLocaleString()}km`,
      previousOffer: `${seed.prevType} ${adjustedPrevMan.toLocaleString()}만 원`,
      finalExportPrice: `${adjustedExportMan.toLocaleString()}만 원`,
      extraGain: `+${diffMan.toLocaleString()}만 원 추가 수령`,
      rating: 5,
      title: `[${region}] ${seed.highlight} (+${diffMan.toLocaleString()}만 원 UP!)`,
      content: `${reviewOpeners[index % reviewOpeners.length]} ${reviewClosers[index % reviewClosers.length]}`,
      tags: [seed.tag1, seed.tag2, `${seed.country}직수출`],
      date: dateStr,
      imageUrl: seed.imageUrl,
      exportCountry: seed.country,
    };
  }
);
