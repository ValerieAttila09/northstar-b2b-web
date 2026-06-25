"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLanguage } from "../../context/LanguageContext";
import messages from "../../i18n/messages";

gsap.registerPlugin(useGSAP);

const companies = ["Stripe", "Mercury", "Ramp", "Linear", "Vercel", "Retool", "Notion", "Carta", "Seoul AI"];

export default function Marquee() {
  const scope = useRef(null);
  const { language } = useLanguage();
  const t = messages[language] || messages.en;

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
          {language === "id"
            ? t.marquee.title
            : t.marquee.title}
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
