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

export const metadata = {
  title: "Waleed Sheikh",
  description: "Backend AI Engineering — accuracy and reliability first.",
  openGraph: {
    title: "Waleed Sheikh — Backend AI Engineering",
    description: "I build things that survive restarts, bad input, and real use — then show you exactly how.",
    url: "https://waleed-be.vercel.app",
    siteName: "Waleed Sheikh",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Waleed Sheikh — Backend AI Engineering",
    description: "I build things that survive restarts, bad input, and real use — then show you exactly how.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
