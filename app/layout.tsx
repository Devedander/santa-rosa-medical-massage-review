import type { Metadata } from 'next';
import './globals.css';
import './new-concepts.css';
import { squareServices } from './square-services';

export const metadata: Metadata = {
  metadataBase: new URL('https://santarosamedicalmassage.com'),
  title: {
    default: 'Santa Rosa Medical Massage | Santa Rosa, CA',
    template: '%s | Santa Rosa Medical Massage',
  },
  description:
    'Medical massage in downtown Santa Rosa for pain, injury recovery, easier movement, and thoughtful ongoing care.',
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    url: 'https://santarosamedicalmassage.com/',
    siteName: 'Santa Rosa Medical Massage',
    title: 'Santa Rosa Medical Massage | Santa Rosa, CA',
    description:
      'Medical massage in downtown Santa Rosa for pain, injury recovery, easier movement, and thoughtful ongoing care.',
    images: [{ url: '/logo-correct.png', alt: 'Santa Rosa Medical Massage' }],
  },
  twitter: {
    card: 'summary',
    title: 'Santa Rosa Medical Massage | Santa Rosa, CA',
    description:
      'Medical massage in downtown Santa Rosa for pain, injury recovery, easier movement, and thoughtful ongoing care.',
    images: ['/logo-correct.png'],
  },
};

const practiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://santarosamedicalmassage.com/#practice',
  name: 'Santa Rosa Medical Massage',
  description:
    'Medical massage in downtown Santa Rosa for pain, injury recovery, easier movement, and thoughtful ongoing care.',
  url: 'https://santarosamedicalmassage.com/',
  telephone: '+1-707-303-7707',
  image: 'https://santarosamedicalmassage.com/logo-correct.png',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '630 Third Street, Suite B',
    addressLocality: 'Santa Rosa',
    addressRegion: 'CA',
    postalCode: '95404',
    addressCountry: 'US',
  },
  areaServed: { '@type': 'City', name: 'Santa Rosa' },
  knowsAbout: ['Massage', 'Relaxation massage', 'Swedish massage', 'Deep tissue massage', 'Thai massage', 'Medical massage', 'Neuromuscular therapy', 'Trigger point therapy', 'Sports massage', 'TMJ work', 'Lymphatic facilitation'],
  sameAs: [
    'https://www.instagram.com/santarosamedicalmassage/',
    'https://www.yelp.com/biz/santa-rosa-medical-massage-santa-rosa-4',
  ],
  potentialAction: {
    '@type': 'ReserveAction',
    target: 'https://book.squareup.com/appointments/60177225-a91d-4710-9923-a9f3871aca5c/location/1653W5FPZ4EP7/services',
    name: 'Schedule an appointment',
  },
  hasOfferCatalog: { '@type': 'OfferCatalog', name: 'Massage treatments', itemListElement: squareServices.map((service) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: service.name, description: service.summary }, url: service.bookingUrl })) },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-ETEHP7SZNF" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ETEHP7SZNF');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(practiceSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
