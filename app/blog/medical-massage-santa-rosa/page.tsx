import type { Metadata } from "next";
import { BlogArticle } from "../article";
import { getBlogPost } from "../post-data";

const post = getBlogPost("medical-massage-santa-rosa")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  alternates: { canonical: "/blog/medical-massage-santa-rosa" },
};

export default function MedicalMassageSantaRosaPage() {
  return <BlogArticle post={post} />;
}
