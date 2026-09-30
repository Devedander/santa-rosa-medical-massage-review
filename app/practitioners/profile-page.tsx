"use client";

import {
  type Practitioner,
  practitioners,
  practiceAwardCopy,
  squareBookingUrl,
  squareGiftCardUrl,
} from "../staff-content";
import ProfilePager from "./profile-pager";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useEffect, useRef } from "react";

// GitHub Pages builds set this flag; local previews and the existing hosted
// preview stay rooted at /. Keeping this explicit avoids broken nested-route
// images on either host.
const profileBase =
  process.env.GITHUB_PAGES === "true"
    ? "/santa-rosa-medical-massage-review"
    : "";

export default function PractitionerProfile({
  practitioner,
}: {
  practitioner: Practitioner;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menu = useRef<HTMLElement>(null);
  const menuToggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!menuOpen) return;
    const closeOutside = (event: PointerEvent) => {
      const target = event.target as Node;
      if (!menu.current?.contains(target) && !menuToggle.current?.contains(target))
        setMenuOpen(false);
    };
    document.addEventListener("pointerdown", closeOutside);
    return () => document.removeEventListener("pointerdown", closeOutside);
  }, [menuOpen]);
  const currentIndex = practitioners.findIndex(
    (candidate) => candidate.slug === practitioner.slug,
  );
  const previous =
    practitioners[(currentIndex + practitioners.length - 1) % practitioners.length];
  const next = practitioners[(currentIndex + 1) % practitioners.length];
  return (
    <main className="staff-profile-page">
      <header className="staff-profile-nav">
        <a href={`${profileBase}/`} className="staff-profile-brand" aria-label="Santa Rosa Medical Massage home">
          <img className="staff-profile-wordmark" src={`${profileBase}/logo-correct.png`} alt="Santa Rosa Medical Massage" />
          <img className="staff-profile-mark" src={`${profileBase}/mobile-menu-mark.png`} alt="" aria-hidden="true" />
        </a>
        <button
          className="staff-profile-menu-toggle"
          ref={menuToggle}
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav ref={menu} className={`staff-profile-menu${menuOpen ? " is-open" : ""}`} aria-label="Website navigation">
          <a href={`${profileBase}/#n-content`}>The practice</a>
          <a href={`${profileBase}/#n-content`}>Meet the practice</a>
          <a href={`${profileBase}/#n-treatments`}>Treatments</a>
          <a href={`${profileBase}/#n-conditions`}>Common concerns</a>
          <a href={`${profileBase}/#n-reviews`}>Reviews</a>
          <a href={`${profileBase}/#n-visit`}>Visit &amp; gallery</a>
          <a href={`${profileBase}/#n-blog`}>Blog</a>
          <a href={squareGiftCardUrl}>Gift cards</a>
          <div className="staff-profile-social" aria-label="Social media links">
            <a href="https://www.facebook.com/search/top?q=santa%20rosa%20medical%20massage%2C%20inc.%20ca%2314021" target="_blank" rel="noreferrer" aria-label="Facebook"><img src={`${profileBase}/social-facebook.svg`} alt="" /></a>
            <a href="https://www.instagram.com/santarosamedicalmassage/" target="_blank" rel="noreferrer" aria-label="Instagram"><img src={`${profileBase}/social-instagram.svg`} alt="" /></a>
            <a href="https://www.yelp.com/biz/santa-rosa-medical-massage-santa-rosa-4" target="_blank" rel="noreferrer" aria-label="Yelp"><img src={`${profileBase}/social-yelp.svg`} alt="" /></a>
          </div>
        </nav>
        <a className="staff-profile-book" href={squareBookingUrl}>
          Schedule now <span aria-hidden="true">↗</span>
        </a>
      </header>
      <article className="staff-profile-content">
        <a className="staff-profile-back" href={`${profileBase}/#n-content`}>
          ← Back to Santa Rosa Medical Massage
        </a>
        <div className="staff-profile-intro">
          <div>
            <p className="staff-profile-kicker">Meet the practice</p>
            <h1>{practitioner.name}</h1>
            <p className="staff-profile-credentials">{practitioner.credentials}</p>
            <h2>{practitioner.question}</h2>
            <p className="staff-profile-answer">{practitioner.shortAnswer}</p>
          </div>
          <div className="staff-profile-image-frame">
            <img
              className="staff-profile-image"
              src={`${profileBase}/site-photo-intake/${practitioner.teamPhoto}`}
              alt={`${practitioner.name}, Santa Rosa Medical Massage practitioner`}
            />
          </div>
        </div>
        <section className="staff-profile-copy">
          <div>
            <h2>About {practitioner.name}</h2>
            <p>{practitioner.bio}</p>
          </div>
          <aside>
            <p className="staff-profile-kicker">Choosing care</p>
            <p>{practitioner.fit}</p>
            <a className="staff-profile-book" href={squareBookingUrl}>
              Schedule an appointment <span aria-hidden="true">↗</span>
            </a>
          </aside>
        </section>
        <ProfilePager previous={previous} next={next} base={profileBase} />
        <section className="staff-profile-award">
          <div>
            <p className="staff-profile-kicker">Award-recognized care</p>
            <p>{practiceAwardCopy}</p>
          </div>
          <div className="staff-profile-award-badges" aria-label="Practice awards">
            <img
              src={`${profileBase}/award-businessrate.png`}
              alt="BusinessRate Best of 2026 Award Winner, Massage Therapist"
            />
            <img
              src={`${profileBase}/award-recognition.png`}
              alt="BusinessRate Best of 2025 Massage Therapist recognition"
            />
          </div>
        </section>
      </article>
      <footer className="staff-profile-footer">
        <div className="staff-profile-footer-wordmark">
          <img src={`${profileBase}/logo-correct.png`} alt="Santa Rosa Medical Massage" />
        </div>
        <span>630 Third Street, Suite B, Santa Rosa, CA 95404</span>
      </footer>
    </main>
  );
}
