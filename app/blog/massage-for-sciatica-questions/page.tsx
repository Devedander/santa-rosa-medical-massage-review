import type { Metadata } from "next";
import { BlogArticle } from "../article";
import { getBlogPost } from "../post-data";

const post = getBlogPost("massage-for-sciatica-questions")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  alternates: { canonical: "/blog/massage-for-sciatica-questions" },
};

export default function MassageForSciaticaQuestionsPage() {
  return <BlogArticle post={post} />;
}
