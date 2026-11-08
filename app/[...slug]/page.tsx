import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import FamiliarPage from '../familiar-page';
import { familiarRoutes } from '../familiar-routes';

type Props = { params: Promise<{ slug: string[] }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return familiarRoutes.map((route) => ({ slug: route.path.slice(1).split('/') }));
}

async function routeFor({ params }: Props) {
  const { slug } = await params;
  const route = familiarRoutes.find((candidate) => candidate.path === `/${slug.join('/')}`);
  if (!route) notFound();
  return route;
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const route = await routeFor(props);
  return {
    title: route.title, description: route.description,
    alternates: { canonical: route.path },
    openGraph: { title: route.title, description: route.description, url: route.path },
  };
}

export default async function FamiliarRoute(props: Props) {
  const route = await routeFor(props);
  return <FamiliarPage page={route.page} />;
}
