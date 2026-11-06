import type { Metadata } from "next";
import PractitionerProfile from "../profile-page";
import { getPractitioner } from "../../staff-content";

const practitioner = getPractitioner("stacy-cmt")!;
export const dynamic = "force-static";
export const metadata: Metadata = {
  title: "Stacy, CMT #14021",
  description: practitioner.shortAnswer,
  alternates: { canonical: "/practitioners/stacy-cmt" },
  openGraph: { url: "/practitioners/stacy-cmt", title: "Stacy, CMT #14021", description: practitioner.shortAnswer },
};
export default function Page() { return <PractitionerProfile practitioner={practitioner} />; }
