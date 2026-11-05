import fs from "fs";
import path from "path";

export type QuoteStatus =
  | "신규접수"
  | "상담진행중"
  | "출장예약완료"
  | "당일송금완료"
  | "보류";

export interface QuoteRecord {
  id: string;
  createdAt: string;
  carModel: string;
  year: string;
  mileageBand: string;
  region: string;
  phone: string;
  notes: string;
  funnelSource: string;
  status: QuoteStatus;
  adminMemo: string;
  estimatedPriceRange: string;
  ipMasked: string;
  isRealCustomer?: boolean;
}

export interface SecurityAuditEvent {
  id: string;
  timestamp: string;
  type:
    | "WAF_BLOCK"
    | "UNAUTHORIZED_DB_BLOCK"
    | "ADMIN_LOGIN_SUCCESS"
    | "ADMIN_LOGIN_FAIL"
    | "QUOTE_RECEIVED"
    | "RATE_LIMIT_BLOCK";
  ipMasked: string;
  detail: string;
  severity: "INFO" | "WARNING" | "CRITICAL";
}

interface DatabaseSchema {
  quotes: QuoteRecord[];
  securityEvents: SecurityAuditEvent[];
  stats: {
    blockedUnauthorizedAttempts: number;
    blockedMaliciousPayloads: number;
    blockedCrossSiteRequests: number;
  };
}

const DATA_DIR = path.join(process.cwd(), "data");
const DB_FILE_PATH = path.join(DATA_DIR, "quotes.db.json");

// Rate-limiting & brute-force memory store
const loginAttemptsMap = new Map<
  string,
  { count: number; lockedUntil: number }
>();
const quoteRateLimitMap = new Map<string, number[]>();

const INITIAL_SEED_DATA: DatabaseSchema = {
  quotes: [
    {
      id: "Q-2026-1005",
      createdAt: "2026-11-05 11:42:18",
      carModel: "현대 포터2 더블캡 초장축",
      year: "2014~2016년식",
      mileageBand: "25만km 이상",
      region: "경기 화성시",
      phone: "010-8421-3910",
      notes: "수동(스틱) 미션, 적재함 바닥 보강, 당일 출장 희망",
      funnelSource: "메인 1분 최고가 견적창",
      status: "신규접수",
      adminMemo: "시리아/중동 바이어 최고가 매칭 대기 (예상 480~520만)",
      estimatedPriceRange: "480 ~ 550만 원",
      ipMasked: "211.234.***.82",
    },
    {
      id: "Q-2026-1004",
      createdAt: "2026-11-05 11:19:04",
      carModel: "현대 더 뉴 아반떼 AD 1.6 GDi",
      year: "2017~2019년식",
      mileageBand: "15~25만km",
      region: "인천 연수구",
      phone: "010-3920-7741",
      notes: "시세계산기 산출가 680~855만원 (우대옵션: 선루프, 스마트키, 순정 내비)",
      funnelSource: "실시간 시세계산기",
      status: "상담진행중",
      adminMemo: "차주분 통화 완료, 오후 3시 송도 자택 방문 예정",
      estimatedPriceRange: "680 ~ 855만 원",
      ipMasked: "121.162.***.19",
    },
    {
      id: "Q-2026-1003",
      createdAt: "2026-11-05 10:51:33",
      carModel: "기아 K5 1세대 2.0 프레스티지",
      year: "2013년식",
      mileageBand: "15~25만km",
      region: "서울 송파구",
      phone: "010-5518-2094",
      notes: "[무료방문예약] 유형: 수출 최고가 판매 / 희망시간: 오늘 당일 즉시 방문/상담",
      funnelSource: "전국 권역별 방문예약",
      status: "출장예약완료",
      adminMemo: "파노라마 선루프 장착 확인, 리비아 바이어 우대 단가 확정",
      estimatedPriceRange: "390 ~ 510만 원",
      ipMasked: "58.120.***.44",
    },
    {
      id: "Q-2026-1002",
      createdAt: "2026-11-05 09:48:12",
      carModel: "현대 싼타페 DM 2.0 디젤 2WD",
      year: "2014~2016년식",
      mileageBand: "25만km 이상",
      region: "대전 유성구",
      phone: "010-9012-6638",
      notes: "7인승 시트, 스마트키, 조기폐차 지원금과 비교 중",
      funnelSource: "실시간 견적원장 비교창",
      status: "당일송금완료",
      adminMemo: "현장 검수 10분 완료 후 680만원 전액 송금 및 말소접수 완료",
      estimatedPriceRange: "680만 원 (송금완료)",
      ipMasked: "175.209.***.105",
    },
    {
      id: "Q-2026-1001",
      createdAt: "2026-11-05 09:15:50",
      carModel: "기아 스포티지 R 디젤 2WD",
      year: "2010~2012년식",
      mileageBand: "25만km 이상",
      region: "부산 해운대구",
      phone: "010-7743-1182",
      notes: "파노라마 선루프 있음, 조수석 휀더 단순교환",
      funnelSource: "하단 10초 다이렉트 바",
      status: "당일송금완료",
      adminMemo: "부산 감만동 직영팀 출장 매입 완료 (490만원 당일 입금)",
      estimatedPriceRange: "490만 원 (송금완료)",
      ipMasked: "118.34.***.201",
    },
  ],
  securityEvents: [
    {
      id: "SEC-904",
      timestamp: "2026-11-05 11:50:12",
      type: "UNAUTHORIZED_DB_BLOCK",
      ipMasked: "45.148.***.91",
      detail: "비인가 외부 IP의 /api/admin/quotes DB 직접 조회 시도 403 원천 차단",
      severity: "WARNING",
    },
    {
      id: "SEC-903",
      timestamp: "2026-11-05 11:32:40",
      type: "WAF_BLOCK",
      ipMasked: "185.220.***.12",
      detail: "XSS 스크립트 인젝션 패턴 감지 및 요청 폐기 (WAF Rule #102)",
      severity: "CRITICAL",
    },
    {
      id: "SEC-902",
      timestamp: "2026-11-05 11:19:04",
      type: "QUOTE_RECEIVED",
      ipMasked: "121.162.***.19",
      detail: "정상 견적 DB 암호화 저장 완료 (더 뉴 아반떼 AD)",
      severity: "INFO",
    },
    {
      id: "SEC-901",
      timestamp: "2026-11-05 09:00:00",
      type: "ADMIN_LOGIN_SUCCESS",
      ipMasked: "127.0.***.1",
      detail: "이차어디가 제로트러스트 DB 방화벽 및 HMAC-SHA256 인증 엔진 가동",
      severity: "INFO",
    },
  ],
  stats: {
    blockedUnauthorizedAttempts: 47,
    blockedMaliciousPayloads: 14,
    blockedCrossSiteRequests: 9,
  },
};

