"use client";

import Script from "next/script";
import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Cloudflare Turnstile widget.
 *
 * Renders nothing at all when NEXT_PUBLIC_TURNSTILE_SITE_KEY is unset, so the
 * contact form keeps working before the keys are added in Vercel. In the normal
 * "managed" mode a real visitor sees only a small confirmation box and is never
 * asked to solve anything.
 */

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export const turnstileEnabled = Boolean(SITE_KEY);

type RenderOptions = {
  sitekey: string;
  callback: (token: string) => void;
  "expired-callback": () => void;
  "error-callback": () => void;
  action?: string;
  theme?: "light" | "dark" | "auto";
};

declare global {
  interface Window {
    turnstile?: {
      render: (element: HTMLElement, options: RenderOptions) => string | undefined;
      reset: (widgetId?: string) => void;
      remove: (widgetId?: string) => void;
    };
  }
}

export function TurnstileWidget({
  onToken,
  resetKey,
}: {
  onToken: (token: string | null) => void;
  /** Increment to clear the current token and request a fresh challenge. */
  resetKey: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | undefined>(undefined);
  const [scriptReady, setScriptReady] = useState(false);

  // Held in a ref so the render effect does not re-run when the parent
  // re-creates its callback on every keystroke.
  const onTokenRef = useRef(onToken);
  useEffect(() => {
    onTokenRef.current = onToken;
  }, [onToken]);

  const emit = useCallback((token: string | null) => {
    onTokenRef.current(token);
  }, []);

  useEffect(() => {
    if (!SITE_KEY || !scriptReady) return;
    const container = containerRef.current;
    const turnstile = window.turnstile;
    if (!container || !turnstile || widgetIdRef.current) return;

    widgetIdRef.current = turnstile.render(container, {
      sitekey: SITE_KEY,
      action: "enquiry",
      theme: "light",
      callback: (token) => emit(token),
      "expired-callback": () => emit(null),
      "error-callback": () => emit(null),
    });

    return () => {
      const id = widgetIdRef.current;
      widgetIdRef.current = undefined;
      if (id) {
        try {
          window.turnstile?.remove(id);
        } catch {
          // Widget already gone (fast unmount / navigation). Nothing to clean up.
        }
      }
    };
  }, [scriptReady, emit]);

  // A Turnstile token is single-use, so a retried submit needs a fresh one.
  useEffect(() => {
    if (resetKey === 0 || !widgetIdRef.current) return;
    emit(null);
    try {
      window.turnstile?.reset(widgetIdRef.current);
    } catch {
      // Non-fatal: the visitor can still reload the page.
    }
  }, [resetKey, emit]);

  if (!SITE_KEY) return null;

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onReady={() => setScriptReady(true)}
      />
      <div ref={containerRef} />
    </>
  );
}
