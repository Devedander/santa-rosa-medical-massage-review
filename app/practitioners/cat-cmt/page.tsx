import type { Metadata } from "next";
import PractitionerProfile from "../profile-page";
import { getPractitioner } from "../../staff-content";

const practitioner = getPractitioner("cat-cmt")!;
export const dynamic = "force-static";
export const metadata: Metadata = {
  title: "Cat, CMT",
  description: practitioner.shortAnswer,
  alternates: { canonical: "/practitioners/cat-cmt" },
  openGraph: { url: "/practitioners/cat-cmt", title: "Cat, CMT", description: practitioner.shortAnswer },
};
export default function Page() { return <PractitionerProfile practitioner={practitioner} />; }
