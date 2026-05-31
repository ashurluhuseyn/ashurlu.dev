import { socials } from "@/data/socials";
import { ArrowUpRight, Briefcase, Camera, Mail, Newspaper } from "lucide-react";

const iconMap = {
  LinkedIn: Briefcase,
  Medium: Newspaper,
  Instagram: Camera,
  Email: Mail,
} as const;

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black py-16 sm:py-20"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[110px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-violet-400/80">
            Contact
          </p>

          <h2 className="mt-4 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl md:text-[44px] md:leading-[1.1]">
            Let&apos;s Connect
          </h2>

          <p className="mt-5 text-sm leading-relaxed text-zinc-400 sm:text-base">
            Open to engineering conversations, product ideas and collaborations.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:gap-5">
          {socials.map(({ label, value, url }) => {
            const Icon = iconMap[label as keyof typeof iconMap];
            const isExternal = !url.startsWith("mailto:");

            return (
              <a
                key={label}
                href={url}
                {...(isExternal
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/25 hover:bg-white/[0.05] sm:p-6"
              >
                <div className="inline-flex shrink-0 rounded-xl border border-white/[0.08] bg-white/[0.04] p-3 text-violet-400 transition-all duration-300 group-hover:border-violet-400/30 group-hover:bg-violet-400/10">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-zinc-100 group-hover:text-white">
                    {label}
                  </p>
                  <p className="mt-1 truncate text-sm text-zinc-500 group-hover:text-zinc-400">
                    {value}
                  </p>
                </div>

                <ArrowUpRight className="h-4 w-4 shrink-0 text-zinc-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-400" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}