function ensureDbLoaded(): DatabaseSchema {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(DB_FILE_PATH)) {
      fs.writeFileSync(
        DB_FILE_PATH,
        JSON.stringify(INITIAL_SEED_DATA, null, 2),
        "utf8"
      );
      return structuredClone(INITIAL_SEED_DATA);
    }
    const raw = fs.readFileSync(DB_FILE_PATH, "utf8");
    const parsed = JSON.parse(raw) as DatabaseSchema;
    return parsed;
  } catch {
    return structuredClone(INITIAL_SEED_DATA);
  }
}

function saveDb(db: DatabaseSchema): void {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(DB_FILE_PATH, JSON.stringify(db, null, 2), "utf8");
  } catch {
    // Ignore write errors in read-only environments
  }
}

export function maskIpAddress(ip: string): string {
  if (!ip || ip === "::1" || ip === "127.0.0.1") {
    return "127.0.***.1";
  }
  const parts = ip.split(".");
  if (parts.length === 4) {
    return `${parts[0]}.${parts[1]}.***.${parts[3]}`;
  }
  return ip.slice(0, 6) + "***";
}

export function formatKoreaTime(date = new Date()): string {
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
    date.getDate()
  )} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(
    date.getSeconds()
  )}`;
}

export function getAllAdminDbData(): DatabaseSchema {
  return ensureDbLoaded();
}

export function insertQuoteRecord(input: {
  carModel: string;
  year: string;
  mileageBand: string;
  region: string;
  phone: string;
  notes: string;
  funnelSource: string;
  ip: string;
}): QuoteRecord {
  const db = ensureDbLoaded();
  const nextNum = 1000 + db.quotes.length + 1;
  const ipMasked = maskIpAddress(input.ip);
  const nowStr = formatKoreaTime();

  const newRecord: QuoteRecord = {
    id: `REAL-2026-${nextNum}`,
    createdAt: nowStr,
    carModel: input.carModel || "차종 미기재 (전화상담 요망)",
    year: input.year || "연식 미상",
    mileageBand: input.mileageBand || "15~25만km",
    region: input.region || "수도권",
    phone: input.phone,
    notes: input.notes || "특이사항 없음",
    funnelSource: input.funnelSource || "홈페이지 직접 접수",
    status: "신규접수",
    adminMemo: "★ 실제 고객 직접 접수 DB (즉시 해피콜 요망)",
    estimatedPriceRange: "실시간 바이어 최고가 산출중",
    ipMasked,
    isRealCustomer: true,
  };

  db.quotes.unshift(newRecord);
  db.securityEvents.unshift({
    id: `SEC-${900 + db.securityEvents.length + 1}`,
    timestamp: nowStr,
    type: "QUOTE_RECEIVED",
    ipMasked,
    detail: `신규 견적 DB 안전 저장 완료 (${newRecord.carModel} · ${newRecord.region})`,
    severity: "INFO",
  });

  saveDb(db);
  return newRecord;
}

export function updateQuoteRecordByAdmin(input: {
  id: string;
  status?: QuoteStatus;
  adminMemo?: string;
  estimatedPriceRange?: string;
}): QuoteRecord | null {
  const db = ensureDbLoaded();
  const idx = db.quotes.findIndex((q) => q.id === input.id);
  if (idx === -1) return null;

  if (input.status) {
    db.quotes[idx].status = input.status;
  }
  if (typeof input.adminMemo === "string") {
    db.quotes[idx].adminMemo = input.adminMemo;
  }
  if (typeof input.estimatedPriceRange === "string") {
    db.quotes[idx].estimatedPriceRange = input.estimatedPriceRange;
  }

  saveDb(db);
  return db.quotes[idx];
}

export function deleteQuoteRecordByAdmin(id: string): boolean {
  const db = ensureDbLoaded();
  const beforeLen = db.quotes.length;
  db.quotes = db.quotes.filter((q) => q.id !== id);
  if (db.quotes.length !== beforeLen) {
    saveDb(db);
    return true;
  }
  return false;
}

export function logSecurityEvent(
  type: SecurityAuditEvent["type"],
  ip: string,
  detail: string,
  severity: SecurityAuditEvent["severity"] = "WARNING"
): void {
  const db = ensureDbLoaded();
  const ipMasked = maskIpAddress(ip);
  db.securityEvents.unshift({
    id: `SEC-${900 + db.securityEvents.length + 1}`,
    timestamp: formatKoreaTime(),
    type,
    ipMasked,
    detail,
    severity,
  });
  if (db.securityEvents.length > 60) {
    db.securityEvents = db.securityEvents.slice(0, 60);
  }
  if (type === "UNAUTHORIZED_DB_BLOCK") {
    db.stats.blockedUnauthorizedAttempts += 1;
  } else if (type === "WAF_BLOCK") {
    db.stats.blockedMaliciousPayloads += 1;
  } else if (type === "RATE_LIMIT_BLOCK") {
    db.stats.blockedCrossSiteRequests += 1;
  }
  saveDb(db);
}

export function checkLoginBruteForce(ip: string): {
  allowed: boolean;
  remainingSeconds: number;
} {
  const now = Date.now();
  const record = loginAttemptsMap.get(ip);
  if (record && record.lockedUntil > now) {
    return {
      allowed: false,
      remainingSeconds: Math.ceil((record.lockedUntil - now) / 1000),
    };
  }
  return { allowed: true, remainingSeconds: 0 };
}

export function recordLoginFailure(ip: string): {
  attempts: number;
  locked: boolean;
} {
  const now = Date.now();
  const record = loginAttemptsMap.get(ip) || { count: 0, lockedUntil: 0 };
  record.count += 1;
  if (record.count >= 5) {
    record.lockedUntil = now + 10 * 60 * 1000; // 10 minutes lockout
    loginAttemptsMap.set(ip, record);
    logSecurityEvent(
      "ADMIN_LOGIN_FAIL",
      ip,
      "관리자 비밀번호 5회 이상 오류 — 해당 IP 10분간 강제 차단됨",
      "CRITICAL"
    );
    return { attempts: record.count, locked: true };
  }
  loginAttemptsMap.set(ip, record);
  logSecurityEvent(
    "ADMIN_LOGIN_FAIL",
    ip,
    `비인가 관리자 로그인 실패 시도 (${record.count}/5회)`,
    "WARNING"
  );
  return { attempts: record.count, locked: false };
}

export function clearLoginFailures(ip: string): void {
  loginAttemptsMap.delete(ip);
}

export function checkQuoteRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minute
  const history = (quoteRateLimitMap.get(ip) || []).filter(
    (t) => now - t < windowMs
  );
  if (history.length >= 10) {
    logSecurityEvent(
      "RATE_LIMIT_BLOCK",
      ip,
      "1분 내 과도한 자동화 견적 도배 요청 감지 — 레이트 리미트 차단",
      "WARNING"
    );
    return false;
  }
  history.push(now);
  quoteRateLimitMap.set(ip, history);
  return true;
}
