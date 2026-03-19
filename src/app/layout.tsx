import type { Metadata } from "next";
import { Inter, Manrope, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DigX | Enterprise Digital Transformation Consultancy",
  description: "Digital transformation consultancy for FTSE 100 and regulated sectors. Enterprise change management, platform modernization, and managed services.",
  keywords: ["digital transformation", "enterprise consulting", "change management", "DigX"],
  metadataBase: new URL("https://woza99.github.io/DigX-website"),
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://woza99.github.io/DigX-website",
    title: "DigX | Enterprise Digital Transformation",
    description: "Enterprise digital transformation partner for regulated sectors and high-complexity change.",
    images: [
      {
        url: "https://woza99.github.io/DigX-website/whitelogo.png",
        width: 190,
        height: 58,
        alt: "DigX Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DigX | Enterprise Digital Transformation",
    description: "Digital transformation consultancy for FTSE 100 and regulated sectors.",
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
    <html lang="en" className={`${inter.variable} ${manrope.variable} ${sourceSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
