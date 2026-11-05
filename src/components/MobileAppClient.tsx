"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import {
  PhoneCall,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Calculator,
  CarFront,
  Play,
  Globe,
  Monitor,
  Smartphone,
  Copy,
  Check,
  ArrowRight,
  Lock,
} from "lucide-react";
import {
  SITE_CONFIG,
  KPRO_COMPARISON_SLIDES,
  KPRO_FIVE_STEPS,
  SIMULATOR_CATALOG,
  SIMULATOR_OPTION_BONUSES,
  EXPORT_VEHICLES,
  BYUNGGUK_FIELD_VIDEOS,
  GLOBAL_BUYER_COUNTRIES,
  EXPORT_SCAM_PREVENTION_CHECKLIST,
  CAR_MODELS_DATALIST,
  LIVE_TICKER_ITEMS,
  CUSTOMER_REVIEWS,
  type ByunggukVideoProof,
} from "@/data/exportData";

export default function MobileAppClient() {
  const uid = useId();
  const phoneLastRef = useRef<HTMLInputElement | null>(null);
  const videoDialogRef = useRef<HTMLDialogElement | null>(null);

  // PC Preview Mode Toggle: "device" (430px phone frame on PC) vs "full" (full width)
  const [pcFrameMode, setPcFrameMode] = useState<"device" | "full">("device");
  const [activeTab, setActiveTab] = useState<
    "home" | "calc" | "vehicles" | "videos" | "guarantee"
  >("home");
  const [copiedUrl, setCopiedUrl] = useState(false);
  const [mReviewCount, setMReviewCount] = useState(8);
  const [mSelectedCat, setMSelectedCat] = useState<string>("전체");
  const [mLiveOffset, setMLiveOffset] = useState<number>(0);
  const [mTodayCount, setMTodayCount] = useState<number>(164);
  const [mScrolled, setMScrolled] = useState<boolean>(false);

  useEffect(() => {
    const t = setInterval(() => {
      setMLiveOffset((prev) => (prev + 1) % LIVE_TICKER_ITEMS.length);
      setMTodayCount((prev) => (prev < 299 ? prev + 1 : 164));
    }, 2200);
    const onScroll = () => {
      setMScrolled(window.scrollY > 120);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearInterval(t);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // 10-second mobile consultation form state
  const [carModel, setCarModel] = useState("");
  const [phonePrefix, setPhonePrefix] = useState("010");
  const [phoneMid, setPhoneMid] = useState("");
  const [phoneLast, setPhoneLast] = useState("");
  const [region, setRegion] = useState("수도권(서울/경기/인천)");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<{
    carModel: string;
    phone: string;
  } | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Mobile Simulator state
  const [simMakerIdx, setSimMakerIdx] = useState(0);
  const [simModelIdx, setSimModelIdx] = useState(0);
  const [selectedBonuses, setSelectedBonuses] = useState<string[]>([
    "sunroof",
    "smartkey",
  ]);

  // Active video modal state
  const [activeVideo, setActiveVideo] = useState<ByunggukVideoProof>(
    BYUNGGUK_FIELD_VIDEOS[0]
  );

  const currentSimMaker =
    SIMULATOR_CATALOG[simMakerIdx] || SIMULATOR_CATALOG[0];
  const currentSimModel =
    currentSimMaker.models[simModelIdx] || currentSimMaker.models[0];

  const totalBonusMan = SIMULATOR_OPTION_BONUSES.filter((b) =>
    selectedBonuses.includes(b.id)
  ).reduce((sum, item) => sum + item.bonusMan, 0);

  const simExportMin =
    currentSimModel.exportMinMan + Math.round(totalBonusMan * 0.5);
  const simExportMax = currentSimModel.exportMaxMan + totalBonusMan;

  const telHref = `tel:${SITE_CONFIG.phone}`;
  const smsHref = `sms:${SITE_CONFIG.phone}?body=${encodeURIComponent(
    `[이차어디가 모바일 시세문의] 차량명/차량번호(${
      carModel || "미입력"
    }) 사진 전송 및 수출 최고가 견적 문의합니다.`
  )}`;

  const handleMidChange = (val: string) => {
    const digits = val.replace(/\D/g, "").slice(0, 4);
    setPhoneMid(digits);
    if (digits.length === 4) {
      phoneLastRef.current?.focus();
    }
  };

  const handleLastChange = (val: string) => {
    const digits = val.replace(/\D/g, "").slice(0, 4);
    setPhoneLast(digits);
  };

  const handleCopyMobileUrl = async () => {
    try {
      const urlToCopy =
        typeof window !== "undefined" ? window.location.href : "";
      await navigator.clipboard.writeText(urlToCopy);
      setCopiedUrl(true);
      setTimeout(() => setCopiedUrl(false), 2500);
    } catch {
      // ignore clipboard errors
    }
  };

  const handleMobileSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    const fullPhone = `${phonePrefix}-${phoneMid}-${phoneLast}`;

    if (carModel.trim().length < 2) {
      setSubmitError("차량명 또는 차량번호를 2자 이상 입력해주세요.");
      return;
    }
    if (phoneMid.length < 3 || phoneLast.length < 4) {
      setSubmitError("연락처 8자리를 정확히 입력해주세요.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          carModel: carModel.trim(),
          year: "모바일 간편접수",
          mileageBand: "현장/전화확인",
          region,
          phone: fullPhone,
          notes: "[모바일 전용버전(/m) 10초 무료상담 접수 · 3대 경로 비교]",
          estimatedExportPrice: `${currentSimModel.targetCountry} 바이어 직통 우대`,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setSubmitError(
          data.message || "접수 중 오류가 발생했습니다. 직통전화로 문의해주세요."
        );
      } else {
        setSubmitSuccess({ carModel: carModel.trim(), phone: fullPhone });
        setCarModel("");
        setPhoneMid("");
        setPhoneLast("");
      }
    } catch {
      setSubmitError("네트워크 오류가 발생했습니다. 직통전화로 연결해주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectCarAndJumpToForm = (selectedName: string) => {
    setCarModel(selectedName);
    setActiveTab("home");
    const formEl = document.getElementById("m-quick-form");
    formEl?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className="m-app-outer-shell">
      {/* PC Top Utility Bar (Hidden on actual mobile screens < 768px) */}
      <div className="m-pc-toolbar">
        <div className="m-pc-toolbar-inner">
          <div className="m-pc-toolbar-left">
            <span className="m-pc-badge">
              <Smartphone size={14} aria-hidden="true" />
              <span>이차어디가(병국이수출) 공식 모바일 전용 버전 (/m)</span>
            </span>
            <span className="m-pc-sub">
              스마트폰으로 접속 시 자동으로 모바일 화면에 최적화됩니다.
            </span>
          </div>

          <div className="m-pc-toolbar-actions">
            <button
              type="button"
              className={`m-pc-toggle-btn ${
                pcFrameMode === "device" ? "is-active" : ""
              }`}
              onClick={() => setPcFrameMode("device")}
            >
              <Smartphone size={14} aria-hidden="true" />
              <span>스마트폰 프레임 보기 (430px)</span>
            </button>
            <button
              type="button"
              className={`m-pc-toggle-btn ${
                pcFrameMode === "full" ? "is-active" : ""
              }`}
              onClick={() => setPcFrameMode("full")}
            >
              <Monitor size={14} aria-hidden="true" />
              <span>와이드 모바일 보기</span>
            </button>
            <button
              type="button"
              className="m-pc-toggle-btn is-emerald"
              onClick={() => void handleCopyMobileUrl()}
            >
              {copiedUrl ? (
                <>
                  <Check size={14} aria-hidden="true" />
                  <span>모바일 주소 복사됨!</span>
                </>
              ) : (
                <>
                  <Copy size={14} aria-hidden="true" />
                  <span>모바일 주소 복사</span>
                </>
              )}
            </button>
            <Link href="/" className="m-pc-toggle-btn">
              <span>PC 통합버전(/) 이동</span>
            </Link>
            <Link href="/admin" className="m-pc-toggle-btn">
              <Lock size={13} aria-hidden="true" />
              <span>관리자 DB</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Mobile Viewport Container */}
      <div
        className={`m-viewport-stage ${
          pcFrameMode === "device" ? "is-device-frame" : "is-full-frame"
        }`}
      >
        <div className="m-phone-screen">
          {/* Mobile Sticky App Header */}
          <header className="m-header">
            {/* 모바일 맨 윗줄: 유튜브 · 인스타 · 틱톡 · 카톡상담 1열 정렬 */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "0.32rem",
                padding: "0.4rem 0.6rem",
                background: "#060a12",
                borderBottom: "1px solid rgba(212, 175, 55, 0.22)",
              }}
            >
              <a
                href={SITE_CONFIG.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0.32rem 0.15rem",
                  borderRadius: "999px",
                  background: "#dc2626",
                  color: "#ffffff",
                  fontSize: "0.72rem",
                  fontWeight: 900,
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                ▶ 유튜브
              </a>
              <a
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0.32rem 0.15rem",
                  borderRadius: "999px",
                  background:
                    "linear-gradient(135deg, #833ab4 0%, #fd1d1d 55%, #fcb045 100%)",
                  color: "#ffffff",
                  fontSize: "0.72rem",
                  fontWeight: 900,
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                📸 인스타
              </a>
              <a
                href={SITE_CONFIG.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0.32rem 0.15rem",
                  borderRadius: "999px",
                  background: "#0f172a",
                  border: "1px solid rgba(0, 242, 254, 0.6)",
                  color: "#ffffff",
                  fontSize: "0.72rem",
                  fontWeight: 900,
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                🎵 틱톡
              </a>
              <a
                href={SITE_CONFIG.kakaoUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0.32rem 0.15rem",
                  borderRadius: "999px",
                  background: "#fee500",
                  color: "#3c1e1e",
                  fontSize: "0.72rem",
                  fontWeight: 900,
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                💬 카톡상담
              </a>
            </div>
            <div className="m-header-top">
              <Link href="/m" className="m-brand">
                <span className="m-brand-badge">병국직영</span>
                <div className="m-brand-text">
                  <strong>이차어디가</strong>
                  <span>모바일 다이렉트 수출센터</span>
                </div>
              </Link>

              <div className="m-header-actions">
                <Link href="/" className="m-pc-switch-link">
                  PC버전
                </Link>
                <a href={telHref} className="m-call-pill">
                  <PhoneCall size={14} aria-hidden="true" />
                  <span>{SITE_CONFIG.phoneFormatted}</span>
                </a>
              </div>
            </div>

            {/* Single-Line Mobile App Category Tab Bar */}
            <nav className="m-top-tabs" aria-label="모바일 앱 메뉴">
              <button
                type="button"
                className={`m-top-tab ${activeTab === "home" ? "is-active" : ""}`}
                onClick={() => setActiveTab("home")}
              >
                10초 시세조회
              </button>
              <button
                type="button"
                className={`m-top-tab ${activeTab === "calc" ? "is-active" : ""}`}
                onClick={() => setActiveTab("calc")}
              >
                시세계산기
              </button>
              <button
                type="button"
                className={`m-top-tab ${
                  activeTab === "vehicles" ? "is-active" : ""
                }`}
                onClick={() => setActiveTab("vehicles")}
              >
                차종별시세
              </button>
              <button
                type="button"
                className={`m-top-tab ${
                  activeTab === "videos" ? "is-active" : ""
                }`}
                onClick={() => setActiveTab("videos")}
              >
                병국이직캠
              </button>
              <button
                type="button"
                className={`m-top-tab ${
                  activeTab === "guarantee" ? "is-active" : ""
                }`}
                onClick={() => setActiveTab("guarantee")}
              >
                수출국·보증
              </button>
            </nav>
          </header>

          {/* Mobile App Body */}
          <main className="m-body">
            {/* Hero Banner: Always visible on 'home' tab */}
            {activeTab === "home" && (
              <>
                <section className="m-hero-card">
                  <div className="m-hero-eyebrow">
                    <Sparkles size={13} aria-hidden="true" />
                    <span>유튜브·인스타·틱톡 얼굴·실명 100% 공개 — 병국이 직영 보증</span>
                  </div>

                  <div className="m-hero-profile-row">
                    <div className="m-hero-avatar-wrap">
                      <img
                        src="/images/byungguk/ZGRimSgReGw-maxres1.jpg"
                        alt="수출마스터 병국(뺑국이)"
                        className="m-hero-avatar"
                        width={110}
                        height={145}
                      />
                      <span className="m-avatar-tag">수출마스터 병국</span>
                    </div>

                    <div className="m-hero-copy">
                      <h1 className="m-hero-title">
                        타사 견적 다 받아오세요!
                        <br />
                        <span className="m-text-emerald">
                          마지막에 오시면 무조건 이겨드립니다!
                        </span>
                      </h1>
                      <p className="m-hero-desc">
                        딜러가 헐값에 사서 수출로 빼돌리던 뒷마진, 사장님 통장에 100% 꽂아드립니다! <strong>손님 10명 중 6명이 병국이 얼굴 하나 믿고 돈 받기 전에 차부터 보내시는</strong> 무감가 직영 센터입니다.
                      </p>
                      <div className="m-hero-badges">
                        <span>🔥 타사견적 무조건격파</span>
                        <span>🔥 60% 얼굴믿고 선탁송</span>
                        <span>🔥 10원감가시 유튜브박제</span>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 10-Second Mobile Consultation Form */}
                <section className="m-form-card" id="m-quick-form">
                  <div className="m-form-head">
                    <h2>
                      <span style={{ color: "#1cdb83" }}>모바일 10초</span> 내차
                      수출시세 조회
                    </h2>
                    <p>※ 차량명 또는 차량번호만 입력하시면 즉시 확인됩니다 ※</p>
                  </div>

                  {submitSuccess ? (
                    <div className="m-submit-done">
                      <CheckCircle2 size={36} color="#057a44" />
                      <h3>무료 수출 시세 조회가 접수되었습니다!</h3>
                      <p>
                        <strong>{submitSuccess.carModel}</strong> ({submitSuccess.phone}
                        ) 차량의 해외 바이어 최고가 시세를 병국이 직영팀이 즉시 확인하여
                        연락드립니다.
                      </p>
                      <div className="m-done-actions">
                        <a href={telHref} className="m-btn-primary">
                          <PhoneCall size={16} />
                          <span>기다리지 않고 바로 통화하기</span>
                        </a>
                        <button
                          type="button"
                          className="m-btn-outline"
                          onClick={() => setSubmitSuccess(null)}
                        >
                          다른 차량 추가 조회하기
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleMobileSubmit} className="m-form-body">
                      {submitError && (
                        <div className="m-form-error" role="alert">
                          {submitError}
                        </div>
                      )}

                      <div className="m-field">
                        <label htmlFor={`${uid}-m-car`} className="m-label">
                          차량명 또는 차량번호 <span>*</span>
                        </label>
                        <input
                          id={`${uid}-m-car`}
                          type="text"
                          list={`${uid}-m-car-list`}
                          className="m-input"
                          placeholder="예) 아반떼AD, 쏘렌토R, 포터2 또는 12가 3456"
                          required
                          value={carModel}
                          onChange={(e) => setCarModel(e.target.value)}
                        />
                        <datalist id={`${uid}-m-car-list`}>
                          {CAR_MODELS_DATALIST.map((m) => (
                            <option key={m} value={m} />
                          ))}
                        </datalist>
                      </div>

                      <div className="m-field">
                        <label htmlFor={`${uid}-m-mid`} className="m-label">
                          휴대폰 번호 (4자리 입력 시 자동 이동) <span>*</span>
                        </label>
                        <div className="m-phone-grid">
                          <select
                            className="m-input m-phone-center"
                            aria-label="휴대폰 앞자리"
                            value={phonePrefix}
                            onChange={(e) => setPhonePrefix(e.target.value)}
                          >
                            <option value="010">010</option>
                            <option value="011">011</option>
                            <option value="016">016</option>
                            <option value="017">017</option>
                            <option value="018">018</option>
                            <option value="019">019</option>
                          </select>
                          <input
                            id={`${uid}-m-mid`}
                            type="tel"
                            inputMode="numeric"
                            maxLength={4}
                            placeholder="0000"
                            required
                            className="m-input m-phone-center"
                            value={phoneMid}
                            onChange={(e) => handleMidChange(e.target.value)}
                            aria-label="휴대폰 중간 4자리"
                          />
                          <input
                            ref={phoneLastRef}
                            type="tel"
                            inputMode="numeric"
                            maxLength={4}
                            placeholder="0000"
                            required
                            className="m-input m-phone-center"
                            value={phoneLast}
                            onChange={(e) => handleLastChange(e.target.value)}
                            aria-label="휴대폰 끝 4자리"
                          />
                        </div>
                      </div>

                      <div className="m-field">
                        <label htmlFor={`${uid}-m-region`} className="m-label">
                          무료 출장 지역 선택
                        </label>
                        <select
                          id={`${uid}-m-region`}
                          className="m-input"
                          value={region}
                          onChange={(e) => setRegion(e.target.value)}
                        >
                          <option value="수도권(서울/경기/인천)">
                            수도권 (서울 · 경기 · 인천 30분~1시간 방문)
                          </option>
                          <option value="대전/충청/세종">
                            충청권 (대전 · 세종 · 천안 · 청주 당일 방문)
                          </option>
                          <option value="대구/경북/부산/경남">
                            영남권 (대구 · 부산 · 울산 · 경북 · 경남)
                          </option>
                          <option value="광주/전라/강원/제주">
                            호남 · 강원 · 제주 (전국 무료 탁송)
                          </option>
                        </select>
                      </div>

                      <button
                        type="submit"
                        className="m-submit-cta"
                        disabled={isSubmitting}
                      >
                        <span>
                          {isSubmitting
                            ? "바이어 최고가 대조 중..."
                            : "🔥 딜러 뒷마진 뺀 진짜 최고가 찔러보기"}
                        </span>
                        <ArrowRight size={18} aria-hidden="true" />
                      </button>

                      <div className="m-direct-row">
                        <a href={telHref} className="m-direct-call">
                          <PhoneCall size={15} />
                          <span>전화 바로연결</span>
                        </a>
                        <a href={smsHref} className="m-direct-sms">
                          <MessageSquare size={15} />
                          <span>차량사진 문자전송</span>
                        </a>
                      </div>
                    </form>
                  )}
                </section>

                {/* Mobile Official SNS & KakaoTalk Direct Connect Card */}
                <section
                  className="m-section-card"
                  style={{
                    background: "linear-gradient(145deg, #070d19 0%, #0f172a 100%)",
                    color: "#ffffff",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                  }}
                >
                  <div className="m-sec-head" style={{ justifyContent: "space-between" }}>
                    <h2 style={{ color: "#ffffff" }}>
                      유튜브 · 인스타 · 틱톡 · 카톡 공식채널
                    </h2>
                    <span
                      style={{
                        background: "#fee500",
                        color: "#3c1e1e",
                        fontSize: "0.68rem",
                        fontWeight: 900,
                        padding: "0.16rem 0.5rem",
                        borderRadius: "999px",
                      }}
                    >
                      @ichaeodiga12
                    </span>
                  </div>
                  <p className="m-sec-sub" style={{ color: "#cbd5e1" }}>
                    원하시는 채널을 터치하시면 병국이 공식 SNS 및 1:1 카카오톡 상담으로 즉시 연결됩니다.
                  </p>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(2, 1fr)",
                      gap: "0.5rem",
                    }}
                  >
                    <a
                      href={SITE_CONFIG.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.45rem",
                        padding: "0.65rem 0.75rem",
                        borderRadius: "12px",
                        background: "linear-gradient(135deg, #ff0000 0%, #dc2626 100%)",
                        color: "#ffffff",
                        textDecoration: "none",
                        fontWeight: 900,
                        fontSize: "0.8rem",
                      }}
                    >
                      <span>▶</span>
                      <div>
                        <div>유튜브 공식</div>
                        <div style={{ fontSize: "0.66rem", opacity: 0.9 }}>
                          현장직캠·쇼츠
                        </div>
                      </div>
                    </a>

                    <a
                      href={SITE_CONFIG.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.45rem",
                        padding: "0.65rem 0.75rem",
                        borderRadius: "12px",
                        background:
                          "linear-gradient(135deg, #833ab4 0%, #fd1d1d 55%, #fcb045 100%)",
                        color: "#ffffff",
                        textDecoration: "none",
                        fontWeight: 900,
                        fontSize: "0.8rem",
                      }}
                    >
                      <span>📸</span>
                      <div>
                        <div>인스타그램</div>
                        <div style={{ fontSize: "0.66rem", opacity: 0.9 }}>
                          당일입고·릴스
                        </div>
                      </div>
                    </a>

                    <a
                      href={SITE_CONFIG.tiktokUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.45rem",
                        padding: "0.65rem 0.75rem",
                        borderRadius: "12px",
                        background: "#090d16",
                        border: "1.5px solid #00f2fe",
                        color: "#ffffff",
                        textDecoration: "none",
                        fontWeight: 900,
                        fontSize: "0.8rem",
                      }}
                    >
                      <span>🎵</span>
                      <div>
                        <div>틱톡 공식채널</div>
                        <div style={{ fontSize: "0.66rem", color: "#67e8f9" }}>
                          30초 시세쇼츠
                        </div>
                      </div>
                    </a>

                    <a
                      href={SITE_CONFIG.kakaoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.45rem",
                        padding: "0.65rem 0.75rem",
                        borderRadius: "12px",
                        background: "#fee500",
                        color: "#3c1e1e",
                        textDecoration: "none",
                        fontWeight: 900,
                        fontSize: "0.8rem",
                      }}
                    >
                      <span>💬</span>
                      <div>
                        <div>카카오톡 상담</div>
                        <div style={{ fontSize: "0.66rem", opacity: 0.85 }}>
                          1:1 사진견적
                        </div>
                      </div>
                    </a>
                  </div>
                </section>

                {/* Live Mobile Ticker (Packed 8-Row Auto-Rotating Board + Flash Alert) */}
                <section className="m-section-card">
                  <div
                    className="m-sec-head"
                    style={{ justifyContent: "space-between" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                      }}
                    >
                      <span className="m-live-dot" />
                      <h2>실시간 이차어디가 당일 매입·송금 현황</h2>
                    </div>
                    <span
                      style={{
                        background: "#059669",
                        color: "#ffffff",
                        fontSize: "0.68rem",
                        fontWeight: 800,
                        padding: "0.18rem 0.5rem",
                        borderRadius: "999px",
                      }}
                    >
                      오늘 {mTodayCount}건 회전중
                    </span>
                  </div>

                  {/* Mobile Live Incoming Flash Banner */}
                  {(() => {
                    const topIncoming =
                      LIVE_TICKER_ITEMS[mLiveOffset % LIVE_TICKER_ITEMS.length];
                    return (
                      <div
                        key={`m-flash-${topIncoming.id}-${mLiveOffset}`}
                        onClick={() =>
                          selectCarAndJumpToForm(topIncoming.carModel)
                        }
                        style={{
                          background:
                            "linear-gradient(90deg, #061326 0%, #054a32 100%)",
                          color: "#ffffff",
                          borderRadius: "10px",
                          padding: "0.6rem 0.75rem",
                          border: "1.5px solid #1cdb83",
                          marginBottom: "0.55rem",
                          cursor: "pointer",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            fontSize: "0.73rem",
                            marginBottom: "0.22rem",
                          }}
                        >
                          <span
                            style={{
                              background: "#ffdf4b",
                              color: "#061326",
                              fontWeight: 900,
                              padding: "0.1rem 0.42rem",
                              borderRadius: "999px",
                              fontSize: "0.68rem",
                            }}
                          >
                            ⚡ 방금 실시간 도착
                          </span>
                          <span style={{ color: "#6ee7b7", fontWeight: 800 }}>
                            {topIncoming.region} · {topIncoming.status}
                          </span>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            fontSize: "0.8rem",
                            fontWeight: 800,
                          }}
                        >
                          <span>
                            {topIncoming.carModel} ({topIncoming.year})
                          </span>
                          <span style={{ color: "#ffdf4b" }}>
                            {topIncoming.exportPrice} (
                            {topIncoming.bonusDiff})
                          </span>
                        </div>
                      </div>
                    );
                  })()}

                  <div className="m-ticker-list">
                    {Array.from({ length: 8 }, (_, slotIdx) => {
                      const item =
                        LIVE_TICKER_ITEMS[
                          (mLiveOffset + slotIdx) % LIVE_TICKER_ITEMS.length
                        ];
                      const isFirst = slotIdx === 0;
                      const timeLabel =
                        slotIdx === 0
                          ? "방금 전"
                          : slotIdx === 1
                            ? "10초 전"
                            : `${slotIdx}분 전`;
                      return (
                        <button
                          key={`${item.id}-m-${slotIdx}-${
                            isFirst ? mLiveOffset : "steady"
                          }`}
                          type="button"
                          className="m-ticker-item"
                          style={
                            isFirst
                              ? {
                                  border: "1.5px solid #059669",
                                  background: "#ecfdf5",
                                }
                              : undefined
                          }
                          onClick={() => selectCarAndJumpToForm(item.carModel)}
                        >
                          <div className="m-ticker-top">
                            <span>
                              <strong style={{ color: "#059669" }}>
                                [{timeLabel}]
                              </strong>{" "}
                              {item.region} · {item.carModel} ({item.year})
                            </span>
                            <span className="m-ticker-badge">
                              {item.bonusDiff}
                            </span>
                          </div>
                          <div className="m-ticker-btm">
                            <span>
                              기존 {item.domesticQuote} ({item.status})
                            </span>
                            <strong>→ {item.exportPrice}</strong>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </section>

                {/* Mobile Swipeable Real Comparison Cards (KPRO 14 Cars) */}
                <section className="m-section-card">
                  <div className="m-sec-head">
                    <h2>폐차·내수 vs 병국이 바이어 직통 3대 경로 비교</h2>
                  </div>
                  <p className="m-sec-sub">
                    과장된 미끼 숫자가 아닌, 왜 해외 바이어 직거래가 돈이 더 남는지 팩트로 비교하세요.
                  </p>
                  <div className="m-hscroll-cards">
                    {KPRO_COMPARISON_SLIDES.slice(0, 8).map((slide) => (
                      <article
                        key={slide.id}
                        className="m-comp-card"
                        onClick={() => selectCarAndJumpToForm(slide.carName)}
                      >
                        <img
                          src={slide.imageUrl}
                          alt={slide.carName}
                          width={220}
                          height={155}
                          loading="lazy"
                        />
                        <div className="m-comp-info">
                          <div className="m-comp-title">
                            <strong>{slide.carName}</strong>
                            <span>{slide.year}</span>
                          </div>
                          <div
                            className="m-comp-row"
                            style={{
                              flexDirection: "column",
                              alignItems: "flex-start",
                              gap: "0.2rem",
                              background: "#f8fafc",
                              padding: "0.45rem",
                              borderRadius: "6px",
                            }}
                          >
                            <span style={{ color: "#dc2626", fontWeight: 800 }}>
                              😢 타사·폐차장 설움
                            </span>
                            <span style={{ fontSize: "0.74rem", lineHeight: 1.4 }}>
                              {slide.domesticPrice}
                            </span>
                          </div>
                          <div
                            className="m-comp-row is-export"
                            style={{
                              flexDirection: "column",
                              alignItems: "flex-start",
                              gap: "0.2rem",
                              background: "#ecfdf5",
                              padding: "0.45rem",
                              borderRadius: "6px",
                            }}
                          >
                            <span style={{ color: "#057a44", fontWeight: 900 }}>
                              🔥 병국이가 더 드린 이유
                            </span>
                            <strong style={{ fontSize: "0.75rem", lineHeight: 1.4 }}>
                              {slide.exportPrice}
                            </strong>
                          </div>
                        </div>
                        <div className="m-comp-diff">
                          💥 <strong>{slide.diffNumber}</strong>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>

                {/* 5-Step Process on Mobile */}
                <section className="m-section-card">
                  <div className="m-sec-head">
                    <h2>비대면 원스톱 당일 수출 5단계</h2>
                  </div>
                  <div className="m-steps-stack">
                    {KPRO_FIVE_STEPS.map((st) => (
                      <div key={st.stepNumber} className="m-step-row">
                        <img
                          src={st.iconUrl}
                          alt={st.title}
                          width={46}
                          height={46}
                          loading="lazy"
                        />
                        <div>
                          <strong>
                            STEP {st.stepNumber}. {st.title}
                          </strong>
                          <p>{st.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Verified Customer Reviews on Mobile */}
                <section className="m-section-card">
                  <div className="m-sec-head">
                    <h2>이차어디가(병국이수출) 실제 출장 매입후기</h2>
                  </div>
                  <p className="m-sec-sub">
                    폐차·내수 감가 대신 해외 바이어 최고가로 당일 송금받으신 전국 차주님들의 생생한 직수출 후기입니다.
                  </p>
                  <div className="m-vehicle-stack">
                    {CUSTOMER_REVIEWS.slice(0, mReviewCount).map((rev) => (
                      <article
                        key={rev.id}
                        className="m-vehicle-item"
                        onClick={() => selectCarAndJumpToForm(rev.carModel)}
                      >
                        <img
                          src={rev.imageUrl || "/images/kpro/car_20.jpg?v=navyplate1"}
                          alt={rev.carModel}
                          width={110}
                          height={82}
                          loading="lazy"
                        />
                        <div className="m-vehicle-body">
                          <span
                            className="m-vehicle-badge"
                            style={
                              rev.date.includes("오늘")
                                ? { background: "#dc2626", color: "#ffffff" }
                                : undefined
                            }
                          >
                            {rev.date} · {rev.region}
                          </span>
                          <h3>{rev.carModel}</h3>
                          <div
                            style={{
                              background:
                                rev.starType === "seven"
                                  ? "linear-gradient(90deg, #fffbeb 0%, #fef3c7 100%)"
                                  : "#f8fafc",
                              border:
                                rev.starType === "seven"
                                  ? "1px solid #f59e0b"
                                  : "1px solid #cbd5e1",
                              borderRadius: "6px",
                              padding: "0.3rem 0.45rem",
                              marginTop: "0.2rem",
                              marginBottom: "0.2rem",
                              fontSize: "0.7rem",
                            }}
                          >
                            <div
                              style={{
                                fontWeight: 900,
                                color: rev.starType === "seven" ? "#b45309" : "#0f172a",
                              }}
                            >
                              {rev.starBadge || "⭐⭐⭐⭐⭐⭐⭐ (별 5개 만점에 7개!)"}
                            </div>
                            {rev.starQuote && (
                              <div style={{ color: "#475569", fontWeight: 700, marginTop: "0.1rem" }}>
                                💬 &ldquo;{rev.starQuote}&rdquo;
                              </div>
                            )}
                          </div>
                          <p className="m-vehicle-years">{rev.title}</p>
                          <div
                            className="m-vehicle-prices"
                            style={{
                              flexDirection: "column",
                              alignItems: "flex-start",
                              gap: "0.2rem",
                            }}
                          >
                            <span>❌ {rev.previousOffer}</span>
                            <strong>⭕ {rev.finalExportPrice}</strong>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                  {mReviewCount < CUSTOMER_REVIEWS.length && (
                    <div className="m-direct-row" style={{ marginTop: "0.45rem" }}>
                      <button
                        type="button"
                        className="m-btn-outline"
                        onClick={() =>
                          setMReviewCount((prev) =>
                            Math.min(CUSTOMER_REVIEWS.length, prev + 12)
                          )
                        }
                      >
                        실제 매입후기 더보기
                      </button>
                      <button
                        type="button"
                        className="m-btn-outline"
                        onClick={() => setMReviewCount(CUSTOMER_REVIEWS.length)}
                      >
                        매입후기 전체 펼치기
                      </button>
                    </div>
                  )}
                </section>
              </>
            )}

            {/* TAB 2: Mobile Interactive Price Calculator */}
            {activeTab === "calc" && (
              <section className="m-section-card">
                <div className="m-sec-head">
                  <Calculator size={18} color="#057a44" />
                  <h2>모바일 3대 경로(폐차·내수·수출) 가치 진단기</h2>
                </div>
                <p className="m-sec-sub">
                  허위 미끼 가격표 대신, 내 차가 왜 폐차·내수에서 손해 보는지와 해외 바이어가 왜 웃돈을 주는지 즉시 진단합니다.
                </p>

                <div className="m-field">
                  <span className="m-label">1. 제조사 선택</span>
                  <div className="m-chip-grid">
                    {SIMULATOR_CATALOG.map((maker, idx) => (
                      <button
                        key={maker.makerId}
                        type="button"
                        className={`m-chip-btn ${
                          simMakerIdx === idx ? "is-selected" : ""
                        }`}
                        onClick={() => {
                          setSimMakerIdx(idx);
                          setSimModelIdx(0);
                        }}
                      >
                        {maker.makerName}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="m-field">
                  <span className="m-label">2. 대표 차종 선택</span>
                  <div className="m-chip-grid">
                    {currentSimMaker.models.map((mdl, idx) => (
                      <button
                        key={mdl.modelId}
                        type="button"
                        className={`m-chip-btn ${
                          simModelIdx === idx ? "is-selected" : ""
                        }`}
                        onClick={() => setSimModelIdx(idx)}
                      >
                        {mdl.modelName}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="m-field">
                  <span className="m-label">
                    3. 바이어 추가금 옵션 (중복 선택 가능)
                  </span>
                  <div className="m-bonus-list">
                    {SIMULATOR_OPTION_BONUSES.map((opt) => {
                      const checked = selectedBonuses.includes(opt.id);
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          className={`m-bonus-item ${
                            checked ? "is-checked" : ""
                          }`}
                          onClick={() =>
                            setSelectedBonuses((prev) =>
                              prev.includes(opt.id)
                                ? prev.filter((i) => i !== opt.id)
                                : [...prev, opt.id]
                            )
                          }
                        >
                          <span>{checked ? "☑" : "☐"} {opt.label}</span>
                          <strong style={{ fontSize: "0.75rem" }}>{opt.desc}</strong>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="m-calc-result-box">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.5rem",
                      textAlign: "left",
                    }}
                  >
                    <div
                      style={{
                        background: "rgba(15, 23, 42, 0.55)",
                        padding: "0.65rem",
                        borderRadius: "8px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: 800,
                          color: "#fca5a5",
                          display: "block",
                        }}
                      >
                        ❌ 1·2경로 (폐차·국내매매) 진행 시 손해 이유
                      </span>
                      <span style={{ fontSize: "0.8rem", color: "#e2e8f0" }}>
                        {currentSimModel.memoryStory}
                      </span>
                    </div>
                    <div
                      style={{
                        background: "rgba(5, 122, 68, 0.25)",
                        padding: "0.65rem",
                        borderRadius: "8px",
                        border: "1px solid rgba(28, 219, 131, 0.4)",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: 800,
                          color: "#ffdf4b",
                          display: "block",
                        }}
                      >
                        ⭕ 3경로 (병국이 바이어 직통) 웃돈 이유
                      </span>
                      <strong style={{ fontSize: "0.82rem", color: "#ffffff" }}>
                        {currentSimModel.overseasStory}
                      </strong>
                    </div>
                    <p
                      className="m-calc-country"
                      style={{ color: "#6ee7b7", fontWeight: 800 }}
                    >
                      💥 {currentSimModel.heartPromise}
                    </p>
                  </div>
                  <button
                    type="button"
                    className="m-submit-cta"
                    style={{ marginTop: "0.75rem" }}
                    onClick={() =>
                      selectCarAndJumpToForm(currentSimModel.modelName)
                    }
                  >
                    <span>이 차종 바이어 직통 시세 신청하기</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              </section>
            )}

            {/* TAB 3: Real Vehicle Price Cards */}
            {activeTab === "vehicles" && (
              <section className="m-section-card">
                <div className="m-sec-head">
                  <CarFront size={18} color="#057a44" />
                  <h2>차종별 해외 직수출 우대 시세표</h2>
                </div>
                <p className="m-sec-sub">
                  터치하시면 해당 차종으로 10초 무료상담이 자동 입력됩니다.
                </p>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.35rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  {["전체", "승용·세단", "SUV·RV", "화물·트럭", "수입차"].map(
                    (cat) => {
                      const active = mSelectedCat === cat;
                      return (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => setMSelectedCat(cat)}
                          style={{
                            padding: "0.38rem 0.65rem",
                            borderRadius: "999px",
                            border: active
                              ? "1.5px solid #057a44"
                              : "1px solid #cbd5e1",
                            background: active ? "#057a44" : "#f8fafc",
                            color: active ? "#ffffff" : "#334155",
                            fontSize: "0.76rem",
                            fontWeight: 800,
                            cursor: "pointer",
                          }}
                        >
                          {cat}
                        </button>
                      );
                    }
                  )}
                </div>
                <div className="m-vehicle-stack">
                  {(() => {
                    const nowKst = new Date(Date.now() + 9 * 3600 * 1000);
                    const daySeed = Math.floor(nowKst.getTime() / 86400000);
                    const baseList =
                      mSelectedCat === "전체"
                        ? EXPORT_VEHICLES
                        : EXPORT_VEHICLES.filter((v) => v.category === mSelectedCat);
                    const len = baseList.length;
                    const shift = len > 0 ? (daySeed * 2) % len : 0;
                    const rotatedList =
                      mSelectedCat === "전체" && len > 2
                        ? [...baseList.slice(shift), ...baseList.slice(0, shift)]
                        : baseList;

                    return rotatedList.map((v, vIdx) => {
                      const daysAgo = Math.floor(vIdx / 2);
                      const slotInDay = (vIdx % 2) + 1;
                      const d = new Date(nowKst.getTime() - daysAgo * 86400000);
                      const mm = String(d.getUTCMonth() + 1).padStart(2, "0");
                      const dd = String(d.getUTCDate()).padStart(2, "0");
                      const dailyBadge =
                        daysAgo === 0
                          ? `🔥 오늘(${mm}.${dd}) ${slotInDay}호차 매입완료`
                          : daysAgo === 1
                            ? `✓ 어제(${mm}.${dd}) ${slotInDay}호차 매입완료`
                            : `✓ ${mm}월 ${dd}일 (${slotInDay}호차 매입완료)`;

                      return (
                    <article
                      key={v.id}
                      className="m-vehicle-item"
                      onClick={() => selectCarAndJumpToForm(v.name)}
                    >
                      <img
                        src={v.imageUrl}
                        alt={v.imageAlt}
                        width={120}
                        height={90}
                        loading="lazy"
                      />
                      <div className="m-vehicle-body">
                        <span
                          className="m-vehicle-badge"
                          style={{
                            background: vIdx < 2 ? "#dc2626" : "#057a44",
                            color: "#ffffff",
                          }}
                        >
                          {dailyBadge}
                        </span>
                        <h3>{v.name}</h3>
                        <p className="m-vehicle-years">{v.years}</p>
                        <div
                          className="m-vehicle-prices"
                          style={{
                            flexDirection: "column",
                            alignItems: "flex-start",
                            gap: "0.2rem",
                          }}
                        >
                          <span>❌ {v.scrapPriceRange}</span>
                          <strong>⭕ {v.exportPriceRange}</strong>
                        </div>
                      </div>
                    </article>
                      );
                    });
                  })()}
                </div>
              </section>
            )}

            {/* TAB 4: Byungguk Real Field Videos */}
            {activeTab === "videos" && (
              <section className="m-section-card">
                <div className="m-sec-head">
                  <Play size={18} color="#057a44" />
                  <h2>유튜브 &lsquo;이차어디가&rsquo; 병국이 현장직캠</h2>
                </div>
                <p className="m-sec-sub">
                  얼굴과 이름을 걸고 전국 현장에서 직접 매입하는 실제 영상입니다.
                </p>
                <div className="m-video-grid">
                  {BYUNGGUK_FIELD_VIDEOS.map((vid) => (
                    <article
                      key={vid.id}
                      className="m-video-card"
                      onClick={() => {
                        setActiveVideo(vid);
                        videoDialogRef.current?.showModal();
                      }}
                    >
                      <div className="m-video-thumb">
                        <img
                          src={vid.imageSrc}
                          alt={vid.title}
                          width={180}
                          height={280}
                          loading="lazy"
                        />
                        <span className="m-video-play">▶ 영상재생</span>
                      </div>
                      <div className="m-video-meta">
                        <span>{vid.badge}</span>
                        <h3>{vid.title}</h3>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {/* TAB 5: Global Buyer Countries & Anti-Scam Zero-Deduction Guarantee */}
            {activeTab === "guarantee" && (
              <>
                <section className="m-section-card">
                  <div className="m-sec-head">
                    <Globe size={18} color="#057a44" />
                    <h2>해외 4대 권역 바이어 직거래 매입 기준</h2>
                  </div>
                  <div className="m-country-stack">
                    {GLOBAL_BUYER_COUNTRIES.map((c) => (
                      <div key={c.id} className="m-country-item">
                        <div className="m-country-top">
                          <strong>
                            {c.flagEmoji} {c.countryName}
                          </strong>
                          <span>{c.buyerDemandBadge}</span>
                        </div>
                        <p className="m-country-rule">{c.yearAndConditionRule}</p>
                        <div className="m-chip-grid" style={{ marginTop: "0.4rem" }}>
                          {c.preferredModels.map((pm) => (
                            <button
                              key={pm}
                              type="button"
                              className="m-chip-btn"
                              onClick={() => selectCarAndJumpToForm(pm)}
                            >
                              {pm}
                            </button>
                          ))}
                        </div>
                        <div className="m-country-bonus">
                          {c.averageBonusVsScrap}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="m-section-card is-dark">
                  <div className="m-sec-head">
                    <ShieldCheck size={18} color="#1cdb83" />
                    <h2 style={{ color: "#ffffff" }}>
                      허위견적·부당감가 ZERO 보증서
                    </h2>
                  </div>
                  <div className="m-scam-stack">
                    {EXPORT_SCAM_PREVENTION_CHECKLIST.map((row) => (
                      <div key={row.category} className="m-scam-card">
                        <strong>{row.category}</strong>
                        <p className="m-scam-bad">✕ 악덕 브로커: {row.badBrokerPractice}</p>
                        <p className="m-scam-good">
                          ✓ 병국이 보증: {row.byunggukGuarantee}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              </>
            )}
          </main>

          {/* Floating Mobile Bottom-Right Byungguk Photo + TOP Button */}
          <div
            className={`floating-byungguk-top-dock is-mobile-dock ${
              mScrolled ? "is-visible" : ""
            }`}
            role="region"
            aria-label="병국이 상담 및 맨 위로 이동"
          >
            <button
              type="button"
              className="floating-byungguk-buddy"
              onClick={() => {
                setActiveTab("home");
                const el = document.getElementById("m-quick-form");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              title="병국이 10초 무료상담"
            >
              <div className="buddy-avatar-ring">
                <img
                  src="/images/byungguk/ZGRimSgReGw-maxres1.jpg"
                  alt="수출마스터 병국이"
                  width={46}
                  height={46}
                />
                <span className="buddy-online-dot" aria-hidden="true" />
              </div>
              <div className="buddy-text-col">
                <span className="buddy-tag">● 병국이 대기</span>
                <strong>10초 무료상담</strong>
              </div>
            </button>

            <button
              type="button"
              className="floating-top-btn"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="맨 위로 이동 (TOP)"
            >
              <span className="top-arrow" aria-hidden="true">
                ▲
              </span>
              <span className="top-label">TOP</span>
            </button>
          </div>

          {/* Sticky Mobile App Bottom Action Bar */}
          <footer className="m-bottom-dock">
            <button
              type="button"
              className="m-dock-quote-btn"
              onClick={() => {
                setActiveTab("home");
                const el = document.getElementById("m-quick-form");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span>10초 시세신청</span>
            </button>
            <a href={telHref} className="m-dock-call-btn">
              <PhoneCall size={16} aria-hidden="true" />
              <span>전화상담 ({SITE_CONFIG.phoneFormatted})</span>
            </a>
            <a href={smsHref} className="m-dock-sms-btn">
              <MessageSquare size={16} aria-hidden="true" />
              <span>문자전송</span>
            </a>
          </footer>
        </div>
      </div>

      {/* Video Proof Dialog */}
      <dialog
        ref={videoDialogRef}
        className="site-dialog"
        onClick={(e) => {
          if (e.target === videoDialogRef.current) {
            videoDialogRef.current.close();
          }
        }}
      >
        <div className="dialog-header">
          <strong className="text-obsidian">{activeVideo.title}</strong>
          <button
            type="button"
            className="dialog-close-btn"
            onClick={() => videoDialogRef.current?.close()}
          >
            닫기 ✕
          </button>
        </div>
        <div className="dialog-body">
          <div className="video-dialog-frame">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${activeVideo.videoId}?rel=0&playsinline=1`}
              title={activeVideo.title}
              style={{ width: "100%", height: "100%", border: 0 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <button
            type="button"
            className="m-submit-cta"
            onClick={() => {
              videoDialogRef.current?.close();
              selectCarAndJumpToForm(activeVideo.carModelForQuote);
            }}
          >
            <span>{activeVideo.carModelForQuote} 무료 시세 조회하기</span>
          </button>
        </div>
      </dialog>
    </div>
  );
}
