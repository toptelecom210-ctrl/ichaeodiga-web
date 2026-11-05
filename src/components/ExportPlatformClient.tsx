"use client";

import React, { useCallback, useEffect, useId, useRef, useState } from "react";
import {
  PhoneCall,
  MessageSquare,
  CheckCircle2,
  ShieldCheck,
  Truck,
  Banknote,
  FileCheck2,
  Sparkles,
  ArrowRight,
  Award,
  Clock,
  HelpCircle,
  BookOpenCheck,
  RefreshCw,
  Play,
  CarFront,
  Calculator,
  MapPin,
  CalendarClock,
  TrendingUp,
  Send,
  FileSpreadsheet,
  AlertCircle,
} from "lucide-react";
import {
  SITE_CONFIG,
  LIVE_TICKER_ITEMS,
  EXPORT_VEHICLES,
  COMPARISON_ROWS,
  REQUIRED_DOCUMENTS_TABLE,
  CUSTOMER_REVIEWS,
  FAQ_ITEMS,
  CAR_MODELS_DATALIST,
  REGIONS_LIST,
  BYUNGGUK_FIELD_VIDEOS,
  SIMULATOR_CATALOG,
  SIMULATOR_OPTION_BONUSES,
  LIVE_QUOTE_BOARD_ITEMS,
  REGIONAL_DISPATCH_HUBS,
  KPRO_HERO_SLIDES,
  KPRO_COMPARISON_SLIDES,
  KPRO_FIVE_STEPS,
  KPRO_DIFFERENTIATORS,
  GLOBAL_BUYER_COUNTRIES,
  EXPORT_SCAM_PREVENTION_CHECKLIST,
  type VehicleCategory,
  type ByunggukVideoProof,
} from "@/data/exportData";

interface SubmittedQuote {
  carModel: string;
  year: string;
  mileageBand: string;
  region: string;
  phone: string;
  notes: string;
}

// Faithful scrollIntoViewAsync helper from `scroll-completion-effects` guide
function scrollIntoViewAsync(
  element: Element,
  options: ScrollIntoViewOptions,
  scroller: Window = window
): Promise<void> {
  const result = element.scrollIntoView(options) as unknown;

  if (result instanceof Promise) {
    return result as Promise<void>;
  }

  return new Promise((resolve) => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const finish = () => {
      clearTimeout(timeoutId);
      scroller.removeEventListener("scrollend", finish);
      scroller.removeEventListener("scroll", onScroll);
      resolve();
    };

    const onScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(finish, 100);
    };

    scroller.addEventListener("scrollend", finish, { once: true });
    scroller.addEventListener("scroll", onScroll, { passive: true });
    timeoutId = setTimeout(finish, 100);
  });
}

