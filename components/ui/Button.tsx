"use client";

import { useState, type CSSProperties, type ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "inverse" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  href?: string;
}

const PAD: Record<ButtonSize, string> = {
  sm: "8px 18px",
  md: "12px 26px",
  lg: "16px 34px",
};

const FONT_SIZE: Record<ButtonSize, string> = {
  sm: "11px",
  md: "12px",
  lg: "13px",
};

export function Button({
  variant = "primary",
  size = "md",
  disabled,
  children,
  onClick,
  type = "button",
  href,
}: ButtonProps) {
  const [hover, setHover] = useState(false);

  const base: CSSProperties = {
    fontFamily: "var(--font-sans)",
    fontWeight: 600,
    letterSpacing: "var(--tracking-label)",
    textTransform: "uppercase",
    fontSize: FONT_SIZE[size],
    padding: PAD[size],
    borderRadius: "var(--radius-pill)",
    cursor: disabled ? "default" : "pointer",
    opacity: disabled ? 0.45 : 1,
    transition:
      "background var(--dur-fast) var(--ease-out), opacity var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out)",
    border: "1px solid transparent",
    display: "inline-flex",
    alignItems: "center",
  };

  const variantStyles: Record<ButtonVariant, CSSProperties> = {
    primary: { ...base, background: "var(--accent)", color: "var(--accent-ink)" },
    secondary: {
      ...base,
      background: "transparent",
      color: "var(--text-body)",
      border: "1px solid var(--border-strong)",
    },
    inverse: { ...base, background: "var(--surface-inverse)", color: "var(--text-inverse)" },
    ghost: {
      ...base,
      background: "transparent",
      color: "var(--text-body)",
      textTransform: "none",
      letterSpacing: ".01em",
      fontWeight: 500,
      fontSize: size === "sm" ? "13px" : "14px",
      padding: "4px 0",
      borderRadius: 0,
    },
  };

  const style = { ...variantStyles[variant] };
  if (hover && !disabled) {
    if (variant === "primary") style.background = "var(--accent-hover)";
    if (variant === "secondary") style.background = "var(--cream-300)";
    if (variant === "inverse") style.background = "var(--green-800)";
    if (variant === "ghost") style.color = "var(--link-hover)";
  }

  const content = (
    <>
      {children}
      {variant === "ghost" && <span style={{ marginLeft: 6 }}>→</span>}
    </>
  );

  const isExternal = href?.startsWith("http");

  if (href) {
    return (
      <a
        href={href}
        style={style}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={style}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {content}
    </button>
  );
}
