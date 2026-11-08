import { legacyPosts } from './legacy-posts';
import { squareServices } from './square-services';

const serviceSlugs = [
  'new-client-medical-massage', 'thai-massage-and-stretching',
  'medical-massage', 'neuromuscular-trigger-point-therapy',
  'deep-tissue-myofascial', 'lymphatic-facilitation', 'tmj-work',
  'sports-massage', 'swedish-massage', 'somatic-experiencing',
];

export const familiarRoutes = [
  ...squareServices.map((service, index) => ({
    path: `/services/${serviceSlugs[index]}`, page: `service-${index}`,
    title: service.name, description: service.summary,
  })),
  ...legacyPosts.map((post) => ({
    // Keep the original public article URL, including fascia's longer slug.
    path: new URL(post[4]).pathname.replace(/\/$/, ''), page: `post-${post[0]}`,
    title: post[1], description: post[3],
  })),
  { path: '/services', page: 'treatments', title: 'Treatment options', description: 'Explore the services offered by Santa Rosa Medical Massage.' },
  { path: '/articles', page: 'blog', title: 'Bodywork articles', description: 'Articles and client experiences from Santa Rosa Medical Massage.' },
  { path: '/gallery', page: 'gallery', title: 'Visit the practice', description: 'See the Santa Rosa Medical Massage practice and treatment rooms.' },
  { path: '/about', page: 'about', title: 'About the practice', description: 'Learn about the approach at Santa Rosa Medical Massage.' },
  { path: '/team', page: 'staff', title: 'Meet our team', description: 'Meet the practitioners at Santa Rosa Medical Massage.' },
  { path: '/reviews', page: 'reviews', title: 'Client reviews', description: 'Read client experiences with Santa Rosa Medical Massage.' },
  { path: '/contact', page: 'contact', title: 'Contact and location', description: 'Find contact and location details for Santa Rosa Medical Massage.' },
  { path: '/concerns', page: 'conditions', title: 'Common concerns', description: 'Explore common concerns discussed at Santa Rosa Medical Massage.' },
];

export function familiarHref(page: string): string {
  const [key, fragment] = page.split('#', 2);
  const path = key === 'home' ? '/' : familiarRoutes.find((route) => route.page === key)?.path;
  if (!path) throw new Error(`Unmapped Familiar page: ${key}`);
  return `${path}${fragment ? `#${fragment.startsWith('n-') ? fragment : `n-${fragment}`}` : ''}`;
}

export function publicAsset(src: string): string {
  return /^(https?:|data:)/.test(src) ? src : `/${src.replace(/^\.?\//, '')}`;
}
