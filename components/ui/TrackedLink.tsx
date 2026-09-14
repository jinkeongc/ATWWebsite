"use client";

import type { AnchorHTMLAttributes } from "react";
import { trackEnquiry, type EnquiryClickEvent, type EnquiryLocation } from "@/lib/analytics";

interface TrackedLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  event: EnquiryClickEvent;
  location: EnquiryLocation;
}

/**
 * Plain anchor that records an enquiry event when clicked. Server components
 * can render it directly since the tracking props are plain strings.
 */
export function TrackedLink({ event, location, onClick, children, ...rest }: TrackedLinkProps) {
  return (
    <a
      {...rest}
      onClick={(e) => {
        trackEnquiry(event, { location });
        onClick?.(e);
      }}
    >
      {children}
    </a>
  );
}
