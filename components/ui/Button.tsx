"use client";

import { useState, type CSSProperties, type ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "inverse";
export type ButtonSize = "sm" | "md" | "lg" | "xl";

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  href?: string;
}

const PRIMARY_PAD: Record<ButtonSize, string> = {
  sm: "12px 24px",
  md: "13px 26px",
  lg: "16px 32px",
  xl: "17px 36px",
};

const SECONDARY_PAD: Record<ButtonSize, string> = {
  sm: "12px 24px",
  md: "13px 24px",
  lg: "16px 28px",
  xl: "17px 30px",
};

const FONT_SIZE: Record<ButtonSize, string> = {
  sm: "15px",
  md: "15px",
  lg: "16px",
  xl: "16.5px",
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
    fontSize: FONT_SIZE[size],
    padding: variant === "primary" ? PRIMARY_PAD[size] : SECONDARY_PAD[size],
    borderRadius: "var(--radius-pill)",
    cursor: disabled ? "default" : "pointer",
    opacity: disabled ? 0.45 : 1,
    transition:
      "background var(--dur-fast) var(--ease-out), opacity var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)",
    borderWidth: "1.5px",
    borderStyle: "solid",
    borderColor: "transparent",
    display: "inline-flex",
    alignItems: "center",
  };

  const variantStyles: Record<ButtonVariant, CSSProperties> = {
    primary: { ...base, background: "var(--green-deep)", color: "var(--cream-text)" },
    secondary: {
      ...base,
      background: "transparent",
      color: "var(--text-brand)",
      borderColor: "var(--border-strong)",
    },
    inverse: { ...base, background: "var(--cream-text)", color: "var(--green-deep)" },
  };

  const style = { ...variantStyles[variant] };
  if (hover && !disabled) {
    if (variant === "primary") {
      style.background = "var(--green-mid)";
      style.color = "#FFFFFF";
    }
    if (variant === "secondary") {
      style.borderColor = "var(--green-deep)";
    }
    if (variant === "inverse") {
      style.background = "#FFFFFF";
    }
  }

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
        {children}
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
      {children}
    </button>
  );
}
