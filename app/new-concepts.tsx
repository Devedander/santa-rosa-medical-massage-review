"use client";
import {
  careCopy,
  agingCopy,
  referralCopy,
  practiceCopy,
} from "./care-content";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ComponentType,
  type ReactNode,
} from "react";
import {
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  Menu,
  X,
  MapPin,
  Phone,
  CalendarDays,
  Gift,
  Plus,
  Check,
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

type PhotoProps = {
  images: string[][];
  className?: string;
  alt?: string;
  slot?: string;
};
type Design = "courtyard" | "desk" | "everyday" | "house";
type Props = {
  design: Design;
  page: string;
  onPage: (page: string) => void;
  services: string[][];
  photos: string[][];
  posts: string[][];
  reviews: string[][];
  Photo: ComponentType<PhotoProps>;
  selections: ReactNode;
};
const Content = createContext<Props | null>(null);
function useContent() {
  return useContext(Content)!;
}
const concerns = [
  "Headaches & migraines",
  "Neck tension",
  "Shoulder impingement",
  "Hip pain",
  "TMJ pain",
  "Sciatica & piriformis",
  "Rotator cuff recovery",
  "Post-surgical stiffness",
  "Carpal tunnel",
  "Reduced range of motion",
  "Chronic pain",
  "Plantar fasciitis",
];
const address = "630 Third Street, Suite B, Santa Rosa, CA 95404";
const navItems = [
  ["treatments", "Treatments"],
  ["conditions", "Common concerns"],
  ["about", "The practice"],
  ["reviews", "Reviews"],
  ["visit", "Visit & gallery"],
];

function Action({
  to,
  children,
  quiet = false,
}: {
  to: string;
  children: ReactNode;
  quiet?: boolean;
}) {
  const { onPage } = useContent();
  return (
    <button
      className={quiet ? "n-link" : "n-button"}
      onClick={() => onPage(to)}
    >
      {children}
      <ArrowUpRight size={18} aria-hidden="true" />
    </button>
  );
}
function Photo({
  name,
  first = "google-remodel-room.jpg",
  className = "",
}: {
  name: string;
  first?: string;
  className?: string;
}) {
  const { Photo: Picker, photos, design } = useContent();
  const ordered = useMemo(
    () => [
      ...photos.filter(([src]) => src.endsWith(`/${first}`)),
      ...photos.filter(([src]) => !src.endsWith(`/${first}`)),
    ],
    [photos, first],
  );
  return (
    <Picker
      images={ordered}
      slot={`${design}-${name}`}
      className={`n-photo ${className}`}
    />
  );
}
function Brand() {
  const { onPage } = useContent();
  return (
    <button
      className="n-brand"
      onClick={() => onPage("home")}
      aria-label="Santa Rosa Medical Massage home"
    >
      <img
        src="/logo-correct.png"
        alt="Santa Rosa Medical Massage"
        className="n-brand-logo"
      />
    </button>
  );
}
function ConcernLinks() {
  const { onPage } = useContent();
  return (
    <div className="n-concerns">
      {concerns.map((c) => (
        <button
          key={c}
          onClick={() => onPage(`condition-${encodeURIComponent(c)}`)}
        >
          {c}
          <Plus size={16} aria-hidden="true" />
        </button>
      ))}
    </div>
  );
}
function ServiceList({
  mode = "cards",
}: {
  mode?: "cards" | "accordion" | "tabs";
}) {
  const { services } = useContent();
  if (mode === "tabs")
    return (
      <Tabs defaultValue="0" className="n-treatment-tabs">
        <TabsList aria-label="Treatments">
          {services.map(([name], i) => (
            <TabsTrigger key={name} value={String(i)}>
              {name}
            </TabsTrigger>
          ))}
        </TabsList>
        {services.map(([name, summary], i) => (
          <TabsContent key={name} value={String(i)}>
            <Photo name={`treatment-${i}`} first="yelp-treatment.jpg" />
            <div>
              <h3>{name}</h3>
              <p>{summary}</p>
              <Action to={`service-${i}`}>View details</Action>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    );
  if (mode === "accordion")
    return (
      <div className="n-treatment-accordion">
        {services.map(([name, summary], i) => (
          <details key={name} open={i === 0}>
            <summary>
              {name}
              <Plus aria-hidden="true" size={20} />
            </summary>
            <div>
              <p>{summary}</p>
              <Action to={`service-${i}`} quiet>
                View details
              </Action>
            </div>
          </details>
        ))}
      </div>
    );
  return (
    <div className="n-treatment-cards">
      {services.map(([name, summary], i) => (
        <article key={name}>
          <Photo
            name={`treatment-${i}`}
            first={i % 2 ? "therapy-hands.jpg" : "yelp-treatment.jpg"}
          />
          <div>
            <h3>{name}</h3>
            <p>{summary}</p>
            <Action to={`service-${i}`} quiet>
              View details
            </Action>
          </div>
        </article>
      ))}
    </div>
  );
}
function Reviews() {
  const { reviews } = useContent();
  const [group, setGroup] = useState(0);
  const count = Math.ceil(reviews.length / 5);
  return (
    <div className="n-reviews">
      <div className="n-review-grid" aria-live="polite">
        {reviews.slice(group * 5, group * 5 + 5).map(([name, quote]) => (
          <article key={name}>
            <span className="n-quote-mark" aria-hidden="true">
              “
            </span>
            <blockquote>
              {quote.startsWith("Five-star")
                ? "Read this client’s review on Google."
                : quote}
            </blockquote>
            <b>{name}</b>
            <span>Google</span>
          </article>
        ))}
      </div>
      <div className="n-carousel-controls">
        <button
          aria-label="Previous five reviews"
          onClick={() => setGroup((group + count - 1) % count)}
        >
          <ArrowLeft size={20} />
        </button>
        <span>
          {group * 5 + 1}–{Math.min(group * 5 + 5, reviews.length)} of{" "}
          {reviews.length}
        </span>
        <button
          aria-label="Next five reviews"
          onClick={() => setGroup((group + 1) % count)}
        >
          <ArrowRight size={20} />
        </button>
        <a
          href="https://www.google.com/search?q=Santa+Rosa+Medical+Massage+reviews"
          target="_blank"
          rel="noreferrer"
        >
          Read on Google <ArrowUpRight size={16} />
        </a>
      </div>
    </div>
  );
}
function Visit() {
  return (
    <div className="n-visit-combined">
      <div className="n-visit-details">
        <div>
          <MapPin size={23} />
          <h3>Find us downtown</h3>
          <p>{address}</p>
          <p>Private parking. Visits by appointment.</p>
          <a
            className="n-link"
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Santa Rosa Medical Massage " + address)}`}
            target="_blank"
            rel="noreferrer"
          >
            Get directions <ArrowUpRight size={18} />
          </a>
        </div>
        <div>
          <Phone size={23} />
          <h3>Let’s talk before you visit</h3>
          <a className="n-phone" href="tel:+17073037707">
            (707) 303-7707
          </a>
          <p>
            Ask about session lengths, current pricing, payment, receipts, or
            access needs.
          </p>
          <Action to="contact" quiet>
            Contact the practice
          </Action>
        </div>
      </div>
    </div>
  );
}
function Notes({ compact = false }: { compact?: boolean }) {
  const { posts } = useContent();
  return (
    <div className="n-notes">
      {posts
        .slice(0, compact ? 3 : 6)
        .map(([slug, title, category, excerpt]) => (
          <article key={slug}>
            <span>{category}</span>
            <h3>{title}</h3>
            <p>{excerpt}</p>
            <Action to={`post-${slug}`} quiet>
              Read note
            </Action>
          </article>
        ))}
    </div>
  );
}
function Courtyard() {
  return (
    <div className="courtyard-home">
      <section className="court-opening">
        <Photo name="opening" />
        <div className="court-welcome">
          <span>Focused care. A welcoming place.</span>
          <h1>
            A little space to feel
            <br />
            more like yourself.
          </h1>
          <div>
            <p>
              When discomfort becomes part of everyday life, it can quietly
              change the things you do. A walk gets shorter. Gardening waits for
              another day. Finding a comfortable position at night takes a
              little longer.
            </p>
            <p>
              Here, you’re welcome to start with a conversation. We’ll listen to
              what you’re experiencing, make room for your questions, and talk
              about care with your comfort and everyday goals in mind.
            </p>
            <a className="n-button" href="#n-about">
              Come get to know the practice.
            </a>
          </div>
        </div>
      </section>
      <section id="n-about" className="court-introduction n-section">
        <p className="n-kicker">Here in Santa Rosa</p>
        <h2>
          A little more ease.
          <br />A little more you.
        </h2>
        <div>
          <p>
            At Santa Rosa Medical Massage, the conversation starts with you—what
            you’ve been feeling, what you’ve tried, and what you would like to
            do more comfortably. You don’t need to arrive knowing which
            treatment to choose.
          </p>
          <p>
            Our focus is targeted soft-tissue care, with attention to your
            comfort, preferences, and goals. Whether you’re exploring massage
            for the first time or returning for ongoing care, there’s room to
            ask questions and talk through the next step.
          </p>
          <Action to="about" quiet>
            Get to know the practice
          </Action>
        </div>
      </section>
      <section id="n-treatments" className="n-section court-treatments">
        <div className="n-section-heading">
          <h2>Care, with intention.</h2>
          <p>Six approaches. One starting point: your needs.</p>
        </div>
        <ServiceList />
      </section>
      <section id="n-conditions" className="court-concerns n-section">
        <div>
          <h2>
            What would you like
            <br />
            to feel easier?
          </h2>
          <p>
            You don’t have to know the name of a treatment to start a
            conversation.
          </p>
        </div>
        <ConcernLinks />
      </section>
      <section className="court-life n-section">
        <Photo name="everyday-care" first="therapy-hands.jpg" />
        <div>
          <span className="n-kicker">Care through the years</span>
          <h2>
            For the life
            <br />
            beyond the table.
          </h2>
          <p>{agingCopy}</p>
          <Action to="contact" quiet>
            Talk through your goals
          </Action>
        </div>
      </section>
      <section id="n-reviews" className="n-section court-reviews">
        <div className="n-section-heading">
          <h2>In our clients’ words.</h2>
          <Action to="reviews" quiet>
            All client reviews
          </Action>
        </div>
        <Reviews />
      </section>
      <section className="court-gallery n-section">
        <div>
          <span className="n-kicker">Come on in</span>
          <h2>
            A familiar place
            <br />
            to return to.
          </h2>
          <p>
            Explore the refreshed rooms and the details of the practice before
            your visit.
          </p>
          <Action to="gallery" quiet>
            Explore the gallery
          </Action>
        </div>
        <Photo name="gallery" first="google-gallery-3.jpg" />
      </section>
      <section className="court-referral n-section">
        <h2>
          Supporting the care
          <br />
          already around you.
        </h2>
        <div>
          <p>{referralCopy}</p>
          <Action to="contact">Referral inquiries</Action>
        </div>
      </section>
      <section id="n-visit" className="n-section">
        <div className="n-section-heading">
          <h2>Your next visit.</h2>
          <Action to="book">Appointments & gifts</Action>
        </div>
        <Visit />
      </section>
      <section className="n-section court-notes">
        <div className="n-section-heading">
          <h2>A few helpful notes.</h2>
          <Action to="blog" quiet>
            Browse the journal
          </Action>
        </div>
        <Notes compact />
      </section>
    </div>
  );
}
function Desk() {
  return (
    <div className="desk-home">
      <section className="desk-opening">
        <div className="desk-title">
          <span>Soft-tissue care in Santa Rosa</span>
          <h1>
            Good care starts
            <br />
            with being heard.
          </h1>
          <p>
            Perhaps there’s a particular place that keeps asking for attention.
            Perhaps movement feels more restricted than it used to. Or perhaps
            you’ve been encouraged to explore massage and aren’t quite sure
            where to begin.
          </p>
          <p>
            You can start with an ordinary conversation. Tell us what gets in
            the way of your day, which activities matter to you, and any
            relevant guidance from your medical or rehabilitation team.
          </p>
          <p>
            Santa Rosa Medical Massage offers several approaches to soft-tissue
            care. Understanding the differences can wait until we understand
            what you’re looking for. Your questions, comfort, and preferences
            belong in that discussion.
          </p>
          <div className="n-actions">
            <Action to="about">Learn how care begins.</Action>
            <Action to="contact" quiet>
              Ask a question
            </Action>
          </div>
        </div>
        <Photo name="opening" first="yelp-treatment.jpg" />
        <div className="desk-location">
          <MapPin size={18} />
          <span>630 Third Street, Suite B</span>
          <span>Private parking</span>
          <a href="tel:+17073037707">(707) 303-7707</a>
        </div>
      </section>
      <section id="n-treatments" className="desk-treatments n-section">
        <div>
          <span className="n-kicker">Treatment directory</span>
          <h2>Find your approach.</h2>
          <p>
            Open a treatment to compare the options. We can help you choose.
          </p>
          <Photo name="treatments-overview" first="therapy-hands.jpg" />
        </div>
        <ServiceList mode="accordion" />
      </section>
      <section id="n-conditions" className="desk-concerns n-section">
        <h2>Start with the concern.</h2>
        <ConcernLinks />
      </section>
      <section id="n-about" className="desk-practice n-section">
        <div>
          <h2>
            Listening is part
            <br />
            of the work.
          </h2>
          <p>{practiceCopy}</p>
          <Action to="about" quiet>
            About the practice
          </Action>
        </div>
        <div>
          <h3>Keeping everyday life in view</h3>
          <p>{agingCopy}</p>
          <h3>For referring professionals</h3>
          <p>{referralCopy}</p>
          <Action to="contact" quiet>
            Discuss a referral
          </Action>
        </div>
      </section>
      <section id="n-visit" className="desk-arrival n-section">
        <div className="n-section-heading">
          <h2>Before you arrive.</h2>
          <Action to="book">Appointments & gifts</Action>
        </div>
        <Visit />
      </section>
      <section id="n-reviews" className="n-section desk-reviews">
        <div className="n-section-heading">
          <h2>Client perspectives.</h2>
          <Action to="reviews" quiet>
            All reviews
          </Action>
        </div>
        <Reviews />
      </section>
      <section className="n-section desk-notes">
        <div className="n-section-heading">
          <h2>Questions & reading.</h2>
          <Action to="blog" quiet>
            All notes
          </Action>
        </div>
        <Notes compact />
      </section>
    </div>
  );
}
function Everyday() {
  const { onPage } = useContent();
  return (
    <div className="everyday-home">
      <section className="every-opening">
        <span>Santa Rosa, California</span>
        <h1>
          For all the little things
          <br />
          that make a day yours.
        </h1>
        <p>
          Walking a little farther. Spending an afternoon in the garden. Turning
          your head more comfortably. Settling into bed with less muscle
          tension.
        </p>
        <p>
          These may seem like small things, but they shape how life feels. And
          when discomfort gets in the way, they can become the things you miss
          most.
        </p>
        <a className="n-button" href="#n-about">
          Get to know our approach.
        </a>
        <div className="every-window">
          <Photo name="opening-left" first="google-gallery-3.jpg" />
          <div>
            <p>
              Care for
              <br />
              your everyday.
            </p>
            <span>
              Targeted massage.
              <br />
              Personal attention.
            </span>
          </div>
          <Photo name="opening-right" first="yelp-treatment.jpg" />
        </div>
      </section>
      <section id="n-about" className="every-letter n-section">
        <span className="n-kicker">You bring the story. We listen.</span>
        <h2>
          You’re more than
          <br />
          the place that hurts.
        </h2>
        <p>
          At Santa Rosa Medical Massage, those everyday goals are a place to
          begin. We listen to what you’re experiencing and talk with you about
          treatment options, your comfort, and what you hope to return to.
        </p>
        <p>
          Your needs may change over time. Whether you’re looking for focused
          attention to a recurring concern or considering follow-up care, the
          conversation stays centered on you.
        </p>
        <p>{agingCopy}</p>
        <Action to="about" quiet>
          Meet the practice
        </Action>
      </section>
      <section id="n-treatments" className="every-treatments n-section">
        <h2>
          There’s more than
          <br />
          one way to care.
        </h2>
        <p>Explore all six treatments. We’ll help you find a starting point.</p>
        <div className="every-goals">
          {[
            ["A longer walk", "Plantar fasciitis"],
            ["Time in the garden", "Reduced range of motion"],
            ["An easier morning", "Chronic pain"],
          ].map(([label, concern]) => (
            <button
              key={label}
              onClick={() => onPage(`condition-${encodeURIComponent(concern)}`)}
            >
              {label}
              <ArrowUpRight size={19} />
            </button>
          ))}
        </div>
        <ServiceList mode="tabs" />
      </section>
      <section id="n-conditions" className="every-concerns n-section">
        <div>
          <h2>
            Let’s talk about
            <br />
            what you’re feeling.
          </h2>
          <p>Choose a concern to explore the next conversation.</p>
        </div>
        <ConcernLinks />
      </section>
      <section id="n-reviews" className="every-reviews n-section">
        <h2>
          Good care is personal.
          <br />
          So are these stories.
        </h2>
        <Reviews />
      </section>
      <section className="every-invitation n-section">
        <Photo name="gallery" />
        <div>
          <h2>
            Your first visit
            <br />
            can feel familiar.
          </h2>
          <p>
            See the space before you arrive. There’s private parking, and you
            can call with questions about anything you need for a comfortable
            visit.
          </p>
          <Action to="gallery" quiet>
            Have a look around
          </Action>
        </div>
      </section>
      <section className="every-referral n-section">
        <p className="n-kicker">For professionals</p>
        <h2>
          Part of a bigger
          <br />
          care conversation.
        </h2>
        <p>{referralCopy}</p>
        <Action to="contact" quiet>
          Get in touch about a patient
        </Action>
      </section>
      <section id="n-visit" className="every-visit n-section">
        <h2>
          We’re here
          <br />
          when you’re ready.
        </h2>
        <Visit />
        <div className="every-two-actions">
          <Action to="book">Make time for yourself</Action>
          <Action to="gift">Give someone time for care</Action>
        </div>
      </section>
      <section className="every-notes n-section">
        <div className="n-section-heading">
          <h2>
            A little reading,
            <br />
            at your own pace.
          </h2>
          <Action to="blog" quiet>
            All notes
          </Action>
        </div>
        <Notes compact />
      </section>
    </div>
  );
}

function House() {
  return (
    <div className="house-home">
      <section className="house-opening">
        <div className="house-welcome">
          <span className="n-kicker">Welcome to our practice</span>
          <h1>
            Santa Rosa
            <br />
            Medical Massage
          </h1>
          <h2>A thoughtful place to begin feeling more like yourself.</h2>
          <p>
            In the heart of downtown Santa Rosa, there’s a place to slow down,
            share what you’ve been feeling, and talk about the things you would
            like to do more comfortably. You don’t need to know which treatment
            to choose, or have the perfect words for what’s wrong.
          </p>
          <p>
            Our focus is soft-tissue care with personal attention. Whether
            you’re navigating a recurring concern, returning to activities you
            enjoy, or making room for ongoing care, we begin with your
            experience, your questions, and your comfort.
          </p>
          <a className="n-button" href="#n-about">
            Get to know us
          </a>
        </div>
        <Photo name="welcome" first="google-remodel-room.jpg" />
      </section>
      <div className="house-photo-strip" aria-label="Scenes from the practice">
        {[
          "google-gallery-3.jpg",
          "google-remodel-room.jpg",
          "yelp-treatment.jpg",
          "therapy-room.jpg",
          "google-gallery-4.jpg",
          "therapy-hands.jpg",
        ].map((file, i) => (
          <Photo key={file} name={`welcome-strip-${i}`} first={file} />
        ))}
      </div>
      <section id="n-about" className="house-story n-section">
        <div>
          <span className="n-kicker">A personal approach</span>
          <h2>
            Time to listen.
            <br />
            Room to be yourself.
          </h2>
          <p>{practiceCopy}</p>
          <p>
            We know that choosing care can bring questions. Talk with us about
            practitioner experience, what a session involves, and anything that
            would help you feel more comfortable before your first visit.
          </p>
          <Action to="about" quiet>
            Explore the practice
          </Action>
        </div>
        <Photo name="practice-story" first="google-gallery-3.jpg" />
      </section>
      <section className="house-pause n-section">
        <h2>
          For the walks, the gardens,
          <br />
          and the ordinary days you love.
        </h2>
        <p>{agingCopy}</p>
      </section>
      <section id="n-treatments" className="house-treatments n-section">
        <div className="n-section-heading">
          <div>
            <span className="n-kicker">Thoughtfully chosen care</span>
            <h2>Begin with what you need.</h2>
          </div>
          <p>
            Explore six approaches to soft-tissue care. There’s time to talk
            through the differences before choosing.
          </p>
        </div>
        <ServiceList />
      </section>
      <section id="n-conditions" className="house-concerns n-section">
        <div>
          <span className="n-kicker">Everyday comfort</span>
          <h2>
            What has been
            <br />
            getting in your way?
          </h2>
          <p>
            A familiar concern or a change in how you move can be a starting
            point. Tell us what you notice and what you hope to return to.
          </p>
        </div>
        <ConcernLinks />
      </section>
      <section id="n-reviews" className="house-reviews n-section">
        <span className="n-kicker">From our clients</span>
        <h2>Care, in their own words.</h2>
        <Reviews />
      </section>
      <section className="house-story house-referrals n-section">
        <div>
          <span className="n-kicker">For referring professionals</span>
          <h2>
            A conversation
            <br />
            about the whole person.
          </h2>
          <p>{referralCopy}</p>
          <p>
            Relevant guidance from a medical or rehabilitation team can help
            inform the discussion. Contact us before sending private patient
            information.
          </p>
          <Action to="contact" quiet>
            Talk with the practice
          </Action>
        </div>
        <Photo name="referral-care" first="yelp-treatment.jpg" />
      </section>
      <section id="n-visit" className="house-visit n-section">
        <span className="n-kicker">Downtown Santa Rosa</span>
        <h2>A welcoming place to return to.</h2>
        <Visit />
        <div className="n-actions">
          <Action to="book">Appointments & gift certificates</Action>
          <Action to="gallery" quiet>
            Explore the full gallery
          </Action>
        </div>
      </section>
      <section className="house-notes n-section">
        <div className="n-section-heading">
          <h2>A little reading before your visit.</h2>
          <Action to="blog" quiet>
            All notes
          </Action>
        </div>
        <Notes compact />
      </section>
    </div>
  );
}

function Booking() {
  const { services, page } = useContent();
  const [notice, setNotice] = useState("");
  if (false && page === "gift")
    return (
      <section className="n-booking standalone-booking n-booking-gift">
        <div className="standalone-booking-card">
          <Gift size={28} />
          <span className="n-kicker">Gift cards</span>
          <h1>Give someone time for care.</h1>
          <p>
            Gift certificates will be purchased securely through the practice’s
            Square page. This review page does not collect an amount, recipient
            information, or payment details.
          </p>
          <button
            className="n-button"
            onClick={() =>
              setNotice(
                "Square gift-card link placeholder — no purchase was started.",
              )
            }
          >
            Continue to Square gift cards <ArrowRight size={18} />
          </button>
          {notice && (
            <p className="n-notice" role="status">
              <Check size={18} />
              {notice}
            </p>
          )}
        </div>
      </section>
    );
  if (false && page === "book")
    return (
      <section className="n-booking standalone-booking n-booking-book">
        <div className="standalone-booking-card">
          <CalendarDays size={28} />
          <span className="n-kicker">Appointments</span>
          <h1>Find a time that works for you.</h1>
          <p>
            Appointment selection will continue to the practice’s Square booking
            page. This review page is only showing the finished-form direction
            and does not submit a booking.
          </p>
          <button
            className="n-button"
            onClick={() =>
              setNotice(
                "Square booking link placeholder — no appointment was started.",
              )
            }
          >
            Continue to Square booking <ArrowRight size={18} />
          </button>
          {notice && (
            <p className="n-notice" role="status">
              <Check size={18} />
              {notice}
            </p>
          )}
        </div>
      </section>
    );
  return (
    <Tabs
      defaultValue={page === "gift" ? "gift" : "appointment"}
      className={`n-booking n-booking-${page}`}
      onValueChange={() => setNotice("")}
    >
      <TabsList aria-label="Appointments or gift certificates">
        <TabsTrigger value="appointment">
          <CalendarDays size={18} />
          Appointment
        </TabsTrigger>
        <TabsTrigger value="gift">
          <Gift size={18} />
          Gift card
        </TabsTrigger>
      </TabsList>
      <TabsContent value="appointment">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setNotice(
              "Your appointment preferences are ready to review. This mockup has not booked an appointment or sent your information.",
            );
          }}
        >
          <div>
            <label>
              Treatment
              <select required defaultValue="">
                <option value="" disabled>
                  Choose a treatment
                </option>
                {services.map(([s]) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </label>
            <label>
              Practitioner preference
              <input placeholder="Any available therapist, or a name" />
            </label>
            <label>
              Preferred date
              <input type="date" required />
            </label>
            <label>
              Preferred time
              <select defaultValue="Flexible">
                <option>Flexible</option>
                <option>Morning</option>
                <option>Afternoon</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              Your name
              <input autoComplete="name" required />
            </label>
            <label>
              Email
              <input type="email" autoComplete="email" required />
            </label>
            <p>
              Contact the practice for current pricing, session lengths, and
              appointment availability.
            </p>
            <button className="n-button" type="submit">
              Review appointment preferences <ArrowRight size={18} />
            </button>
          </div>
        </form>
      </TabsContent>
      <TabsContent value="gift">
        <div className="n-gift-options">
          <article>
            <Gift size={24} />
            <h2>Give a gift certificate</h2>
            <p>
              Gift certificates will be purchased securely through the
              practice’s Square page. No amount, recipient information, or
              payment is collected in this review site.
            </p>
            <button
              className="n-button"
              onClick={() =>
                setNotice(
                  "Square gift certificate link placeholder — no purchase was started.",
                )
              }
            >
              Open Square gift cards <ArrowRight size={18} />
            </button>
          </article>
          <article>
            <CalendarDays size={24} />
            <h2>Book an appointment</h2>
            <p>
              Choose a service and time through the practice’s Square booking
              page. This button is ready for the final booking URL.
            </p>
            <button
              className="n-button"
              onClick={() =>
                setNotice(
                  "Square booking link placeholder — no appointment was started.",
                )
              }
            >
              Open Square booking <ArrowRight size={18} />
            </button>
          </article>
        </div>
        {/*
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setNotice(
              'Your gift details are ready to review. This mockup has not purchased or delivered a certificate.',
            );
          }}
        >
          <div>
            <label>
              Gift amount ($)
              <input
                type="number"
                min="1"
                step="1"
                required
                placeholder="Enter an amount"
              />
            </label>
            <label>
              Recipient’s name
              <input required />
            </label>
            <label>
              Recipient’s email
              <input type="email" required />
            </label>
            <label>
              Your message
              <textarea rows={3} placeholder="A little time for you…" />
            </label>
          </div>
          <div>
            <label>
              Your name
              <input required autoComplete="name" />
            </label>
            <label>
              Your email
              <input required type="email" autoComplete="email" />
            </label>
            <p>
              Choose a personal amount for this gift preview. Contact the
              practice for available gift options and terms.
            </p>
            <button className="n-button" type="submit">
              Review gift details <ArrowRight size={18} />
            </button>
          </div>
        </form>*/}
      </TabsContent>
      <p className="n-prototype-note">
        Design preview: no booking, purchase, email, or payment will be made.
      </p>
      {notice && (
        <p role="status" className="n-notice">
          <Check size={20} />
          {notice}
        </p>
      )}
    </Tabs>
  );
}
function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <form
      className="n-contact-form"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <h2>What’s on your mind?</h2>
      <label>
        Name
        <input autoComplete="name" required />
      </label>
      <label>
        Email
        <input autoComplete="email" type="email" required />
      </label>
      <label>
        Your question
        <textarea
          rows={5}
          required
          placeholder="Ask about treatments, your first visit, or referral inquiries. Please leave out private medical details."
        />
      </label>
      <button className="n-button">
        Preview message <ArrowUpRight size={18} />
      </button>
      <p className="n-prototype-note">
        This review form does not send messages. Please call to contact the
        practice.
      </p>
      {sent && (
        <p role="status" className="n-notice">
          Your message preview is complete. Nothing has been sent.
        </p>
      )}
    </form>
  );
}
function NewPages() {
  const { page, services, posts, onPage, selections } = useContent();
  const service = page.startsWith("service-")
    ? services[Number(page.slice(8))]
    : null;
  const concern = page.startsWith("condition-")
    ? decodeURIComponent(page.slice(10))
    : "";
  const post = posts.find(([slug]) => page === `post-${slug}`);
  const titles: Record<string, string> = {
    treatments: "Care around your needs.",
    conditions: "Start with what you’re feeling.",
    about: "A practice that listens.",
    reviews: "In our clients’ words.",
    gallery: "Welcome inside.",
    blog: "Notes for everyday care.",
    contact: "Let’s start a conversation.",
    book: "Appointments & gift cards.",
    gift: "Appointments & gift cards.",
    selections: "Your photo selections.",
  };
  return (
    <div className="n-inner">
      <button className="n-link n-back" onClick={() => onPage("home")}>
        <ArrowLeft size={18} />
        Back to home
      </button>
      <div className="n-inner-title">
        <span>Santa Rosa Medical Massage</span>
        <h1>
          {service?.[0] ||
            concern ||
            post?.[1] ||
            titles[page] ||
            titles.contact}
        </h1>
        <p>
          {service?.[1] ||
            (concern
              ? "A place to begin a conversation about comfort, movement, and your goals."
              : post?.[3])}
        </p>
      </div>
      {service ? (
        <div className="n-detail">
          <Photo name={`detail-${page}`} first="yelp-treatment.jpg" />
          <div>
            <h2>What to expect</h2>
            <p>{service[2]}</p>
            <p>{practiceCopy}</p>
            <Action to="book">Explore appointments</Action>
            <Action to="treatments" quiet>
              All treatments
            </Action>
          </div>
        </div>
      ) : concern ? (
        <div className="n-condition-detail">
          <div>
            <h2>Begin with your experience.</h2>
            <p>{practiceCopy}</p>
            <p>
              Tell us how long the concern has been present, what changes it,
              and any relevant guidance from your medical or rehabilitation
              team.
            </p>
            <p>
              Massage does not diagnose a condition or replace medical care.
            </p>
            <Action to="treatments">Explore treatment options</Action>
          </div>
          <aside>
            <h3>What would you like to return to?</h3>
            <p>
              A daily walk, a hobby, or moving more comfortably can be a useful
              starting point.
            </p>
            <Action to="contact" quiet>
              Talk with the practice
            </Action>
          </aside>
        </div>
      ) : post ? (
        <div className="n-reading">
          <p className="n-prototype-note">
            Draft topic preview — original-site article import is still pending.
          </p>
          <h2>Bring the details that matter.</h2>
          <p>
            Notice what makes the concern feel different, when it gets in your
            way, and what you hope to return to. Those details help you prepare
            for a focused conversation about your goals.
          </p>
          <p>
            Share relevant medical guidance with your therapist. Ask questions
            about treatment options, comfort, and what to expect before choosing
            a session.
          </p>
          <Action to="contact">Ask a question</Action>
          <Action to="blog" quiet>
            All notes
          </Action>
        </div>
      ) : page === "treatments" ? (
        <ServiceList />
      ) : page === "conditions" ? (
        <ConcernLinks />
      ) : page === "book" || page === "gift" ? (
        <Booking key={page} />
      ) : page === "reviews" ? (
        <Reviews />
      ) : page === "blog" ? (
        <Notes />
      ) : page === "gallery" ? (
        <>
          <Visit />
          <div className="n-visit-gallery n-visit-mini-gallery">
            <Photo name="visit-gallery" first="google-remodel-room.jpg" />
            <div>
              <span>Inside the practice</span>
              <h3>Take a look around.</h3>
              <p>
                See the refreshed treatment rooms and the details that make an
                appointment feel easy from arrival onward.
              </p>
            </div>
          </div>
        </>
      ) : page === "about" ? (
        <>
          <div className="n-detail">
            <Photo name="about" />
            <div>
              <h2>Personal attention, from the beginning.</h2>
              <p>{practiceCopy}</p>
              <p>
                Have questions about a practitioner’s experience or a particular
                treatment? Contact the practice before choosing an appointment.
              </p>
              <Action to="contact">Find the right fit</Action>
            </div>
          </div>
          <div className="n-about-more">
            <article>
              <h2>Care as life changes.</h2>
              <p>{agingCopy}</p>
            </article>
            <article>
              <h2>For referring professionals.</h2>
              <p>{referralCopy}</p>
            </article>
          </div>
          <Visit />
        </>
      ) : page === "selections" ? (
        selections
      ) : (
        <div className="n-contact-layout">
          <Visit />
          <ContactForm />
        </div>
      )}
    </div>
  );
}
function Footer() {
  return (
    <footer className="n-footer">
      <Brand />
      <div>
        <p>{address}</p>
        <a href="tel:+17073037707">(707) 303-7707</a>
      </div>
    </footer>
  );
}
export default function NewConcepts(props: Props) {
  const [menu, setMenu] = useState(false);
  const pendingSection = useRef<string | null>(null);
  const root = useRef<HTMLDivElement>(null);
  const go = (page: string) => {
    pendingSection.current = null;
    setMenu(false);
    props.onPage(page);
    window.scrollTo({ top: 0, behavior: "instant" });
  };
  const jump = (section: string) => {
    setMenu(false);
    if (props.page !== "home") {
      pendingSection.current = section;
      props.onPage("home");
    } else
      document.getElementById(`n-${section}`)?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
      });
  };
  useEffect(() => {
    if (props.page === "home" && pendingSection.current) {
      document.getElementById(`n-${pendingSection.current}`)?.scrollIntoView();
      pendingSection.current = null;
    }
  }, [props.page]);
  useEffect(() => {
    const elements = root.current?.querySelectorAll(".n-section");
    if (
      !elements ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    )
      return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("n-arrived");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.04 },
    );
    elements.forEach((el) => {
      el.classList.add("n-enter");
      observer.observe(el);
    });
    return () => {
      observer.disconnect();
      elements.forEach((el) => el.classList.remove("n-enter", "n-arrived"));
    };
  }, [props.page, props.design]);
  return (
    <Content.Provider value={{ ...props, onPage: go }}>
      <div ref={root} className={`novel n-${props.design}`}>
        <a className="n-skip" href="#n-content">
          Skip to content
        </a>
        <div className="n-site-nav">
          <Brand />
          <button
            className="n-menu-toggle"
            aria-label={menu ? "Close menu" : "Open menu"}
            aria-expanded={menu}
            onClick={() => setMenu(!menu)}
          >
            {menu ? <X /> : <Menu />}
          </button>
          <nav
            aria-label="Website navigation"
            className={menu ? "n-nav-open" : ""}
          >
            {navItems.map(([id, label]) => (
              <button key={id} onClick={() => id === "visit" ? go("gallery") : jump(id)}>
                {label}
              </button>
            ))}
            {props.design !== "house" && (
              <>
                <button onClick={() => go("blog")}>Notes</button>
                <button onClick={() => go("gift")}>Gift cards</button>
              </>
            )}
          </nav>
          <div className="n-social" aria-label="Social media links">
            <a
              href="https://www.facebook.com/search/top?q=santa%20rosa%20medical%20massage%2C%20inc.%20ca%2314021"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <img src="/social-facebook.svg" alt="" />
            </a>
            <a
              href="https://www.instagram.com/santarosamedicalmassage/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <img src="/social-instagram.svg" alt="" />
            </a>
            <a
              href="https://www.yelp.com/biz/santa-rosa-medical-massage-santa-rosa-4"
              target="_blank"
              rel="noreferrer"
              aria-label="Yelp"
            >
              <img src="/social-yelp.svg" alt="" />
            </a>
          </div>
          <a className="n-call" href="tel:+17073037707">
            Call <span>(707) 303-7707</span>
          </a>
          <Action to="book">Schedule now</Action>
          {props.design === "desk" && (
            <div className="desk-nav-bottom">
              <span>Here to help.</span>
              <a href="tel:+17073037707">(707) 303-7707</a>
              <p>
                Downtown Santa Rosa
                <br />
                Private parking
              </p>
            </div>
          )}
        </div>
        <div id="n-content" className="n-content" tabIndex={-1}>
          {props.page === "home" ? (
            props.design === "house" ? (
              <House />
            ) : props.design === "courtyard" ? (
              <Courtyard />
            ) : props.design === "desk" ? (
              <Desk />
            ) : (
              <Everyday />
            )
          ) : (
            <NewPages />
          )}
          <Footer />
        </div>
      </div>
    </Content.Provider>
  );
}
