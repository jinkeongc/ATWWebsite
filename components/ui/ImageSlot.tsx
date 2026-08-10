import type { CSSProperties } from "react";

interface ImageSlotProps {
  label: string;
  style?: CSSProperties;
  className?: string;
}

/**
 * Placeholder for real/generated photography (see handoff README "Assets").
 * Renders a labeled drop-zone in place of the final image so layout and
 * spacing can be verified before photography is commissioned.
 */
export function ImageSlot({ label, style, className }: ImageSlotProps) {
  return (
    <div
      className={className}
      style={{
        width: "100%",
        height: "100%",
        background: "var(--sage-100)",
        border: "1px solid var(--border-subtle)",
        display: "flex",
        alignItems: "flex-end",
        padding: "12px",
        ...style,
      }}
    >
      <span
        style={{
          fontSize: "11px",
          color: "var(--ink-500)",
          lineHeight: 1.4,
        }}
      >
        {label}
      </span>
    </div>
  );
}
