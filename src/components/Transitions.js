"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Transitions({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.style.overflow = "";
    window.scrollTo(0, 0);

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.refresh();

    // Page ki height jab bhi badle (images/3D load hone ki wajah se),
    // ScrollTrigger ko turant dobara-calculate karwao — isi se
    // "scroll karne par hi content dikhna" wala bug fix hota hai.
    const ro = new ResizeObserver(() => ScrollTrigger.refresh());
    ro.observe(document.body);
    const stop = setTimeout(() => ro.disconnect(), 3000);

    return () => {
      ro.disconnect();
      clearTimeout(stop);
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
        onAnimationComplete={() => ScrollTrigger.refresh()}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}