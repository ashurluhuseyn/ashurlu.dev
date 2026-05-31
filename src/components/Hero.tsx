"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import Link from "next/link";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-black pt-20">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/20 blur-[120px]" />
        <div className="absolute left-1/2 top-1/2 h-[320px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[100px]" />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto w-full max-w-5xl px-6 py-16 text-center sm:px-8"
      >
        <motion.div variants={itemVariants} className="mb-7 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium tracking-wide text-zinc-300 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-400" />
            </span>
            Senior Frontend Engineer
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="bg-gradient-to-b from-white via-white to-zinc-500 bg-clip-text text-5xl font-semibold tracking-tight text-transparent sm:text-7xl md:text-8xl lg:text-9xl"
        >
          Huseyn Ashurlu
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg md:text-xl"
        >
          Building scalable frontend systems, realtime experiences and modern
          digital products from Dubai.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="#articles"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-3.5 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-violet-400/40 hover:bg-white/15 sm:w-auto"
          >
            Read Articles
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>

          <Link
            href="#contact"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-8 py-3.5 text-sm font-medium text-zinc-300 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white sm:w-auto"
          >
            <Mail className="h-4 w-4 text-zinc-500 transition-colors duration-300 group-hover:text-violet-400" />
            Contact Me
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}