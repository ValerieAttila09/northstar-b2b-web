"use client";

import { useMemo, useRef } from "react";
import gsap from "gsap";
import { getContent } from "../lib/constants";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import Entrance from "../components/common/Entrance";
import NorthStarEntrance from "../components/common/EntranceV2";
import EntranceIntro from "../components/common/EntranceV3";

import SectionTransitions from "../components/common/SectionTransitions";
import Hero from "../components/sections/Hero";
import Marquee from "../components/sections/Marquee";
import About from "../components/sections/About";
import Features from "../components/sections/Features";
import Simulator from "../components/sections/Simulator";
import Testimonials from "../components/sections/Testimonials";
import QNA from "../components/sections/QNA";
import CTA from "../components/sections/CTA";
import Pricing from "../components/sections/Pricing";
import Integrations from "../components/sections/Integrations";
import Steps from "../components/sections/Steps";
import { useLanguage } from "../context/LanguageContext";

export default function HomePage() {
  const { language } = useLanguage();

  const content = useMemo(() => getContent(language), [language]);

  const playHeroAnimation = () => {
    gsap.fromTo(
      ".hero-reveal",
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
      }
    );
  };
  return (
    <main className="relative h-full overflow-y-auto bg-bone text-charcoal">
      <EntranceIntro onComplete={playHeroAnimation} />
      <Navbar />
      <SectionTransitions />
      <Hero content={content.HERO_CONTENT} />
      <Marquee content={content.HERO_CONTENT} />
      <About content={content.ABOUT_CONTENT} />
      <Features content={content.FEATURES_CONTENT} />
      <Integrations content={content.INTEGRATIONS_CONTENT} />
      <Simulator content={content.SIMULATION_CONTENT} />
      <Pricing content={content.PRICING_CONTENT} />
      <Steps content={content.STEPS_CONTENT} />
      <Testimonials content={content.TESTIMONIALS_CONTENT} />
      <QNA content={content.QNA_CONTENT} />
      <CTA content={content.CTA_CONTENT} />
      <Footer content={content.FOOTER_CONTENT} />
    </main>
  );
}
