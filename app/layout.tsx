import type { Metadata } from 'next';
import './globals.css';
import { Header, Footer } from './ui';

export const metadata: Metadata = {
  metadataBase: new URL('https://westerncarsbrighton.co.uk'),
  title: { default: 'Western Cars Brighton | 24/7 Taxi & Airport Transfers', template: '%s | Western Cars Brighton' },
  description: '24/7 private hire and taxi service in Brighton & Hove. Local journeys, Gatwick and Heathrow airport transfers, corporate travel, groups and chauffeur services.',
  alternates: { canonical: '/' },
  openGraph: { title: 'Western Cars Brighton | 24/7 Taxi & Airport Transfers', description: 'Reliable private hire across Brighton & Hove, with airport, station, corporate and group travel.', url: '/', siteName: 'Western Cars Brighton', type: 'website' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-GB"><body><Header />{children}<Footer /></body></html>;
}
