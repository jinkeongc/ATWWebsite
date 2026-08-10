"use client";

import { useEffect } from "react";

/**
 * Applies a subtle scroll parallax to any element with a `data-parallax="±speed"`
 * attribute: translateY = (elementCenter - viewportCenter) * speed.
 * Mirrors the handoff's rAF-throttled passive scroll listener; disabled under
 * prefers-reduced-motion.
 */
export function ParallaxController() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf: number | null = null;

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = null;
        const vh = window.innerHeight;
        document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
          const speed = parseFloat(el.getAttribute("data-parallax") || "0");
          const r = el.getBoundingClientRect();
          const offset = (r.top + r.height / 2 - vh / 2) * speed;
          el.style.transform = `translateY(${offset.toFixed(1)}px)`;
        });
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
