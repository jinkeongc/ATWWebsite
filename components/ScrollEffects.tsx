"use client";

import { useEffect } from "react";

/**
 * Site-wide scroll effects, disabled under prefers-reduced-motion.
 *
 * Parallax — any element with `data-parallax="±speed"` is translated by
 * (elementCenter - viewportCenter) * speed via a rAF-throttled passive
 * scroll listener.
 *
 * Inner parallax — an element with `data-parallax-inner="0–1"` drifts within
 * its (overflow-hidden) parent frame. The shift is derived from the overscan
 * the element actually has, so it can never expose a frame edge.
 *
 * Reveal-on-scroll — elements with `data-reveal` start hidden (see
 * globals.css; the hidden state only applies once `html[data-fx]` is set,
 * so content stays visible without JS) and gain `.is-revealed` when they
 * enter the viewport. A parent with `data-reveal-stagger` staggers its
 * direct `data-reveal` children. Elements with `data-kenburns` also gain
 * `.is-revealed`, which CSS uses to settle the photo out of its zoom.
 * Never combine `data-reveal` and `data-parallax` on the same element —
 * both drive `transform`.
 */
export function ScrollEffects() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const root = document.documentElement;
    root.setAttribute("data-fx", "");

    document.querySelectorAll<HTMLElement>("[data-reveal-stagger]").forEach((group) => {
      group.querySelectorAll<HTMLElement>(":scope > [data-reveal]").forEach((el, i) => {
        el.style.setProperty("--reveal-delay", `${Math.min(i * 60, 360)}ms`);
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
    document
      .querySelectorAll<HTMLElement>("[data-reveal], [data-kenburns]")
      .forEach((el) => observer.observe(el));

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

        document.querySelectorAll<HTMLElement>("[data-parallax-inner]").forEach((el) => {
          const frame = el.parentElement;
          if (!frame) return;
          const r = frame.getBoundingClientRect();
          if (r.bottom < 0 || r.top > vh) return;
          const intensity = parseFloat(el.getAttribute("data-parallax-inner") || "0");
          // -1 (leaving the top) .. +1 (entering from the bottom)
          const span = vh / 2 + r.height / 2;
          const progress = Math.max(-1, Math.min(1, (r.top + r.height / 2 - vh / 2) / span));
          // Never travel further than the overscan this element actually has.
          const maxShift = Math.max(0, (el.offsetHeight - frame.clientHeight) / 2);
          const shift = progress * maxShift * intensity;
          el.style.transform = `translate3d(0, ${shift.toFixed(1)}px, 0)`;
        });
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
      observer.disconnect();
      root.removeAttribute("data-fx");
    };
  }, []);

  return null;
}
