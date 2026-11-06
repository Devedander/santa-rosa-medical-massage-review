import type { Metadata } from "next";
import { BlogArticle } from "../article";
import { getBlogPost } from "../post-data";

const post = getBlogPost("massage-for-tmj-tension")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  alternates: { canonical: "/blog/massage-for-tmj-tension" },
};

export default function MassageForTmjTensionPage() {
  return <BlogArticle post={post} />;
}
