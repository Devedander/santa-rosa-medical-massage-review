import Link from "next/link";
import type { BlogPost } from "./post-data";

export function BlogArticle({ post }: { post: BlogPost }) {
  return (
    <main className="srmm-blog-page srmm-article-page">
      <Link className="srmm-blog-home" href="/blog">
        All articles
      </Link>
      <article className="srmm-article">
        <p>{post.category}</p>
        <h1>{post.title}</h1>
        <span>{post.updated}</span>
        {post.sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}
      </article>
      <Link className="srmm-blog-home" href="/">
        Return to Santa Rosa Medical Massage
      </Link>
    </main>
  );
}
