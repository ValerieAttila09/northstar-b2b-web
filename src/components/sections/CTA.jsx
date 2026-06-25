'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../../context/LanguageContext';
import messages from '../../i18n/messages';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function CTA({ content }) {
  const sectionRef = useRef(null);
  const frameRef = useRef(null);
  const titleRef = useRef(null);
  const buttonRef = useRef(null);
  const { language } = useLanguage();
  const t = messages[language] || messages.en;
  const ctaTitle = t.cta.title;
  const ctaDescription = t.cta.description;
  const ctaButtonLabel = t.cta.button;
  const ctaTrust1 = t.cta.trust1;
  const ctaTrust2 = t.cta.trust2;

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        // Frame entrance
        gsap.fromTo(
          frameRef.current,
          { scale: 0.95, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );

        // Word-by-word title reveal
        const words = titleRef.current.querySelectorAll('.word');
        gsap.fromTo(
          words,
          { y: '120%', opacity: 0 },
          {
            y: '0%',
            opacity: 1,
            duration: 1,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: titleRef.current,
              start: 'top 75%',
              toggleActions: 'play none none none',
            },
          }
        );

        // Label reveal
        gsap.fromTo(
          '.cta-label',
          { x: -30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%',
              toggleActions: 'play none none none',
            },
          }
        );

        // Description reveal
        gsap.fromTo(
          '.cta-desc',
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              toggleActions: 'play none none none',
            },
          }
        );

        // Button reveal with scale
        gsap.fromTo(
          buttonRef.current,
          { scale: 0.8, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 65%',
              toggleActions: 'play none none none',
            },
          }
        );

        // Animated corner accents
        gsap.fromTo(
          '.corner-accent',
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: frameRef.current,
              start: 'top 75%',
              toggleActions: 'play none none none',
            },
          }
        );

        // Continuous subtle pulse on frame
        gsap.to(frameRef.current, {
          boxShadow: '0 0 60px rgba(251, 191, 36, 0.15)',
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }, sectionRef);

      return () => ctx.revert();
    },
    { scope: sectionRef }
  );

  const handleMagneticHover = (e) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(btn, { x: x * 0.3, y: y * 0.3, duration: 0.3, ease: 'power2.out' });
  };

  const handleMagneticLeave = (e) => {
    gsap.to(e.currentTarget, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.5)' });
  };

  return (
    <section
      ref={sectionRef}
      data-nav-theme="dark"
      className="relative border-b border-white/10 bg-neutral-950 px-5 py-24 text-white overflow-hidden md:px-8 md:py-32"
    >
      {/* Background grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(251,191,36,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.1) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />

      <div
        ref={frameRef}
        className="relative mx-auto max-w-[1600px] border border-white/20 p-6 md:p-12 lg:p-16"
      >
        {/* Corner accents */}
        <div className="corner-accent absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-amber-400" />
        <div className="corner-accent absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-amber-400" />
        <div className="corner-accent absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-amber-400" />
        <div className="corner-accent absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-amber-400" />

        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
          {/* Left side */}
          <div>
            <p className="cta-label mb-8 font-mono text-xs font-bold uppercase text-amber-400 tracking-widest">
              {content?.cta_meta ?? t.cta.meta}
            </p>
            <h2
              ref={titleRef}
              className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold leading-[0.95] tracking-tight overflow-hidden"
            >
              {(content?.cta_title ?? ctaTitle)
                .split(' ')
                .map((word, idx) => (
                  <span
                    key={idx}
                    className="word inline-block mr-[0.25em] overflow-hidden"
                  >
                    <span className="inline-block">{word}</span>
                  </span>
                ))}
            </h2>
          </div>

          {/* Right side */}
          <div className="flex flex-col justify-between gap-12 lg:items-end lg:text-right">
            <p className="cta-desc max-w-md text-lg text-white/70 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: content?.description ?? ctaDescription.replace('<highlight>', '<span className="text-amber-400 font-semibold">').replace('</highlight>', '</span>') }}
            />

            <button
              ref={buttonRef}
              onMouseMove={handleMagneticHover}
              onMouseLeave={handleMagneticLeave}
              onClick={() => (window.location.href = 'mailto:studio@northstar.systems')}
              className="group relative inline-flex items-center gap-3 bg-white text-black px-8 py-4 font-bold uppercase tracking-wider text-sm hover:bg-amber-400 transition-colors duration-300 overflow-hidden"
            >
              <span className="relative z-10">{content?.button_text ?? ctaButtonLabel}</span>
              <svg
                className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              <span className="absolute inset-0 bg-amber-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>

            {/* Trust indicators */}
            <div className="cta-desc flex items-center gap-6 text-xs text-white/40 font-mono uppercase tracking-wider">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                {content?.trust_indicators?.[0] ?? ctaTrust1}
              </span>
              <span>{content?.trust_indicators?.[1] ?? ctaTrust2}</span>
            </div>
          </div>
        </div>

        {/* Bottom decorative line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />
      </div>
    </section>
  );
}
