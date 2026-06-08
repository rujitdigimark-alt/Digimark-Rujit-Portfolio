import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTAButtons from "@/components/CTAButtons";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DigIT Solutions - Modern Digital Marketing Agency",
  description: "High-performance digital marketing, web development, and tagging solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased scroll-smooth`}
    >
      {/* Google Tag Manager (GTM) - Required to be at the top level */}
      <GoogleTagManager gtmId="GTM-P9RDTWQJ" />
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <CTAButtons />
      </body>
    </html>
  );
}
