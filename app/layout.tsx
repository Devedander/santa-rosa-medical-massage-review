import type { Metadata } from 'next';
import './globals.css';
import './new-concepts.css';

export const metadata: Metadata = {
  title: 'Santa Rosa Medical Massage · Redesign Concepts',
  description: 'Seven website design concepts for Santa Rosa Medical Massage.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
