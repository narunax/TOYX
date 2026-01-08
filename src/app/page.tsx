export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 caustic-bg opacity-40" />
      <div className="absolute inset-0 geometric-lines opacity-10" />

      {/* Hero Content */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-6xl font-light tracking-widest text-navy-900 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            TOYX
          </h1>
          <p className="text-2xl font-light text-slate-500 animate-in fade-in slide-in-from-bottom-4 delay-300 duration-1000">
            TOY &times; X
          </p>
          <div className="mt-8 h-px w-24 bg-navy-200 animate-in fade-in zoom-in duration-1000" />
          <p className="mt-8 max-w-lg text-lg text-slate-700 animate-in fade-in slide-in-from-bottom-4 delay-500 duration-1000">
            問いかけることで、本質が見える。
          </p>
        </div>

        {/* Scroll Indicator Placeholder */}
        <div className="absolute bottom-12 animate-bounce">
          <div className="h-12 w-px bg-navy-300" />
        </div>
      </section>
    </main>
  );
}
