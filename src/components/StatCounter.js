"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function StatCounter({ value, suffix = "", label }) {
  const numRef = useRef(null);
  const wrapRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const counter = { val: 0 };
    const ctx = gsap.context(() => {
      gsap.to(counter, {
        val: value,
        duration: 1.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: wrapRef.current,
          start: "top 88%",
          toggleActions: "play none none none",
        },
        onUpdate: () => {
          if (numRef.current) {
            numRef.current.textContent = Math.round(counter.val).toString();
          }
        },
      });
    }, wrapRef);
    return () => ctx.revert();
  }, [value]);

  return (
    <div ref={wrapRef} className="text-center md:text-left">
      <div className="font-display text-4xl md:text-5xl text-brass-bright">
        <span ref={numRef}>0</span>
        {suffix}
      </div>
      <div className="mt-2 text-xs tracking-[0.08em] text-parchment-dim">{label}</div>
    </div>
  );
}
