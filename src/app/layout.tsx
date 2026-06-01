import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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

  title: "Huseyn Ashurlu | Senior Frontend Engineer",

  description:
    "Senior Frontend Engineer based in Dubai focused on scalable frontend systems, realtime architecture and fintech products.",

  keywords: [
    "Huseyn Ashurlu",
    "Frontend Engineer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Dubai Software Engineer",
    "Frontend Architecture",
    "Realtime Systems",
    "Fintech Engineer",
  ],

  authors: [{ name: "Huseyn Ashurlu" }],
  creator: "Huseyn Ashurlu",

  openGraph: {
    title: "Huseyn Ashurlu | Senior Frontend Engineer",
    description:
      "Building scalable frontend systems, realtime experiences and modern fintech products.",
    url: "https://huseynashurlu.com",
    siteName: "Huseyn Ashurlu",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Huseyn Ashurlu | Senior Frontend Engineer",
    description:
      "Building scalable frontend systems, realtime experiences and modern fintech products.",
  },

  robots: {
    index: true,
    follow: true,
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
      </body>
    </html>
  );
}