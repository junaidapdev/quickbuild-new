import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Features from "@/components/Features";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import Testimonial from "@/components/Testimonial";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Process />
      <Features />
      <Portfolio />
      <Pricing />
      {/* <Testimonial /> */}
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}

