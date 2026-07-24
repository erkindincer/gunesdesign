import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import { Inter, Fraunces } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const serif = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
metadataBase: new URL("https://gunesdesign.com"),
  title: {
    default: "Gunes Design | Engineering & Product Design Portfolio",
    template: "%s | Gunes Design",
  },

  description:
    "Gunes Design is the engineering and product design portfolio of Erkin Gunes Dincer, showcasing CAD, industrial design, sustainable engineering and product development projects.",

  keywords: [
    "Gunes Design",
    "Erkin Gunes Dincer",
    "Engineering Design",
    "Product Design",
    "Industrial Design",
    "CAD",
    "SolidWorks",
    "Portfolio",
    "Design Engineer",
    "London",
    "UK",
  ],

  authors: [
    {
      name: "Erkin Gunes Dincer",
    },
  ],

  creator: "Erkin Gunes Dincer",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Gunes Design | Engineering & Product Design",
    description:
      "Engineering, product development and industrial design portfolio by Erkin Gunes Dincer.",
    url: "https://gunesdesign.com",
    siteName: "Gunes Design",
    type: "website",
  },

  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${serif.variable}`}>
      <body className="min-h-dvh bg-white text-zinc-950">
        <Header />
        {children}
<footer className="border-t border-zinc-200 mt-16">
  <div className="mx-auto max-w-6xl px-4 py-10 text-center text-sm text-zinc-600">
    © {new Date().getFullYear()} gunesdesign — All rights reserved.
  </div>
</footer>
      </body>
    </html>
  );
}
