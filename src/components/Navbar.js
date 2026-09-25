"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "The Advocate" },
  { href: "/practice-areas", label: "Practice Areas" },
  { href: "/results", label: "Notable Matters" },
  { href: "/gallery", label: "Chambers" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
               className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
                scrolled || open ? "bg-ink/95 backdrop-blur border-b border-rule" : "bg-transparent"
              }`}
      >
        <nav className="mx-auto max-w-[1400px] px-6 md:px-10 h-20 flex items-center justify-between">
          <Link href="/" className="text-brass-bright hover:text-brass transition-colors">
            <Logo />
          </Link>

          <ul className="hidden lg:flex items-center gap-9">
            {LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href} className="relative">
                  <Link
                    href={link.href}
                    className={`text-[0.8rem] tracking-[0.06em] transition-colors ${
                      active ? "text-brass-bright" : "text-parchment-dim hover:text-parchment"
                    }`}
                  >
                    {link.label}
                  </Link>
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-2 left-0 right-0 h-px bg-brass-bright"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </li>
              );
            })}
          </ul>

          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center border border-brass-dim px-5 py-2.5 text-[0.75rem] tracking-[0.08em] text-brass-bright hover:bg-brass-bright hover:text-ink transition-colors duration-300"
          >
            Book a Consultation
          </Link>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            className="lg:hidden relative z-50 h-10 w-10 flex flex-col items-center justify-center gap-1.5"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block h-px w-6 bg-parchment origin-center"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="block h-px w-6 bg-parchment"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block h-px w-6 bg-parchment origin-center"
            />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-panel grain lg:hidden flex flex-col justify-start px-8 pt-28 pb-10 overflow-y-auto"
          >
            <ul className="flex flex-col gap-1">
              {LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.5 }}
                  className="border-b hairline"
                >
                  <Link
                    href={link.href}
                    className={`font-display text-[2.2rem] py-4 block ${
                      pathname === link.href ? "text-brass-bright italic" : "text-parchment"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="mt-10 text-parchment-dim text-sm"
            >
              +91 98200 00000 &nbsp;&middot;&nbsp; chambers@kulkarniassociates.in
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
