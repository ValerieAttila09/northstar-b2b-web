"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Button from "../UI/Button";
import NorthStarPhoneMockup from "../common/MobileScreen";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const scope = useRef(null);
  const geometry = useRef(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        gsap.set(".reveal-line", { yPercent: 110, rotate: 1.5 });
        gsap.set(".hero-meta", { autoAlpha: 0, y: 24 });
        gsap.set(".right-content", { autoAlpha: 0 });
        
        const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

        tl.to(".reveal-line", { yPercent: 0, rotate: 0, duration: 1.35, stagger: 0.085, delay: 5.4 })
          .to(".hero-meta", { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.08 }, "-=0.65")
          .to(".right-content", { autoAlpha: 1, duration: 0.9 }, "-=0.8");
      }, scope);

      return () => ctx.revert();
    },
    { scope }
  );

  const handlePointerMove = (event) => {
    const el = geometry.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    gsap.to(el, {
      rotateX: y * -7,
      rotateY: x * 9,
      x: x * 18,
      y: y * 14,
      duration: 0.7,
      ease: "power3.out",
      transformPerspective: 900
    });
  };

  const handlePointerLeave = () => {
    gsap.to(geometry.current, {
      rotateX: 0,
      rotateY: 0,
      x: 0,
      y: 0,
      duration: 1,
      ease: "elastic.out(1, 0.45)"
    });
  };

  return (
    <section
      ref={scope}
      id="platform"
      className="relative min-h-screen overflow-hidden border-b border-line px-5 pt-[58px] md:px-8 md:pt-16"
    >
      <div className="mx-auto grid min-h-[calc(100vh-100px)] max-w-[1600px] grid-cols-1 border-x border-line lg:grid-cols-[1.25fr_0.75fr]">
        <div className="flex flex-col justify-around gap-6 md:gap-0 border-b border-line p-5 md:p-8 lg:border-b-0 lg:border-r">
          <div className="grid gap-8">
            <p className="hero-meta font-mono text-micro font-bold uppercase text-muted">
              B2B operating infrastructure / 2026 / 정밀한 시스템
            </p>
            <h1 className="font-display font-semibold text-display-lg">
              <span className="line-mask">
                <span className="reveal-line">Scale</span>
              </span>
              <span className="line-mask">
                <span className="reveal-line">without</span>
              </span>
              <span className="line-mask">
                <span className="reveal-line">
                  <span className="text-signal">drag.</span>
                </span>
              </span>
            </h1>
          </div>

          <div className="grid gap-7 md:pt-8 md:grid-cols-[0.8fr_1fr] md:items-end">
            <p className="hero-meta max-w-xl text-md md:text-lg text-charcoal/78">
              Northstar turns fragmented growth operations into one precise revenue system: tighter workflows, cleaner
              data, faster decisions.
            </p>
            <div className="hero-meta flex flex-wrap items-center gap-4 md:justify-end">
              <Button href="#simulator">Simulate Scale</Button>
              <a href="#method" className="text-micro font-bold uppercase text-charcoal/72">
                View Method
              </a>
            </div>
          </div>
        </div>
        <div className="right-content">
          <NorthStarPhoneMockup />
        </div>
      </div>
    </section>
  );
}
