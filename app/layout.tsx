import type { Metadata } from "next";
import { Ubuntu_Sans } from "next/font/google";
import "./globals.css";
import BlobBackground from "./components/background/BlobBackground";
import AnimatedBorder from "./components/AnimatedBorder";

const ubuntuSans = Ubuntu_Sans({
  variable: "--font-ubuntu-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ubuntuSans.variable} antialiased bg-neutral`}>
        <AnimatedBorder />
        <BlobBackground />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
