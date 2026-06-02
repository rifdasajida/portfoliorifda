import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Philosophy } from "@/components/sections/Philosophy";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Gallery } from "@/components/sections/Gallery";
import { About } from "@/components/sections/About";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20 selection:text-primary">
      <Navbar />
      
      <main>
        <Hero />
        <Philosophy />
        <CaseStudies />
        <Gallery />
        <About />
      </main>

      <Footer />
    </div>
  );
}
