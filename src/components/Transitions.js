"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Transitions({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    // Naye page par jaate hi scroll top par reset karo
    window.scrollTo(0, 0);

    gsap.registerPlugin(ScrollTrigger);

    // Naye page ka DOM/images settle hone ke baad ScrollTrigger ko
    // force-refresh karo, taaki wo purane page ki stale positions
    // use karne ki bajaye naye page ke hisaab se sahi calculate kare.
    const raf = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });
    const t = setTimeout(() => ScrollTrigger.refresh(), 400);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t);
    };
  }, [pathname]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.main
        key={pathname}
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="min-h-screen"
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}