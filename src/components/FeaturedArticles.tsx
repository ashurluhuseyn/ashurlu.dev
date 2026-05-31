import { articles } from "@/data/articles";
import { ArrowUpRight, Clock } from "lucide-react";

export default function FeaturedArticles() {
  return (
    <section
      id="articles"
      className="relative overflow-hidden bg-black py-16 sm:py-20"
    >
      {/* Ambient glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute right-1/4 top-0 h-[260px] w-[260px] rounded-full bg-purple-600/10 blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 h-[220px] w-[220px] rounded-full bg-violet-500/8 blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-violet-400/80">
            Writing
          </p>

          <h2 className="mt-4 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl md:text-[44px] md:leading-[1.1]">
            Featured Articles
          </h2>

          <p className="mt-5 text-sm leading-relaxed text-zinc-400 sm:text-base">
            Essays on frontend architecture, realtime systems and product
            engineering — published on Medium.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {articles.map((article) => (
            <a
              key={article.title}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/20 hover:bg-white/[0.05]"
            >
              <h3 className="text-base font-medium leading-snug text-zinc-100 transition-colors duration-300 group-hover:text-white sm:text-lg">
                {article.title}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-500 transition-colors duration-300 group-hover:text-zinc-400">
                {article.description}
              </p>

              <div className="mt-5 flex items-center justify-between gap-4 border-t border-white/[0.05] pt-4">
                <span className="inline-flex items-center gap-1.5 text-xs text-zinc-500">
                  <Clock className="h-3.5 w-3.5" strokeWidth={1.75} />
                  {article.readTime}
                </span>

                <span className="inline-flex items-center gap-1 text-xs font-medium text-violet-400/80 transition-colors duration-300 group-hover:text-violet-400">
                  Read on Medium

                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}