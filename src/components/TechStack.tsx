import { techStack } from "@/data/techStack";

export default function TechStack() {
  return (
    <section
      id="stack"
      className="relative overflow-hidden bg-black py-16 sm:py-20"
    >
      {/* Ambient glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-violet-400/80">
            Toolkit
          </p>

          <h2 className="mt-4 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl md:text-[44px] md:leading-[1.1]">
            Tech Stack
          </h2>

          <p className="mt-5 text-sm leading-relaxed text-zinc-400 sm:text-base">
            Technologies I use to build scalable digital products
          </p>
        </div>

        {/* Pills */}
        <ul className="mt-10 flex flex-wrap justify-center gap-3 sm:mt-12 sm:gap-4">
          {techStack.map((tech) => (
            <li key={tech}>
              <span className="inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-zinc-300 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/30 hover:bg-white/[0.06] hover:text-white sm:px-6 sm:py-3">
                {tech}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}