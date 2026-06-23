"use client";

import { useRef } from "react";
import gsap from "gsap";

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

export default function HomePage() {
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
      <Hero />
      <Marquee />
      <About />
      <Features />
      <Integrations />
      <Simulator />
      <Pricing />
      <Steps />
      <Testimonials />
      <QNA />
      <CTA />
      <Footer />
    </main>
  );
}
