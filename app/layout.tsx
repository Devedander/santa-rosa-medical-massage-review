import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Santa Rosa Medical Massage · Redesign Concepts',
  description: 'Three local redesign rough-ups for discussion.',
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
