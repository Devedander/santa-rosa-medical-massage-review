import type { MetadataRoute } from 'next';
import { practitioners } from './staff-content';
import { familiarRoutes } from './familiar-routes';
import { blogPosts } from './blog/post-data';

const siteUrl = 'https://santarosamedicalmassage.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...familiarRoutes.map((route) => ({ url: `${siteUrl}${route.path}` })),
    {
      url: `${siteUrl}/`,
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...practitioners.map((practitioner) => ({
      url: `${siteUrl}/practitioners/${practitioner.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    { url: `${siteUrl}/treatments`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/meet-the-practice`, changeFrequency: 'monthly', priority: 0.8 },
    {
      url: `${siteUrl}/blog`,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    ...blogPosts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];
}
