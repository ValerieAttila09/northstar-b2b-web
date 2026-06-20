"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const labelMap = {
  platform: "SYSTEM / 시작",
  about: "FOUNDER / 설계",
  method: "METHOD / 흐름",
  simulator: "SCALE / 신호",
  testimonials: "PROOF / 검증",
  qna: "QNA / 질문",
  contact: "CONTACT / 연결"
};

export default function SectionTransitions() {
  const scope = useRef(null);
  const activeIndex = useRef(-1);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        const panels = gsap.utils.toArray(".section-transition-panel");
        const label = scope.current?.querySelector(".section-transition-label");
        const sections = gsap.utils.toArray("main > section, main > footer").filter((section) => {
          return !section.hasAttribute("data-skip-transition");
        });

        const runSweep = (section, index) => {
          if (activeIndex.current === index) return;
          activeIndex.current = index;

          const id = section.getAttribute("id") || "platform";
          if (label) label.textContent = labelMap[id] || "NORTHSTAR / 전환";

          gsap
            .timeline({ defaults: { ease: "expo.inOut" } })
            .set(scope.current, { autoAlpha: 1 })
            .set(panels, { xPercent: -102 })
            .set(label, { yPercent: 120, autoAlpha: 0 })
            .to(panels, { xPercent: 0, duration: 0.42, stagger: 0.045 })
            .to(label, { yPercent: 0, autoAlpha: 1, duration: 0.35 }, "-=0.2")
            .to(panels, { xPercent: 102, duration: 0.58, stagger: 0.045 }, "+=0.08")
            .to(label, { yPercent: -120, autoAlpha: 0, duration: 0.28 }, "-=0.5")
            .set(scope.current, { autoAlpha: 0 });
        };

        sections.forEach((section, index) => {
          if (index > 0) {
            gsap.fromTo(
              section,
              { clipPath: "inset(7% 0% 7% 0%)", y: 64, autoAlpha: 0.92 },
              {
                clipPath: "inset(0% 0% 0% 0%)",
                y: 0,
                autoAlpha: 1,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: section,
                  start: "top 92%",
                  end: "top 34%",
                  scrub: 0.75
                }
              }
            );
          }

          ScrollTrigger.create({
            trigger: section,
            start: "top 52%",
            end: "bottom 52%",
            onEnter: () => runSweep(section, index),
            onEnterBack: () => runSweep(section, index)
          });
        });
      }, scope);

      return () => ctx.revert();
    },
    { scope }
  );

  return (
    <div ref={scope} className="pointer-events-none fixed inset-0 z-[75] opacity-0" aria-hidden="true">
      <div className="grid h-full grid-cols-4">
        {[0, 1, 2, 3].map((panel) => (
          <span key={panel} className="section-transition-panel block h-full bg-signal" />
        ))}
      </div>
      <div className="absolute bottom-8 left-5 overflow-hidden md:left-8">
        <p className="section-transition-label font-mono text-micro font-bold uppercase text-charcoal">
          NORTHSTAR / 전환
        </p>
      </div>
    </div>
  );
}
