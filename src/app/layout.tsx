import type { Metadata } from 'next';
import { GoogleTagManager } from '@next/third-parties/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'Joe Toh Djojo',
  description: 'Staff Engineer @ The Daily Beast',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-WSZMR2ZM" />
      <body className="grid-rows-homeLayout grid h-screen bg-white p-8 font-sans leading-none text-black">
        {children}
      </body>
    </html>
  );
}
