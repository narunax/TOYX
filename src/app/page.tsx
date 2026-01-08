import WhySection from "@/components/sections/WhySection";
import HowSection from "@/components/sections/HowSection";
import WhatSection from "@/components/sections/WhatSection";
import WorksHighlight from "@/components/sections/WorksHighlight";
import ContactCTA from "@/components/sections/ContactCTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative overflow-hidden selection:bg-rose-100 selection:text-rose-900">
      {/* Persistent Background Effects */}
      <div className="fixed inset-0 -z-10 bg-white">
        <div className="absolute inset-0 caustic-bg opacity-30" />
        <div className="absolute inset-0 geometric-lines opacity-10" />
      </div>

      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-6 text-center">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-7xl font-light tracking-[0.2em] text-navy-900 animate-in fade-in slide-in-from-bottom-6 duration-1000">
            TOYX
          </h1>
          <p className="text-2xl font-extralight tracking-[0.1em] text-slate-400 animate-in fade-in slide-in-from-bottom-6 delay-300 duration-1000">
            TOY &times; X
          </p>
          <div className="mt-12 h-px w-32 bg-navy-100 animate-in fade-in zoom-in duration-1000" />
          <p className="mt-12 max-w-lg text-lg font-light text-slate-700 leading-relaxed animate-in fade-in slide-in-from-bottom-6 delay-500 duration-1000">
            問いかけることで、本質が見える。<br />
            <span className="text-sm tracking-widest text-slate-400 uppercase">Vision Through Questioning</span>
          </p>
        </div>

        <div className="absolute bottom-12 animate-bounce opacity-40">
          <div className="h-10 w-px bg-navy-400" />
        </div>
      </section>

      {/* Philosophy & Service Sections */}
      <WhySection />
      <HowSection />
      <WhatSection />

      {/* Evidence & Conversion Sections */}
      <WorksHighlight />
      <ContactCTA />

      <Footer />
    </main>
  );
}
