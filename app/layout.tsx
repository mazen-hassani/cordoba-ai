import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cordoba AI - Software Solutions & AI-Powered Development",
  description: "Enterprise software solutions, outsourcing, staffing, and managed services powered by AI",
  keywords: "software solutions, outsourcing, staffing, managed services, AI development",
  openGraph: {
    title: "Cordoba AI",
    description: "Enterprise software solutions powered by AI",
    url: "https://cordoba-ai.com",
    siteName: "Cordoba AI",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
