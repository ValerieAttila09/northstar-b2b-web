"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import GridLine from "../UI/GridLine";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const features = [
  {
    kicker: "01 / Data / 데이터",
    title: "Clean decision layers",
    body: "Normalize product, CRM, billing, and success data into one operating model with executive-grade visibility."
  },
  {
    kicker: "02 / Workflow / 흐름",
    title: "Revenue motion design",
    body: "Map the handoffs, rules, and automations that remove drag between sales, onboarding, and expansion."
  },
  {
    kicker: "03 / Control / 통제",
    title: "Scale governance",
    body: "Build lightweight rituals and metrics so teams can move faster without burying leadership in noise."
  }
];

export default function Features() {
  const scope = useRef(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        gsap.set(".grid-draw-x", { scaleX: 0 });
        gsap.set(".grid-draw-y", { scaleY: 0 });
        gsap.set(".feature-card", { autoAlpha: 0, y: 24 });

        gsap
          .timeline({
            scrollTrigger: {
              trigger: scope.current,
              start: "top 72%",
              end: "bottom 45%",
              toggleActions: "play none none reverse"
            }
          })
          .to(".grid-draw-x", {
            scaleX: 1,
            duration: 1.1,
            ease: "expo.out",
            stagger: 0.06
          })
          .to(
            ".grid-draw-y",
            {
              scaleY: 1,
              duration: 1.15,
              ease: "expo.out",
              stagger: 0.08
            },
            "-=0.95"
          )
          .to(
            ".feature-card",
            {
              autoAlpha: 1,
              y: -20,
              duration: 0.9,
              ease: "power3.out",
            },
            "-=0.55"
          );

        gsap.utils.toArray(".feature-card").forEach((card, index) => {
          gsap.to(card, {
            y: index % 2 === 0 ? -34 : -58,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.7
            }
          });
        });
      }, scope);

      return () => ctx.revert();
    },
    { scope }
  );

  return (
    <section ref={scope} id="method" className="relative overflow-hidden border-b border-line px-5 pb-24 md:px-8 md:pb-38">
      <div className="mx-auto max-w-[1600px] border-x border-line pt-24">
        <div className="grid gap-8 p-5 md:grid-cols-[0.8fr_1.2fr] md:p-8">
          <p className="font-mono text-micro font-bold uppercase text-muted">Features / operating clarity / 구조</p>
          <h2 className="max-w-5xl font-display text-display-md">
            A strict system for teams outgrowing <span className="text-signal">improvisation.</span>
          </h2>
        </div>

        <div className="relative overflow-hidden">
          <GridLine className="absolute left-0 top-0" />
          <GridLine className="absolute bottom-0 left-0" />
          <div className="absolute left-1/3 top-0 hidden h-full md:block">
            <GridLine orientation="y" />
          </div>
          <div className="absolute left-2/3 top-0 hidden h-full md:block">
            <GridLine orientation="y" />
          </div>

          <div className="grid md:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="feature-card group min-h-[480px] border-b border-line p-5 transition-colors duration-500 ease-editorial hover:bg-charcoal hover:text-inverse md:border-b-0 md:p-8"
              >
                <div className="flex h-full flex-col justify-between gap-16">
                  <p className="font-mono text-micro font-bold uppercase text-muted transition-colors duration-500 group-hover:text-signal">
                    {feature.kicker}
                  </p>
                  <div>
                    <h3 className="mb-6 max-w-sm font-display text-5xl leading-[0.96] md:text-6xl">{feature.title}</h3>
                    <p className="max-w-md text-base leading-7 text-charcoal/68 transition-colors duration-500 group-hover:text-inverse/70">
                      {feature.body}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
