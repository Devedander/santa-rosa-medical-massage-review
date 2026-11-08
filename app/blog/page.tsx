import type { Metadata } from "next";
import { blogPosts } from "./post-data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Helpful reading from Santa Rosa Medical Massage about medical massage, movement, and preparing for care.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  return (
    <main className="srmm-blog-page">
      <header className="srmm-blog-header">
        <p>Santa Rosa Medical Massage</p>
        <h1>Helpful reading before your visit.</h1>
        <span>
          Plain-language articles about massage, movement, and preparing for a
          conversation about care.
        </span>
      </header>
      <section aria-label="Blog articles" className="srmm-blog-grid">
        {blogPosts.map((post) => (
          <article key={post.slug}>
            <p>{post.category}</p>
            <h2>{post.title}</h2>
            <span>{post.description}</span>
            <a href={`/blog/${post.slug}`}>Read article</a>
          </article>
        ))}
      </section>
      <a className="srmm-blog-home" href="/articles">Explore bodywork articles and client experiences</a>
      <a className="srmm-blog-home" href="/">
        Return to Santa Rosa Medical Massage
      </a>
    </main>
  );
}
