import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="bg-slate-50 min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
    </main>
  );
}
