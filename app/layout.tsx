import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import {
  montserrat,
  sawarabiGothic,
  kiwiMaru,
} from "./fonts";

export const metadata: Metadata = {
  title: "Admiral Ampulembang",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`
        ${montserrat.variable}
        ${sawarabiGothic.variable}
        ${kiwiMaru.variable}
      `}
    >
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
