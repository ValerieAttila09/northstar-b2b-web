"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const companies = ["Stripe", "Mercury", "Ramp", "Linear", "Vercel", "Retool", "Notion", "Carta", "Seoul AI"];

export default function Marquee() {
  const scope = useRef(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        gsap.to(".marquee-track", {
          xPercent: -50,
          duration: 24,
          ease: "none",
          repeat: -1
        });
      }, scope);

      return () => ctx.revert();
    },
    { scope }
  );

  const list = [...companies, ...companies];

  return (
    <section ref={scope} className="overflow-hidden border-b border-line bg-bone">
      <div className="border-b border-line px-5 py-4 md:px-8">
        <p className="mx-auto max-w-[1600px] text-micro font-bold uppercase text-muted">
          Companies and operators we are built to collaborate with / 협업 네트워크
        </p>
      </div>
      <div className="marquee-track flex py-7 bg-paper">
        {list.map((company, index) => (
          <div
            key={`${company}-${index}`}
            className="flex min-w-[220px] items-center justify-center border-r border-line px-10 font-display text-4xl leading-none text-charcoal md:min-w-[320px] md:text-6xl"
          >
            {company}
          </div>
        ))}
      </div>
    </section>
  );
}
