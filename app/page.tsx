import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import About from "@/components/About";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-slate-50 min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <About />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
