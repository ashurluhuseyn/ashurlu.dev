const highlights = [
    "5+ years experience",
    "Fintech & trading systems",
    "Payment platforms",
    "Realtime architecture",
    "Frontend architecture",
    "Technical writing",
  ] as const;
  
  export default function About() {
    return (
      <section
        id="about"
        className="relative overflow-hidden bg-black py-16 sm:py-20"
      >
        {/* Ambient glow */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-violet-600/10 blur-[100px]" />
          <div className="absolute right-0 top-1/3 h-[220px] w-[220px] rounded-full bg-purple-500/8 blur-[80px]" />
        </div>
  
        <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left content */}
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-violet-400/80">
                About
              </p>
  
              <h2 className="mt-4 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl md:text-[44px] md:leading-[1.1]">
                Engineering products
                <br />
                that scale
              </h2>
  
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-zinc-400 sm:text-base">
                Frontend engineer based in Dubai focused on scalable frontend
                systems, realtime architecture and modern product experiences.
              </p>
            </div>
  
            {/* Right cards */}
            <div className="grid gap-3 sm:grid-cols-2">
                {highlights.map((label, index) => (
                    <article
                    key={`${label}-${index}`}
                    className="group rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 backdrop-blur-xl transition-all duration-300 hover:border-violet-400/20 hover:bg-white/[0.05]"
                    >
                    <p className="text-sm font-medium leading-snug text-zinc-200 sm:text-[15px]">
                        {label}
                    </p>
                    </article>
                ))}
            </div>
          </div>
        </div>
      </section>
    );
  }