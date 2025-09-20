// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sweeney Barbers',
  description: 'Premium barber services for the modern gentleman.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-brand-bg text-brand-text min-h-screen flex flex-col`}>
        <Navbar />
        <main className="w-screen flex-grow mx-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}