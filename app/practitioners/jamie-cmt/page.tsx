import type { Metadata } from "next";
import PractitionerProfile from "../profile-page";
import { getPractitioner } from "../../staff-content";

const practitioner = getPractitioner("jamie-cmt")!;
export const dynamic = "force-static";
export const metadata: Metadata = {
  title: "Jamie, CMT #5420 | Santa Rosa Medical Massage",
  description: practitioner.shortAnswer,
};
export default function Page() { return <PractitionerProfile practitioner={practitioner} />; }
