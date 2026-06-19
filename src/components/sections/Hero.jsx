"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Button from "../UI/Button";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const scope = useRef(null);
  const geometry = useRef(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        gsap.set(".reveal-line", { yPercent: 110, rotate: 1.5 });
        gsap.set(".hero-meta", { autoAlpha: 0, y: 24 });
        gsap.set(".hero-geometry-line", { scaleX: 0, transformOrigin: "left center" });
        gsap.set(".hero-geometry-y", { scaleY: 0, transformOrigin: "top center" });

        const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

        tl.to(".reveal-line", {
          yPercent: 0,
          rotate: 0,
          duration: 1.35,
          stagger: 0.085
        })
          .to(".hero-meta", { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.08 }, "-=0.65")
          .to(".hero-geometry-line", { scaleX: 1, duration: 1.15, stagger: 0.08 }, "-=0.85")
          .to(".hero-geometry-y", { scaleY: 1, duration: 1.15, stagger: 0.08 }, "<");
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
      className="relative min-h-screen overflow-hidden border-b border-line px-5 pt-[76px] md:px-8 md:pt-20"
    >
      <div className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-[1600px] grid-cols-1 border-x border-line lg:grid-cols-[1.25fr_0.75fr]">
        <div className="flex flex-col justify-between border-b border-line p-5 md:p-8 lg:border-b-0 lg:border-r">
          <div className="grid gap-8">
            <p className="hero-meta text-micro font-bold uppercase text-muted">B2B operating infrastructure / 2026</p>
            <h1 className="font-display text-display-xl">
              <span className="line-mask">
                <span className="reveal-line">Scale</span>
              </span>
              <span className="line-mask">
                <span className="reveal-line">without</span>
              </span>
              <span className="line-mask">
                <span className="reveal-line">drag.</span>
              </span>
            </h1>
          </div>

          <div className="grid gap-7 pt-16 md:grid-cols-[0.8fr_1fr] md:items-end">
            <p className="hero-meta max-w-xl text-body-xl text-charcoal/78">
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

        <div
          className="relative min-h-[520px] p-5 md:p-8"
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
        >
          <div ref={geometry} className="absolute inset-5 md:inset-8">
            <span className="hero-geometry-line absolute left-0 top-0 h-px w-full bg-charcoal" />
            <span className="hero-geometry-line absolute bottom-0 left-0 h-px w-full bg-charcoal" />
            <span className="hero-geometry-y absolute left-0 top-0 h-full w-px bg-charcoal" />
            <span className="hero-geometry-y absolute right-0 top-0 h-full w-px bg-charcoal" />
            <span className="hero-geometry-line absolute left-0 top-1/3 h-px w-full bg-line" />
            <span className="hero-geometry-line absolute left-0 top-2/3 h-px w-full bg-line" />
            <span className="hero-geometry-y absolute left-1/3 top-0 h-full w-px bg-line" />
            <span className="hero-geometry-y absolute left-2/3 top-0 h-full w-px bg-line" />

            <div className="absolute left-[12%] top-[16%] h-[28%] w-[38%] min-w-[140px] border border-charcoal bg-charcoal text-inverse">
              <div className="flex h-full flex-col justify-between p-4">
                <span className="text-micro font-bold uppercase text-inverse/60">Velocity</span>
                <span className="font-display text-6xl leading-none">4.8x</span>
              </div>
            </div>
            <div className="absolute bottom-[14%] right-[10%] h-[34%] w-[42%] border border-charcoal bg-bone">
              <div className="grid h-full grid-cols-5 items-end gap-2 p-4">
                {[35, 48, 63, 72, 88].map((height) => (
                  <span key={height} className="block bg-charcoal" style={{ height: `${height}%` }} />
                ))}
              </div>
            </div>
            <div className="absolute right-[18%] top-[18%] h-24 w-24 rounded-full border border-charcoal" />
          </div>
        </div>
      </div>
    </section>
  );
}
