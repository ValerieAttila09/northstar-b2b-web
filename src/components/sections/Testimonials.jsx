"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useLanguage } from "../../context/LanguageContext";
import messages from "../../i18n/messages";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const defaultTestimonials = [
  {
    quote:
      "Northstar gave our leadership team a single operating view without forcing every department into a heavy platform migration.",
    name: "Maya Santoso",
    role: "COO, Ledgerbase"
  },
  {
    quote:
      "The work felt closer to architecture than consulting. Every metric, ritual, and workflow had a clear reason to exist.",
    name: "Daniel Cho",
    role: "Partner, Meridian Ventures"
  },
  {
    quote:
      "We reduced decision latency in expansion planning from weeks to days. The system is sharp, minimal, and usable.",
    name: "Leila Hart",
    role: "VP Revenue, AtlasOps"
  }
];

export default function Testimonials({ content }) {
  const scope = useRef(null);
  const { language } = useLanguage();
  const t = messages[language] || messages.en;
  const testimonials = Array.isArray(t.testimonials?.items)
    ? t.testimonials.items
    : Array.isArray(content?.testimonials)
      ? content.testimonials
      : defaultTestimonials;

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          ".testimonial-card",
          { autoAlpha: 0, y: 60 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: scope.current,
              start: "top 72%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }, scope);

      return () => ctx.revert();
    },
    { scope }
  );

  return (
    <section id="testimonials" ref={scope} className="border-b border-line px-5 md:px-8">
      <div className="mx-auto pt-24 max-w-[1600px] border-x border-line">
        <div className="grid gap-8 border-b border-line p-5 md:grid-cols-[0.8fr_1.2fr] md:p-8">
          <p className="text-micro font-bold uppercase text-muted">{content?.testimonials_meta ?? t.testimonials.meta}</p>
          <h2 className="max-w-5xl font-display text-display-md">{content?.testimonials_title ?? t.testimonials.title}</h2>
        </div>

        <div className="grid md:grid-cols-3">
          {testimonials.map((item, index) => (
            <article
              key={item.name}
              className="testimonial-card min-h-[420px] border-b border-line p-5 md:border-b-0 md:border-r md:p-8 last:md:border-r-0"
            >
              <div className="flex h-full flex-col justify-between gap-12">
                <span className="font-display text-7xl leading-none text-charcoal/18">0{index + 1}</span>
                <div>
                  <p className="mb-12 text-2xl leading-tight md:text-3xl">&quot;{item.quote}&quot;</p>
                  <p className="text-micro font-bold uppercase text-charcoal">{item.name}</p>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
