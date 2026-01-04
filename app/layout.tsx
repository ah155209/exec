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
  title: "Ameer Hamza Subhani - Full Stack Developer Portfolio",
  description: "Portfolio website of Ameer Hamza Subhani - Full Stack Developer specializing in modern web applications",
  keywords: ["portfolio", "full stack developer", "web developer", "next.js", "react"],
  authors: [{ name: "Ameer Hamza Subhani" }],
  openGraph: {
    title: "Ameer Hamza Subhani - Full Stack Developer",
    description: "Portfolio website showcasing projects and skills",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
