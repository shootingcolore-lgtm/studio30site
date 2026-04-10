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
  title: "Studio 30 / Nawel Temmar",
  description:
    "Book photo artistique pour comédiens à Paris. Des portraits pensés pour rendre ton image plus lisible, plus forte et plus marquante en casting.",
  openGraph: {
    title: "Studio 30 / Nawel Temmar",
    description:
      "Book photo artistique pour comédiens à Paris. Des portraits pensés pour rendre ton image plus lisible, plus forte et plus marquante en casting.",
    url: "https://studio30site.vercel.app",
    siteName: "Studio 30 / Nawel Temmar",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio 30 / Nawel Temmar",
    description:
      "Book photo artistique pour comédiens à Paris. Des portraits pensés pour rendre ton image plus lisible, plus forte et plus marquante en casting.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}