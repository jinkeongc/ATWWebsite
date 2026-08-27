"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

interface ImageSlotProps {
  label: string;
  shape?: "rounded" | "circle";
  radius?: number;
  style?: CSSProperties;
  className?: string;
  /** Local-only override for previewing a real photo in place of the placeholder. Never used in production content. */
  devSrc?: string;
  /**
   * Drift the photo *within* its frame as the page scrolls (0–1, where 1 uses
   * the full overscan). The frame stays put, so grid alignment is unaffected.
   */
  innerParallax?: number;
  /** Settle the photo from a slight zoom to rest when it scrolls into view. */
  kenBurns?: boolean;
}

/**
 * Placeholder for real/generated photography (see handoff README "Assets").
 * Renders a labeled drop-zone in place of the final image so layout and
 * spacing can be verified before photography is commissioned. If devSrc
 * points to a file that doesn't exist (yet), the labeled placeholder shows.
 *
 * Transform ownership is split so effects never fight: ScrollEffects drives
 * the shift wrapper, CSS drives the <img> (ken burns + hover zoom).
 */
export function ImageSlot({
  label,
  shape = "rounded",
  radius = 24,
  style,
  className,
  devSrc,
  innerParallax,
  kenBurns,
}: ImageSlotProps) {
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  // A missing devSrc 404s before hydration, so onError alone never fires for it.
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, [devSrc]);
  return (
    <div
      className={className}
      data-kenburns={kenBurns ? "" : undefined}
      style={{
        width: "100%",
        height: "100%",
        background: "var(--surface-sage)",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "var(--border-subtle)",
        borderRadius: shape === "circle" ? "50%" : radius,
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        textAlign: "center",
        padding: shape === "circle" ? "0 20px 20px" : "12px",
        overflow: "hidden",
        position: "relative",
        ...style,
      }}
    >
      {devSrc && !failed ? (
        <div
          data-parallax-inner={innerParallax ? String(innerParallax) : undefined}
          style={{
            position: "absolute",
            // Overscan gives the inner drift somewhere to travel without
            // ever exposing an edge of the frame.
            inset: innerParallax ? "-9% 0" : 0,
            willChange: innerParallax ? "transform" : undefined,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            ref={imgRef}
            src={devSrc}
            alt=""
            onError={() => setFailed(true)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>
      ) : (
        <span
          style={{
            fontSize: "11px",
            color: "var(--text-muted)",
            lineHeight: 1.4,
            position: "relative",
          }}
        >
          {label}
        </span>
      )}
    </div>
  );
}
