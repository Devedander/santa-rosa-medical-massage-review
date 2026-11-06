import type { Metadata } from "next";
import PractitionerProfile from "../profile-page";
import { getPractitioner } from "../../staff-content";

const practitioner = getPractitioner("jamie-cmt")!;
export const dynamic = "force-static";
export const metadata: Metadata = {
  title: "Jamie, CMT #5420",
  description: practitioner.shortAnswer,
  alternates: { canonical: "/practitioners/jamie-cmt" },
  openGraph: { url: "/practitioners/jamie-cmt", title: "Jamie, CMT #5420", description: practitioner.shortAnswer },
};
export default function Page() { return <PractitionerProfile practitioner={practitioner} />; }
