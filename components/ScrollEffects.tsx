"use client";

import { useEffect } from "react";

/**
 * Site-wide scroll effects, disabled under prefers-reduced-motion.
 *
 * Parallax — any element with `data-parallax="±speed"` is translated by
 * (elementCenter - viewportCenter) * speed via a rAF-throttled passive
 * scroll listener.
 *
 * Reveal-on-scroll — elements with `data-reveal` start hidden (see
 * globals.css; the hidden state only applies once `html[data-fx]` is set,
 * so content stays visible without JS) and gain `.is-revealed` when they
 * enter the viewport. A parent with `data-reveal-stagger` staggers its
 * direct `data-reveal` children. Never combine `data-reveal` and
 * `data-parallax` on the same element — both drive `transform`.
 */
export function ScrollEffects() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const root = document.documentElement;
    root.setAttribute("data-fx", "");

    document.querySelectorAll<HTMLElement>("[data-reveal-stagger]").forEach((group) => {
      group.querySelectorAll<HTMLElement>(":scope > [data-reveal]").forEach((el, i) => {
        el.style.setProperty("--reveal-delay", `${Math.min(i * 90, 540)}ms`);
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );
    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => observer.observe(el));

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
      observer.disconnect();
      root.removeAttribute("data-fx");
    };
  }, []);

  return null;
}
