"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Articles", href: "#articles" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-black/50 backdrop-blur-2xl backdrop-saturate-150">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-3.5 sm:px-8 sm:py-4">
        <a
          href="#"
          className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-sm font-semibold tracking-tight text-transparent"
        >
          Ashurlu
        </a>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 rounded-full border border-white/[0.08] bg-white/[0.03] p-1.5 backdrop-blur-md md:flex"
        >
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="rounded-full px-4 py-2 text-sm font-medium text-zinc-400 transition-all duration-300 hover:bg-white/[0.06] hover:text-white"
            >
              {label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-white md:hidden"
          aria-label="Toggle navigation menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/[0.08] bg-black/95 px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-2">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-zinc-300 transition hover:bg-white/[0.06] hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}