export default function ExportPlatformClient() {
  const uid = useId();
  const formRef = useRef<HTMLFormElement | null>(null);
  const quoteCardRef = useRef<HTMLDivElement | null>(null);
  const carInputRef = useRef<HTMLInputElement | null>(null);
  const simPhoneInputRef = useRef<HTMLInputElement | null>(null);
  const successDialogRef = useRef<HTMLDialogElement | null>(null);
  const privacyDialogRef = useRef<HTMLDialogElement | null>(null);
  const videoModalDialogRef = useRef<HTMLDialogElement | null>(null);
  const quickConsultDialogRef = useRef<HTMLDialogElement | null>(null);
  const phoneLastInputRef = useRef<HTMLInputElement | null>(null);
  const quickModalPhoneLastRef = useRef<HTMLInputElement | null>(null);
  const graphSectionRef = useRef<HTMLElement | null>(null);
  const bottomSentinelRef = useRef<HTMLDivElement | null>(null);
  const scrollTokenRef = useRef(0);

  const [selectedCategory, setSelectedCategory] =
    useState<VehicleCategory>("전체");
  const [carModel, setCarModel] = useState("");
  const [year, setYear] = useState("2014~2016년식");
  const [mileageBand, setMileageBand] = useState("15~25만km");
  const [region, setRegion] = useState("경기/인천/서울");
  const [phone, setPhone] = useState("");
  const [phonePrefix, setPhonePrefix] = useState("010");
  const [phoneMid, setPhoneMid] = useState("");
  const [phoneLast, setPhoneLast] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedQuote, setSubmittedQuote] = useState<SubmittedQuote | null>(
    null
  );
  const [activeVideo, setActiveVideo] = useState<ByunggukVideoProof | null>(
    null
  );
  const [isGraphAnimated, setIsGraphAnimated] = useState(false);
  const [activeStepIdx, setActiveStepIdx] = useState(0);
  const [heroSlideIdx, setHeroSlideIdx] = useState(0);

  // Funnel 2 State: Cascading Vehicle Price Simulator (국산/수입 -> 제조사 -> 모델 -> 세부연식 -> 옵션)
  const [simOrigin, setSimOrigin] = useState<"국산차" | "수입차">("국산차");
  const [simMakerId, setSimMakerId] = useState<string>("hyundai");
  const [simModelId, setSimModelId] = useState<string>("avante");
  const [simSubGen, setSimSubGen] = useState<string>(
    "아반떼 AD (2015~2019년식)"
  );
  const [simSelectedOptions, setSimSelectedOptions] = useState<string[]>([
    "sunroof",
    "smartkey",
  ]);

  // Funnel 4 State: Regional Free Visit Reservation
  const [selectedHubId, setSelectedHubId] = useState<string>("all");
  const [visitType, setVisitType] = useState<"수출 최고가 판매" | "폐차 비교견적">(
    "수출 최고가 판매"
  );
  const [visitTimeSlot, setVisitTimeSlot] = useState<string>(
    "오늘 당일 즉시 방문/상담"
  );

  const [hasConverted, setHasConverted] = useState(false);
  const [moebiusCycles, setMoebiusCycles] = useState<number[]>([1]);
  const [reviewYearFilter, setReviewYearFilter] = useState<
    "ALL" | "2026" | "2025" | "2024"
  >("ALL");
  const [visibleReviewCount, setVisibleReviewCount] = useState<number>(12);
  const [liveRotOffset, setLiveRotOffset] = useState<number>(0);
  const [liveTodayCount, setLiveTodayCount] = useState<number>(164);
  const [isScrolledDown, setIsScrolledDown] = useState<boolean>(false);
  const [snsActiveTab, setSnsActiveTab] = useState<
    "ALL" | "youtube" | "instagram" | "tiktok" | "kakao"
  >("ALL");

  const filteredReviews100 =
    reviewYearFilter === "ALL"
      ? CUSTOMER_REVIEWS
      : CUSTOMER_REVIEWS.filter((r) => r.date.startsWith(reviewYearFilter));

  // Derived Simulator Model Data
  const availableMakers = SIMULATOR_CATALOG.filter(
    (m) => m.origin === simOrigin
  );
  const currentMaker =
    availableMakers.find((m) => m.makerId === simMakerId) ||
    availableMakers[0] ||
    SIMULATOR_CATALOG[0];
  const currentSimModel =
    currentMaker.models.find((mdl) => mdl.modelId === simModelId) ||
    currentMaker.models[0];

  const totalOptionBonusMan = SIMULATOR_OPTION_BONUSES.filter((opt) =>
    simSelectedOptions.includes(opt.id)
  ).reduce((acc, cur) => acc + cur.bonusMan, 0);

  const calculatedExportMinMan =
    currentSimModel.exportMinMan + Math.round(totalOptionBonusMan * 0.5);
  const calculatedExportMaxMan =
    currentSimModel.exportMaxMan + totalOptionBonusMan;
  const calculatedMaxProfitMan =
    calculatedExportMaxMan - currentSimModel.scrapMinMan;

  const currentRegionalHub =
    REGIONAL_DISPATCH_HUBS.find((h) => h.id === selectedHubId) ||
    REGIONAL_DISPATCH_HUBS[0];

  // Smooth scroll + post-scroll focus/highlight (`scroll-completion-effects` guide)
  const scrollToSectionAndFocus = useCallback(
    async (sectionId: string, focusInput = false) => {
      const target = document.getElementById(sectionId);
      if (!target) return;

      const token = ++scrollTokenRef.current;
      quoteCardRef.current?.classList.remove("pulse-highlight");

      await scrollIntoViewAsync(target, {
        behavior: "smooth",
        block: "start",
      });

      if (token !== scrollTokenRef.current) return;

      if (focusInput && carInputRef.current) {
        quoteCardRef.current?.classList.add("pulse-highlight");
        carInputRef.current.focus({ preventScroll: true });
        setTimeout(() => {
          quoteCardRef.current?.classList.remove("pulse-highlight");
        }, 1800);
      }
    },
    []
  );

  const openVideoProofModal = useCallback((video: ByunggukVideoProof) => {
    setActiveVideo(video);
    videoModalDialogRef.current?.showModal();
  }, []);

  const openQuickConsultModal = useCallback((defaultCar?: string) => {
    if (defaultCar) {
      setCarModel(defaultCar);
    }
    quickConsultDialogRef.current?.showModal();
  }, []);

  const handleSplitPhoneMidChange = (
    rawVal: string,
    nextInputRef: React.RefObject<HTMLInputElement | null>
  ) => {
    const digits = rawVal.replace(/\D/g, "").slice(0, 4);
    setPhoneMid(digits);
    setPhone(`${phonePrefix}-${digits}-${phoneLast}`);
    if (digits.length === 4) {
      nextInputRef.current?.focus();
    }
  };

  const handleSplitPhoneLastChange = (rawVal: string) => {
    const digits = rawVal.replace(/\D/g, "").slice(0, 4);
    setPhoneLast(digits);
    setPhone(`${phonePrefix}-${phoneMid}-${digits}`);
  };

  // Mark conversion complete when user calls, texts, or submits any funnel form
  const markInquiryCompleted = useCallback((quoteData?: SubmittedQuote) => {
    setHasConverted(true);
    if (videoModalDialogRef.current?.open) {
      videoModalDialogRef.current.close("converted");
    }
    if (quickConsultDialogRef.current?.open) {
      quickConsultDialogRef.current.close("converted");
    }
    if (quoteData) {
      setSubmittedQuote(quoteData);
      successDialogRef.current?.showModal();
    }
  }, []);

  // KPRO Benchmark: 2-second auto-cycling active card highlight for 6-Card Grid (Intro + 5 Steps), 4-second Hero Slider, and 2.2-second Live Inquiry/Remittance Rotation
  useEffect(() => {
    const stepTimer = setInterval(() => {
      setActiveStepIdx((prev) => (prev + 1) % (KPRO_FIVE_STEPS.length + 1));
    }, 2000);
    const heroTimer = setInterval(() => {
      setHeroSlideIdx((prev) => (prev + 1) % KPRO_HERO_SLIDES.length);
    }, 4000);
    const liveRotTimer = setInterval(() => {
      setLiveRotOffset((prev) => (prev + 1) % LIVE_TICKER_ITEMS.length);
      setLiveTodayCount((prev) => (prev < 299 ? prev + 1 : 164));
    }, 2200);
    return () => {
      clearInterval(stepTimer);
      clearInterval(heroTimer);
      clearInterval(liveRotTimer);
    };
  }, []);

  // Track scroll position for Floating Bottom-Right Byungguk Companion + TOP Button
  useEffect(() => {
    const onScroll = () => {
      setIsScrolledDown(window.scrollY > 140);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // KPRO Benchmark: Scroll-triggered rising bar graph animation (.box_graph .hei.move)
  useEffect(() => {
    const el = graphSectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsGraphAnimated(true);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Infinite Möbius Scroll Continuation
  useEffect(() => {
    const sentinel = bottomSentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting && !hasConverted) {
          setMoebiusCycles((prev) =>
            prev.length < 12 ? [...prev, prev.length + 1] : prev
          );
        }
      },
      { rootMargin: "320px" }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [hasConverted]);

  // Sync aria-invalid and provide WeakMap fallback for :user-invalid (per `validate-input-after-interaction`)
  useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    const dirtyState = new WeakMap<
      Element,
      { hasInteracted: boolean; hasBlurred: boolean }
    >();
    const supportsUserInvalid =
      typeof CSS !== "undefined" && CSS.supports("selector(:user-invalid)");

    const syncFieldState = (el: EventTarget | null) => {
      if (
        !(
          el instanceof HTMLInputElement ||
          el instanceof HTMLSelectElement ||
          el instanceof HTMLTextAreaElement
        )
      ) {
        return;
      }

      if (supportsUserInvalid) {
        const isUserInvalid = el.matches(":user-invalid");
        el.setAttribute("aria-invalid", isUserInvalid ? "true" : "false");
      } else {
        const isValid = el.checkValidity();
        el.classList.toggle("user-invalid-fallback", !isValid);
        el.classList.toggle("user-valid-fallback", isValid);
        if (!isValid) {
          el.setAttribute("aria-invalid", "true");
        } else {
          el.removeAttribute("aria-invalid");
        }
      }
    };

    const handleBlur = (e: Event) => {
      const target = e.target;
      if (target instanceof Element) {
        const state = dirtyState.get(target) || {
          hasInteracted: false,
          hasBlurred: false,
        };
        state.hasBlurred = true;
        dirtyState.set(target, state);
        if (supportsUserInvalid || state.hasInteracted) {
          syncFieldState(target);
        }
      }
    };

    const handleInput = (e: Event) => {
      const target = e.target;
      if (target instanceof Element) {
        const state = dirtyState.get(target) || {
          hasInteracted: false,
          hasBlurred: false,
        };
        state.hasInteracted = true;
        dirtyState.set(target, state);
        if (target.hasAttribute("aria-invalid") || state.hasBlurred) {
          syncFieldState(target);
        }
      }
    };

    form.addEventListener("blur", handleBlur, true);
    form.addEventListener("input", handleInput);
    form.addEventListener("change", handleInput);

    return () => {
      form.removeEventListener("blur", handleBlur, true);
      form.removeEventListener("input", handleInput);
      form.removeEventListener("change", handleInput);
    };
  }, []);

  // Dialog light-dismiss fallback & reset returnValue on close (per `dialog` & `light-dismiss-a-dialog` guides)
  useEffect(() => {
    const dialogs = [
      successDialogRef.current,
      privacyDialogRef.current,
      videoModalDialogRef.current,
      quickConsultDialogRef.current,
    ].filter((d): d is HTMLDialogElement => d !== null);

    const cleanups: Array<() => void> = [];

    for (const dialog of dialogs) {
      const handleClose = () => {
        dialog.returnValue = "";
        if (dialog === videoModalDialogRef.current) {
          setActiveVideo(null);
        }
      };
      dialog.addEventListener("close", handleClose);
      cleanups.push(() => dialog.removeEventListener("close", handleClose));

      if (!("closedBy" in HTMLDialogElement.prototype)) {
        const handleBackdropClick = (event: MouseEvent) => {
          if (event.target !== dialog) return;
          const rect = dialog.getBoundingClientRect();
          const isDialogContent =
            rect.top <= event.clientY &&
            event.clientY <= rect.top + rect.height &&
            rect.left <= event.clientX &&
            event.clientX <= rect.left + rect.width;
          if (isDialogContent) return;
          dialog.close();
        };
        dialog.addEventListener("click", handleBackdropClick);
        cleanups.push(() =>
          dialog.removeEventListener("click", handleBackdropClick)
        );
      }
    }

    return () => {
      cleanups.forEach((fn) => fn());
    };
  }, []);

  const handleSelectVehicleForQuote = (vehicleName: string) => {
    if (videoModalDialogRef.current?.open) {
      videoModalDialogRef.current.close();
    }
    setCarModel(vehicleName);
    void scrollToSectionAndFocus("quote-form-section", true);
  };

  const handleLoadVehicleIntoSimulator = (
    vehicleId: string,
    vehicleName: string
  ) => {
    setCarModel(vehicleName);
    let mapped:
      | { origin: "국산차" | "수입차"; makerId: string; modelId: string }
      | undefined;
    if (vehicleId.startsWith("import-")) {
      mapped = { origin: "수입차", makerId: "benz-bmw-audi", modelId: "benz-e-c" };
    } else if (vehicleId.startsWith("truck-")) {
      mapped = vehicleName.includes("스타렉스")
        ? { origin: "국산차", makerId: "hyundai", modelId: "starex" }
        : { origin: "국산차", makerId: "hyundai", modelId: "porter2" };
    } else if (vehicleId.startsWith("suv-")) {
      mapped =
        vehicleName.includes("스포티지") || vehicleName.includes("쏘렌토")
          ? { origin: "국산차", makerId: "kia", modelId: "sportage" }
          : { origin: "국산차", makerId: "hyundai", modelId: "santafe" };
    } else if (vehicleId.startsWith("sedan-")) {
      mapped =
        vehicleName.includes("K5") || vehicleName.includes("K7")
          ? { origin: "국산차", makerId: "kia", modelId: "k5" }
          : vehicleName.includes("모닝") || vehicleName.includes("K3")
            ? { origin: "국산차", makerId: "kia", modelId: "morning-k3" }
            : { origin: "국산차", makerId: "hyundai", modelId: "avante" };
    }
    if (mapped) {
      setSimOrigin(mapped.origin);
      setSimMakerId(mapped.makerId);
      setSimModelId(mapped.modelId);
      const foundMaker = SIMULATOR_CATALOG.find(
        (m) => m.makerId === mapped.makerId
      );
      const foundModel = foundMaker?.models.find(
        (mdl) => mdl.modelId === mapped.modelId
      );
      if (foundModel?.subGenerations[0]) {
        setSimSubGen(foundModel.subGenerations[0]);
      }
    }
    void scrollToSectionAndFocus("price-simulator");
    setTimeout(() => {
      simPhoneInputRef.current?.focus({ preventScroll: true });
    }, 650);
  };

  const toggleSimOption = (optionId: string) => {
    setSimSelectedOptions((prev) =>
      prev.includes(optionId)
        ? prev.filter((id) => id !== optionId)
        : [...prev, optionId]
    );
  };

  const persistQuoteToServer = async (
    quotePayload: SubmittedQuote & { funnelSource: string }
  ) => {
    try {
      await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(quotePayload),
      });
    } catch {
      // Fallback gracefully if offline
    }
  };

  const handleSubmitQuote = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const quoteData: SubmittedQuote = {
      carModel: carModel || `${currentSimModel.modelName}`,
      year,
      mileageBand,
      region,
      phone,
      notes,
    };

    setIsSubmitting(true);
    await persistQuoteToServer({
      ...quoteData,
      funnelSource: "메인 1분 최고가 견적창 (★진짜고객DB)",
    });
    setIsSubmitting(false);
    markInquiryCompleted(quoteData);
  };

  const handleBoardCompareSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const activeRow =
      LIVE_QUOTE_BOARD_ITEMS[liveRotOffset % LIVE_QUOTE_BOARD_ITEMS.length];
    const quoteData: SubmittedQuote = {
      carModel: carModel || activeRow.carModel,
      year,
      mileageBand,
      region: region || activeRow.region,
      phone,
      notes: `[바이어 시세 대조 신청] 비교기준: ${activeRow.exportConfirmed}`,
    };

    setIsSubmitting(true);
    await persistQuoteToServer({
      ...quoteData,
      funnelSource: "실시간 견적원장 · 내차 바이어 시세 대조 (★진짜고객DB)",
    });
    setIsSubmitting(false);
    markInquiryCompleted(quoteData);
  };

  const handleSimulatorSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const selectedOptLabels = SIMULATOR_OPTION_BONUSES.filter((o) =>
      simSelectedOptions.includes(o.id)
    )
      .map((o) => o.label)
      .join(", ");

    const quoteData: SubmittedQuote = {
      carModel: `${currentMaker.makerName} ${currentSimModel.modelName}`,
      year: simSubGen,
      mileageBand,
      region,
      phone,
      notes: `[3대 경로 비교 & 바이어 직통 진단] 타깃국: ${currentSimModel.targetCountry} (우대옵션: ${
        selectedOptLabels || "기본"
      })`,
    };

    await persistQuoteToServer({
      ...quoteData,
      funnelSource: "실시간 시세계산기",
    });
    markInquiryCompleted(quoteData);
  };

  const handleRegionalVisitSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const quoteData: SubmittedQuote = {
      carModel: carModel || `${currentSimModel.modelName}`,
      year,
      mileageBand,
      region: `${currentRegionalHub.tabLabel} (${region})`,
      phone,
      notes: `[무료방문예약] 유형: ${visitType} / 희망시간: ${visitTimeSlot}`,
    };

    await persistQuoteToServer({
      ...quoteData,
      funnelSource: "전국 권역별 방문예약",
    });
    markInquiryCompleted(quoteData);
  };

  const filteredVehicles =
    selectedCategory === "전체"
      ? EXPORT_VEHICLES
      : EXPORT_VEHICLES.filter((v) => v.category === selectedCategory);

  const smsHref = `sms:${SITE_CONFIG.phone}?body=${encodeURIComponent(
    SITE_CONFIG.smsBody
  )}`;
  const telHref = `tel:${SITE_CONFIG.phone}`;

  return (
    <>
      {/* Top Executive Announcement Bar */}
      <div className="top-notice-bar">
        <div className="container top-notice-inner">
          <div className="top-notice-left">
            <span className="notice-badge">REAL FACE GUARANTEE</span>
            <span>
              🔥 <strong>타사 견적 3군데 먼저 받고 마지막에 오세요! 무조건 이겨드립니다</strong> ·
              현장 10원이라도 감가 시 <strong>유튜브 실명 박제 OK</strong> · <strong>고객 60%가 병국이 얼굴 믿고 차부터 보내는 곳</strong>
            </span>
          </div>
          <div className="top-sns-quick-row">
            <a
              href={SITE_CONFIG.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="top-sns-mini-pill is-youtube"
              title="이차어디가 공식 유튜브 바로가기"
            >
              <span>▶ 유튜브</span>
            </a>
            <a
              href={SITE_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="top-sns-mini-pill is-instagram"
              title="이차어디가 공식 인스타그램 바로가기"
            >
              <span>📸 인스타</span>
            </a>
            <a
              href={SITE_CONFIG.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="top-sns-mini-pill is-tiktok"
              title="이차어디가 공식 틱톡 바로가기"
            >
              <span>🎵 틱톡</span>
            </a>
            <a
              href={SITE_CONFIG.kakaoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="top-sns-mini-pill is-kakao"
              title="카카오톡 1:1 실시간 상담 연결"
            >
              <span>💬 카톡상담</span>
            </a>
          </div>
        </div>
      </div>

      {/* Sticky Header with Official 이차어디가 Logo & Single-Line Category Nav */}
      <header className="site-header">
        <div className="container header-inner">
          <button
            type="button"
            className="brand-logo"
            onClick={() =>
              void scrollToSectionAndFocus("quote-form-section", true)
            }
            aria-label="상단 무료 견적 신청창으로 이동"
          >
            <img
              src="/images/byungguk/avatar-1.jpg"
              alt="이차어디가 공식 로고"
              width={42}
              height={42}
              className="brand-logo-avatar"
            />
            <div>
              <span>{SITE_CONFIG.brandName}</span>
              <span className="brand-sub">
                수출마스터 병국(뺑국이) 직영센터
              </span>
            </div>
          </button>

          <nav className="main-nav" aria-label="주요 메뉴">
            <ul>
              <li>
                <a
                  href="#price-simulator"
                  onClick={(e) => {
                    e.preventDefault();
                    void scrollToSectionAndFocus("price-simulator");
                  }}
                >
                  실시간 시세계산기
                </a>
              </li>
              <li>
                <a
                  href="#live-quote-board"
                  onClick={(e) => {
                    e.preventDefault();
                    void scrollToSectionAndFocus("live-quote-board");
                  }}
                >
                  실시간 견적현황
                </a>
              </li>
              <li>
                <a
                  href="#export-vehicles"
                  onClick={(e) => {
                    e.preventDefault();
                    void scrollToSectionAndFocus("export-vehicles");
                  }}
                >
                  차종별 수출시세
                </a>
              </li>
              <li>
                <a
                  href="#regional-visit-section"
                  onClick={(e) => {
                    e.preventDefault();
                    void scrollToSectionAndFocus("regional-visit-section");
                  }}
                >
                  전국 무료방문예약
                </a>
              </li>
              <li>
                <a
                  href="#sns-channel-hub"
                  onClick={(e) => {
                    e.preventDefault();
                    void scrollToSectionAndFocus("sns-channel-hub");
                  }}
                  style={{
                    color: "#057a44",
                    fontWeight: 900,
                  }}
                >
                  SNS·카톡채널
                </a>
              </li>
              <li>
                <a
                  href="#byungguk-videos"
                  onClick={(e) => {
                    e.preventDefault();
                    void scrollToSectionAndFocus("byungguk-videos");
                  }}
                >
                  병국이 현장직캠
                </a>
              </li>
              <li>
                <a
                  href="#real-reviews"
                  onClick={(e) => {
                    e.preventDefault();
                    void scrollToSectionAndFocus("real-reviews");
                  }}
                >
                  실제 매입후기
                </a>
              </li>
            </ul>
          </nav>

          <div className="header-cta-group">
            <a
              href="/m"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.3rem",
                padding: "0.48rem 0.78rem",
                borderRadius: "999px",
                background: "#057a44",
                color: "#ffffff",
                fontSize: "0.8rem",
                fontWeight: 800,
                whiteSpace: "nowrap",
              }}
              title="스마트폰 전용 모바일 앱 버전(/m) 열기"
            >
              <span>📱 모바일버전</span>
            </a>
            <a
              href={telHref}
              className="btn-call-header"
              onClick={() => markInquiryCompleted()}
            >
              <PhoneCall size={15} aria-hidden="true" />
              <span>직통 {SITE_CONFIG.phoneFormatted}</span>
            </a>
          </div>
        </div>

        {/* Dedicated Single-Line Swipeable Mobile Quick Nav (Visible on Mobile/Tablet < 1024px) */}
        <nav className="mobile-quick-nav" aria-label="모바일 한줄 빠른 메뉴">
          <a
            href="/m"
            className="mobile-nav-chip"
            style={{
              background: "#057a44",
              color: "#ffffff",
              borderColor: "#1cdb83",
            }}
          >
            📱 앱 전용모드(/m)
          </a>
          <button
            type="button"
            className="mobile-nav-chip"
            onClick={() =>
              void scrollToSectionAndFocus("quote-form-section", true)
            }
          >
            1분 최고가견적
          </button>
          <button
            type="button"
            className="mobile-nav-chip"
            onClick={() => void scrollToSectionAndFocus("price-simulator")}
          >
            실시간 시세계산기
          </button>
          <button
            type="button"
            className="mobile-nav-chip"
            onClick={() => void scrollToSectionAndFocus("live-quote-board")}
          >
            실시간 견적원장
          </button>
          <button
            type="button"
            className="mobile-nav-chip"
            onClick={() => void scrollToSectionAndFocus("export-vehicles")}
          >
            차종별 수출시세
          </button>
          <button
            type="button"
            className="mobile-nav-chip"
            onClick={() =>
              void scrollToSectionAndFocus("regional-visit-section")
            }
          >
            전국 무료방문
          </button>
          <button
            type="button"
            className="mobile-nav-chip"
            onClick={() => void scrollToSectionAndFocus("sns-channel-hub")}
            style={{
              background: "#fee500",
              color: "#3c1e1e",
              fontWeight: 900,
            }}
          >
            💬 SNS·카톡채널
          </button>
          <button
            type="button"
            className="mobile-nav-chip"
            onClick={() => void scrollToSectionAndFocus("byungguk-videos")}
          >
            병국이 현장직캠
          </button>
          <button
            type="button"
            className="mobile-nav-chip"
            onClick={() => void scrollToSectionAndFocus("real-reviews")}
          >
            실제 매입후기
          </button>
        </nav>
      </header>

      <main>
        {/* KPRO BENCHMARK HERO: Visual Slider (/images/kpro/visual_1~3.jpg) + Byungguk Face/Videos + 2-Field Floating Consultation Box (.main_consult) */}
        <section className="kpro-top-visual" id="quote-form-section">
          <div
            className="kpro-visual-slide"
            style={{
              backgroundImage: `url("${
                KPRO_HERO_SLIDES[heroSlideIdx]?.imageUrl ||
                "/images/kpro/visual_1.jpg"
              }")`,
            }}
          >
            <div className="kpro-visual-overlay" aria-hidden="true" />
            <div className="container kpro-visual-inner">
              {/* Left Column: KPRO Visual Headline + Byungguk Real Face & Field Videos */}
              <div className="kpro-visual-left-col">
                <div className="hero-eyebrow">
                  <Sparkles size={15} aria-hidden="true" />
                  <span>
                    유튜브 · 인스타 · 틱톡 얼굴·실명 100% 공개 — 거짓말할 수 없는 사람, 병국이
                  </span>
                </div>

                <h1 className="kpro-visual-headline">
                  {KPRO_HERO_SLIDES[heroSlideIdx]?.titleHtml}
                  <br />
                  <span className="red-highlight">
                    {KPRO_HERO_SLIDES[heroSlideIdx]?.highlightText}
                  </span>
                </h1>

                <p
                  style={{
                    fontSize: "clamp(1.05rem, 0.95rem + 0.4vw, 1.35rem)",
                    fontWeight: 700,
                    color: "#f8fafc",
                    marginBottom: "1.25rem",
                  }}
                >
                  {KPRO_HERO_SLIDES[heroSlideIdx]?.subtitle}
                </p>

                {/* Slide Pager Dots */}
                <div
                  className="kpro-visual-dots"
                  role="tablist"
                  aria-label="메인 비주얼 슬라이드 선택"
                >
                  {KPRO_HERO_SLIDES.map((sl, idx) => (
                    <button
                      key={sl.id}
                      type="button"
                      role="tab"
                      aria-selected={heroSlideIdx === idx}
                      aria-label={`${idx + 1}번 비주얼 배너 보기`}
                      className={`kpro-visual-dot ${
                        heroSlideIdx === idx ? "is-active" : ""
                      }`}
                      onClick={() => setHeroSlideIdx(idx)}
                    />
                  ))}
                </div>

                {/* Byungguk Face & Real Field Showcase Card */}
                <div
                  className="byungguk-hero-showcase"
                  style={{ marginTop: "1.35rem" }}
                >
                  <div className="byungguk-main-portrait-wrap">
                    <img
                      src="/images/byungguk/ZGRimSgReGw-maxres1.jpg"
                      alt="이차어디가 수출마스터 병국(뺑국이)이 수출 현장에서 직접 차량을 소개하는 모습"
                      className="byungguk-main-portrait-img"
                      fetchPriority="high"
                      width={405}
                      height={720}
                    />
                    <span className="byungguk-portrait-badge">
                      수출마스터 병국 (뺑국이)
                    </span>
                  </div>

                  <div>
                    <h2 className="byungguk-pledge-title">
                      다른 데 3군데 다 찔러보고 맨 마지막에 오세요!
                      <br />
                      <span className="text-gold">
                        타사 견적 무조건 이겨드리며, 10원이라도 깎으면 유튜브 접겠습니다!
                      </span>
                    </h2>
                    <p className="byungguk-pledge-quote">
                      &ldquo;폐차장·딜러가 &lsquo;폐차밖에 안 된다&rsquo;며 헐값에 가져간 사장님 차, 바로 다음 날 인천 수출단지에 되팔아 딜러 배만 불립니다. 왜 내 차 팔아서 남 좋은 일 시키십니까? <strong>유튜브·인스타·틱톡에 제 얼굴 다 까고 장사하는 병국이는 거짓말을 못 합니다.</strong> 그래서 손님 10분 중 6분은 돈 받기 전에 제 얼굴 하나 믿고 차부터 편하게 탁송 보내주십니다!&rdquo;
                    </p>

                    <div
                      className="byungguk-mini-strip"
                      role="group"
                      aria-label="병국이 실제 현장 영상 미리보기"
                    >
                      <button
                        type="button"
                        className="byungguk-mini-thumb"
                        onClick={() =>
                          openVideoProofModal(BYUNGGUK_FIELD_VIDEOS[1])
                        }
                      >
                        <img
                          src="/images/byungguk/jJpmviXfkLQ-maxres1.jpg"
                          alt="병국 포터2 현장 매입"
                          width={160}
                          height={90}
                        />
                        <span>포터2 직매입</span>
                      </button>

                      <button
                        type="button"
                        className="byungguk-mini-thumb"
                        onClick={() =>
                          openVideoProofModal(BYUNGGUK_FIELD_VIDEOS[3])
                        }
                      >
                        <img
                          src="/images/byungguk/U21oDpe9gko-oar2.jpg"
                          alt="병국 해외 바이어 직접 협상"
                          width={160}
                          height={90}
                        />
                        <span>바이어 직거래</span>
                      </button>

                      <button
                        type="button"
                        className="byungguk-mini-thumb"
                        onClick={() =>
                          openVideoProofModal(BYUNGGUK_FIELD_VIDEOS[2])
                        }
                      >
                        <img
                          src="/images/byungguk/xR9qjpjcgw4-oar2.jpg"
                          alt="병국 수출단지 입고 현장"
                          width={160}
                          height={90}
                        />
                        <span>사고차 최고가</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: KPRO Ultra-Clean 2-Field Consultation Card (.main_consult) */}
              <div ref={quoteCardRef} className="kpro-main-consult">
                <div className="kpro-consult-head">
                  <h2>
                    🔥 <span style={{ color: "#1cdb83" }}>타사 견적 격파</span>{" "}
                    바이어 직통 조회
                  </h2>
                  <p style={{ color: "#ffdf4b", fontWeight: 900 }}>
                    다른 곳 견적 다 받아오세요! 마지막에 부르시면 무조건 그 위를 맞춰드립니다!
                  </p>
                </div>

                <div className="kpro-consult-body">
                  <form
                    ref={formRef}
                    action="/api/quote"
                    method="POST"
                    onSubmit={handleSubmitQuote}
                    noValidate={false}
                  >
                    <fieldset className="form-fieldset">
                      <legend className="visually-hidden">
                        중고차 수출 무료 견적 신청 입력 양식
                      </legend>

                      <div className="form-group">
                        <label
                          htmlFor={`${uid}-carModel`}
                          className="form-label"
                        >
                          차량명 또는 차량번호 <span className="required-star">*</span>
                        </label>
                        <input
                          ref={carInputRef}
                          type="text"
                          id={`${uid}-carModel`}
                          name="carModel"
                          list={`${uid}-car-models-list`}
                          className="form-input"
                          placeholder="ex) 그랜저 HG, 포터2 또는 12가 3456"
                          required
                          minLength={2}
                          value={carModel}
                          onChange={(e) => setCarModel(e.target.value)}
                          enterKeyHint="next"
                        />
                        <datalist id={`${uid}-car-models-list`}>
                          {CAR_MODELS_DATALIST.map((model) => (
                            <option key={model} value={model} />
                          ))}
                        </datalist>
                      </div>

                      <div className="form-group">
                        <label
                          htmlFor={`${uid}-phone-mid`}
                          className="form-label"
                        >
                          연락처 (4자리 입력 시 자동 이동){" "}
                          <span className="required-star">*</span>
                        </label>
                        <div className="kpro-phone-split">
                          <select
                            className="form-select kpro-phone-part"
                            aria-label="휴대폰 앞자리"
                            value={phonePrefix}
                            onChange={(e) => {
                              setPhonePrefix(e.target.value);
                              setPhone(
                                `${e.target.value}-${phoneMid}-${phoneLast}`
                              );
                            }}
                          >
                            <option value="010">010</option>
                            <option value="011">011</option>
                            <option value="016">016</option>
                            <option value="017">017</option>
                            <option value="018">018</option>
                            <option value="019">019</option>
                          </select>

                          <input
                            type="tel"
                            id={`${uid}-phone-mid`}
                            className="form-input kpro-phone-part"
                            placeholder="0000"
                            required
                            maxLength={4}
                            inputMode="numeric"
                            pattern="[0-9]{3,4}"
                            value={phoneMid}
                            onChange={(e) =>
                              handleSplitPhoneMidChange(
                                e.target.value,
                                phoneLastInputRef
                              )
                            }
                            aria-label="휴대폰 중간 4자리"
                          />

                          <input
                            ref={phoneLastInputRef}
                            type="tel"
                            id={`${uid}-phone`}
                            name="phone"
                            className="form-input kpro-phone-part"
                            placeholder="0000"
                            required
                            maxLength={4}
                            inputMode="numeric"
                            pattern="[0-9]{4}"
                            value={phoneLast}
                            onChange={(e) =>
                              handleSplitPhoneLastChange(e.target.value)
                            }
                            aria-label="휴대폰 끝 4자리"
                            enterKeyHint="done"
                          />
                        </div>
                      </div>

                      <div className="consent-row">
                        <label
                          htmlFor={`${uid}-consent`}
                          className="consent-check-label"
                        >
                          <input
                            type="checkbox"
                            id={`${uid}-consent`}
                            name="consent"
                            required
                            defaultChecked
                            className="consent-checkbox"
                          />
                          <span>개인정보 수집/이용 동의</span>
                        </label>
                        <button
                          type="button"
                          className="btn-privacy-detail"
                          onClick={() => privacyDialogRef.current?.showModal()}
                        >
                          [내용보기]
                        </button>
                      </div>

                      <button
                        type="submit"
                        className="kpro-submit-btn"
                        disabled={isSubmitting}
                      >
                        <span>
                          {isSubmitting
                            ? "바이어 최고가 대조 중..."
                            : "🔥 딜러 뒷마진 뺀 진짜 최고가 찔러보기"}
                        </span>
                      </button>

                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr",
                          gap: "0.5rem",
                          marginTop: "0.65rem",
                        }}
                      >
                        <a
                          href={telHref}
                          className="btn-card-primary"
                          onClick={() => markInquiryCompleted()}
                        >
                          <PhoneCall size={15} aria-hidden="true" />
                          <span>전화 {SITE_CONFIG.phoneFormatted}</span>
                        </a>
                        <a
                          href={smsHref}
                          className="btn-card-secondary"
                          onClick={() => markInquiryCompleted()}
                        >
                          <MessageSquare size={15} aria-hidden="true" />
                          <span>문자 사진전송</span>
                        </a>
                      </div>

                      <div className="kpro-consult-trust-strip">
                        <div className="trust-strip-item">
                          <CheckCircle2 size={14} color="#057a44" />
                          <span><strong>[타사 견적 격파]</strong> 다른 데 3군데 먼저 알아보고 마지막에 오세요! 무조건 더 드립니다</span>
                        </div>
                        <div className="trust-strip-item">
                          <CheckCircle2 size={14} color="#057a44" />
                          <span><strong>[10원 감가 시 유튜브 박제]</strong> 현장 와서 말 바꾸면 차 안 파셔도 됩니다</span>
                        </div>
                        <div className="trust-strip-item">
                          <CheckCircle2 size={14} color="#057a44" />
                          <span><strong>[60% 얼굴 믿고 선탁송]</strong> 돈 받기 전에 차부터 보내도 도착 즉시 100% 칼송금!</span>
                        </div>
                      </div>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* KPRO BENCHMARK SECTION 1 (section.review): 거짓 광고 예방 & 진짜 수출가 비교 */}
        <section className="kpro-review-section" id="kpro-price-gap">
          <div className="container">
            <h2
              style={{
                textAlign: "center",
                fontSize: "clamp(1.85rem, 1.4rem + 2vw, 2.85rem)",
                fontWeight: 900,
                lineHeight: 1.25,
                marginBottom: "1.5rem",
              }}
            >
              <span style={{ color: "#1cdb83" }}>
                딜러가 &ldquo;이 차는 폐차밖에 안 돼요&rdquo;라고 했나요?
              </span>
              <br />
              속지 마세요! 그 딜러가 사장님 차 헐값에 사서 내일 수출단지에 되팔아먹습니다!
            </h2>

            <div className="kpro-vs-banner">
              <p className="kpro-vs-domestic">
                모르고 남한테 넘기면
                <br />
                <strong>고철값 뺏기고 딜러 배만 불림</strong>
              </p>
              <p className="kpro-vs-badge">vs</p>
              <p className="kpro-vs-export">
                병국이한테 직통으로 오면
                <br />
                딜러 뒷마진 전액 내 통장으로!
              </p>
              <img
                src="/images/kpro/calc.png"
                alt="수출 가치 비교"
                className="kpro-vs-calc-float"
                width={120}
                height={132}
                loading="lazy"
              />
            </div>
          </div>

          <div
            className="kpro-marquee-viewport"
            aria-label="실제 중고차매매상사 대비 중고차수출 가격 차이 슬라이더"
          >
            <div className="kpro-marquee-track">
              {[...KPRO_COMPARISON_SLIDES, ...KPRO_COMPARISON_SLIDES].map(
                (slide, idx) => (
                  <article
                    key={`${slide.id}-${idx}`}
                    className="kpro-slide-card"
                    onClick={() => openQuickConsultModal(slide.carName)}
                    style={{ cursor: "pointer" }}
                    title={`${slide.carName} 무료 수출 상담 신청하기`}
                  >
                    <div className="kpro-slide-thumb">
                      <img
                        src={slide.imageUrl}
                        alt={`${slide.carName} 리뷰사진`}
                        width={290}
                        height={218}
                        loading="lazy"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div className="kpro-slide-price-wrap">
                      <p className="kpro-slide-name-row">
                        <span>{slide.carName}</span>
                        <span className="year">{slide.year}</span>
                      </p>
                      {slide.starBadge && (
                        <div
                          className={`kpro-star-rating-box ${
                            slide.starType === "seven" ? "is-seven" : ""
                          }`}
                        >
                          <div className="kpro-star-head">
                            <span className="kpro-star-label">차주 체감 만족도</span>
                            <strong className="kpro-star-score">{slide.starBadge}</strong>
                          </div>
                          {slide.starQuote && (
                            <p className="kpro-star-quote">&ldquo;{slide.starQuote}&rdquo;</p>
                          )}
                        </div>
                      )}
                      <div className="kpro-slide-price-row">
                        <strong className="kpro-story-tag is-bad">
                          😢 타사 딜러·폐차장 설움 사연
                        </strong>
                        <p className="kpro-story-body">{slide.domesticPrice}</p>
                      </div>
                      <div className="kpro-slide-price-row is-export">
                        <strong className="kpro-story-tag is-good">
                          🔥 병국이가 타사보다 더 드린 이유
                        </strong>
                        <p className="kpro-story-body">{slide.exportPrice}</p>
                      </div>
                    </div>
                    <div className="kpro-slide-bottom-banner">
                      💥 <span>{slide.diffNumber}</span>
                    </div>
                  </article>
                )
              )}
            </div>
          </div>
        </section>

        {/* KPRO BENCHMARK SECTION 2 (section.box_graph): Alternating 2-Column Rising Bar Graphs */}
        <section
          ref={graphSectionRef}
          className={`kpro-graph-section ${
            isGraphAnimated ? "is-animated" : ""
          }`}
          id="kpro-graph-proof"
        >
          <div className="container">
            {/* Row 1: Left Graph + Right Dark Image Card */}
            <div className="kpro-graph-row">
              <div className="kpro-wrap-box kpro-graph-white-box">
                <div className="kpro-graph-pill-tit">
                  딜러들이 절대 비밀로 하는 업계의 진실
                </div>
                <p className="kpro-graph-up-text">
                  딜러가 챙기던 수출 뒷돈, <span>사장님 통장에 100% 직격!</span>
                </p>
                <p className="text-sub">
                  폐차장·매매상이 헐값에 사서 수출단지에 넘기며 해먹던 차익을 전부 사장님께 돌려드립니다.
                </p>

                <div className="kpro-graph-grid-stage">
                  <div className="kpro-graph-col">
                    <p>(폐차장·일반딜러)</p>
                    <p style={{ fontSize: "0.95rem" }}>호구 잡히는 고철가</p>
                    <div className="kpro-hei-bar is-gray" />
                  </div>
                  <div className="kpro-graph-col is-export">
                    <p style={{ fontSize: "1.02rem" }}>딜러 뒷마진 + 바이어 웃돈 폭발!</p>
                    <div className="kpro-hei-bar is-gradient" />
                  </div>
                </div>

                <div className="kpro-graph-pri-row">
                  <p>남 좋은 일 시키는 가격</p>
                  <p className="is-red">병국이 타사 격파 최고가</p>
                </div>
              </div>

              <div className="kpro-wrap-box kpro-graph-dark-box">
                <div>
                  <div className="kpro-graph-dark-tit">
                    허위 미끼 견적 ZERO!
                    <br />
                    얼굴 걸고 약속하는 정직한 평가
                  </div>
                  <div className="kpro-graph-dark-img">
                    <img
                      src="/images/kpro/graph_img1.jpg"
                      alt="주행거리 무감가 수출 안내"
                      width={520}
                      height={220}
                      loading="lazy"
                    />
                  </div>
                </div>
                <p className="kpro-graph-dark-desc">
                  &ldquo;평균 시세보다 무조건 몇백만 원 더 쳐준다&rdquo;며 유인한 뒤 현장에서
                  깎아내리는 건 거래가 아니라 폭력입니다. 해외 수출 시장에서는 주행거리보다
                  차량 엔진의 건강한 내구성을 봅니다. 병국이는 해외 현지 바이어 실거래
                  데이터를 바탕으로, 처음 안내한 금액 그대로 끝까지 책임집니다.
                </p>
              </div>
            </div>

            {/* Row 2: Left Dark Image Card + Right Graph */}
            <div className="kpro-graph-row">
              <div className="kpro-wrap-box kpro-graph-dark-box">
                <div>
                  <div className="kpro-graph-dark-tit">
                    얼굴을 공개한 사람에게는
                    <br />
                    도망갈 곳이 없습니다
                  </div>
                  <div className="kpro-graph-dark-img">
                    <img
                      src="/images/kpro/graph_img2.jpg"
                      alt="사고이력 무감가 수출 안내"
                      width={520}
                      height={220}
                      loading="lazy"
                    />
                  </div>
                </div>
                <p className="kpro-graph-dark-desc">
                  유튜브, 인스타그램, 틱톡 어디를 검색해도 제 얼굴과 목소리가 나옵니다.
                  고객님 한 분을 속이면 제가 쌓아온 모든 삶을 잃기에, 사고 이력이나 외판
                  흠집을 핑계로 현장에서 얄팍한 말장난을 치지 않습니다. 오랜 세월 가족의
                  발이 되어준 소중한 차, 마지막 순간까지 기분 좋게 보내드리겠습니다.
                </p>
              </div>

              <div className="kpro-wrap-box kpro-graph-white-box">
                <div className="kpro-graph-pill-tit">10원이라도 깎으면 그 자리에서 유튜브 접습니다</div>
                <p className="kpro-graph-up-text">
                  손님 10명 중 6명은 <span>돈도 안 받고 차부터 보내십니다!</span>
                </p>
                <p className="text-sub">
                  얼굴 다 까고 방송하는 놈이라 거짓말을 못 합니다. 키만 넣어 탁송부터 보내셔도 도착 즉시 칼송금!
                </p>

                <div className="kpro-graph-grid-stage">
                  <div className="kpro-graph-col">
                    <p>(양아치 미끼 딜러)</p>
                    <p style={{ fontSize: "0.95rem" }}>현장 반토막 칼질</p>
                    <div className="kpro-hei-bar is-gray" />
                  </div>
                  <div className="kpro-graph-col is-export">
                    <p style={{ fontSize: "1.02rem" }}>60% 얼굴 믿고 선탁송 · 감가 0원!</p>
                    <div className="kpro-hei-bar is-gradient" />
                  </div>
                </div>

                <div className="kpro-graph-pri-row">
                  <p>말 바꾸는 미끼 업체</p>
                  <p className="is-red">유튜브 실명 박제 보증</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* KPRO BENCHMARK SECTION 3 (.sec4.contents): 6-Card 3x2 Grid with 2-Second Auto-Cycling Highlight */}
        <section className="section-block" id="kpro-five-steps">
          <div className="container">
            <div className="section-header">
              <span className="section-eyebrow">
                이차어디가(병국이수출)만의
              </span>
              <h2 className="section-title">
                <span style={{ color: "#057a44" }}>원스톱</span> 차량서비스
              </h2>
              <p className="section-desc">
                <strong>감가없이 최고가에! 대면없이 비대면으로!</strong>
                <br />
                이차어디가만의 특별한 방식으로 차량을 원스톱으로 판매하는 실시간 경매·직수출
                방식입니다.
              </p>
            </div>

            <div className="kpro-steps-6grid">
              {/* Card 0: Intro Card (#cont1) */}
              <article
                className={`kpro-step-card is-intro ${
                  activeStepIdx === 0 ? "is-active" : ""
                }`}
                onMouseEnter={() => setActiveStepIdx(0)}
              >
                <h3
                  style={{
                    fontSize: "1.65rem",
                    fontWeight: 900,
                    lineHeight: 1.3,
                  }}
                >
                  감가없는
                  <br />
                  원스톱 차량
                  <br />
                  서비스
                </h3>
                <div
                  style={{
                    fontSize: "1.35rem",
                    fontWeight: 700,
                    color: "#96ffb9",
                  }}
                >
                  5 STEPS
                </div>
              </article>

              {/* Cards 1..5: Step 01 .. Step 05 */}
              {KPRO_FIVE_STEPS.map((st, idx) => (
                <article
                  key={st.stepNumber}
                  className={`kpro-step-card ${
                    activeStepIdx === idx + 1 ? "is-active" : ""
                  }`}
                  onMouseEnter={() => setActiveStepIdx(idx + 1)}
                >
                  <span className="kpro-step-num">{st.stepNumber}</span>
                  <img
                    src={st.iconUrl}
                    alt={st.title}
                    width={76}
                    height={76}
                    loading="lazy"
                  />
                  <h3
                    className="text-obsidian fw-800"
                    style={{ fontSize: "1.02rem", lineHeight: 1.4 }}
                  >
                    <span style={{ color: "#057a44", marginRight: "0.25rem" }}>
                      {st.stepNumber}.
                    </span>
                    {st.title}
                  </h3>
                  <p className="text-sub" style={{ fontSize: "0.84rem" }}>
                    {st.desc}
                  </p>
                </article>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "2.5rem",
              }}
            >
              <button
                type="button"
                className="kpro-sec4-cta-btn"
                onClick={() => openQuickConsultModal()}
              >
                <span>원스톱 서비스로 비대면 거래하기</span>
                <ArrowRight size={20} aria-hidden="true" />
              </button>
            </div>
          </div>
        </section>

        {/* KPRO BENCHMARK SECTION 4 (.ban_1 + .differ + .ban_2): Medal + Animated Export Ship + 3 Differentiators */}
        <section className="kpro-ban1-section">
          <div className="container kpro-ban1-grid">
            <div style={{ textAlign: "center" }}>
              <img
                src="/images/kpro/medal.png"
                alt="중고차수출 1위 메달"
                width={240}
                height={240}
                loading="lazy"
                style={{ maxWidth: "220px", height: "auto", marginInline: "auto" }}
              />
            </div>

            <div>
              <h2
                style={{
                  fontSize: "clamp(1.75rem, 1.35rem + 1.6vw, 2.65rem)",
                  fontWeight: 900,
                  marginBottom: "1rem",
                }}
              >
                <span style={{ color: "#1cdb83" }}>이차어디가(병국이수출)</span>
                이란?
              </h2>
              <p
                style={{
                  fontSize: "1.08rem",
                  color: "#e2e8f0",
                  lineHeight: 1.6,
                }}
              >
                &ldquo;얼마 더 쳐주겠다&rdquo;는 달콤한 거짓 광고로 사람을 낚지 않습니다.
                <br />
                유튜브·인스타그램·틱톡에 제 얼굴과 이름을 모두 걸고 일하는 병국이가, 처음 건넨
                말 한마디 끝까지 책임지는 정직한 직수출을 약속합니다.
              </p>

              <div className="kpro-ban1-pills">
                <div className="kpro-ban1-pill">얼굴·실명 공개 보증</div>
                <div className="kpro-ban1-pill">거짓 미끼견적 ZERO</div>
                <div className="kpro-ban1-pill">말 바꿈 없는 정직거래</div>
              </div>

              <div className="kpro-boat-anim" style={{ textAlign: "center" }}>
                <img
                  src="/images/kpro/boat_re.png"
                  alt="수출 선박 사진"
                  width={560}
                  height={260}
                  loading="lazy"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section-block">
          <div className="container">
            <div className="section-header">
              <span className="section-eyebrow">
                이차어디가(병국이수출)만의 차별점
              </span>
              <h2 className="section-title">
                <span style={{ color: "#057a44" }}>이차어디가(병국이수출)</span>은
                무엇이 다를까요?
              </h2>
            </div>

            <div className="kpro-differ-grid">
              {KPRO_DIFFERENTIATORS.map((diff) => (
                <article key={diff.id} className="kpro-differ-card">
                  <img
                    src={diff.iconUrl}
                    alt={diff.title}
                    width={72}
                    height={72}
                    loading="lazy"
                  />
                  <h3
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: 900,
                      color: "#00235b",
                    }}
                  >
                    {diff.title}
                  </h3>
                  <p className="text-sub" style={{ fontSize: "0.95rem" }}>
                    {diff.subtitle}
                  </p>
                </article>
              ))}
            </div>

            {/* KPRO .ban_2 Bottom Car Banner */}
            <div className="kpro-ban2-banner">
              <div>
                <h3
                  style={{
                    fontSize: "clamp(1.35rem, 1.1rem + 1vw, 1.9rem)",
                    fontWeight: 900,
                    marginBottom: "0.85rem",
                  }}
                >
                  의심으로 시작해 안심으로 끝나는 거래,
                  <br />
                  <span style={{ color: "#1cdb83" }}>얼굴 걸고 약속하는 이차어디가(병국이수출)</span>
                </h3>
                <button
                  type="button"
                  className="btn-hero-call"
                  onClick={() => openQuickConsultModal()}
                >
                  <span>무료 상담 하기</span>
                  <ArrowRight size={18} aria-hidden="true" />
                </button>
              </div>
              <img
                src="/images/kpro/ban_2_car.png?v=navyplate1"
                alt="수출 차량 이미지"
                width={420}
                height={190}
                loading="lazy"
                style={{ maxWidth: "min(100%, 400px)", height: "auto" }}
              />
            </div>
          </div>
        </section>

        {/* SUPPLEMENTED BENCHMARK 1: 해외 4대 권역 핵심 수출국 바이어 직거래 매입 기준 (카프리오 · K무역 · 비바무역 · 코리아수출 벤치마킹) */}
        <section className="section-block" id="global-buyer-countries">
          <div className="container">
            <div className="section-header">
              <span className="section-eyebrow">
                DIRECT OVERSEAS BUYER MATCHING HUB
              </span>
              <h2 className="section-title">
                내 차가 가장 비싸게 팔리는{" "}
                <span style={{ color: "#057a44" }}>
                  해외 핵심 수출국가 바이어 매입 기준
                </span>
              </h2>
              <p className="section-desc">
                같은 차종이라도 수출되는 국가(리비아·키르기스스탄·요르단·가나·이집트·중남미)에 따라{" "}
                <strong>바이어가 우대하는 옵션과 엔진 기준이 완전히 달라집니다</strong>. 이차어디가(병국이수출)는
                중간 알선 브로커 없이 국가별 현지 바이어에게 직통으로 배정하여 가장 높은 대우를 받아드립니다.
              </p>
            </div>

            <div className="buyer-country-grid">
              {GLOBAL_BUYER_COUNTRIES.map((country) => (
                <article key={country.id} className="buyer-country-card">
                  <div>
                    <div className="buyer-country-head">
                      <h3 className="buyer-country-title">
                        <span className="buyer-country-flag" aria-hidden="true">
                          {country.flagEmoji}
                        </span>
                        <span>{country.countryName}</span>
                      </h3>
                      <span className="buyer-country-badge">
                        {country.buyerDemandBadge}
                      </span>
                    </div>

                    <p
                      className="text-muted"
                      style={{
                        fontSize: "0.8rem",
                        fontWeight: 700,
                        marginTop: "0.65rem",
                        marginBottom: "0.65rem",
                      }}
                    >
                      선적 항로: {country.portAndRoute}
                    </p>

                    <div style={{ marginBottom: "0.85rem" }}>
                      <p
                        className="text-obsidian fw-800"
                        style={{ fontSize: "0.84rem", marginBottom: "0.4rem" }}
                      >
                        바이어 집중 매입 차종 (클릭 시 즉시 시세상담):
                      </p>
                      <div className="buyer-models-chips">
                        {country.preferredModels.map((modelName) => (
                          <button
                            key={modelName}
                            type="button"
                            className="buyer-model-chip"
                            onClick={() => openQuickConsultModal(modelName)}
                          >
                            {modelName}
                          </button>
                        ))}
                      </div>
                    </div>

                    <p
                      style={{
                        fontSize: "0.85rem",
                        fontWeight: 700,
                        color: "#00235b",
                        background: "#f8fafc",
                        padding: "0.55rem 0.75rem",
                        borderRadius: "8px",
                        border: "1px solid #e2e8f0",
                        marginBottom: "0.75rem",
                      }}
                    >
                      연식·상태 기준: {country.yearAndConditionRule}
                    </p>

                    <ul className="buyer-points-list">
                      {country.keyBuyerPoints.map((pt) => (
                        <li key={pt}>✓ {pt}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="buyer-bonus-banner">
                    {country.averageBonusVsScrap}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SUPPLEMENTED BENCHMARK 2: 악덕 브로커 허위견적·부당감가 사기 예방 vs 병국이 100% 선입금 보증 */}
        <section className="scam-guard-section" id="anti-scam-pledge">
          <div className="container">
            <div className="section-header" style={{ color: "#ffffff" }}>
              <span
                className="section-eyebrow"
                style={{
                  background: "rgba(220, 38, 38, 0.25)",
                  color: "#fca5a5",
                  border: "1px solid rgba(248, 113, 113, 0.45)",
                }}
              >
                ZERO DEDUCTION & ANTI-SCAM GUARANTEE
              </span>
              <h2 className="section-title" style={{ color: "#ffffff" }}>
                &ldquo;평균 시세보다 무조건 더 준다&rdquo;는 거짓 광고에 속지 마세요!
                <br />
                <span style={{ color: "#1cdb83" }}>
                  유튜브 · 인스타 · 틱톡 얼굴 다 공개하고 일하는 병국이는 거짓말을 못 합니다
                </span>
              </h2>
              <p className="section-desc" style={{ color: "#cbd5e1" }}>
                이름도 얼굴도 숨긴 채 터무니없는 금액으로 유인한 뒤 현장에서 상처 주는 악덕
                브로커들과 다릅니다. <strong>실제 고객님의 60% 이상이 유튜브 속 병국이 얼굴만 믿고 차부터 편하게 보내주실 만큼</strong>{" "}
                투명하게 일하며, 단지 도착 즉시 칼정산은 물론 원하시면 현장 선입금도 100% 맞춰드립니다.
              </p>
            </div>

            <div className="scam-compare-grid">
              {EXPORT_SCAM_PREVENTION_CHECKLIST.map((item) => (
                <div key={item.category} className="scam-compare-row">
                  <div className="scam-col-cat">{item.category}</div>
                  <div className="scam-col-bad">
                    <strong style={{ display: "block", marginBottom: "0.25rem", color: "#f87171" }}>
                      ✕ 일반 악덕 알선 브로커 수법
                    </strong>
                    {item.badBrokerPractice}
                  </div>
                  <div className="scam-col-good">
                    <strong style={{ display: "block", marginBottom: "0.25rem", color: "#1cdb83" }}>
                      ✓ 이차어디가(병국이수출) 100% 직영 보증
                    </strong>
                    {item.byunggukGuarantee}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Real-time Export Status Ticker (Packed 12-Card Auto-Rotating Board + Live Incoming Alert Bar + Continuous Marquee Stream) */}
        <section
          className="live-ticker-section"
          aria-labelledby="live-ticker-heading"
        >
          <div className="container">
            <div className="ticker-header-row">
              <div className="top-notice-left">
                <span className="live-dot is-pulsing" aria-hidden="true" />
                <h2 id="live-ticker-heading" className="text-obsidian fw-800">
                  실시간 이차어디가(병국이수출) 당일 매입·송금 현황 (클릭 시 차종 자동입력)
                </h2>
              </div>
              <div className="live-rot-counters">
                <span className="live-counter-pill is-green">
                  ● 실시간 상담·접수 회전중
                </span>
                <span className="live-counter-pill">
                  오늘 누적 문의 <strong>{liveTodayCount}건</strong>
                </span>
                <span className="live-counter-pill">
                  당일 송금완료 <strong>{liveTodayCount - 23}건</strong>
                </span>
              </div>
            </div>

            {/* Live Incoming Flash Alert Bar (rotates every 2.2s) */}
            {(() => {
              const incoming =
                LIVE_TICKER_ITEMS[liveRotOffset % LIVE_TICKER_ITEMS.length];
              return (
                <div
                  key={`alert-${incoming.id}-${liveRotOffset}`}
                  className="live-incoming-flash-bar"
                  onClick={() => handleSelectVehicleForQuote(incoming.carModel)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleSelectVehicleForQuote(incoming.carModel);
                    }
                  }}
                >
                  <div className="live-incoming-left">
                    <span className="live-incoming-badge">⚡ 실시간 방금 도착</span>
                    <span className="live-incoming-region">
                      [{incoming.region}]
                    </span>
                    <strong className="live-incoming-car">
                      {incoming.carModel} ({incoming.year} · {incoming.mileage})
                    </strong>
                  </div>
                  <div className="live-incoming-right">
                    <span className="live-incoming-quote">
                      기존 {incoming.domesticQuote} →{" "}
                      <strong>{incoming.exportPrice}</strong>
                    </span>
                    <span className="live-incoming-up">{incoming.bonusDiff}</span>
                    <span className="live-incoming-status">
                      {incoming.status}
                    </span>
                  </div>
                </div>
              );
            })()}

            {/* Packed 12-Card Full Grid (4x3 Dense Layout Rotating Continuously Every 2.2s) */}
            <div className="ticker-cards-grid is-packed-12">
              {Array.from({ length: 12 }, (_, slotIdx) => {
                const item =
                  LIVE_TICKER_ITEMS[
                    (liveRotOffset + slotIdx) % LIVE_TICKER_ITEMS.length
                  ];
                const isJustArrived = slotIdx === 0;
                const isSecond = slotIdx === 1;
                const displayTime =
                  slotIdx === 0
                    ? "방금 전 (NEW)"
                    : slotIdx === 1
                      ? "10초 전"
                      : slotIdx === 2
                        ? "30초 전"
                        : `${slotIdx}분 전`;
                return (
                  <article
                    key={`${item.id}-slot-${slotIdx}-${
                      isJustArrived ? liveRotOffset : "steady"
                    }`}
                    className={`ticker-card ${
                      isJustArrived
                        ? "is-just-arrived"
                        : isSecond
                          ? "is-recent-second"
                          : ""
                    }`}
                    onClick={() => handleSelectVehicleForQuote(item.carModel)}
                    title={`${item.carModel} 차종으로 바로 견적 조회하기`}
                  >
                    <div className="ticker-card-top">
                      <span className="ticker-time-region">
                        {isJustArrived && (
                          <span className="ticker-new-dot" aria-hidden="true" />
                        )}
                        <strong>{displayTime}</strong> · {item.region}
                      </span>
                      <span
                        className={`ticker-status-badge status-${item.status}`}
                      >
                        {isJustArrived ? `⚡ ${item.status}` : item.status}
                      </span>
                    </div>
                    <div className="ticker-car-title">
                      {item.carModel}{" "}
                      <span className="text-sub">
                        ({item.year} · {item.mileage})
                      </span>
                    </div>
                    <div className="ticker-price-compare">
                      <div>
                        <span className="text-muted">
                          기존 {item.domesticQuote} →{" "}
                        </span>
                        <strong className="text-primary">
                          {item.exportPrice}
                        </strong>
                      </div>
                      <span className="ticker-bonus-pill">{item.bonusDiff}</span>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Continuous Horizontal Infinite Stream Strip Under the 12-Card Grid */}
            <div
              className="live-ticker-stream-viewport"
              aria-label="실시간 접수 및 송금 무한 롤링 스트립"
            >
              <div className="live-ticker-stream-track">
                {[...LIVE_TICKER_ITEMS, ...LIVE_TICKER_ITEMS].map(
                  (item, idx) => (
                    <button
                      key={`stream-${item.id}-${idx}`}
                      type="button"
                      className="live-stream-chip"
                      onClick={() => handleSelectVehicleForQuote(item.carModel)}
                    >
                      <span className="stream-chip-dot" aria-hidden="true" />
                      <span className="stream-chip-region">{item.region}</span>
                      <strong className="stream-chip-car">
                        {item.carModel}
                      </strong>
                      <span className="stream-chip-price">
                        {item.exportPrice} ({item.bonusDiff})
                      </span>
                      <span className="stream-chip-status">{item.status}</span>
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* BENCHMARKED FUNNEL 2: Cascading Vehicle Export Price Simulator (#price-simulator) */}
        <section className="section-block" id="price-simulator">
          <div className="container">
            <div className="section-header">
              <span className="section-eyebrow">
                PICKPLUS-STYLE 3-ROUTE VALUE DIAGNOSIS
              </span>
              <h2 className="section-title">
                허위 미끼 숫자 대신 팩트로 비교하는{" "}
                <span className="text-primary">
                  내 차 3대 경로(폐차·내수·직수출) 가치 진단기
                </span>
              </h2>
              <p className="section-desc">
                누구나 다 똑같이 찍혀 나오는 가짜 미끼 가격표에 속지 마세요. 내 차종과 옵션을 선택하시면{" "}
                <strong>왜 국내 폐차·매매상에서는 깎이는지, 해외 어느 나라 바이어가 왜 웃돈을 주는지</strong>{" "}
                즉시 확인하실 수 있습니다.
              </p>
            </div>

            <div className="simulator-grid">
              {/* Left Column: 5-Step Interactive Selector */}
              <div className="simulator-steps-card">
                {/* Step 1: 국산차 / 수입차 */}
                <div className="sim-step-block">
                  <div className="sim-step-title">
                    <span className="sim-step-num">1</span>
                    <span>국산차 / 수입차 구분 선택</span>
                  </div>
                  <div
                    className="sim-pill-row"
                    role="group"
                    aria-label="국산 수입 선택"
                  >
                    {(["국산차", "수입차"] as const).map((orig) => (
                      <button
                        key={orig}
                        type="button"
                        className="sim-pill-btn"
                        aria-pressed={simOrigin === orig}
                        onClick={() => {
                          setSimOrigin(orig);
                          const firstMaker = SIMULATOR_CATALOG.find(
                            (m) => m.origin === orig
                          );
                          if (firstMaker) {
                            setSimMakerId(firstMaker.makerId);
                            const firstMdl = firstMaker.models[0];
                            if (firstMdl) {
                              setSimModelId(firstMdl.modelId);
                              setSimSubGen(firstMdl.subGenerations[0] || "");
                              setCarModel(firstMdl.modelName);
                            }
                          }
                        }}
                      >
                        {orig}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: 제조사 선택 */}
                <div className="sim-step-block">
                  <div className="sim-step-title">
                    <span className="sim-step-num">2</span>
                    <span>제조사 선택</span>
                  </div>
                  <div
                    className="sim-pill-row"
                    role="group"
                    aria-label="제조사 선택"
                  >
                    {availableMakers.map((mk) => (
                      <button
                        key={mk.makerId}
                        type="button"
                        className="sim-pill-btn"
                        aria-pressed={currentMaker.makerId === mk.makerId}
                        onClick={() => {
                          setSimMakerId(mk.makerId);
                          const firstMdl = mk.models[0];
                          if (firstMdl) {
                            setSimModelId(firstMdl.modelId);
                            setSimSubGen(firstMdl.subGenerations[0] || "");
                            setCarModel(firstMdl.modelName);
                          }
                        }}
                      >
                        {mk.makerName}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 3: 모델 선택 */}
                <div className="sim-step-block">
                  <div className="sim-step-title">
                    <span className="sim-step-num">3</span>
                    <span>차량 모델 선택</span>
                  </div>
                  <div
                    className="sim-pill-row"
                    role="group"
                    aria-label="차량 모델 선택"
                  >
                    {currentMaker.models.map((mdl) => (
                      <button
                        key={mdl.modelId}
                        type="button"
                        className="sim-pill-btn"
                        aria-pressed={currentSimModel.modelId === mdl.modelId}
                        onClick={() => {
                          setSimModelId(mdl.modelId);
                          setSimSubGen(mdl.subGenerations[0] || "");
                          setCarModel(mdl.modelName);
                        }}
                      >
                        {mdl.modelName}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 4: 세부 모델 / 연식 선택 */}
                <div className="sim-step-block">
                  <div className="sim-step-title">
                    <span className="sim-step-num">4</span>
                    <span>세부 모델 · 연식 선택</span>
                  </div>
                  <div
                    className="sim-pill-row"
                    role="group"
                    aria-label="세부 모델 연식 선택"
                  >
                    {currentSimModel.subGenerations.map((sub) => (
                      <button
                        key={sub}
                        type="button"
                        className="sim-pill-btn"
                        aria-pressed={simSubGen === sub}
                        onClick={() => {
                          setSimSubGen(sub);
                          setYear(sub);
                        }}
                      >
                        {sub}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 5: 해외 바이어 우대 가산금 옵션 체크 */}
                <div className="sim-step-block">
                  <div className="sim-step-title">
                    <span className="sim-step-num">5</span>
                    <span>
                      해외 바이어가 웃돈 주는 내 차 옵션 체크 (국내 폐차·매매 시 0원 취급 항목)
                    </span>
                  </div>
                  <div className="sim-options-grid">
                    {SIMULATOR_OPTION_BONUSES.map((opt) => (
                      <label key={opt.id} className="sim-option-check">
                        <span className="consent-check-label">
                          <input
                            type="checkbox"
                            checked={simSelectedOptions.includes(opt.id)}
                            onChange={() => toggleSimOption(opt.id)}
                            className="consent-checkbox"
                          />
                          <span>{opt.label}</span>
                        </span>
                        <span className="text-primary fw-800" style={{ fontSize: "0.78rem" }}>
                          {opt.desc}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: 3-Route Fact Diagnosis & Story Result */}
              <div className="simulator-result-card">
                <div>
                  <div className="sim-valuation-header">
                    <span className="sim-valuation-badge">
                      <Calculator size={13} aria-hidden="true" />
                      <span>3대 경로 팩트 진단서</span>
                    </span>
                    <span className="sim-valuation-country">
                      직통 수출국: {currentSimModel.targetCountry}
                    </span>
                  </div>

                  <img
                    className="sim-result-car-img"
                    src={currentSimModel.imageUrl}
                    alt={`${currentSimModel.modelName} 실사 차량`}
                    loading="lazy"
                    width={640}
                    height={360}
                  />

                  <h3 className="sim-valuation-model">
                    {currentSimModel.modelName}
                  </h3>
                  <p className="sim-valuation-trim">
                    선택 연식: {simSubGen} · 우대 옵션{" "}
                    <strong className="text-gold">
                      {simSelectedOptions.length}개 항목
                    </strong>{" "}
                    바이어 직통 반영
                  </p>

                  <div
                    className="sim-valuation-grid"
                    style={{ gridTemplateColumns: "1fr", gap: "0.65rem" }}
                  >
                    <div
                      style={{
                        background: "rgba(15, 23, 42, 0.55)",
                        padding: "0.75rem",
                        borderRadius: "10px",
                        border: "1px solid rgba(255,255,255,0.12)",
                      }}
                    >
                      <span className="price-col-label" style={{ color: "#fca5a5" }}>
                        ❌ 1·2경로 (폐차장 · 국내 매매상) 진행 시 손해 이유
                      </span>
                      <p
                        style={{
                          fontSize: "0.84rem",
                          color: "#e2e8f0",
                          lineHeight: 1.5,
                          marginTop: "0.25rem",
                        }}
                      >
                        {currentSimModel.memoryStory}
                      </p>
                    </div>
                    <div
                      style={{
                        background: "rgba(5, 122, 68, 0.22)",
                        padding: "0.75rem",
                        borderRadius: "10px",
                        border: "1px solid rgba(28, 219, 131, 0.4)",
                      }}
                    >
                      <span className="price-col-label text-gold">
                        ⭕ 3경로 (병국이 해외 바이어 직통) 웃돈 받는 이유
                      </span>
                      <p
                        style={{
                          fontSize: "0.85rem",
                          color: "#ffffff",
                          fontWeight: 700,
                          lineHeight: 1.5,
                          marginTop: "0.25rem",
                        }}
                      >
                        {currentSimModel.overseasStory}
                      </p>
                    </div>
                    <div className="sim-valuation-profit">
                      <TrendingUp size={16} aria-hidden="true" />
                      <span>💥 {currentSimModel.heartPromise}</span>
                    </div>
                  </div>
                </div>

                {/* Direct 1-Step Phone Input inside the Simulator Result */}
                <form onSubmit={handleSimulatorSubmit} className="sim-sms-box">
                  <div className="sim-sms-title">
                    <Send size={15} className="text-primary" aria-hidden="true" />
                    <span>
                      [{currentSimModel.modelName}] 중간 수수료 0원 · 오늘 바이어 직통 견적 받기
                    </span>
                  </div>
                  <div className="form-group">
                    <input
                      ref={simPhoneInputRef}
                      type="tel"
                      className="form-input"
                      placeholder="휴대폰 번호 입력 (010-0000-0000)"
                      required
                      autoComplete="tel"
                      inputMode="tel"
                      pattern="[0-9\-+\s]{9,15}"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      aria-label="시세표 수령 휴대폰 번호"
                    />
                  </div>
                  <button type="submit" className="btn-submit-quote">
                    <span>내 차 바이어 직통 최고가 견적 즉시 확인</span>
                    <ArrowRight size={18} aria-hidden="true" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* BENCHMARKED FUNNEL 3: Real-time Quote Board & Side-by-Side Comparison (#live-quote-board) */}
        <section className="section-block bg-white" id="live-quote-board">
          <div className="container">
            <div className="section-header">
              <span className="section-eyebrow">LIVE EXPORT LEDGER</span>
              <h2 className="section-title">
                실시간 견적 원장 &amp;{" "}
                <span className="text-primary">내 차 바이어 시세 대조</span>
              </h2>
              <p className="section-desc">
                전국 차주님들이 방금 조회하고 당일 송금받은 실제 거래 원장입니다. 목록에서
                비슷한 차량을 클릭하시면 우측 비교창에 즉시 연동됩니다.
              </p>
            </div>

            <div className="live-board-split">
              {/* Left: Top-to-Bottom Flowing Real-Time Quote Ledger (위에서 아래로 연속 롤링 + 실시간 DB 지속 적재) */}
              <div className="live-board-table-wrap">
                <div className="live-board-header">
                  <span className="top-notice-left">
                    <FileSpreadsheet
                      size={17}
                      className="text-gold"
                      aria-hidden="true"
                    />
                    <span>
                      실시간 접수·당일송금 원장 (↓ 위에서 아래로 실시간 DB 자동 적재)
                    </span>
                  </span>
                  <span className="text-gold">
                    ● 누적 DB {(1420 + liveTodayCount).toLocaleString()}건 실시간 유입중
                  </span>
                </div>

                {/* Newly Dropped DB Entry Banner at Top (animates downward every 2.2s) */}
                {(() => {
                  const newestRow =
                    LIVE_QUOTE_BOARD_ITEMS[
                      liveRotOffset % LIVE_QUOTE_BOARD_ITEMS.length
                    ];
                  return (
                    <div
                      key={`drop-db-${newestRow.id}-${liveRotOffset}`}
                      className="live-board-drop-banner"
                      onClick={() => {
                        setCarModel(newestRow.carModel);
                        setRegion(newestRow.region);
                      }}
                    >
                      <div className="drop-banner-left">
                        <span className="drop-db-badge">
                          ↓ 신규 DB #{1420 + liveTodayCount} 방금 유입
                        </span>
                        <strong>
                          {newestRow.region} · {newestRow.ownerMasked}
                        </strong>
                        <span>{newestRow.carModel}</span>
                      </div>
                      <div className="drop-banner-right">
                        <span className="drop-scrap">
                          기존 {newestRow.scrapEstimate} →
                        </span>
                        <strong className="drop-export">
                          {newestRow.exportConfirmed}
                        </strong>
                        <span className="drop-status">{newestRow.status}</span>
                      </div>
                    </div>
                  );
                })()}

                {/* Continuous Top-to-Bottom Moving Conveyor Viewport (위에서 아래로 움직이는 원장) */}
                <div
                  className="live-board-downward-viewport"
                  aria-label="위에서 아래로 실시간 흐르는 견적 원장 목록"
                >
                  <div className="live-board-downward-track">
                    {[
                      ...LIVE_QUOTE_BOARD_ITEMS,
                      ...LIVE_QUOTE_BOARD_ITEMS,
                    ].map((row, idx) => (
                      <button
                        key={`conveyor-${row.id}-${idx}`}
                        type="button"
                        className="live-board-row"
                        onClick={() => {
                          setCarModel(row.carModel);
                          setRegion(row.region);
                        }}
                      >
                        <span className="text-muted fw-800">
                          <span className="board-new-tag">LIVE</span>
                          {row.region} · {row.ownerMasked}
                        </span>
                        <div>
                          <strong className="text-obsidian fw-800">
                            {row.carModel}
                          </strong>
                          <div className="text-sub">
                            {row.yearMileage} · 기존 {row.scrapEstimate}
                          </div>
                        </div>
                        <span className="text-primary fw-800">
                          {row.exportConfirmed}
                        </span>
                        <span
                          className={`live-status-pill ${
                            row.status === "당일송금완료"
                              ? "is-done"
                              : "is-progress"
                          }`}
                        >
                          {row.status}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Side-by-Side Quick Comparison Form (Saves REAL Customer DB to /admin) */}
              <div className="live-board-side-card">
                <div className="quote-form-profile-row">
                  <div className="byungguk-avatar-circle">
                    <img
                      src="/images/byungguk/ZGRimSgReGw-maxres1.jpg"
                      alt="병국 대표"
                      loading="lazy"
                      width={52}
                      height={52}
                    />
                  </div>
                  <div>
                    <span className="quote-form-badge">
                      DIRECT BUYER MATCHING
                    </span>
                    <h3 className="quote-form-title">
                      내 차 바이어 시세 대조
                    </h3>
                  </div>
                </div>

                {/* Live Buyer Price Comparison Monitor */}
                {(() => {
                  const activeCompare =
                    LIVE_QUOTE_BOARD_ITEMS[
                      liveRotOffset % LIVE_QUOTE_BOARD_ITEMS.length
                    ];
                  return (
                    <div className="buyer-compare-monitor">
                      <div className="monitor-head">
                        <span>실시간 바이어 대조 차량</span>
                        <strong>{carModel || activeCompare.carModel}</strong>
                      </div>
                      <div className="monitor-bars">
                        <div className="monitor-bar-row">
                          <span>일반 폐차·내수 감가가</span>
                          <span className="is-muted">
                            {activeCompare.scrapEstimate}
                          </span>
                        </div>
                        <div className="monitor-bar-row is-export">
                          <span>병국이수출 해외 바이어가</span>
                          <strong>{activeCompare.exportConfirmed}</strong>
                        </div>
                      </div>
                    </div>
                  );
                })()}

                <form onSubmit={handleBoardCompareSubmit}>
                  <div className="form-group">
                    <label htmlFor={`${uid}-board-car`} className="form-label">
                      차량명 또는 차량번호 <span className="required-star">*</span>
                    </label>
                    <input
                      type="text"
                      id={`${uid}-board-car`}
                      list={`${uid}-car-models-list`}
                      className="form-input"
                      placeholder="좌측 원장 클릭 또는 차종·차량번호 입력"
                      required
                      minLength={2}
                      value={carModel}
                      onChange={(e) => setCarModel(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label
                      htmlFor={`${uid}-board-region`}
                      className="form-label"
                    >
                      지역 <span className="required-star">*</span>
                    </label>
                    <input
                      type="text"
                      id={`${uid}-board-region`}
                      className="form-input"
                      placeholder="예: 경기 화성, 서울 송파, 부산"
                      required
                      value={region}
                      onChange={(e) => setRegion(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label
                      htmlFor={`${uid}-board-phone`}
                      className="form-label"
                    >
                      연락처 <span className="required-star">*</span>
                    </label>
                    <input
                      type="tel"
                      id={`${uid}-board-phone`}
                      className="form-input"
                      placeholder="010-0000-0000"
                      required
                      autoComplete="tel"
                      inputMode="tel"
                      pattern="[0-9\-+\s]{9,15}"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>

                  <button type="submit" className="btn-submit-quote">
                    <span>내 차 실시간 최고가 비교 신청</span>
                    <ArrowRight size={18} aria-hidden="true" />
                  </button>

                  <p className="real-db-admin-notice">
                    🔒 신청하신 <strong>실제 고객 DB(연락처·차량정보)</strong>는 외부에 절대
                    공개되지 않으며, 즉시 암호화되어{" "}
                    <a href="/admin" style={{ textDecoration: "underline", fontWeight: 800 }}>
                      관리자 전용 보안 DB 센터(/admin)
                    </a>
                    로만 안전하게 들어갑니다.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* OFFICIAL SNS & KAKAOTALK DIRECT CHANNEL HUB (#sns-channel-hub) */}
        <section className="sns-hub-section" id="sns-channel-hub">
          <div className="container">
            <div className="section-header">
              <span
                className="section-eyebrow"
                style={{
                  background: "rgba(254, 229, 0, 0.14)",
                  color: "#ffdf4b",
                  borderColor: "rgba(254, 229, 0, 0.35)",
                }}
              >
                OFFICIAL SNS &amp; KAKAOTALK DIRECT CONNECT
              </span>
              <h2 className="section-title">
                유튜브 · 인스타 · 틱톡 · 카카오톡{" "}
                <span style={{ color: "#1cdb83" }}>
                  병국이 공식 채널 한눈에 연결
                </span>
              </h2>
              <p className="section-desc">
                매일 업데이트되는 이차어디가(병국이수출)의 실제 출장 매입 영상과 숏폼부터
                카카오톡 1:1 실시간 사진 견적 상담까지, 원하시는 채널을 선택해 바로
                연결하세요.
              </p>
            </div>

            {/* Interactive Category Filter Bar */}
            <div
              className="sns-cat-tabs"
              role="tablist"
              aria-label="공식 SNS 및 카카오톡 채널 카테고리 선택"
            >
              <button
                type="button"
                role="tab"
                aria-selected={snsActiveTab === "ALL"}
                className={`sns-cat-tab ${
                  snsActiveTab === "ALL" ? "is-active" : ""
                }`}
                onClick={() => setSnsActiveTab("ALL")}
              >
                <span>✨ 전체 채널 한눈에</span>
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={snsActiveTab === "youtube"}
                className={`sns-cat-tab tab-youtube ${
                  snsActiveTab === "youtube" ? "is-active" : ""
                }`}
                onClick={() => setSnsActiveTab("youtube")}
              >
                <span>▶ 유튜브 공식채널</span>
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={snsActiveTab === "instagram"}
                className={`sns-cat-tab tab-instagram ${
                  snsActiveTab === "instagram" ? "is-active" : ""
                }`}
                onClick={() => setSnsActiveTab("instagram")}
              >
                <span>📸 인스타그램 릴스</span>
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={snsActiveTab === "tiktok"}
                className={`sns-cat-tab tab-tiktok ${
                  snsActiveTab === "tiktok" ? "is-active" : ""
                }`}
                onClick={() => setSnsActiveTab("tiktok")}
              >
                <span>🎵 틱톡 공식 숏폼</span>
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={snsActiveTab === "kakao"}
                className={`sns-cat-tab tab-kakao ${
                  snsActiveTab === "kakao" ? "is-active" : ""
                }`}
                onClick={() => setSnsActiveTab("kakao")}
              >
                <span>💬 카카오톡 1:1 상담</span>
              </button>
            </div>

            {/* 4 Signature Brand Channel Cards */}
            <div
              className={`sns-cards-grid ${
                snsActiveTab === "ALL" ? "is-four-cols" : ""
              }`}
            >
              {/* 1. YouTube Official Card */}
              {(snsActiveTab === "ALL" || snsActiveTab === "youtube") && (
                <article className="sns-brand-card card-youtube">
                  <div>
                    <div className="sns-card-banner banner-youtube">
                      <div className="sns-brand-icon-wrap icon-youtube">
                        <svg
                          width="28"
                          height="28"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                      </div>
                      <span className="sns-status-pill">
                        <span
                          className="live-dot is-pulsing"
                          aria-hidden="true"
                        />
                        <span>YOUTUBE 공식채널</span>
                      </span>
                    </div>

                    <div className="sns-card-body">
                      <div className="sns-handle-row">
                        <img
                          src="/images/byungguk/avatar-1.jpg"
                          alt="이차어디가 병국 유튜브 프로필"
                          className="sns-handle-avatar"
                          width={34}
                          height={34}
                          loading="lazy"
                        />
                        <div>
                          <div
                            style={{
                              fontSize: "0.85rem",
                              fontWeight: 900,
                              color: "#ffffff",
                            }}
                          >
                            유튜브 &lsquo;이차어디가&rsquo;
                          </div>
                          <div className="sns-handle-text">
                            @ichaeodiga12 · 실명·얼굴 직영 방송
                          </div>
                        </div>
                      </div>

                      <h3 className="sns-card-title">
                        전국 출장 매입 풀영상 &amp; 실시간 쇼츠
                      </h3>
                      <p className="sns-card-desc">
                        주행거리 많은 차, 사고차, 노후 트럭이 어떻게 폐차가보다 수백만 원
                        더 받는지 병국이의 실제 현장 영상을 확인하세요.
                      </p>

                      <div className="sns-preview-thumbs">
                        <div className="sns-preview-thumb-item">
                          <img
                            src="/images/byungguk/ZGRimSgReGw-maxres1.jpg"
                            alt="유튜브 현장 영상 1"
                            width={200}
                            height={125}
                            loading="lazy"
                          />
                          <span className="sns-preview-thumb-tag">
                            ▶ 현장직캠
                          </span>
                        </div>
                        <div className="sns-preview-thumb-item">
                          <img
                            src="/images/kpro/car_1.jpg?v=navyplate1"
                            alt="유튜브 수출 차량"
                            width={200}
                            height={125}
                            loading="lazy"
                          />
                          <span className="sns-preview-thumb-tag">
                            ▶ 당일송금
                          </span>
                        </div>
                      </div>

                      <ul className="sns-feature-list">
                        <li>✓ 100% 실제 차주님 현장 인터뷰 및 무감가 송금 인증</li>
                        <li>✓ 차종별 해외 바이어 선호 옵션 및 우대 시세 브리핑</li>
                      </ul>
                    </div>
                  </div>

                  <div className="sns-card-footer">
                    <a
                      href={SITE_CONFIG.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sns-connect-btn btn-youtube"
                    >
                      <span>▶ 유튜브 공식채널 바로가기</span>
                      <ArrowRight size={16} aria-hidden="true" />
                    </a>
                    <button
                      type="button"
                      className="sns-sub-btn"
                      onClick={() =>
                        void scrollToSectionAndFocus("byungguk-videos")
                      }
                    >
                      <span>홈페이지에서 병국이 직캠 바로 재생 ↓</span>
                    </button>
                  </div>
                </article>
              )}

              {/* 2. Instagram Official Card */}
              {(snsActiveTab === "ALL" || snsActiveTab === "instagram") && (
                <article className="sns-brand-card card-instagram">
                  <div>
                    <div className="sns-card-banner banner-instagram">
                      <div className="sns-brand-icon-wrap icon-instagram">
                        <svg
                          width="26"
                          height="26"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <rect
                            width="20"
                            height="20"
                            x="2"
                            y="2"
                            rx="5"
                            ry="5"
                          />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                        </svg>
                      </div>
                      <span className="sns-status-pill">
                        <span>📸 INSTAGRAM 공식</span>
                      </span>
                    </div>

                    <div className="sns-card-body">
                      <div className="sns-handle-row">
                        <img
                          src="/images/byungguk/avatar-1.jpg"
                          alt="이차어디가 인스타그램 프로필"
                          className="sns-handle-avatar"
                          width={34}
                          height={34}
                          loading="lazy"
                        />
                        <div>
                          <div
                            style={{
                              fontSize: "0.85rem",
                              fontWeight: 900,
                              color: "#ffffff",
                            }}
                          >
                            인스타그램 &lsquo;이차어디가&rsquo;
                          </div>
                          <div className="sns-handle-text">
                            @ichaeodiga12 · 릴스 &amp; 카드뉴스
                          </div>
                        </div>
                      </div>

                      <h3 className="sns-card-title">
                        당일 입고 매입 스토리 &amp; 릴스 하이라이트
                      </h3>
                      <p className="sns-card-desc">
                        오늘 인천 수출단지에 입고된 차량 사진과 바이어 확정 시세표를
                        인스타그램 피드·릴스로 한눈에 확인하고 DM으로 간편 문의하세요.
                      </p>

                      <div className="sns-preview-thumbs">
                        <div className="sns-preview-thumb-item">
                          <img
                            src="/images/kpro/car_6.jpg?v=navyplate1"
                            alt="인스타그램 입고 피드 1"
                            width={200}
                            height={125}
                            loading="lazy"
                          />
                          <span className="sns-preview-thumb-tag">
                            📸 릴스인기
                          </span>
                        </div>
                        <div className="sns-preview-thumb-item">
                          <img
                            src="/images/kpro/car_12.jpg?v=navyplate1"
                            alt="인스타그램 입고 피드 2"
                            width={200}
                            height={125}
                            loading="lazy"
                          />
                          <span className="sns-preview-thumb-tag">
                            📸 당일입고
                          </span>
                        </div>
                      </div>

                      <ul className="sns-feature-list">
                        <li>✓ 매일 업데이트되는 차종별 직수출 최고가 비교 피드</li>
                        <li>✓ 인스타 DM으로 차량 사진 전송 시 실시간 시세 답변</li>
                      </ul>
                    </div>
                  </div>

                  <div className="sns-card-footer">
                    <a
                      href={SITE_CONFIG.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sns-connect-btn btn-instagram"
                    >
                      <span>📸 인스타그램 공식채널 연결</span>
                      <ArrowRight size={16} aria-hidden="true" />
                    </a>
                    <button
                      type="button"
                      className="sns-sub-btn"
                      onClick={() => openQuickConsultModal()}
                    >
                      <span>인스타 본 차종 그대로 10초 견적 신청</span>
                    </button>
                  </div>
                </article>
              )}

              {/* 3. TikTok Official Card */}
              {(snsActiveTab === "ALL" || snsActiveTab === "tiktok") && (
                <article className="sns-brand-card card-tiktok">
                  <div>
                    <div className="sns-card-banner banner-tiktok">
                      <div className="sns-brand-icon-wrap icon-tiktok">
                        <svg
                          width="25"
                          height="25"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                        </svg>
                      </div>
                      <span className="sns-status-pill">
                        <span>🎵 TIKTOK 공식숏폼</span>
                      </span>
                    </div>

                    <div className="sns-card-body">
                      <div className="sns-handle-row">
                        <img
                          src="/images/byungguk/avatar-1.jpg"
                          alt="이차어디가 틱톡 프로필"
                          className="sns-handle-avatar"
                          width={34}
                          height={34}
                          loading="lazy"
                        />
                        <div>
                          <div
                            style={{
                              fontSize: "0.85rem",
                              fontWeight: 900,
                              color: "#ffffff",
                            }}
                          >
                            틱톡 &lsquo;이차어디가 병국이&rsquo;
                          </div>
                          <div className="sns-handle-text">
                            @ichaeodiga12 · 30초 핵심 수출시세
                          </div>
                        </div>
                      </div>

                      <h3 className="sns-card-title">
                        폐차 vs 직수출 30초 극한 시세 비교 쇼츠
                      </h3>
                      <p className="sns-card-desc">
                        &ldquo;폐차장 가기 전에 무조건 보세요!&rdquo; 30초 만에 내 차 숨은
                        수출 가치를 알려주는 병국이의 틱톡 하이라이트 채널입니다.
                      </p>

                      <div className="sns-preview-thumbs">
                        <div className="sns-preview-thumb-item">
                          <img
                            src="/images/kpro/car_4.jpg?v=navyplate1"
                            alt="틱톡 쇼츠 차량 1"
                            width={200}
                            height={125}
                            loading="lazy"
                          />
                          <span className="sns-preview-thumb-tag">
                            🎵 30초비교
                          </span>
                        </div>
                        <div className="sns-preview-thumb-item">
                          <img
                            src="/images/kpro/car_15.jpg?v=navyplate1"
                            alt="틱톡 쇼츠 차량 2"
                            width={200}
                            height={125}
                            loading="lazy"
                          />
                          <span className="sns-preview-thumb-tag">
                            🎵 최고가인증
                          </span>
                        </div>
                      </div>

                      <ul className="sns-feature-list">
                        <li>✓ 고주행·사고차·노후 경유차 실제 매입 금액 전격 공개</li>
                        <li>✓ 바이어가 웃돈 주는 숨은 옵션(선루프·스마트키) 꿀팁</li>
                      </ul>
                    </div>
                  </div>

                  <div className="sns-card-footer">
                    <a
                      href={SITE_CONFIG.tiktokUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sns-connect-btn btn-tiktok"
                    >
                      <span>🎵 틱톡 공식채널 연결하기</span>
                      <ArrowRight size={16} aria-hidden="true" />
                    </a>
                    <button
                      type="button"
                      className="sns-sub-btn"
                      onClick={() =>
                        void scrollToSectionAndFocus("price-simulator")
                      }
                    >
                      <span>내 차 옵션 가산금 3초 계산해보기</span>
                    </button>
                  </div>
                </article>
              )}

              {/* 4. KakaoTalk 1:1 Direct Consultation Card */}
              {(snsActiveTab === "ALL" || snsActiveTab === "kakao") && (
                <article className="sns-brand-card card-kakao">
                  <div>
                    <div className="sns-card-banner banner-kakao">
                      <div className="sns-brand-icon-wrap icon-kakao">
                        <svg
                          width="28"
                          height="28"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M12 3C6.477 3 2 6.477 2 10.765c0 2.77 1.855 5.202 4.653 6.57-.205.764-.743 2.768-.852 3.2-.134.532.195.525.41.382.169-.112 2.688-1.825 3.771-2.567.65.095 1.324.145 2.018.145 5.523 0 10-3.477 10-7.73C22 6.477 17.523 3 12 3z" />
                        </svg>
                      </div>
                      <span
                        className="sns-status-pill"
                        style={{
                          background: "#fee500",
                          color: "#3c1e1e",
                          borderColor: "#fde047",
                        }}
                      >
                        <span>💬 24시 실시간 카톡상담</span>
                      </span>
                    </div>

                    <div className="sns-card-body">
                      <div className="sns-handle-row">
                        <img
                          src="/images/byungguk/avatar-1.jpg"
                          alt="이차어디가 카카오톡 상담 프로필"
                          className="sns-handle-avatar"
                          width={34}
                          height={34}
                          loading="lazy"
                        />
                        <div>
                          <div
                            style={{
                              fontSize: "0.85rem",
                              fontWeight: 900,
                              color: "#ffdf4b",
                            }}
                          >
                            카카오톡 1:1 다이렉트 상담
                          </div>
                          <div className="sns-handle-text">
                            이차어디가 병국이수출 · 직통 {SITE_CONFIG.phoneFormatted}
                          </div>
                        </div>
                      </div>

                      <h3 className="sns-card-title">
                        차량 사진 2~3장 전송 시 5분 내 시세 답장
                      </h3>
                      <p className="sns-card-desc">
                        통화가 어려운 시간대나 근무 중에도 부담 없이 카카오톡으로 차량
                        외관·계기판 사진만 보내주시면 병국이가 즉시 최고가를 안내합니다.
                      </p>

                      <div className="sns-preview-thumbs">
                        <div className="sns-preview-thumb-item">
                          <img
                            src="/images/kpro/car_10.jpg?v=navyplate1"
                            alt="카톡 사진 견적 예시 1"
                            width={200}
                            height={125}
                            loading="lazy"
                          />
                          <span className="sns-preview-thumb-tag">
                            💬 사진견적
                          </span>
                        </div>
                        <div className="sns-preview-thumb-item">
                          <img
                            src="/images/kpro/car_19.jpg?v=navyplate1"
                            alt="카톡 사진 견적 예시 2"
                            width={200}
                            height={125}
                            loading="lazy"
                          />
                          <span className="sns-preview-thumb-tag">
                            💬 5분회신
                          </span>
                        </div>
                      </div>

                      <ul className="sns-feature-list">
                        <li>✓ 영업 전화 강요 ZERO · 카톡 채팅만으로 확정 견적 산출</li>
                        <li>✓ 자동차등록증·신분증 카톡 전송으로 비대면 당일 말소</li>
                      </ul>
                    </div>
                  </div>

                  <div className="sns-card-footer">
                    <a
                      href={SITE_CONFIG.kakaoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sns-connect-btn btn-kakao"
                    >
                      <span>💬 카카오톡 1:1 상담 바로 연결</span>
                      <ArrowRight size={16} aria-hidden="true" />
                    </a>
                    <a href={smsHref} className="sns-sub-btn">
                      <span>문자(MMS)로 차량 사진 바로 보내기 ({SITE_CONFIG.phoneFormatted})</span>
                    </a>
                  </div>
                </article>
              )}
            </div>
          </div>
        </section>

        {/* Section: Byungguk's Real YouTube Field Proof Gallery (#byungguk-videos) */}
        <section className="section-block" id="byungguk-videos">
          <div className="container">
            <div className="section-header">
              <span className="section-eyebrow">
                VERIFIED FIELD RECORD · YOUTUBE @ICHAEODIGA12
              </span>
              <h2 className="section-title">
                얼굴 걸고 직접 발로 뛰는{" "}
                <span className="text-primary">
                  병국이의 실제 수출 현장 기록
                </span>
              </h2>
              <p className="section-desc">
                유령 알선 업체나 무등록 브로커에 속지 마세요. 유튜브 &apos;이차어디가&apos;에서
                매일 얼굴을 공개하고 포터2, 사고차, 노후 세단, 수입차를 직접 매입하는
                병국이의 실제 현장 영상입니다.
              </p>
            </div>

            <div className="byungguk-video-grid">
              {BYUNGGUK_FIELD_VIDEOS.map((vid) => (
                <article key={vid.id} className="byungguk-video-card">
                  <div>
                    <div
                      className="byungguk-video-thumb-box"
                      onClick={() => openVideoProofModal(vid)}
                    >
                      {/* Below-the-fold images use loading="lazy" ALONE per `optimize-image-priority` */}
                      <img
                        src={vid.imageSrc}
                        alt={`이차어디가 병국 현장 영상 - ${vid.title}`}
                        loading="lazy"
                        width={405}
                        height={720}
                      />
                      <span className="byungguk-video-badge-top">
                        {vid.badge}
                      </span>
                      <span className="byungguk-video-play-pill">
                        <Play size={13} fill="#ffffff" aria-hidden="true" />
                        <span>현장 영상 재생</span>
                      </span>
                    </div>

                    <div className="vehicle-card-content">
                      <h3 className="vehicle-name">{vid.title}</h3>
                      <p className="vehicle-meta">{vid.subtitle}</p>
                    </div>
                  </div>

                  <div className="vehicle-card-content">
                    <div className="card-action-pair">
                      <button
                        type="button"
                        className="btn-card-secondary"
                        onClick={() => openVideoProofModal(vid)}
                      >
                        <Play size={14} aria-hidden="true" />
                        <span>영상 보기</span>
                      </button>
                      <button
                        type="button"
                        className="btn-card-primary"
                        onClick={() =>
                          handleSelectVehicleForQuote(vid.carModelForQuote)
                        }
                      >
                        <span>이 조건으로 견적 문의</span>
                        <ArrowRight size={14} aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Subtle Section Connector Bridge */}
            <div className="moebius-bridge">
              <div className="quote-form-profile-row">
                <div className="byungguk-avatar-circle">
                  <img
                    src="/images/byungguk/ZGRimSgReGw-maxres1.jpg"
                    alt="병국 대표"
                    loading="lazy"
                    width={52}
                    height={52}
                  />
                </div>
                <div>
                  <strong className="text-obsidian fw-800">
                    &ldquo;영상 보신 그대로, 차주님 차량도 제가 직접 최고가로 맞춰드립니다.&rdquo;
                  </strong>
                  <p className="text-sub">
                    왜 폐차나 내수 딜러보다 해외 직수출이 수백만 원 더 유리한지 아래에서
                    확인해 보세요.
                  </p>
                </div>
              </div>
              <div className="moebius-bridge-btns">
                <button
                  type="button"
                  className="btn-bridge-next"
                  onClick={() => void scrollToSectionAndFocus("why-export")}
                >
                  <span>폐차 vs 직수출 비교표</span>
                  <ArrowRight size={15} aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="btn-bridge-quote"
                  onClick={() =>
                    void scrollToSectionAndFocus("price-simulator")
                  }
                >
                  <span>내 차 시세 계산기로 이동</span>
                  <ArrowRight size={15} aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: Why Used Car Export? + AEO/GEO Direct Answer Box */}
        <section className="section-block bg-white" id="why-export">
          <div className="container">
            <div className="section-header">
              <span className="section-eyebrow">WHY DIRECT EXPORT?</span>
              <h2 className="section-title">
                왜 폐차·내수 매매보다{" "}
                <span className="text-primary">이차어디가 직수출</span>이
                유리할까요?
              </h2>
              <p className="section-desc">
                국내에서는 연식과 주행거리가 많으면 가치가 급락하지만, 해외 중동·중앙아시아·중남미
                시장에서는 한국 자동차가 최고의 인기 모델로 높은 시세를 형성하고 있습니다.
              </p>
            </div>

            <article
              id="aeo-direct-answer"
              className="aeo-summary-card"
              aria-labelledby="aeo-summary-title"
            >
              <div className="section-eyebrow">
                <BookOpenCheck size={15} aria-hidden="true" />
                <span>OFFICIAL EXPORT VALUATION GUIDE</span>
              </div>

              <h3 id="aeo-summary-title" className="vehicle-name">
                중고차 수출이란 무엇이며, 어떤 차량이 폐차 대신 직수출 대상인가요?
              </h3>

              <p className="text-sub">
                <strong>중고차 직수출</strong>은 연식이 오래되었거나 주행거리가{" "}
                <strong>20만~50만km 이상</strong>인 차량, 사고 이력·외관 흠집이 있는
                국산 승용차·SUV·화물차(포터2·봉고3)·수입차를 해외 현지 바이어에게 직접
                매각하는 방식입니다. 고철 무게로만 정산하는 일반 폐차나 3단계 알선 수수료를 떼는 국내
                매매상사 대신 <strong>해외 30개국 현지 바이어와 직통으로 매칭하여 차종·옵션 가치를 100% 인정</strong>받으며,
                인감증명서 없이 당일 즉시 계좌로 정산받을 수 있습니다.
              </p>

              <dl className="aeo-dl-grid">
                <div className="aeo-dl-item">
                  <dt>1. 매입 가능 조건 (무감가 원칙)</dt>
                  <dd>
                    엔진·미션 정상 운행 가능 시 주행거리 무제한(20만~50만km+), 단순교환·사고차·외판
                    스크래치 감가 없이 매입
                  </dd>
                </div>
                <div className="aeo-dl-item">
                  <dt>2. 우대 가산금 옵션</dt>
                  <dd>
                    선루프(파노라마), 스마트키, 순정 내비게이션, 풀오토 에어컨, 화물차 수동(스틱)
                    미션 및 흰색·밝은 색상 차량 추가 지급
                  </dd>
                </div>
                <div className="aeo-dl-item">
                  <dt>3. 구비서류 및 진행 시간</dt>
                  <dd>
                    개인 기준 【자동차등록증 원본 + 신분증 사진】만으로 무방문 진행! 고객 60% 이상이
                    병국이 얼굴만 믿고 차부터 편하게 보내주시며 단지 도착 즉시 칼정산 (현장 선입금도 가능)
                  </dd>
                </div>
                <div className="aeo-dl-item">
                  <dt>4. 행정 말소 및 보험·세금 환급</dt>
                  <dd>
                    차량 입고 후 당일~익일 내 &apos;수출말소사실증명서&apos; 발급 → 남은
                    자동차보험료 및 자동차세 즉시 환급
                  </dd>
                </div>
              </dl>

              <figure className="geo-quote-figure">
                <blockquote cite={SITE_CONFIG.siteUrl}>
                  <p>
                    &ldquo;조기폐차 지원금은 서류 심사와 입금까지 수개월이 소요되고 금액도
                    제한적이지만, 해외 직수출은 바이어 시세 그대로 당일 현장에서 전액
                    송금받으며 차종에 따라 수백만 원의 추가 수익을 확보할 수 있습니다.&rdquo;
                  </p>
                </blockquote>
                <figcaption>
                  — <cite>{SITE_CONFIG.brandName} 중고차수출 다이렉트 센터</cite>{" "}
                  수출마스터 병국 (직통 {SITE_CONFIG.phoneFormatted})
                </figcaption>
              </figure>
            </article>

            <div className="compare-table-wrapper">
              <table className="compare-table">
                <thead>
                  <tr>
                    <th scope="col">비교 항목</th>
                    <th scope="col">일반 폐차 / 조기폐차</th>
                    <th scope="col">국내 중고차 매매상사</th>
                    <th scope="col" className="col-highlight">
                      이차어디가(병국이수출) 직수출
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((row) => (
                    <tr key={row.criteria}>
                      <th scope="row" className="fw-800">
                        {row.criteria}
                      </th>
                      <td className="text-sub">{row.scrap}</td>
                      <td className="text-sub">{row.domesticDealer}</td>
                      <td className="col-highlight">
                        ✓ {row.ichaeodigaExport}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 2: Popular Export Vehicles & Real Vehicle Showroom Grid (#export-vehicles) */}
        <section className="section-block" id="export-vehicles">
          <div className="container">
            <div className="section-header">
              <span className="section-eyebrow">EXPORT SHOWROOM &amp; PRICE GUIDE</span>
              <h2 className="section-title">
                차종별 해외 직수출 우대 매입 시세표
              </h2>
              <p className="section-desc">
                아래 목록에 없는 차종(전 차종 국산·수입·특장·노후 트럭)도 모두 최고가
                매입이 가능합니다. 차종 카드를 통해 <strong>옵션 시세계산기</strong> 또는{" "}
                <strong>1분 견적창</strong>과 즉시 연동됩니다.
              </p>
            </div>

            <div
              className="category-tabs"
              role="group"
              aria-label="차종 카테고리 필터"
            >
              {(
                [
                  "전체",
                  "승용·세단",
                  "SUV·RV",
                  "화물·트럭",
                  "수입차",
                ] as VehicleCategory[]
              ).map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className="category-tab-btn"
                  aria-pressed={selectedCategory === cat}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="vehicles-grid">
              {filteredVehicles.map((item) => (
                <article key={item.id} className="vehicle-card">
                  <img
                    className="vehicle-card-img"
                    src={item.imageUrl}
                    alt={item.imageAlt}
                    loading="lazy"
                    width={800}
                    height={500}
                  />

                  <header>
                    <div className="vehicle-card-top">
                      <span className="vehicle-category-tag">
                        {item.category}
                      </span>
                      <span className="vehicle-badge">{item.badge}</span>
                    </div>
                    <h3 className="vehicle-name">{item.name}</h3>
                    <p className="vehicle-meta">
                      대상 연식: {item.years} · 주요 수출국:{" "}
                      {item.exportCountries}
                    </p>
                  </header>

                  <div className="vehicle-card-content">
                    <div className="vehicle-sample-spec">
                      <CarFront
                        size={15}
                        color="var(--primary)"
                        aria-hidden="true"
                      />
                      <span>{item.sampleSpec}</span>
                    </div>

                    <div className="vehicle-price-box">
                      <div className="showroom-star-bar">
                        <span className="showroom-star-title">차주 체감 만족도</span>
                        <strong className="showroom-star-icons">
                          {item.id.endsWith("1") || item.id.endsWith("3") || item.id.endsWith("6") || item.id.endsWith("8")
                            ? "⭐⭐⭐⭐⭐⭐⭐ (별 5개 만점에 7개 돌파!)"
                            : item.id.endsWith("4")
                              ? "⭐⭐⭐⭐⭐ 4.9 / 5.0 (입금이 너무 빨라 0.1점 뺌ㅋㅋ)"
                              : "⭐⭐⭐⭐⭐ (별 5개 중 5.0 만점 · 무감가 인증)"}
                        </strong>
                      </div>
                      <div className="showroom-story-block is-bad">
                        <span className="price-col-label">😢 타사·폐차장 설움 사연</span>
                        <span className="price-col-scrap">
                          {item.scrapPriceRange}
                        </span>
                      </div>
                      <div className="showroom-story-block is-good">
                        <span className="price-col-label">
                          🔥 병국이가 타사보다 더 드리는 이유
                        </span>
                        <span className="price-col-export">
                          {item.exportPriceRange}
                        </span>
                      </div>
                      <div className="vehicle-profit-banner">
                        💥 {item.maxExtraProfit}
                      </div>
                    </div>

                    <ul className="vehicle-points">
                      {item.keyPoints.map((pt) => (
                        <li key={pt} className="consent-check-label">
                          <CheckCircle2
                            size={15}
                            color="var(--accent-emerald)"
                            aria-hidden="true"
                          />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <footer>
                    <div className="card-action-pair">
                      <button
                        type="button"
                        className="btn-card-secondary"
                        onClick={() =>
                          handleLoadVehicleIntoSimulator(item.id, item.name)
                        }
                      >
                        <Calculator size={15} aria-hidden="true" />
                        <span>옵션 시세계산기</span>
                      </button>
                      <button
                        type="button"
                        className="btn-card-primary"
                        onClick={() => handleSelectVehicleForQuote(item.name)}
                      >
                        <span>이 차종 최고가 견적</span>
                        <ArrowRight size={15} aria-hidden="true" />
                      </button>
                    </div>
                  </footer>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* BENCHMARKED FUNNEL 4: Nationwide Non-Face-to-Face & Regional Free Visit Reservation (#regional-visit-section) */}
        <section className="section-block bg-navy" id="regional-visit-section">
          <div className="container">
            <div className="section-header">
              <span className="section-eyebrow">
                NATIONWIDE CONCIERGE &amp; FREE PICKUP
              </span>
              <h2 className="section-title text-white">
                전국 어디서든 비대면 당일 출장{" "}
                <span className="text-gold">권역별 무료방문 견적예약</span>
              </h2>
              <p className="section-desc">
                거주하시는 권역을 선택하시면 전담 출장팀 배차 소요 시간과 함께 원하시는
                일시로 무료 방문 검수 및 당일 송금을 예약하실 수 있습니다.
              </p>
            </div>

            {/* 8 Single-Line Region Selector Buttons */}
            <div
              className="region-tabs-bar"
              role="group"
              aria-label="권역별 출장 지역 선택"
            >
              {REGIONAL_DISPATCH_HUBS.map((hub) => (
                <button
                  key={hub.id}
                  type="button"
                  className="region-tab-pill"
                  aria-pressed={selectedHubId === hub.id}
                  onClick={() => {
                    setSelectedHubId(hub.id);
                    setRegion(hub.regionValue);
                  }}
                >
                  <MapPin size={14} aria-hidden="true" />{" "}
                  <span>{hub.tabLabel}</span>
                </button>
              ))}
            </div>

            <div className="regional-visit-grid">
              {/* Left: Selected Region Dispatch Status & Byungguk Guarantee */}
              <div className="regional-info-card">
                <div>
                  <div className="sim-valuation-badge">
                    <span>● [{currentRegionalHub.tabLabel}] 직영 출장팀 상시 대기</span>
                  </div>

                  <h3 className="sim-valuation-model">
                    {currentRegionalHub.dispatchTime}
                  </h3>
                  <p className="sim-valuation-trim text-gold">
                    전담 거점: {currentRegionalHub.hubCenter}
                  </p>

                  <p className="regional-quote-callout">
                    &ldquo;{currentRegionalHub.managerComment}&rdquo;
                  </p>

                  <ul className="vehicle-points text-white">
                    {currentRegionalHub.highlights.map((hl) => (
                      <li key={hl} className="consent-check-label">
                        <CheckCircle2
                          size={16}
                          color="var(--accent-gold)"
                          aria-hidden="true"
                        />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="quote-form-profile-row">
                  <div className="byungguk-avatar-circle">
                    <img
                      src="/images/byungguk/jJpmviXfkLQ-maxres1.jpg"
                      alt="병국 대표 포터2 현장 출장"
                      loading="lazy"
                      width={52}
                      height={52}
                    />
                  </div>
                  <div>
                    <strong className="text-gold fw-800">
                      수출마스터 병국 직영 무료 출장 보증
                    </strong>
                    <div className="sim-valuation-trim">
                      견적만 받아보셔도 출장비 0원 · 금액이 맞지 않으시면 판매하지 않으셔도
                      됩니다.
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Nationwide Free Visit Reservation Form */}
              <div className="regional-form-card">
                <div className="quote-form-profile-row">
                  <CalendarClock
                    size={22}
                    color="var(--primary)"
                    aria-hidden="true"
                  />
                  <h3 className="quote-form-title">
                    [{currentRegionalHub.tabLabel}] 무료방문 · 비대면 견적신청
                  </h3>
                </div>

                <form onSubmit={handleRegionalVisitSubmit}>
                  <div className="form-group">
                    <span className="form-label">신청 유형 선택</span>
                    <div className="radio-pill-group">
                      {(["수출 최고가 판매", "폐차 비교견적"] as const).map(
                        (t) => (
                          <div key={t}>
                            <input
                              type="radio"
                              id={`${uid}-vtype-${t}`}
                              name="visitType"
                              value={t}
                              checked={visitType === t}
                              onChange={() => setVisitType(t)}
                              className="visually-hidden radio-pill-input"
                            />
                            <label
                              htmlFor={`${uid}-vtype-${t}`}
                              className="radio-pill-label"
                            >
                              {t}
                            </label>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label
                        htmlFor={`${uid}-visit-time`}
                        className="form-label"
                      >
                        희망 방문·상담 시간
                      </label>
                      <select
                        id={`${uid}-visit-time`}
                        className="form-select"
                        value={visitTimeSlot}
                        onChange={(e) => setVisitTimeSlot(e.target.value)}
                      >
                        <option value="오늘 당일 즉시 방문/상담">
                          오늘 당일 즉시 방문/상담
                        </option>
                        <option value="오전 (09:00 ~ 12:00)">
                          오전 (09:00 ~ 12:00)
                        </option>
                        <option value="오후 (12:00 ~ 18:00)">
                          오후 (12:00 ~ 18:00)
                        </option>
                        <option value="퇴근 후 야간 / 주말 예약">
                          퇴근 후 야간 / 주말 예약
                        </option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label
                        htmlFor={`${uid}-visit-region`}
                        className="form-label"
                      >
                        방문 지역 (시/도 · 구/군)
                      </label>
                      <input
                        type="text"
                        id={`${uid}-visit-region`}
                        className="form-input"
                        value={region}
                        onChange={(e) => setRegion(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label
                        htmlFor={`${uid}-visit-car`}
                        className="form-label"
                      >
                        차량명 <span className="required-star">*</span>
                      </label>
                      <input
                        type="text"
                        id={`${uid}-visit-car`}
                        list={`${uid}-car-models-list`}
                        className="form-input"
                        placeholder="예: 포터2, 쏘렌토R, 아반떼"
                        required
                        minLength={2}
                        value={carModel}
                        onChange={(e) => setCarModel(e.target.value)}
                      />
                    </div>

                    <div className="form-group">
                      <label
                        htmlFor={`${uid}-visit-phone`}
                        className="form-label"
                      >
                        연락처 <span className="required-star">*</span>
                      </label>
                      <input
                        type="tel"
                        id={`${uid}-visit-phone`}
                        className="form-input"
                        placeholder="010-0000-0000"
                        required
                        autoComplete="tel"
                        inputMode="tel"
                        pattern="[0-9\-+\s]{9,15}"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>

                  <button type="submit" className="btn-submit-quote">
                    <span>
                      [{currentRegionalHub.tabLabel}] 무료 방문·비대면 견적 예약하기
                    </span>
                    <ArrowRight size={19} aria-hidden="true" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: 4-Step Direct Export Process & Required Documents */}
        <section className="section-block bg-navy" id="export-process">
          <div className="container">
            <div className="section-header">
              <span className="section-eyebrow">
                FAST &amp; SAFE 4-STEP PROCESS
              </span>
              <h2 className="section-title text-white">
                전화 한 통으로 끝나는 당일 원스톱 수출 절차
              </h2>
              <p className="section-desc">
                복잡한 인감증명서 발급이나 매매단지 방문 없이, 계신 곳에서 당일 현금
                수령부터 수출말소까지 안전하게 완료됩니다.
              </p>
            </div>

            <div className="process-grid">
              <div className="process-step-card">
                <span className="step-number-badge">01</span>
                <h3 className="step-title">1분 무료 수출 견적 상담</h3>
                <p className="step-desc">
                  홈페이지 견적 신청, 전화({SITE_CONFIG.phoneFormatted}) 또는 문자로
                  차종·연식·옵션을 알려주시면 실시간 해외 바이어 최고 시세를 산출합니다.
                </p>
              </div>

              <div className="process-step-card">
                <span className="step-number-badge">02</span>
                <h3 className="step-title">전국 무료 출장 &amp; 비대면 검수</h3>
                <p className="step-desc">
                  고객님이 원하시는 날짜와 장소(자택, 직장 등 전국 어디나)로 병국이 및
                  전문 매니저가 무료 방문하여 10분 내외로 간단히 확인합니다.
                </p>
              </div>

              <div className="process-step-card">
                <span className="step-number-badge">03</span>
                <h3 className="step-title">얼굴 믿고 선탁송(60%+) 또는 현장 송금</h3>
                <p className="step-desc">
                  바쁘신 고객님의 60% 이상은 유튜브 속 병국이 얼굴만 믿고 키만 넣어 차부터 편하게 보내주십니다. 단지 도착 즉시 칼정산은 물론 원하시면 인수 전 선입금도 100% 맞춰드립니다.
                </p>
              </div>

              <div className="process-step-card">
                <span className="step-number-badge">04</span>
                <h3 className="step-title">무료 탁송 및 당일 수출말소</h3>
                <p className="step-desc">
                  필요 서류는 자동차등록증과 신분증 사진뿐! 입고 즉시 당일~익일 수출말소증명서를
                  발급해 드려 보험료·세금 환급까지 도와드립니다.
                </p>
              </div>
            </div>

            <div className="docs-box" id="required-documents">
              <h3 className="step-title">명의별 중고차 수출 간편 구비서류</h3>
              <p className="step-desc">
                개인 명의 차량은 관공서 방문이나 인감증명서 발급 없이 스마트폰 사진
                전송만으로 당일 수출 말소가 가능합니다.
              </p>
              <div className="docs-grid">
                {REQUIRED_DOCUMENTS_TABLE.map((doc) => (
                  <div key={doc.ownerType} className="doc-item-card">
                    <strong className="text-gold fw-800">{doc.ownerType}</strong>
                    <p className="text-white fw-800">{doc.requiredDocs}</p>
                    <p className="step-desc">
                      {doc.visitNeeded} · {doc.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Customer Reviews (실제 출장 매입 후기) */}
        <section className="section-block" id="real-reviews">
          <div className="container">
            <div className="section-header">
              <span className="section-eyebrow">
                VERIFIED DIRECT EXPORT CLIENT REVIEWS
              </span>
              <h2 className="section-title">
                이차어디가(병국이수출){" "}
                <span style={{ color: "#057a44" }}>
                  실제 출장 매입 후기
                </span>
              </h2>
              <p className="section-desc">
                폐차장이나 국내 매매상사에 넘기기 직전, 병국이와 직거래 상담 후
                수백만 원의 추가 수익을 당일 현장에서 송금받으신 전국 차주님들의
                실제 출장 매입 후기입니다.
              </p>
            </div>

            <div className="reviews-grid">
              {filteredReviews100.slice(0, visibleReviewCount).map((rev) => (
                <article key={rev.id} className="review-card">
                  <div>
                    {rev.imageUrl && (
                      <div
                        style={{
                          position: "relative",
                          borderRadius: "10px",
                          overflow: "clip",
                          marginBottom: "0.85rem",
                          aspectRatio: "16 / 10",
                          background: "#0f172a",
                        }}
                      >
                        <img
                          src={rev.imageUrl}
                          alt={`${rev.carModel} 이차어디가 실제 수출 매입 차량`}
                          width={400}
                          height={250}
                          loading="lazy"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                        <span
                          style={{
                            position: "absolute",
                            top: "8px",
                            left: "8px",
                            background: "rgba(6, 10, 18, 0.85)",
                            color: "#ffdf4b",
                            fontSize: "0.72rem",
                            fontWeight: 800,
                            padding: "0.2rem 0.55rem",
                            borderRadius: "999px",
                          }}
                        >
                          직수출 인증 · {rev.exportCountry || "해외직수출"}
                        </span>
                      </div>
                    )}

                    <div className="ticker-card-top">
                      <span className="text-muted">
                        <strong className="text-obsidian">
                          {rev.customerName}
                        </strong>{" "}
                        · {rev.region} ({rev.yearAndMileage})
                      </span>
                      <span className="text-muted">{rev.date}</span>
                    </div>

                    <div className="review-star-pill-row">
                      <span className="review-star-pill">
                        {rev.id.endsWith("1") || rev.id.endsWith("3") || rev.id.endsWith("5") || rev.id.endsWith("7")
                          ? "⭐⭐⭐⭐⭐⭐⭐ 차주 만족도: 별 5개 만점에 7개!"
                          : rev.id.endsWith("4")
                            ? "⭐⭐⭐⭐⭐ 4.9 / 5.0 (별 5개 중 4.9개)"
                            : "⭐⭐⭐⭐⭐ 차주 만족도: 별 5개 중 5.0 만점"}
                      </span>
                    </div>

                    <h3 className="vehicle-name">&ldquo;{rev.title}&rdquo;</h3>

                    <p className="vehicle-meta">{rev.content}</p>
                  </div>

                  <div>
                    <div
                      className="review-gain-banner"
                      style={{
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "0.35rem",
                      }}
                    >
                      <div style={{ fontSize: "0.82rem", color: "#64748b" }}>
                        ❌ {rev.previousOffer}
                      </div>
                      <div
                        style={{
                          fontSize: "0.88rem",
                          fontWeight: 800,
                          color: "#057a44",
                        }}
                      >
                        ⭕ {rev.finalExportPrice}
                      </div>
                      <span className="ticker-bonus-pill">💥 {rev.extraGain}</span>
                    </div>

                    <div className="ticker-header-row">
                      <div className="sim-pill-row">
                        {rev.tags.map((tag) => (
                          <span key={tag} className="review-tag-pill">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <button
                        type="button"
                        className="btn-privacy-detail"
                        onClick={() => handleSelectVehicleForQuote(rev.carModel)}
                      >
                        이 차량처럼 견적받기 →
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More / Show All Reviews Controls */}
            {visibleReviewCount < filteredReviews100.length && (
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: "0.75rem",
                  marginTop: "2rem",
                }}
              >
                <button
                  type="button"
                  className="btn-card-primary"
                  style={{ minWidth: "240px", minHeight: "52px" }}
                  onClick={() =>
                    setVisibleReviewCount((prev) =>
                      Math.min(filteredReviews100.length, prev + 16)
                    )
                  }
                >
                  <span>실제 출장 매입후기 더보기</span>
                </button>
                <button
                  type="button"
                  className="btn-card-secondary"
                  style={{ minWidth: "220px", minHeight: "52px" }}
                  onClick={() =>
                    setVisibleReviewCount(filteredReviews100.length)
                  }
                >
                  <span>실제 매입후기 전체 펼치기</span>
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Section 5: FAQ with Native Exclusive <details name="faq"> */}
        <section className="section-block bg-white" id="faq-section">
          <div className="container">
            <div className="section-header">
              <span className="section-eyebrow">FREQUENTLY ASKED QUESTIONS</span>
              <h2 className="section-title">중고차 수출 자주 묻는 질문</h2>
              <p className="section-desc">
                처음 중고차 수출을 진행하시는 차주님들이 가장 궁금해하시는 핵심 내용을
                정리했습니다.
              </p>
            </div>

            <div className="faq-list">
              {FAQ_ITEMS.map((faq, idx) => (
                <details
                  key={faq.id}
                  name="faq"
                  className="faq-details"
                  open={idx === 0}
                >
                  <summary className="faq-summary">
                    <span className="consent-check-label">
                      <HelpCircle
                        size={19}
                        color="var(--primary)"
                        aria-hidden="true"
                      />
                      <span>{faq.question}</span>
                    </span>
                  </summary>
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                    <div className="sim-pill-row">
                      <button
                        type="button"
                        className="btn-bridge-next"
                        onClick={() =>
                          void scrollToSectionAndFocus("quote-form-section", true)
                        }
                      >
                        <span>내 차량 조건으로 병국이에게 시세 물어보기</span>
                        <ArrowRight size={14} aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Infinite Möbius Loop Continuation Stations */}
        {moebiusCycles.map((cycleNum) => {
          const spotlightVehicle =
            EXPORT_VEHICLES[(cycleNum - 1) % EXPORT_VEHICLES.length];
          const spotlightReview =
            CUSTOMER_REVIEWS[(cycleNum - 1) % CUSTOMER_REVIEWS.length];
          const spotlightVideo =
            BYUNGGUK_FIELD_VIDEOS[(cycleNum - 1) % BYUNGGUK_FIELD_VIDEOS.length];

          return (
            <section
              key={`moebius-cycle-${cycleNum}`}
              className="moebius-loop-cycle"
              aria-label={`무한 연결 수출 견적 스테이션 ${cycleNum}`}
            >
              <div className="container">
                <div className="section-header">
                  <span className="section-eyebrow">
                    <RefreshCw size={14} aria-hidden="true" />
                    <span>DIRECT VALUATION CONCIERGE #{cycleNum}</span>
                  </span>
                  <h2 className="section-title text-white">
                    아직 내 차의 해외 바이어 최고가를 확인하지 않으셨나요?
                  </h2>
                  <p className="section-desc">
                    지금 보고 계신{" "}
                    <strong className="text-gold">
                      {spotlightVehicle.name}
                    </strong>{" "}
                    차종은{" "}
                    <strong className="text-gold">
                      {spotlightVehicle.maxExtraProfit}
                    </strong>{" "}
                    혜택으로 진행됩니다. 아래에서 차종과 연락처만 입력해 즉시 확인하세요.
                  </p>
                </div>

                <div className="moebius-cycle-card">
                  <div className="ticker-header-row">
                    <div className="quote-form-profile-row">
                      <div className="byungguk-avatar-circle">
                        <img
                          src={spotlightVideo.imageSrc}
                          alt="병국 대표 현장 모습"
                          loading="lazy"
                          width={52}
                          height={52}
                        />
                      </div>
                      <div>
                        <span className="quote-form-badge">
                          CASE STUDY #{cycleNum}
                        </span>
                        <h3 className="quote-form-title">
                          {spotlightReview.carModel} ({spotlightReview.yearAndMileage}) —{" "}
                          <span className="text-primary">
                            {spotlightReview.extraGain}
                          </span>
                        </h3>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn-bridge-next"
                      onClick={() =>
                        handleSelectVehicleForQuote(spotlightVehicle.name)
                      }
                    >
                      상단 메인 견적창으로 이동 ↑
                    </button>
                  </div>

                  <form onSubmit={handleSubmitQuote}>
                    <div className="form-row-2">
                      <div className="form-group">
                        <label
                          htmlFor={`${uid}-loop-${cycleNum}-car`}
                          className="form-label"
                        >
                          차량명 (차종) <span className="required-star">*</span>
                        </label>
                        <input
                          type="text"
                          id={`${uid}-loop-${cycleNum}-car`}
                          list={`${uid}-car-models-list`}
                          className="form-input"
                          placeholder="예: 아반떼 AD, 포터2, 쏘렌토 R"
                          required
                          minLength={2}
                          value={carModel}
                          onChange={(e) => setCarModel(e.target.value)}
                        />
                      </div>

                      <div className="form-group">
                        <label
                          htmlFor={`${uid}-loop-${cycleNum}-phone`}
                          className="form-label"
                        >
                          연락처 (휴대폰 번호){" "}
                          <span className="required-star">*</span>
                        </label>
                        <input
                          type="tel"
                          id={`${uid}-loop-${cycleNum}-phone`}
                          className="form-input"
                          placeholder="010-0000-0000"
                          required
                          autoComplete="tel"
                          inputMode="tel"
                          pattern="[0-9\-+\s]{9,15}"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="form-row-2">
                      <button type="submit" className="btn-submit-quote">
                        <span>병국이에게 무료 견적 신청 완료하기</span>
                        <ArrowRight size={19} aria-hidden="true" />
                      </button>

                      <a
                        href={telHref}
                        className="btn-hero-call"
                        onClick={() => markInquiryCompleted()}
                      >
                        <PhoneCall size={18} aria-hidden="true" />
                        <span>직통 전화 {SITE_CONFIG.phoneFormatted}</span>
                      </a>
                    </div>
                  </form>

                  <div className="moebius-bridge">
                    <span className="text-sub fw-800">
                      원하시는 메뉴로 바로 이동하실 수 있습니다
                    </span>
                    <div className="moebius-bridge-btns">
                      <button
                        type="button"
                        className="btn-bridge-next"
                        onClick={() =>
                          void scrollToSectionAndFocus("price-simulator")
                        }
                      >
                        실시간 시세계산기
                      </button>
                      <button
                        type="button"
                        className="btn-bridge-next"
                        onClick={() =>
                          void scrollToSectionAndFocus("export-vehicles")
                        }
                      >
                        차종별 수출시세표
                      </button>
                      <button
                        type="button"
                        className="btn-bridge-next"
                        onClick={() =>
                          void scrollToSectionAndFocus("real-reviews")
                        }
                      >
                        실제 매입후기
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        {/* Sentinel for Infinite Möbius Scroll */}
        <div ref={bottomSentinelRef} aria-hidden="true" />
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container">
          <div className="ticker-header-row">
            <div>
              <div className="text-white fw-800">
                {SITE_CONFIG.brandName} ({SITE_CONFIG.subBrandName})
              </div>
              <p>상호명: {SITE_CONFIG.companyInfo.companyName}</p>
              <p>사업자등록번호: {SITE_CONFIG.companyInfo.businessNumber}</p>
              <p>수출단지 소재지: {SITE_CONFIG.companyInfo.exportComplex}</p>
            </div>

            <div>
              <div className="text-white fw-800">
                365일 24시간 병국이수출 직통 상담센터
              </div>
              <a
                href={telHref}
                onClick={() => markInquiryCompleted()}
                className="hero-kpi-value"
              >
                {SITE_CONFIG.phoneFormatted}
              </a>
              <div className="sim-pill-row">
                <button
                  type="button"
                  className="btn-bridge-quote"
                  onClick={() =>
                    void scrollToSectionAndFocus("quote-form-section", true)
                  }
                >
                  상단 30초 무료 견적창으로 바로 이동 ↑
                </button>
              </div>
            </div>
          </div>

          <div className="ticker-header-row">
            <span>
              © {new Date().getFullYear()} {SITE_CONFIG.brandName}. All rights
              reserved. · 6중 보안 방화벽(WAF) 및 개인정보 암호화 보호 작동 중
            </span>
            <div className="top-notice-left">
              <span>
                수출마스터 병국 실명 보증 · 전국 무료 탁송 · 당일 현금 지급
              </span>
              <a href="/admin" className="footer-admin-link">
                <ShieldCheck size={13} aria-hidden="true" />
                <span>관리자 전용 DB 센터</span>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Bottom-Right Byungguk Photo Companion + TOP Button (follows scroll) */}
      <div
        className={`floating-byungguk-top-dock ${
          isScrolledDown ? "is-visible" : ""
        }`}
        role="region"
        aria-label="병국이 빠른 상담 및 맨 위로 이동"
      >
        <button
          type="button"
          className="floating-byungguk-buddy"
          onClick={() => openQuickConsultModal()}
          title="수출마스터 병국이 10초 무료 시세상담 열기"
        >
          <div className="buddy-avatar-ring">
            <img
              src="/images/byungguk/ZGRimSgReGw-maxres1.jpg"
              alt="수출마스터 병국이"
              width={54}
              height={54}
            />
            <span className="buddy-online-dot" aria-hidden="true" />
          </div>
          <div className="buddy-text-col">
            <span className="buddy-tag">● 병국이 실시간 대기</span>
            <strong>10초 최고가 상담</strong>
          </div>
        </button>

        <button
          type="button"
          className="floating-top-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="맨 위로 이동 (TOP)"
          title="페이지 맨 위로 이동"
        >
          <span className="top-arrow" aria-hidden="true">
            ▲
          </span>
          <span className="top-label">TOP</span>
        </button>
      </div>

      {/* KPRO BENCHMARK: Dual PC (#fix_btm) & Mobile (.fix_counsel) Fixed Bottom Bar */}
      <aside
        className="kpro-fix-btm"
        aria-label="하단 고정 실시간 빠른 수출 견적 바"
      >
        <div className="container kpro-fix-pc">
          <div className="kpro-fix-pc-title">
            내 차를 원스톱으로{" "}
            <strong>판매하는 실시간 無 감가 입찰 경쟁 시스템</strong>{" "}
            이차어디가(병국이수출)
          </div>
          <div className="kpro-fix-pc-btns">
            <button
              type="button"
              className="kpro-fix-btn1"
              onClick={() => openQuickConsultModal()}
            >
              비교견적받기
            </button>
            <a
              href={telHref}
              onClick={() => markInquiryCompleted()}
              className="kpro-fix-btn2"
            >
              실시간전화상담
            </a>
          </div>
        </div>

        {/* Mobile 50:50 Split Bar (.fix_counsel) */}
        <div className="kpro-fix-mobile">
          <button
            type="button"
            className="kpro-fix-mo-left"
            onClick={() => openQuickConsultModal()}
          >
            비교견적받기
          </button>
          <a
            href={telHref}
            onClick={() => markInquiryCompleted()}
            className="kpro-fix-mo-right"
          >
            실시간전화상담
          </a>
        </div>
      </aside>

      {/* Modal 1: Quote Submission Confirmation (<dialog closedby="any">) */}
      <dialog
        ref={successDialogRef}
        className="site-dialog"
        aria-labelledby={`${uid}-success-dialog-title`}
        {...({ closedby: "any" } as React.DialogHTMLAttributes<HTMLDialogElement>)}
      >
        <div className="dialog-inner">
          <div className="quote-form-badge">
            <ShieldCheck size={15} aria-hidden="true" />
            <span>병국이수출 견적 접수 완료</span>
          </div>

          <h2 id={`${uid}-success-dialog-title`} className="quote-form-title">
            병국이가 최고가 수출 시세 분석을 시작했습니다.
          </h2>

          <p className="quote-form-subtitle">
            해외 바이어 실시간 매입가를 비교하여 <strong>5분 이내</strong>로 직접
            연락드리겠습니다. 즉시 유선 상담은 아래 직통 번호를 눌러주세요.
          </p>

          {submittedQuote && (
            <div className="aeo-dl-item">
              <p>
                <strong>접수 차종:</strong> {submittedQuote.carModel} (
                {submittedQuote.year})
              </p>
              <p>
                <strong>주행거리 / 지역:</strong> {submittedQuote.mileageBand} ·{" "}
                {submittedQuote.region}
              </p>
              <p>
                <strong>연락처:</strong> {submittedQuote.phone}
              </p>
              {submittedQuote.notes && (
                <p>
                  <strong>특이사항:</strong> {submittedQuote.notes}
                </p>
              )}
            </div>
          )}

          <div className="card-action-pair">
            <a href={telHref} className="btn-card-primary">
              <PhoneCall size={15} aria-hidden="true" />
              <span>병국이 바로 전화걸기</span>
            </a>
            <a href={smsHref} className="btn-card-secondary">
              <MessageSquare size={15} aria-hidden="true" />
              <span>차량 사진 문자전송</span>
            </a>
          </div>

          <form method="dialog" className="form-group">
            <button
              type="submit"
              value="close"
              autoFocus
              className="btn-card-secondary"
            >
              확인 완료
            </button>
          </form>
        </div>
      </dialog>

      {/* Modal 2: Privacy Policy Details (<dialog closedby="any">) */}
      <dialog
        ref={privacyDialogRef}
        className="site-dialog"
        aria-labelledby={`${uid}-privacy-dialog-title`}
        {...({ closedby: "any" } as React.DialogHTMLAttributes<HTMLDialogElement>)}
      >
        <div className="dialog-inner">
          <h2 id={`${uid}-privacy-dialog-title`} className="quote-form-title">
            개인정보 수집 및 이용 동의 안내
          </h2>
          <div className="aeo-dl-item">
            <p>
              <strong>1. 수집 목적:</strong> 중고차 수출 무료 시세 산출, 견적 상담 및
              출장 검수 안내
            </p>
            <p>
              <strong>2. 수집 항목:</strong> 차량명, 연식, 주행거리, 지역, 연락처(휴대폰
              번호), 차량 특이사항
            </p>
            <p>
              <strong>3. 보유 및 이용 기간:</strong> 견적 상담 완료 후 6개월 이내 파기
              (고객 요청 시 즉시 파기)
            </p>
          </div>
          <form method="dialog">
            <button
              type="submit"
              value="close"
              autoFocus
              className="btn-card-primary"
            >
              확인 후 바로 견적 입력하기
            </button>
          </form>
        </div>
      </dialog>

      {/* Modal 3: In-App Byungguk YouTube Shorts Player Modal (<dialog closedby="any">) */}
      <dialog
        ref={videoModalDialogRef}
        className="site-dialog"
        aria-labelledby={`${uid}-video-dialog-title`}
        {...({ closedby: "any" } as React.DialogHTMLAttributes<HTMLDialogElement>)}
      >
        <div className="dialog-inner">
          <h2 id={`${uid}-video-dialog-title`} className="quote-form-title">
            {activeVideo?.title || "이차어디가 병국 현장 영상"}
          </h2>

          {activeVideo && (
            <div className="video-dialog-frame">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${activeVideo.videoId}?autoplay=1&rel=0`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                width="100%"
                height="100%"
              />
            </div>
          )}

          <div className="card-action-pair">
            <button
              type="button"
              className="btn-card-primary"
              onClick={() =>
                handleSelectVehicleForQuote(
                  activeVideo?.carModelForQuote || "내 차 수출 상담"
                )
              }
            >
              <span>병국이에게 내 차 견적 바로 묻기</span>
              <ArrowRight size={14} aria-hidden="true" />
            </button>
            <form method="dialog">
              <button
                type="submit"
                value="close"
                className="btn-card-secondary"
              >
                영상 닫기
              </button>
            </form>
          </div>
        </div>
      </dialog>

      {/* Modal 4: KPRO One-Click 10-Second Quick Consultation Popup (<dialog closedby="any">) */}
      <dialog
        ref={quickConsultDialogRef}
        className="site-dialog"
        aria-labelledby={`${uid}-quick-consult-title`}
        {...({ closedby: "any" } as React.DialogHTMLAttributes<HTMLDialogElement>)}
      >
        <div className="dialog-inner">
          <div className="quote-form-badge">
            <Sparkles size={15} aria-hidden="true" />
            <span>거짓 미끼견적 ZERO · 유튜브·인스타·틱톡 얼굴 실명 보증</span>
          </div>
          <h2 id={`${uid}-quick-consult-title`} className="quote-form-title">
            병국이 얼굴 걸고 약속하는 정직 수출시세 조회
          </h2>
          <p className="quote-form-subtitle">
            달콤한 거짓말로 낚지 않습니다. 차량명과 연락처만 남겨주시면 <strong>현장에서 단 1원도 바뀌지 않을 진짜 금액</strong>만 정직하게 안내해 드립니다.
          </p>

          <form onSubmit={handleSubmitQuote} className="form-fieldset">
            <div className="form-group">
              <label
                htmlFor={`${uid}-quick-car`}
                className="form-label"
              >
                차량명 <span className="required-star">*</span>
              </label>
              <input
                type="text"
                id={`${uid}-quick-car`}
                list={`${uid}-car-models-list`}
                className="form-input"
                placeholder="ex) 그랜저 HG, 아반떼 AD, 포터2"
                required
                minLength={2}
                value={carModel}
                onChange={(e) => setCarModel(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label
                htmlFor={`${uid}-quick-phone-mid`}
                className="form-label"
              >
                연락처 (4자리 입력 시 자동 이동){" "}
                <span className="required-star">*</span>
              </label>
              <div className="kpro-phone-split">
                <select
                  className="form-select kpro-phone-part"
                  aria-label="휴대폰 앞자리"
                  value={phonePrefix}
                  onChange={(e) => {
                    setPhonePrefix(e.target.value);
                    setPhone(`${e.target.value}-${phoneMid}-${phoneLast}`);
                  }}
                >
                  <option value="010">010</option>
                  <option value="011">011</option>
                  <option value="016">016</option>
                  <option value="017">017</option>
                </select>

                <input
                  type="tel"
                  id={`${uid}-quick-phone-mid`}
                  className="form-input kpro-phone-part"
                  placeholder="0000"
                  required
                  maxLength={4}
                  inputMode="numeric"
                  pattern="[0-9]{3,4}"
                  value={phoneMid}
                  onChange={(e) =>
                    handleSplitPhoneMidChange(
                      e.target.value,
                      quickModalPhoneLastRef
                    )
                  }
                  aria-label="휴대폰 중간 4자리"
                />

                <input
                  ref={quickModalPhoneLastRef}
                  type="tel"
                  className="form-input kpro-phone-part"
                  placeholder="0000"
                  required
                  maxLength={4}
                  inputMode="numeric"
                  pattern="[0-9]{4}"
                  value={phoneLast}
                  onChange={(e) => handleSplitPhoneLastChange(e.target.value)}
                  aria-label="휴대폰 끝 4자리"
                />
              </div>
              <div className="kpro-legal-warn">
                ※ 개인정보 허위 작성 시 IP추적 및 민·형사 책임 강력대응 ※
              </div>
            </div>

            <div className="consent-row">
              <label className="consent-check-label">
                <input
                  type="checkbox"
                  required
                  defaultChecked
                  className="consent-checkbox"
                />
                <span>[필수] 무료 견적 상담을 위한 개인정보 수집·이용 동의</span>
              </label>
            </div>

            <button type="submit" className="btn-submit-quote">
              <span>내차시세 조회하기</span>
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </form>

          <form method="dialog" style={{ marginTop: "0.65rem" }}>
            <button
              type="submit"
              value="close"
              className="btn-card-secondary"
            >
              창 닫기
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
}
