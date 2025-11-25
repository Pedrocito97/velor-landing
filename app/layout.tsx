import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The House of Velor | Quiet Luxury",
  description:
    "THE HOUSE OF VELOR - Premium liqueurs crafted for those who understand that true elegance needs no announcement. Est. 2025.",
  keywords: [
    "Velor",
    "luxury liqueur",
    "premium spirits",
    "coffee liqueur",
    "cocoa liqueur",
    "craft spirits",
  ],
  authors: [{ name: "The House of Velor" }],
  openGraph: {
    title: "The House of Velor | Quiet Luxury",
    description:
      "Premium liqueurs crafted for those who understand that true elegance needs no announcement.",
    type: "website",
    locale: "en_US",
    siteName: "The House of Velor",
  },
  twitter: {
    card: "summary_large_image",
    title: "The House of Velor | Quiet Luxury",
    description:
      "Premium liqueurs crafted for those who understand that true elegance needs no announcement.",
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
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#F5F2EB" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
