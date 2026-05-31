import { Building2, Layers, PenLine, Radio } from "lucide-react";

const focusItems = [
    {
      label: "Building fintech & trading platforms",
      icon: Layers,
    },
    {
      label: "Designing scalable frontend architecture",
      icon: Radio,
    },
    {
      label: "Writing about realtime systems",
      icon: PenLine,
    },
    {
      label: "Exploring proptech ideas in Dubai",
      icon: Building2,
    },
  ] as const;

export default function CurrentFocus() {
  return (
    <section className="relative overflow-hidden bg-black py-16 sm:py-20">
      {/* Ambient glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/3 top-0 h-[240px] w-[240px] rounded-full bg-purple-600/10 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 h-[220px] w-[220px] rounded-full bg-violet-500/8 blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-violet-400/80">
            Now
          </p>

          <h2 className="mt-4 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl md:text-[44px] md:leading-[1.1]">
            Current Focus
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:gap-5">
          {focusItems.map(({ label, icon: Icon }) => (
            <article
              key={label}
              className="group rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/20 hover:bg-white/[0.05]"
            >
              <div className="mb-4 inline-flex rounded-xl border border-white/[0.08] bg-white/[0.04] p-3 text-violet-400 transition-all duration-300 group-hover:border-violet-400/30 group-hover:bg-violet-400/10">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </div>

              <p className="text-sm font-medium leading-snug text-zinc-200 transition-colors duration-300 group-hover:text-white sm:text-[15px]">
                {label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}