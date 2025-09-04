import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Usman Ali Ashraf | Portfolio",
  description: "Made in NextJS",
      icons: {
    icon: "/favicon.ico",        // normal favicon
    shortcut: "/favicon.ico",    // fallback
    apple: "/favicon.ico",       // iOS devices
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-primary-dark text-white">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
