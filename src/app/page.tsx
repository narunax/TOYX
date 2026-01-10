import WhySection from "@/components/sections/WhySection";
import AxesSection from "@/components/sections/AxesSection";
import ArchitectureSection from "@/components/sections/ArchitectureSection";
import { LAYOUT_PX } from "@/lib/constants";


export default function Home() {
  return (
    <main className="relative overflow-hidden selection:bg-rose-100 selection:text-rose-900">
      {/* Persistent Background Effects - Removed local blocking background to reveal global layout effects */}

      {/* Hero Section */}
      <section className={`relative flex min-h-[90vh] flex-col items-center justify-center ${LAYOUT_PX} text-center`}>
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-8xl font-extralight tracking-[0.25em] text-navy-900 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            TOYX
          </h1>
          <p className="text-xl font-extralight tracking-[0.2em] text-slate-400 animate-in fade-in slide-in-from-bottom-8 delay-300 duration-1000">
            TOY <span className="text-rose-300 font-thin mx-2 opacity-60">/</span> X
          </p>
          <div className="mt-16 h-px w-48 bg-linear-to-r from-transparent via-navy-100 to-transparent animate-in fade-in zoom-in duration-1200" />
          <p className="mt-16 max-w-lg text-xl font-extralight text-slate-700 leading-[2] animate-in fade-in slide-in-from-bottom-8 delay-500 duration-1000">
            問いかけることで、本質が見える。<br />
            <span className="text-[10px] tracking-[0.4em] text-slate-400 uppercase mt-4 block">Vision Through Questioning</span>
          </p>
        </div>

        <div className="absolute bottom-12 animate-bounce opacity-40">
          <div className="h-10 w-px bg-navy-400" />
        </div>
      </section>

      {/* Philosophy Section */}
      <WhySection />

      {/* Axes of Activity (The 3 Axes) */}
      <AxesSection />

      {/* Role Architecture Section */}
      <ArchitectureSection />

    </main>
  );
}
