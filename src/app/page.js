import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Entrance from "../components/common/Entrance";
import SectionTransitions from "../components/common/SectionTransitions";
import Hero from "../components/sections/Hero";
import Marquee from "../components/sections/Marquee";
import About from "../components/sections/About";
import Features from "../components/sections/Features";
import Simulator from "../components/sections/Simulator";
import Testimonials from "../components/sections/Testimonials";
import QNA from "../components/sections/QNA";
import CTA from "../components/sections/CTA";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-bone text-charcoal">
      <Entrance />
      <Navbar />
      <SectionTransitions />
      <Hero />
      <Marquee />
      <About />
      <Features />
      <Simulator />
      <Testimonials />
      <QNA />
      <CTA />
      <Footer />
    </main>
  );
}
