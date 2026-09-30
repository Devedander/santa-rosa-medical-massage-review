"use client";

import type { Practitioner } from "../staff-content";

function pagerHref(slug: string, base: string) {
  return base
    ? `${base}/practitioners/${slug}.html`
    : `/practitioners/${slug}/`;
}

function PagerLink({
  practitioner,
  direction,
  base,
}: {
  practitioner: Practitioner;
  direction: "previous" | "next";
  base: string;
}) {
  const href = pagerHref(practitioner.slug, base);
  return (
    <a
      className="staff-profile-pager-link"
      href={href}
    >
      {direction === "previous" ? "←" : "→"}
      <span>
        <small>{direction === "previous" ? "Previous" : "Next"}</small>
        {practitioner.name}
      </span>
    </a>
  );
}

export default function ProfilePager({
  previous,
  next,
  base,
}: {
  previous: Practitioner;
  next: Practitioner;
  base: string;
}) {
  return (
    <nav className="staff-profile-pager" aria-label="Browse practitioners">
      <PagerLink practitioner={previous} direction="previous" base={base} />
      <PagerLink practitioner={next} direction="next" base={base} />
    </nav>
  );
}
