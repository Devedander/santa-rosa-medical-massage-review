import type { Metadata } from "next";
import Link from "next/link";
import { practitioners, practiceAwardCopy } from "../staff-content";

export const metadata: Metadata = { title: "Meet the Practice", description: "Meet the Certified Massage Therapists at Santa Rosa Medical Massage and explore each practitioner's approach and areas of focus.", alternates: { canonical: "/meet-the-practice" } };

export default function MeetThePracticePage() {
  return <main className="srmm-info-page"><header className="srmm-info-header"><p>Meet the practice</p><h1>Experienced, local care from a team that listens first.</h1><span>Every appointment begins with your goals, comfort, and relevant care context—then a practitioner helps shape an appropriate session.</span></header><section className="srmm-info-intro" aria-label="About the SRMM team"><p>{practiceAwardCopy}</p></section><section className="srmm-practitioner-grid" aria-label="SRMM practitioners">{practitioners.map((practitioner) => <article key={practitioner.slug} className="srmm-practitioner-card"><p>{practitioner.credentials}</p><h2>{practitioner.name}</h2><h3>{practitioner.question}</h3><span>{practitioner.shortAnswer}</span><p>{practitioner.fit}</p><Link href={`/practitioners/${practitioner.slug}`}>Meet {practitioner.name}</Link></article>)}</section><Link className="srmm-info-home" href="/">Return to Santa Rosa Medical Massage</Link></main>;
}
