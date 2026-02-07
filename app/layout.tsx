import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google"; // Changed fonts
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BeMyVal - Create Your Valentine's Card",
  description: "Create and send beautiful Valentine's requests to your special someone.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-rose-50 text-rose-950`}
      >
        {children}
      </body>
    </html>
  );
}
