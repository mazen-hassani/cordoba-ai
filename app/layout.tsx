import type { Metadata } from "next";
import "./globals.css";
import StructuredData from "@/components/StructuredData";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = {
  metadataBase: new URL("https://cordoba-ai.com"),
  title: "Cordoba AI - Software Solutions & AI-Powered Development",
  description: "Enterprise software solutions, outsourcing, staffing, and managed services powered by cutting-edge AI. Transform your business with expert development teams.",
  keywords: "software solutions, outsourcing, staffing, managed services, AI development, software development, technology consulting",
  authors: [{ name: "Cordoba AI" }],
  creator: "Cordoba AI",
  publisher: "Cordoba AI",
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cordoba-ai.com",
    siteName: "Cordoba AI",
    title: "Cordoba AI - AI-Powered Software Solutions",
    description: "Enterprise software solutions, outsourcing, staffing, and managed services powered by AI",
    images: [
      {
        url: "https://cordoba-ai.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cordoba AI",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cordoba AI - AI-Powered Software Solutions",
    description: "Enterprise software solutions, outsourcing, staffing, and managed services powered by AI",
    images: ["https://cordoba-ai.com/twitter-image.png"],
    creator: "@cordoba_ai",
    site: "@cordoba_ai",
  },
  alternates: {
    canonical: "https://cordoba-ai.com",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
