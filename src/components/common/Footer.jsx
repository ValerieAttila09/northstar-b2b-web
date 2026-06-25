'use client';

import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../../context/LanguageContext';
import messages from '../../i18n/messages';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);
  const marqueeRef = useRef(null);
  const [time, setTime] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const { language } = useLanguage();
  const t = messages[language] || messages.en;

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
          timeZone: 'Asia/Jakarta',
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        // Marquee animation
        gsap.to('.marquee-content', {
          xPercent: -50,
          duration: 30,
          repeat: -1,
          ease: 'linear',
        });

        // Column reveals
        gsap.fromTo(
          '.footer-col',
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: footerRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );

        // Large logo reveal
        gsap.fromTo(
          '.footer-logo',
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: footerRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );

        // Separator line animation
        gsap.fromTo(
          '.footer-separator',
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.5,
            ease: 'power2.inOut',
            scrollTrigger: {
              trigger: footerRef.current,
              start: 'top 75%',
              toggleActions: 'play none none none',
            },
          }
        );

        // Link hover animations
        const links = document.querySelectorAll('.footer-link');
        links.forEach((link) => {
          link.addEventListener('mouseenter', () => {
            gsap.to(link, { x: 8, duration: 0.3, ease: 'power2.out' });
            gsap.to(link.querySelector('.link-line'), {
              width: '100%',
              duration: 0.3,
              ease: 'power2.out',
            });
          });
          link.addEventListener('mouseleave', () => {
            gsap.to(link, { x: 0, duration: 0.3, ease: 'power2.out' });
            gsap.to(link.querySelector('.link-line'), {
              width: '0%',
              duration: 0.3,
              ease: 'power2.out',
            });
          });
        });

        // Back to top button
        gsap.fromTo(
          '.back-to-top',
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: footerRef.current,
              start: 'top 70%',
              toggleActions: 'play none none none',
            },
          }
        );
      }, footerRef);

      return () => ctx.revert();
    },
    { scope: footerRef }
  );

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { href: '#platform', label: t.nav.platform },
    { href: '#about', label: t.nav.about },
    { href: '#method', label: t.nav.method },
    { href: '#simulator', label: 'Scale Simulator' },
    { href: '#qna', label: t.nav.qna },
  ];

  return (
    <footer
      ref={footerRef}
      id="contact"
      data-nav-theme="dark"
      className="relative border-t border-white/10 bg-neutral-950 text-white overflow-hidden"
    >
      {/* Marquee */}
      <div
        ref={marqueeRef}
        className="border-b border-white/10 py-6 overflow-hidden bg-black"
      >
        <div className="marquee-content flex whitespace-nowrap">
          {[...Array(4)].map((_, idx) => (
            <div key={idx} className="flex items-center gap-8 px-8">
              <span className="text-2xl md:text-4xl font-bold text-white/20">
                NORTHSTAR SYSTEMS
              </span>
              <span className="text-amber-400 text-2xl">✦</span>
              <span className="text-2xl md:text-4xl font-bold text-white/20">
                B2B OPERATING INFRASTRUCTURE
              </span>
              <span className="text-amber-400 text-2xl">✦</span>
              <span className="text-2xl md:text-4xl font-bold text-white/20">
                SCALE WITHOUT DRAG
              </span>
              <span className="text-amber-400 text-2xl">✦</span>
              <span className="text-2xl md:text-4xl font-bold text-white/20">
                JAKARTA / SEOUL
              </span>
              <span className="text-amber-400 text-2xl"></span>
            </div>
          ))}
        </div>
      </div>

      {/* Main footer content */}
      <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr] md:gap-8">
          {/* Logo column */}
          <div className="footer-col border-b border-white/10 pb-8 md:border-b-0 md:pb-0">
            <p className="footer-logo text-6xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight">
              Northstar
            </p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
              {t.footer.description}
            </p>

            {/* Live indicator */}
            <div className="mt-8 flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span className="font-mono text-xs text-white/40 uppercase tracking-wider">
                {t.footer.live.replace('{time}', time)}
              </span>
            </div>
          </div>

          {/* Contact column */}
          <div className="footer-col">
            <p className="mb-5 font-mono text-xs font-bold uppercase text-white/40 tracking-wider">
              {t.footer.contact}
            </p>
            <div className="grid gap-3 text-sm leading-relaxed">
              <a
                href="mailto:studio@northstar.systems"
                className="footer-link group relative inline-block text-white/70 hover:text-amber-400 transition-colors"
              >
                <span className="link-line absolute bottom-0 left-0 h-px w-0 bg-amber-400 transition-all"></span>
                studio@northstar.systems
              </a>
              <a
                href="tel:+628118801926"
                className="footer-link group relative inline-block text-white/70 hover:text-amber-400 transition-colors"
              >
                <span className="link-line absolute bottom-0 left-0 h-px w-0 bg-amber-400 transition-all"></span>
                +62 811 880 1926
              </a>
              <span className="text-white/70">Jakarta / Seoul</span>
            </div>
          </div>

          {/* Nav column */}
          <div className="footer-col">
            <p className="mb-5 font-mono text-xs font-bold uppercase text-white/40 tracking-wider">
              {t.footer.navTitle}
            </p>
            <div className="grid gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="footer-link group relative inline-block text-sm font-bold uppercase text-white/70 hover:text-amber-400 transition-colors tracking-wider"
                >
                  <span className="link-line absolute bottom-0 left-0 h-px w-0 bg-amber-400 transition-all"></span>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Info column */}
          <div className="footer-col flex flex-col justify-between gap-8 md:text-right">
            <p className="text-sm leading-relaxed text-white/60">
              {t.footer.info}
            </p>

            {/* Social links */}
            <div className="flex gap-4 md:justify-end">
              {['TW', 'LI', 'GH'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="footer-link group relative w-10 h-10 border border-white/20 flex items-center justify-center text-xs font-bold text-white/60 hover:border-amber-400 hover:text-amber-400 transition-all"
                >
                  <span className="link-line absolute bottom-0 left-0 h-px w-0 bg-amber-400 transition-all"></span>
                  {social}
                </a>
              ))}
            </div>

            <p className="font-mono text-xs font-bold uppercase text-white/40 tracking-wider">
              © 2026 Northstar Systems
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-separator mt-16 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent origin-left" />

        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-white/40">
          <span>Built with precision · Designed for scale</span>
          <button
            onClick={scrollToTop}
            className="back-to-top group flex items-center gap-2 text-white/60 hover:text-amber-400 transition-colors"
          >
            <span>{t.footer.backToTop}</span>
            <svg
              className="w-4 h-4 transition-transform group-hover:-translate-y-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Large background text */}
      <div className="absolute bottom-0 inset-x-0 pointer-events-none overflow-hidden opacity-[0.03]">
        <p className="text-[17.2vw] text-center font-bold leading-none whitespace-nowrap">
          NORTHSTAR
        </p>
      </div>
    </footer>
  );
}
