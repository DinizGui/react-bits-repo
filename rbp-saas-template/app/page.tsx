import { Hero } from "@/components/sections/Hero";
import { BlurInHeadline } from "@/components/sections/BlurInHeadline";
import { FeaturesBento } from "@/components/sections/FeaturesBento";
import { Testimonials } from "@/components/sections/Testimonials";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main id="main-content" className="flex-1">
      <Hero />
      <BlurInHeadline />
      <FeaturesBento />
      <Testimonials />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
