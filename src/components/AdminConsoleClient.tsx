"use client";

import React, { useCallback, useEffect, useId, useState } from "react";
import Link from "next/link";
import {
  ShieldAlert,
  ShieldCheck,
  Lock,
  LogOut,
  RefreshCw,
  Download,
  PhoneCall,
  MessageSquare,
  Trash2,
  Save,
  Search,
  Database,
  Activity,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";
import type {
  QuoteRecord,
  QuoteStatus,
  SecurityAuditEvent,
} from "@/lib/quoteDb";

interface AdminDbPayload {
  quotes: QuoteRecord[];
  securityEvents: SecurityAuditEvent[];
  stats: {
    blockedUnauthorizedAttempts: number;
    blockedMaliciousPayloads: number;
    blockedCrossSiteRequests: number;
  };
}

interface AdminConsoleClientProps {
  initialAuthenticated: boolean;
  adminUsername: string;
  initialDb: AdminDbPayload | null;
}

const STATUS_OPTIONS: QuoteStatus[] = [
  "신규접수",
  "상담진행중",
  "출장예약완료",
  "당일송금완료",
  "보류",
];

export default function AdminConsoleClient({
  initialAuthenticated,
  adminUsername,
  initialDb,
}: AdminConsoleClientProps) {
  const uid = useId();
  const [isAuthenticated, setIsAuthenticated] = useState(initialAuthenticated);
  const [username, setUsername] = useState("byungguk");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const [dbData, setDbData] = useState<AdminDbPayload | null>(initialDb);
  const [statusFilter, setStatusFilter] = useState<QuoteStatus | "전체">("전체");
  const [realOnlyFilter, setRealOnlyFilter] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [memoDrafts, setMemoDrafts] = useState<Record<string, string>>({});
  const [priceDrafts, setPriceDrafts] = useState<Record<string, string>>({});
  const [toastMsg, setToastMsg] = useState("");

  const showToast = useCallback((msg: string) => {
    setToastMsg(msg);
    setTimeout(() => {
      setToastMsg("");
    }, 2800);
  }, []);

  const fetchAdminDb = useCallback(async () => {
    setIsRefreshing(true);
    try {
      const res = await fetch("/api/admin/quotes", {
        method: "GET",
        cache: "no-store",
      });
      if (res.status === 401 || res.status === 403) {
        setIsAuthenticated(false);
        setDbData(null);
        return;
      }
      const data = await res.json();
      if (data.ok) {
        setDbData({
          quotes: data.quotes || [],
          securityEvents: data.securityEvents || [],
          stats: data.stats || {
            blockedUnauthorizedAttempts: 0,
            blockedMaliciousPayloads: 0,
            blockedCrossSiteRequests: 0,
          },
        });
      }
    } finally {
      setIsRefreshing(false);
    }
  }, []);

  // Auto-sync real customer DB every 3.5 seconds when authenticated in Admin Mode
  useEffect(() => {
    if (!isAuthenticated) return;
    const pollTimer = setInterval(() => {
      void fetchAdminDb();
    }, 3500);
    return () => clearInterval(pollTimer);
  }, [isAuthenticated, fetchAdminDb]);

  const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoginError("");
    setIsLoggingIn(true);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setLoginError(
          data.message || "관리자 인증에 실패했습니다. 다시 확인해 주세요."
        );
        return;
      }
      setIsAuthenticated(true);
      setPassword("");
      await fetchAdminDb();
      showToast("관리자 보안 인증 성공 · 암호화 DB 잠금이 해제되었습니다.");
    } catch {
      setLoginError("네트워크 오류가 발생했습니다.");
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    setIsAuthenticated(false);
    setDbData(null);
    setPassword("");
  };

  const handleStatusChange = async (id: string, nextStatus: QuoteStatus) => {
    const res = await fetch("/api/admin/quotes", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status: nextStatus }),
    });
    if (res.ok) {
      await fetchAdminDb();
      showToast(`[${id}] 상태가 '${nextStatus}'(으)로 변경되었습니다.`);
    }
  };

  const handleSaveRowDetails = async (quote: QuoteRecord) => {
    const nextMemo =
      memoDrafts[quote.id] !== undefined
        ? memoDrafts[quote.id]
        : quote.adminMemo;
    const nextPrice =
      priceDrafts[quote.id] !== undefined
        ? priceDrafts[quote.id]
        : quote.estimatedPriceRange;

    const res = await fetch("/api/admin/quotes", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: quote.id,
        adminMemo: nextMemo,
        estimatedPriceRange: nextPrice,
      }),
    });
    if (res.ok) {
      await fetchAdminDb();
      showToast(`[${quote.id}] 관리자 메모 및 산출가가 저장되었습니다.`);
    }
  };

  const handleDeleteRow = async (id: string) => {
    const res = await fetch(`/api/admin/quotes?id=${encodeURIComponent(id)}`, {
      method: "DELETE",
    });
    if (res.ok) {
      await fetchAdminDb();
      showToast(`[${id}] DB 항목이 삭제되었습니다.`);
    }
  };

  const handleDownloadCsv = () => {
    if (!dbData?.quotes.length) return;
    const header = [
      "접수번호",
      "접수일시",
      "진행상태",
      "차량명",
      "연식",
      "주행거리",
      "지역",
      "연락처",
      "유입경로",
      "예상시세",
      "차주특이사항",
      "관리자메모",
    ];
    const rows = dbData.quotes.map((q) =>
      [
        q.id,
        q.createdAt,
        q.status,
        q.carModel,
        q.year,
        q.mileageBand,
        q.region,
        q.phone,
        q.funnelSource,
        q.estimatedPriceRange,
        q.notes,
        q.adminMemo,
      ]
        .map((cell) => `"${String(cell || "").replace(/"/g, '""')}"`)
        .join(",")
    );
    const csvContent = "\uFEFF" + [header.join(","), ...rows].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `이차어디가_고객견적DB_${new Date()
      .toISOString()
      .slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // RENDER 1: STRICT ADMIN SECURITY GATE (Non-admins are 100% blocked here)
  if (!isAuthenticated || !dbData) {
    return (
      <div className="admin-gate-screen">
        <div className="admin-gate-card">
          <div className="admin-gate-badge">
            <ShieldAlert size={16} aria-hidden="true" />
            <span>ZERO-TRUST SECURITY WALL ACTIVE</span>
          </div>

          <h1 className="admin-gate-title">
            이차어디가(병국이수출)
            <br />
            <span className="text-gold">관리자 전용 보안 DB 센터</span>
          </h1>
          <p className="admin-gate-desc">
            본 페이지는 <strong>수출마스터 병국 대표 관리자 외 접근이 100% 완전 차단</strong>된
            보안 구역입니다. 비인가 접근 시도는 실시간 IP가 기록되며 5회 이상 실패 시 자동
            잠금됩니다.
          </p>

          <div className="admin-security-specs">
            <div className="admin-spec-pill">
              <ShieldCheck size={14} className="text-gold" aria-hidden="true" />
              <span>HMAC-SHA256 서명 인증</span>
            </div>
            <div className="admin-spec-pill">
              <ShieldCheck size={14} className="text-gold" aria-hidden="true" />
              <span>WAF 인젝션·크로스사이트 차단</span>
            </div>
            <div className="admin-spec-pill">
              <ShieldCheck size={14} className="text-gold" aria-hidden="true" />
              <span>비인가자 DB 열람 원천봉쇄</span>
            </div>
          </div>

          <form onSubmit={handleLoginSubmit} className="admin-login-form">
            <div className="form-group">
              <label htmlFor={`${uid}-admin-id`} className="form-label text-white">
                관리자 아이디 (Master ID)
              </label>
              <input
                id={`${uid}-admin-id`}
                type="text"
                className="form-input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor={`${uid}-admin-pw`} className="form-label text-white">
                보안 마스터 코드 (Password / PIN)
              </label>
              <input
                id={`${uid}-admin-pw`}
                type="password"
                className="form-input"
                placeholder="마스터 비밀번호 입력 (예: byungguk7417! 또는 7417)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
                autoFocus
              />
            </div>

            {loginError && (
              <div className="admin-error-banner" role="alert">
                <AlertTriangle size={16} aria-hidden="true" />
                <span>{loginError}</span>
              </div>
            )}

            <button
              type="submit"
              className="btn-submit-quote"
              disabled={isLoggingIn}
            >
              <Lock size={17} aria-hidden="true" />
              <span>
                {isLoggingIn
                  ? "보안 키 검증 및 DB 복호화 중..."
                  : "관리자 보안 인증 후 DB 열람하기"}
              </span>
            </button>
          </form>

          <div className="admin-gate-footer">
            <Link href="/" className="admin-back-link">
              <ArrowLeft size={15} aria-hidden="true" />
              <span>고객용 메인 홈페이지로 돌아가기</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Filter quotes
  const filteredQuotes = dbData.quotes.filter((q) => {
    const isReal = Boolean(q.isRealCustomer || q.id.startsWith("REAL-"));
    if (realOnlyFilter && !isReal) return false;
    const matchesStatus =
      statusFilter === "전체" || q.status === statusFilter;
    const query = searchQuery.trim().toLowerCase();
    const matchesQuery =
      !query ||
      q.carModel.toLowerCase().includes(query) ||
      q.phone.toLowerCase().includes(query) ||
      q.region.toLowerCase().includes(query) ||
      q.id.toLowerCase().includes(query) ||
      q.notes.toLowerCase().includes(query);
    return matchesStatus && matchesQuery;
  });

  const realCustomerCount = dbData.quotes.filter(
    (q) => q.isRealCustomer || q.id.startsWith("REAL-")
  ).length;
  const newQuotesCount = dbData.quotes.filter(
    (q) => q.status === "신규접수"
  ).length;
  const completedCount = dbData.quotes.filter(
    (q) => q.status === "당일송금완료"
  ).length;
  const totalBlockedCount =
    dbData.stats.blockedUnauthorizedAttempts +
    dbData.stats.blockedMaliciousPayloads +
    dbData.stats.blockedCrossSiteRequests;

  // RENDER 2: AUTHENTICATED ADMIN CONSOLE (Desktop + Mobile Responsive)
  return (
    <div className="admin-console-shell">
      {/* Top Admin Security Header */}
      <header className="admin-topbar">
        <div className="container admin-topbar-inner">
          <div className="top-notice-left">
            <span className="notice-badge">MASTER ADMIN</span>
            <strong className="text-white">
              이차어디가(병국이수출) 통합 보안 관제 &amp; 실시간 견적 DB ({adminUsername})
            </strong>
          </div>

          <div className="admin-topbar-actions">
            <Link href="/" className="admin-action-btn">
              <ArrowLeft size={15} aria-hidden="true" />
              <span>메인 사이트 보기</span>
            </Link>
            <button
              type="button"
              className="admin-action-btn"
              onClick={() => void fetchAdminDb()}
              disabled={isRefreshing}
            >
              <RefreshCw size={15} aria-hidden="true" />
              <span>{isRefreshing ? "동기화 중..." : "DB 새로고침"}</span>
            </button>
            <button
              type="button"
              className="admin-action-btn is-gold"
              onClick={handleDownloadCsv}
            >
              <Download size={15} aria-hidden="true" />
              <span>엑셀(CSV) 다운로드</span>
            </button>
            <button
              type="button"
              className="admin-action-btn is-danger"
              onClick={() => void handleLogout()}
            >
              <LogOut size={15} aria-hidden="true" />
              <span>보안 잠금(로그아웃)</span>
            </button>
          </div>
        </div>
      </header>

      {toastMsg && (
        <div className="admin-toast" role="status">
          <CheckCircle2 size={16} aria-hidden="true" />
          <span>{toastMsg}</span>
        </div>
      )}

      <main className="container admin-main-content">
        {/* Top KPI Cards */}
        <section
          className="admin-kpi-grid"
          aria-label="실시간 DB 및 보안 통계"
        >
          <div className="admin-kpi-card">
            <span className="admin-kpi-label">총 누적 고객 견적 DB</span>
            <strong className="admin-kpi-num">{dbData.quotes.length}건</strong>
            <span className="admin-kpi-sub">서버 격리 암호화 보관 중</span>
          </div>
          <div className="admin-kpi-card is-highlight">
            <span className="admin-kpi-label">신규 미확인 접수</span>
            <strong className="admin-kpi-num text-gold">
              {newQuotesCount}건
            </strong>
            <span className="admin-kpi-sub">5분 내 즉시 해피콜 요망</span>
          </div>
          <div className="admin-kpi-card">
            <span className="admin-kpi-label">당일 송금·매입 완료</span>
            <strong className="admin-kpi-num">{completedCount}건</strong>
            <span className="admin-kpi-sub">현장 100% 송금 완료 건</span>
          </div>
          <div className="admin-kpi-card">
            <span className="admin-kpi-label">보안 프로그램 차단 누적</span>
            <strong className="admin-kpi-num text-primary">
              {totalBlockedCount}건
            </strong>
            <span className="admin-kpi-sub">
              비인가 DB접근 {dbData.stats.blockedUnauthorizedAttempts} · WAF{" "}
              {dbData.stats.blockedMaliciousPayloads}
            </span>
          </div>
        </section>

        {/* Active Security Program Status & Audit Log */}
        <section
          className="admin-security-panel"
          aria-labelledby="security-status-heading"
        >
          <div className="admin-panel-header">
            <div className="top-notice-left">
              <ShieldCheck size={20} className="text-gold" aria-hidden="true" />
              <h2 id="security-status-heading" className="text-white fw-800">
                실시간 가동 중인 6중 보안 프로그램 (Zero-Trust WAF &amp; DB 격리)
              </h2>
            </div>
            <span className="notice-badge">ALL SYSTEMS PROTECTED</span>
          </div>

          <div className="admin-security-modules">
            <div className="admin-sec-module">
              <strong>1. 비인가 DB 접근 100% 원천 차단</strong>
              <p>
                관리자 HMAC-SHA256 서명 쿠키 없이는 `/api/quote` 및 `/api/admin/*` DB
                조회가 403으로 즉시 거부됩니다.
              </p>
            </div>
            <div className="admin-sec-module">
              <strong>2. WAF 악성 스크립트·SQLi 필터</strong>
              <p>
                모든 입력 폼에서 XSS, 스크립트 삽입, SQL 인젝션 공격 시그니처를 실시간
                탐지해 차단합니다.
              </p>
            </div>
            <div className="admin-sec-module">
              <strong>3. Fetch Metadata 크로스사이트 방어</strong>
              <p>
                `Sec-Fetch-Site` 헤더를 검증하여 외부 피싱·위조 사이트에서의 API 호출을
                사전 차단합니다.
              </p>
            </div>
            <div className="admin-sec-module">
              <strong>4. 무차별 대입(Brute-Force) 잠금</strong>
              <p>
                관리자 로그인 5회 오류 시 해당 IP를 10분간 자동 차단하고 보안 감사 로그에
                기록합니다.
              </p>
            </div>
          </div>

          <details className="admin-audit-details">
            <summary className="admin-audit-summary">
              <span className="top-notice-left">
                <Activity size={16} className="text-gold" aria-hidden="true" />
                <span>
                  실시간 보안 감사 로그 (Security Audit Log — 최근{" "}
                  {dbData.securityEvents.length}건)
                </span>
              </span>
              <span className="text-gold">열기 / 닫기</span>
            </summary>
            <div className="admin-audit-list">
              {dbData.securityEvents.map((ev) => (
                <div key={ev.id} className="admin-audit-item">
                  <span className="text-muted">{ev.timestamp}</span>
                  <span className="notice-badge">{ev.type}</span>
                  <span className="text-white">{ev.detail}</span>
                  <span className="text-muted">IP: {ev.ipMasked}</span>
                </div>
              ))}
            </div>
          </details>
        </section>

        {/* Customer Quote Database Filter & Search Bar */}
        <section className="admin-db-section">
          <div className="admin-db-toolbar">
            <div className="top-notice-left">
              <Database size={20} className="text-primary" aria-hidden="true" />
              <h2 className="vehicle-name">
                실시간 고객 수출견적 문의 DB ({filteredQuotes.length}건)
              </h2>
            </div>

            <div className="admin-filter-controls">
              <div
                className="sim-pill-row"
                role="group"
                aria-label="실제 고객 DB 및 진행상태별 필터"
              >
                <button
                  type="button"
                  className="sim-pill-btn"
                  aria-pressed={realOnlyFilter}
                  onClick={() => setRealOnlyFilter((prev) => !prev)}
                  style={
                    realOnlyFilter
                      ? {
                          background: "#dc2626",
                          borderColor: "#dc2626",
                          color: "#ffffff",
                        }
                      : {
                          borderColor: "#dc2626",
                          color: "#dc2626",
                          fontWeight: 900,
                        }
                  }
                >
                  ★ 진짜 고객 접수 DB만 보기 ({realCustomerCount}건)
                </button>
                {(["전체", ...STATUS_OPTIONS] as const).map((st) => (
                  <button
                    key={st}
                    type="button"
                    className="sim-pill-btn"
                    aria-pressed={statusFilter === st}
                    onClick={() => setStatusFilter(st)}
                  >
                    {st}
                  </button>
                ))}
              </div>

              <div className="admin-search-box">
                <Search size={16} className="text-muted" aria-hidden="true" />
                <input
                  type="search"
                  className="admin-search-input"
                  placeholder="차종, 연락처, 지역, 접수번호 검색..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="고객 DB 검색"
                />
              </div>
            </div>
          </div>

          {/* Responsive Data Table (Follows `responsive-table` guide: tabindex="0", role="region", aria-labelledby, sticky headers, @container mobile cards) */}
          <div
            tabIndex={0}
            role="region"
            aria-labelledby="admin-db-caption"
            className="admin-table-wrapper"
          >
            <table className="admin-db-table">
              <caption id="admin-db-caption" className="visually-hidden">
                이차어디가 실시간 고객 수출 견적 문의 데이터베이스 목록
              </caption>
              <thead>
                <tr>
                  <th scope="col">접수번호 / 일시</th>
                  <th scope="col">진행상태</th>
                  <th scope="col">차량정보 / 유입경로</th>
                  <th scope="col">지역 / 주행거리</th>
                  <th scope="col">고객 연락처 (원클릭 통화·문자)</th>
                  <th scope="col">예상시세 &amp; 관리자 메모</th>
                  <th scope="col">저장 / 관리</th>
                </tr>
              </thead>
              <tbody>
                {filteredQuotes.map((q) => {
                  const currentMemo =
                    memoDrafts[q.id] !== undefined
                      ? memoDrafts[q.id]
                      : q.adminMemo;
                  const currentPrice =
                    priceDrafts[q.id] !== undefined
                      ? priceDrafts[q.id]
                      : q.estimatedPriceRange;

                  return (
                    <tr key={q.id}>
                      {/* Sticky Row Header on Desktop & Card Header on Mobile per `responsive-table` */}
                      <th scope="row">
                        {(q.isRealCustomer || q.id.startsWith("REAL-")) && (
                          <div
                            style={{
                              display: "inline-block",
                              background: "#dc2626",
                              color: "#ffffff",
                              fontSize: "0.7rem",
                              fontWeight: 900,
                              padding: "0.14rem 0.48rem",
                              borderRadius: "999px",
                              marginBottom: "0.25rem",
                            }}
                          >
                            ★ 진짜 고객 DB
                          </div>
                        )}
                        <div className="fw-800 text-obsidian">{q.id}</div>
                        <div className="text-muted">{q.createdAt}</div>
                        <div className="text-muted">IP: {q.ipMasked}</div>
                      </th>

                      <td>
                        <select
                          className="form-select"
                          value={q.status}
                          onChange={(e) =>
                            void handleStatusChange(
                              q.id,
                              e.target.value as QuoteStatus
                            )
                          }
                          aria-label={`${q.id} 진행상태 변경`}
                        >
                          {STATUS_OPTIONS.map((st) => (
                            <option key={st} value={st}>
                              {st}
                            </option>
                          ))}
                        </select>
                      </td>

                      <td>
                        <strong className="text-obsidian fw-800">
                          {q.carModel}
                        </strong>
                        <div className="text-sub">연식: {q.year}</div>
                        <div className="review-tag-pill">{q.funnelSource}</div>
                        <div className="text-sub">특이사항: {q.notes}</div>
                      </td>

                      <td>
                        <div className="fw-800 text-obsidian">{q.region}</div>
                        <div className="text-sub">{q.mileageBand}</div>
                      </td>

                      <td>
                        <div className="fw-800 text-primary">{q.phone}</div>
                        <div className="admin-contact-btns">
                          <a
                            href={`tel:${q.phone}`}
                            className="btn-card-primary"
                          >
                            <PhoneCall size={13} aria-hidden="true" />
                            <span>전화걸기</span>
                          </a>
                          <a
                            href={`sms:${q.phone}?body=${encodeURIComponent(
                              `[이차어디가 병국이수출] 안녕하세요 차주님! 문의주신 [${q.carModel}] 해외 바이어 최고가 시세 안내드립니다.`
                            )}`}
                            className="btn-card-secondary"
                          >
                            <MessageSquare size={13} aria-hidden="true" />
                            <span>문자발송</span>
                          </a>
                        </div>
                      </td>

                      <td>
                        <div className="admin-memo-stack">
                          <input
                            type="text"
                            className="form-input"
                            placeholder="예상 수출시세 입력"
                            value={currentPrice}
                            onChange={(e) =>
                              setPriceDrafts((prev) => ({
                                ...prev,
                                [q.id]: e.target.value,
                              }))
                            }
                            aria-label={`${q.id} 예상 수출시세`}
                          />
                          <input
                            type="text"
                            className="form-input"
                            placeholder="관리자 상담 메모 입력..."
                            value={currentMemo}
                            onChange={(e) =>
                              setMemoDrafts((prev) => ({
                                ...prev,
                                [q.id]: e.target.value,
                              }))
                            }
                            aria-label={`${q.id} 관리자 상담 메모`}
                          />
                        </div>
                      </td>

                      <td>
                        <div className="admin-row-actions">
                          <button
                            type="button"
                            className="btn-card-primary"
                            onClick={() => void handleSaveRowDetails(q)}
                          >
                            <Save size={14} aria-hidden="true" />
                            <span>저장</span>
                          </button>
                          <button
                            type="button"
                            className="btn-card-secondary"
                            onClick={() => void handleDeleteRow(q.id)}
                            aria-label={`${q.id} 삭제`}
                          >
                            <Trash2 size={14} aria-hidden="true" />
                            <span>삭제</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
