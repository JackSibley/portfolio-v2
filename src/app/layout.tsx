import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Jack Sibley",
  description:
    "Jack Sibley is Crafting digital dreams with code. From classroom to compiler, I turn concepts into elegant software solutions.",
  keywords: [
    "graduate software engineer",
    "portfolio",
    "projects",
    "skills",
    "software development",
    "web development",
    "coding",
    "programming",
    "full stack",
  ],
  authors: [{ name: "Jack Sibley" }],
  creator: "Jack Sibley",
  twitter: {
    card: "summary_large_image",
    title: "Jack Sibley",
    description:
      "Jack Sibley is Crafting digital dreams with code. From classroom to compiler, I turn concepts into elegant software solutions.",
    site: "@jsibleyau",
    siteId: "1478756861029478403",
    creator: "@jsibleyau",
    creatorId: "1478756861029478403",
    images: [
      "https://pbs.twimg.com/profile_images/1501356688427073536/eGwrAQ02_400x400.jpg",
    ],
  },
  openGraph: {
    title: "Jack Sibley",
    description:
      "Jack Sibley is Crafting digital dreams with code. From classroom to compiler, I turn concepts into elegant software solutions.",
    images:
      "https://pbs.twimg.com/profile_images/1501356688427073536/eGwrAQ02_400x400.jpg",
    type: "website",
    url: "https://www.jacksibley.dev/",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body>{children}</body>
    </html>
  );
}
