"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";

interface ImageSlotProps {
  label: string;
  /**
   * Description for screen readers and search engines. Leave empty for
   * purely decorative images.
   */
  alt?: string;
  shape?: "rounded" | "circle";
  radius?: number;
  style?: CSSProperties;
  className?: string;
  /** Production photo URL. The legacy prop name is retained to avoid churn across existing page content. */
  devSrc?: string;
  /**
   * Drift the photo *within* its frame as the page scrolls (0–1, where 1 uses
   * the full overscan). The frame stays put, so grid alignment is unaffected.
   */
  innerParallax?: number;
  /** Settle the photo from a slight zoom to rest when it scrolls into view. */
  kenBurns?: boolean;
  /** Load eagerly at high priority. Only for images visible before scrolling. */
  priority?: boolean;
  /**
   * How wide the frame renders, so the browser downloads a matching size.
   * Defaults to full width on phones and half width on larger screens.
   */
  sizes?: string;
}

/**
 * Renders production photography through next/image (responsive sizes,
 * modern formats, lazy loading) with a labeled fallback if the image cannot
 * be loaded.
 *
 * Transform ownership is split so effects never fight: ScrollEffects drives
 * the shift wrapper, CSS drives the <img> (ken burns + hover zoom).
 */
export function ImageSlot({
  label,
  alt = "",
  shape = "rounded",
  radius = 24,
  style,
  className,
  devSrc,
  innerParallax,
  kenBurns,
  priority,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: ImageSlotProps) {
  // next/image re-issues the request after hydration whenever onError is
  // supplied, so a failure that happens before React mounts is still caught.
  const [failed, setFailed] = useState(false);
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
          <Image
            src={devSrc}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            onError={() => setFailed(true)}
            style={{ objectFit: "cover" }}
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
