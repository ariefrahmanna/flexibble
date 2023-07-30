import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

import { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'flexibble',
  description: 'Showcase and discover remarkable developer projects',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
