import { Header } from "@/components/Header";
import { ThemeSwitch } from "@/components/ThemeSwitch";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { TextReveal } from "@/components/sections/TextReveal";
import { ImageReveal } from "@/components/sections/ImageReveal";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { ToolsCarousel } from "@/components/sections/ToolsCarousel";
import { ShowcaseCards } from "@/components/sections/ShowcaseCards";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { BottomCTA } from "@/components/sections/BottomCTA";

export default function Home() {
  return (
    <>
      <Header />
      <ThemeSwitch />
      <main id="main-content" className="flex-1">
        <Hero />
        <section className="relative py-32 md:py-48">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <TextReveal
              text="If you can dream it, you can prompt it into existence."
              className="text-4xl font-medium tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
            />
          </div>
        </section>
        <ImageReveal />
        <TrustedBy />
        <ToolsCarousel />
        <ShowcaseCards />
        <Stats />
        <Testimonials />
        <Pricing />
        <FAQ />
        <BottomCTA />
      </main>
      <Footer />
    </>
  );
}
