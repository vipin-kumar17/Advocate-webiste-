"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollReveal({
  children,
  as: Tag = "div",
  className = "",
  style = {},
  y = 48,
  duration = 1,
  delay = 0,
  stagger = 0.1,
  start = "top 85%",
  once = true,
  group = false,
}) {
  const ref = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = ref.current;
    if (!el) return;

    const targets = el.hasAttribute("data-reveal-group")
      ? el.children
      : [el];

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          stagger,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start,
            toggleActions: once ? "play none none none" : "play none none reverse",
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [y, duration, delay, stagger, start, once]);

  return (
    <Tag ref={ref} className={className} style={style} data-reveal-group={group ? "" : undefined}>
      {children}
    </Tag>
  );
}
