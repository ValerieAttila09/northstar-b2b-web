"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function EntranceIntro({ onComplete }) {
  const root = useRef(null);
  const counterRef = useRef(null);

  const [isFinished, setIsFinished] = useState(false);

  useGSAP(
    () => {
      document.body.style.overflow = "hidden";

      const counterObj = { value: 0 };

      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
        onComplete: () => {
          document.body.style.overflow = "";
          setIsFinished(true);

          if (onComplete) {
            onComplete();
          }
        },
      });

      // Initial states
      gsap.set(".grid-v", {
        scaleY: 0,
        transformOrigin: "top center",
      });

      gsap.set(".grid-h", {
        scaleX: 0,
        transformOrigin: "left center",
      });

      gsap.set(".brand-char", {
        yPercent: 120,
        opacity: 0,
      });

      // -------------------------
      // PHASE 1
      // Technical Grid + Counter
      // -------------------------

      tl.to(
        ".grid-v",
        {
          scaleY: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: "power2.out",
        },
        0
      );

      tl.to(
        ".grid-h",
        {
          scaleX: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: "power2.out",
        },
        0.15
      );

      tl.to(
        counterObj,
        {
          value: 100,
          duration: 1.8,
          ease: "none",
          onUpdate: () => {
            if (!counterRef.current) return;

            counterRef.current.textContent = String(
              Math.floor(counterObj.value)
            ).padStart(2, "0");
          },
        },
        0.2
      );

      // -------------------------
      // PHASE 2
      // Brand Reveal
      // -------------------------

      tl.to(
        ".loader-counter",
        {
          y: -40,
          opacity: 0,
          duration: 0.45,
        },
        "+=0.1"
      );

      tl.to(
        ".brand-char",
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.04,
          ease: "cubic-bezier(0.77,0,0.175,1)",
        },
        "<"
      );

      tl.to(
        ".brand-wrapper",
        {
          opacity: 1,
          duration: 0.2,
        },
        "<"
      );

      tl.to(
        ".brand-wrapper",
        {
          y: -10,
          duration: 0.6,
        },
        "+=0.5"
      );

      // -------------------------
      // PHASE 3
      // Split Wipe
      // -------------------------

      tl.to(
        ".panel-top",
        {
          yPercent: -100,
          duration: 1.2,
          ease: "cubic-bezier(0.77,0,0.175,1)",
        },
        "+=0.1"
      );

      tl.to(
        ".panel-bottom",
        {
          yPercent: 100,
          duration: 1.2,
          ease: "cubic-bezier(0.77,0,0.175,1)",
        },
        "<"
      );

      tl.to(
        root.current,
        {
          autoAlpha: 0,
          duration: 0.2,
        },
        "-=0.15"
      );
    },
    { scope: root }
  );

  if (isFinished) return null;

  const brand = "NORTHSTAR";

  return (
    <div
      ref={root}
      className="fixed inset-0 z-[9999] overflow-hidden"
    >
      {/* TOP PANEL */}
      <div className="panel-top absolute inset-x-0 top-0 h-1/2 bg-charcoal" />

      {/* BOTTOM PANEL */}
      <div className="panel-bottom absolute inset-x-0 bottom-0 h-1/2 bg-charcoal" />

      {/* CONTENT */}
      <div className="absolute inset-0 bg-charcoal">
        {/* GRID */}

        <div className="pointer-events-none absolute inset-0">
          {/* Vertical */}
          <div className="grid-v absolute left-[15%] top-0 h-full border-l border-line/10" />
          <div className="grid-v absolute left-1/3 top-0 h-full border-l border-line/10" />
          <div className="grid-v absolute left-1/2 top-0 h-full border-l border-line/10" />
          <div className="grid-v absolute left-2/3 top-0 h-full border-l border-line/10" />
          <div className="grid-v absolute left-[85%] top-0 h-full border-l border-line/10" />

          {/* Horizontal */}
          <div className="grid-h absolute top-[20%] left-0 w-full border-t border-line/10" />
          <div className="grid-h absolute top-1/2 left-0 w-full border-t border-line/10" />
          <div className="grid-h absolute top-[80%] left-0 w-full border-t border-line/10" />
        </div>

        {/* COUNTER */}

        <div className="loader-counter absolute bottom-8 right-8">
          <span
            ref={counterRef}
            className="font-mono text-micro tracking-wider text-signal"
          >
            00
          </span>
        </div>

        {/* BRAND */}

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="brand-wrapper opacity-0 overflow-hidden">
            <h2 className="font-display text-display-md text-bone tracking-[0.25em]">
              {brand.split("").map((char, index) => (
                <span
                  key={index}
                  className="brand-char inline-block"
                >
                  {char}
                </span>
              ))}
            </h2>

            <div className="mt-4 flex justify-center">
              <span className="font-mono text-micro uppercase tracking-[0.3em] text-muted">
                SYSTEM PRECISION
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}