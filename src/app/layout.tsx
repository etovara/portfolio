import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "@/i18n";
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
  title: "Edwin Tovar | QA Engineer",
  description:
    "Portfolio of Edwin Tovar \u2014 Senior QA Engineer specialized in Manual & Automation Testing and AI-Driven Quality Assurance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-white font-sans text-zinc-900 antialiased dark:bg-black dark:text-zinc-100">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
