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
  title: "gunesdesign",
  description: "Editorial portfolio — technical drawings & part designs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} ${serif.variable}`}>
      <body className="min-h-dvh bg-white text-zinc-950">
        <Header />
        {children}
        <footer className="border-t border-zinc-200 mt-16">
          <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-zinc-600">
            © {new Date().getFullYear()} gunesdesign — All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
