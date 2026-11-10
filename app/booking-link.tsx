"use client";

import type { ComponentPropsWithoutRef } from "react";
import { trackBookingClick, type BookingPlacement } from "./analytics";

type BookingLinkProps = ComponentPropsWithoutRef<"a"> & {
  href: string;
  placement: BookingPlacement;
};

export default function BookingLink({ placement, onClick, href, children, ...props }: BookingLinkProps) {
  return <a {...props} href={href} onClick={(event) => {
    onClick?.(event);
    if (event.defaultPrevented) return;
    try {
      trackBookingClick(placement);
    } catch {
      // An analytics failure must never prevent the native booking navigation.
    }
  }}>{children}</a>;
}
