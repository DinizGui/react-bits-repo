import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Features } from "@/components/sections/Features";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main id="main-content" className="flex-1">
      <Hero />
      <HowItWorks />
      <Features />
      <Stats />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
