import type { Metadata } from "next";
import PractitionerProfile from "../profile-page";
import { getPractitioner } from "../../staff-content";

const practitioner = getPractitioner("andrea-cmt")!;
export const dynamic = "force-static";
export const metadata: Metadata = {
  title: "Andrea, CMT #84505",
  description: practitioner.shortAnswer,
  alternates: { canonical: "/practitioners/andrea-cmt" },
  openGraph: { url: "/practitioners/andrea-cmt", title: "Andrea, CMT #84505", description: practitioner.shortAnswer },
};
export default function Page() { return <PractitionerProfile practitioner={practitioner} />; }
