import type { CSSProperties } from "react";

interface ImageSlotProps {
  label: string;
  shape?: "rounded" | "circle";
  radius?: number;
  style?: CSSProperties;
  className?: string;
  /** Local-only override for previewing a real photo in place of the placeholder. Never used in production content. */
  devSrc?: string;
}

/**
 * Placeholder for real/generated photography (see handoff README "Assets").
 * Renders a labeled drop-zone in place of the final image so layout and
 * spacing can be verified before photography is commissioned.
 */
export function ImageSlot({ label, shape = "rounded", radius = 24, style, className, devSrc }: ImageSlotProps) {
  return (
    <div
      className={className}
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
      {devSrc ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={devSrc}
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
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
