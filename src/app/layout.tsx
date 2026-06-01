import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://huseynashurlu.com"),

  title: "Huseyn Ashurlu | Software Engineer",
  
  description:
    "Senior Software Engineer focused on fintech, realtime systems and scalable frontend architecture.",

  keywords: [
    "Huseyn Ashurlu",
    "Frontend Engineer",
    "React Developer",
    "TypeScript",
    "Next.js",
    "Fintech",
    "Realtime Systems",
    "Frontend Architecture",
    "Dubai Software Engineer",
  ],

  openGraph: {
    title: "Huseyn Ashurlu | Software Engineer",
    description:
      "Senior Software Engineer focused on fintech, realtime systems and scalable frontend architecture.",
    url: "https://huseynashurlu.com",
    siteName: "Huseyn Ashurlu",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Huseyn Ashurlu Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Huseyn Ashurlu | Software Engineer",
    description:
      "Senior Software Engineer focused on fintech, realtime systems and scalable frontend architecture.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        {children}
        <Analytics />
      </body>
    </html>
  );
}