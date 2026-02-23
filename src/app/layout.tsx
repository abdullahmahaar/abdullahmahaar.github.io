import type { Metadata } from "next";
import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import { owner } from "@/data/owner";
import "./globals.css";

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"),
  title: `${owner.name} - Full-Stack & AI Developer`,
  description:
    "MERN Stack Engineer, Next.js Frontend Developer, Agentic AI Builder, and Mobile App Developer. Available for freelance and full-time roles.",
  keywords: ["full-stack developer", "MERN developer", "Next.js", "React Native", "LangChain", "AI engineer"],
  openGraph: {
    title: `${owner.name} - Full-Stack & AI Developer`,
    description:
      "MERN Stack Engineer, Next.js Frontend Developer, Agentic AI Builder, and Mobile App Developer. Available for freelance and full-time roles.",
    images: ["/og-image.png"],
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
