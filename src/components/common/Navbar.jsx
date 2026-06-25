"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useLanguage } from "../../context/LanguageContext";
import messages from "../../i18n/messages";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const links = [
  { key: "platform", href: "#platform" },
  { key: "about", href: "#about" },
  { key: "method", href: "#method" },
  { key: "proof", href: "#testimonials" },
  { key: "qna", href: "#qna" }
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const ctaRef = useRef(null);
  const menuButtonRef = useRef(null);
  const mobileCtaRef = useRef(null);
  const menuPanelRef = useRef(null);
  const menuTimeline = useRef(null);
  const syncThemeRef = useRef(null);
  const menuOpenRef = useRef(false);
  const linkRefs = useRef([]);
  const menuLinkRefs = useRef([]);
  const currentTheme = useRef("light");
  const { language, toggleLanguage } = useLanguage();
  const t = messages[language] || messages.en;

  const setLinkRef = (node, index) => {
    linkRefs.current[index] = node;
  };

  const setMenuLinkRef = (node, index) => {
    menuLinkRefs.current[index] = node;
  };

  const applyTheme = (theme, immediate = false) => {
    if (currentTheme.current === theme && !immediate) return;
    currentTheme.current = theme;

    const isDark = theme === "dark";
    const duration = immediate ? 0 : 0.38;

    gsap.to(headerRef.current, {
      backgroundColor: isDark ? "rgba(17, 17, 17, 0.72)" : "rgba(249, 249, 247, 0.78)",
      borderColor: isDark ? "rgba(249, 249, 247, 0.18)" : "#E5E5E0",
      duration,
      ease: "power2.out"
    });

    gsap.to(logoRef.current, {
      color: isDark ? "#F9F9F7" : "#111111",
      duration,
      ease: "power2.out"
    });

    gsap.to([...linkRefs.current, mobileCtaRef.current, menuButtonRef.current].filter(Boolean), {
      color: isDark ? "rgba(249, 249, 247, 0.78)" : "rgba(17, 17, 17, 0.80)",
      duration,
      ease: "power2.out"
    });

    gsap.to(ctaRef.current, {
      backgroundColor: isDark ? "#F9F9F7" : "#111111",
      borderColor: isDark ? "#F9F9F7" : "#111111",
      color: isDark ? "#111111" : "#F9F9F7",
      duration,
      ease: "power2.out"
    });
  };

  useGSAP(() => {
    const readThemeBelowNavbar = () => {
      const header = headerRef.current;
      if (!header) return;
      if (menuOpenRef.current) {
        applyTheme("dark");
        return;
      }

      const probeY = Math.min(window.innerHeight - 1, header.offsetHeight + 3);
      const probeX = Math.floor(window.innerWidth / 2);
      const elementBelow = document.elementFromPoint(probeX, probeY);
      const themeRoot = elementBelow?.closest("[data-nav-theme]");

      applyTheme(themeRoot?.getAttribute("data-nav-theme") === "dark" ? "dark" : "light");
    };

    syncThemeRef.current = readThemeBelowNavbar;
    applyTheme("light", true);

    const trigger = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: readThemeBelowNavbar,
      onRefresh: readThemeBelowNavbar
    });

    // Hide navbar when entering Steps section
    const stepsTrigger = ScrollTrigger.create({
      trigger: "#steps",
      start: "top 80%",
      end: "bottom 20%",
      onEnter: () => {
        gsap.to(headerRef.current, {
          y: -100,
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut"
        });
      },
      onLeave: () => {
        gsap.to(headerRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.inOut"
        });
      },
      onEnterBack: () => {
        gsap.to(headerRef.current, {
          y: -100,
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut"
        });
      },
      onLeaveBack: () => {
        gsap.to(headerRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.inOut"
        });
      }
    });

    requestAnimationFrame(readThemeBelowNavbar);
    window.addEventListener("resize", readThemeBelowNavbar);

    return () => {
      trigger.kill();
      stepsTrigger.kill();
      window.removeEventListener("resize", readThemeBelowNavbar);
      document.documentElement.classList.remove("nav-menu-open");
      syncThemeRef.current = null;
    };
  });

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.set(menuPanelRef.current, { autoAlpha: 0, yPercent: -105 });
      gsap.set(".mobile-menu-line-x", { scaleX: 0, transformOrigin: "left center" });
      gsap.set(".mobile-menu-line-y", { scaleY: 0, transformOrigin: "top center" });
      gsap.set(".mobile-menu-item", { yPercent: 120, autoAlpha: 0 });

      menuTimeline.current = gsap
        .timeline({ paused: true, defaults: { ease: "expo.inOut" } })
        .to(menuPanelRef.current, { autoAlpha: 1, yPercent: 0, duration: 0.72 })
        .to(".mobile-menu-line-x", { scaleX: 1, duration: 0.65, stagger: 0.04 }, "-=0.35")
        .to(".mobile-menu-line-y", { scaleY: 1, duration: 0.65, stagger: 0.04 }, "<")
        .to(".mobile-menu-item", { yPercent: 0, autoAlpha: 1, duration: 0.82, stagger: 0.075 }, "-=0.38");
    });

    return () => ctx.revert();
  });

  const toggleMenu = () => {
    const nextOpen = !menuOpen;
    setMenuOpen(nextOpen);
    menuOpenRef.current = nextOpen;

    gsap.to(menuButtonRef.current, {
      rotate: nextOpen ? 45 : 0,
      duration: 0.45,
      ease: "power3.out"
    });

    if (nextOpen) {
      applyTheme("dark");
      menuTimeline.current?.play();
      document.documentElement.classList.add("nav-menu-open");
    } else {
      menuTimeline.current?.reverse();
      document.documentElement.classList.remove("nav-menu-open");
      requestAnimationFrame(() => syncThemeRef.current?.());
    }
  };

  const closeMenu = () => {
    if (!menuOpen) return;
    setMenuOpen(false);
    menuOpenRef.current = false;
    menuTimeline.current?.reverse();
    document.documentElement.classList.remove("nav-menu-open");
    gsap.to(menuButtonRef.current, { rotate: 0, duration: 0.45, ease: "power3.out" });
    requestAnimationFrame(() => syncThemeRef.current?.());
  };

  const moveElement = (event, el, strength = 1) => {
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    gsap.to(el, {
      x: x * 0.12 * strength,
      y: y * 0.2 * strength,
      duration: 0.35,
      ease: "power3.out"
    });
  };

  const resetElement = (el) => {
    gsap.to(el, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.5)"
    });
  };

  return (
    <>
      <header ref={headerRef} className="fixed left-0 top-0 z-[90] w-full border-b border-line bg-bone/78 backdrop-blur-xl">
        <nav className="relative mx-auto flex justify-between max-w-[1600px] items-center px-5 py-2 md:px-8">
          <a ref={logoRef} href="#" className="relative z-[92] font-display text-2xl leading-none">
            Northstar
          </a>
          <div className="hidden items-center gap-8 lg:flex">
            {links.map((link, index) => (
              <a
                key={link.key}
                ref={(node) => setLinkRef(node, index)}
                href={link.href}
                onMouseMove={(event) => moveElement(event, linkRefs.current[index])}
                onMouseLeave={() => resetElement(linkRefs.current[index])}
                className="text-micro font-bold uppercase text-charcoal/80"
              >
                {t.nav[link.key]}  {/* ← Ganti dari {link.label} */}
              </a>
            ))}
          </div>
          <div className="relative z-[92] flex items-center gap-3 justify-self-end">
            <button
              type="button"
              onClick={toggleLanguage}
              className="hidden rounded-full border border-charcoal/20 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/80 transition-colors duration-300 hover:bg-charcoal hover:text-inverse lg:inline-flex"
              aria-label={t.nav.switchLanguage}
            >
              {language === 'id' ? 'EN' : 'ID'}
            </button>
            <a
              ref={ctaRef}
              href="#simulator"
              onMouseMove={(event) => moveElement(event, ctaRef.current, 1.4)}
              onMouseLeave={() => resetElement(ctaRef.current)}
              className="hidden min-h-12 items-center justify-center border border-charcoal bg-charcoal px-6 text-xs font-semibold uppercase tracking-[0.16em] text-inverse transition-colors duration-300 ease-editorial lg:inline-flex"
            >
              {t.nav.modelRoi}
            </a>
            <button
              ref={menuButtonRef}
              type="button"
              onClick={toggleMenu}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              className="relative flex h-10 w-10 items-center justify-center border border-muted text-charcoal lg:hidden"
            >
              <span className="absolute h-px w-5 bg-current" />
              <span className="absolute h-5 w-px bg-current" />
            </button>
          </div>
        </nav>
      </header>

      <div
        ref={menuPanelRef}
        className="fixed inset-0 z-[80] min-h-screen overflow-hidden bg-charcoal pt-[56px] lg:hidden"
        aria-hidden={!menuOpen}
      >
        <span className="mobile-menu-line-x absolute left-0 top-[56px] h-px w-full bg-inverse/20" />
        <span className="mobile-menu-line-x absolute bottom-4 left-0 h-px w-full bg-inverse/20" />
        <span className="mobile-menu-line-y absolute left-5 top-[56px] h-[calc(100%-56px)] w-px bg-inverse/20 md:left-8" />
        <span className="mobile-menu-line-y absolute right-5 top-[56px] h-[calc(100%-56px)] w-px bg-inverse/20 md:right-8" />

        <div className="mx-5 flex h-[calc(100vh-56px)] flex-col justify-between border-x border-inverse/20 px-5 py-8 md:mx-8 md:px-8">
          <div className="text-inverse">
            <div className="mb-8 overflow-hidden">
              <p className="mobile-menu-item text-micro font-bold uppercase text-inverse/48">
                Navigation / Northstar
              </p>
            </div>
            <div className="grid gap-2">
              {links.map((link, index) => (
                <div key={link.key} className="overflow-hidden">
                  <a
                    ref={(node) => setMenuLinkRef(node, index)}
                    href={link.href}
                    onClick={closeMenu}
                    onMouseMove={(event) => moveElement(event, menuLinkRefs.current[index], 0.35)}
                    onMouseLeave={() => resetElement(menuLinkRefs.current[index])}
                    className="mobile-menu-item block font-display text-[13vw] leading-[0.92] text-inverse sm:text-[12vw] md:text-8xl p-1.5"
                  >
                    {t.nav[link.key]}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 border-t border-inverse/16 pt-6">
            <div className="mobile-menu-item flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => {
                  toggleLanguage();
                  closeMenu();
                }}
                className="inline-flex min-h-12 items-center justify-center border border-inverse/40 px-4 text-xs font-semibold uppercase tracking-[0.16em] text-inverse"
              >
                {language === 'id' ? t.nav.switchToEnglish : t.nav.switchToIndonesian}
              </button>
              <a
                ref={mobileCtaRef}
                href="#simulator"
                onClick={closeMenu}
                className="text-[#111111] inline-flex min-h-14 items-center justify-center border border-inverse bg-charcoal px-6 text-xs font-semibold uppercase tracking-[0.16em]"
              >
                {t.nav.modelRoi}
              </a>
            </div>
            <div className="mobile-menu-item text-inverse flex justify-between text-micro font-bold uppercase text-inverse/48">
              <span>{t.nav.location}</span>
              <a href="#contact" onClick={closeMenu}>
                {t.nav.contact}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}