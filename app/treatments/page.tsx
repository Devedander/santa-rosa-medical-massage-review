import type { Metadata } from "next";
import { squareServices } from "../square-services";
import { practiceAwardCopy } from "../staff-content";

export const metadata: Metadata = { title: "Medical Massage Treatments", description: "Explore medical massage, TMJ work, sports massage, lymphatic facilitation, and other therapeutic massage treatments at Santa Rosa Medical Massage.", alternates: { canonical: "/treatments" } };

export default function TreatmentsPage() {
  return <main className="srmm-info-page"><header className="srmm-info-header"><p>Treatments at Santa Rosa Medical Massage</p><h1>Therapeutic massage shaped around your goals.</h1><span>Explore the services available through SRMM, then choose the treatment and practitioner that feel like the right starting point for you.</span></header><section className="srmm-info-intro" aria-label="About SRMM treatments"><p>{practiceAwardCopy}</p><p>Massage is supportive care, not a diagnosis or replacement for medical treatment. Please share relevant health history, restrictions, and care guidance when booking.</p></section><section className="srmm-treatment-grid" aria-label="Available treatments">{squareServices.map((service) => <article key={service.name} className="srmm-treatment-card"><h2>{service.name}</h2><p className="srmm-treatment-summary">{service.summary}</p><p>{service.description}</p><span>Available with: {service.staff.join(", ")}</span><a href={service.bookingUrl}>Schedule this treatment</a></article>)}</section><a className="srmm-info-home" href="/">Return to Santa Rosa Medical Massage</a></main>;
}
