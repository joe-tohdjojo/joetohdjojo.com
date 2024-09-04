import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GoogleTagManager } from '@next/third-parties/google';
import './globals.css';
import GoogleAdsense from '@/components/GoogleAdSense';
import { data } from '@/data/siteData';

export const metadata: Metadata = {
  title: 'Joe Toh Djojo',
  description: `Joe Toh Djojo's personal website. Joe is currently working as a ${data.job.title} at ${data.job.company}.`,
  other: {
    'google-adsense-account': 'ca-pub-7806906228442371',
  },
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
        <SpeedInsights />
      </body>
      <GoogleAdsense pId="7806906228442371" />
    </html>
  );
}
