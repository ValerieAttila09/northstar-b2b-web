"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import OwnerImage from "../../assets/owner.jpg";
import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";
import messages from "../../i18n/messages";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function About({ content }) {
  const scope = useRef(null);
  const { language } = useLanguage();
  const t = messages[language] || messages.en;

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          ".about-portrait",
          { y: 70, rotate: -2 },
          {
            y: -90,
            rotate: 2,
            ease: "none",
            scrollTrigger: {
              trigger: scope.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.8
            }
          }
        );

        gsap.fromTo(
          ".about-stat",
          { autoAlpha: 0, y: 42 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".about-stats",
              start: "top 78%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }, scope);

      return () => ctx.revert();
    },
    { scope }
  );

  const collaboratorLabel = t.about?.collaboratorLabel || 'Collaborator';
  const collaboratorsHeading = t.about?.collaboratorsTitle || 'Collaborators';
  const founderDescription = t.about?.founderDescription || '';
  const aboutTitle = t.about?.title || 'Built by operators who prefer systems over spectacle.';
  const aboutDescriptions = Array.isArray(t.about?.descriptions) ? t.about.descriptions : [];
  const aboutStats = Array.isArray(t.about?.stats) ? t.about.stats : [];
  const collaborators = Array.isArray(t.about?.collaborators) ? t.about.collaborators : [];

  return (
    <section id="about" ref={scope} className="overflow-hidden border-b border-line px-5 md:px-8">
      <div className="mx-auto grid max-w-[1600px] border-x border-line lg:grid-cols-[0.9fr_1.1fr]">
        <div className="py-8 md:py-[12rem] relative min-h-[680px] border-b border-line px-5 md:px-8 lg:border-b-0 lg:border-r">
          <div className="about-portrait relative h-[468px] md:h-[664px] bg-charcoal text-inverse">
            <Image src={OwnerImage} alt="Owner Image" height={720} width={480} className="w-full h-full object-cover" />
            <div className="flex h-auto flex-col justify-between p-5 md:p-8 bg-charcoal">
              <div className="flex justify-between text-micro font-bold uppercase text-inverse/54 mb-4">
                <span>{t.about.founderProfile}</span>
                <span>01</span>
              </div>
              <div>
                <p className="font-display text-7xl leading-none md:text-8xl">Marcus Reyman Jr.</p>
                <p className="mt-5 max-w-md text-sm leading-6 text-inverse/62">
                  {founderDescription}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-[12rem] px-5 md:px-8">
          <p className="mb-8 font-mono text-micro font-bold uppercase text-muted">
            {content?.collaborators_title ? collaboratorsHeading : t.about.sectionMeta}
          </p>
          <h2
            className="max-w-5xl font-display text-display-md"
            dangerouslySetInnerHTML={{ __html: aboutTitle }}
          />
          <div className="mt-12 grid gap-8 text-body-xl text-charcoal/72 md:grid-cols-2">
            {aboutDescriptions.map((paragraph, index) => (
              <p key={`${paragraph}-${index}`}>{paragraph}</p>
            ))}
          </div>

          <div className="about-stats mt-16 grid border border-line md:grid-cols-3">
            {aboutStats.map(([value, label]) => (
              <div key={label} className="about-stat border-b border-line p-5 md:border-b-0 md:border-r md:p-6 last:md:border-r-0">
                <p className="font-display text-6xl leading-none text-charcoal">{value}</p>
                <p className="mt-8 text-micro font-bold uppercase text-muted">{label}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-3">
            {collaborators.map((item) => (
              <div key={item} className="flex items-center justify-between border-t border-line py-5">
                <span className="text-xl sm:text-2xl md:text-4xl">{item}</span>
                <span className="text-micro font-bold uppercase text-muted">{collaboratorLabel}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
