import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsappWidget";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Premium Property | Luxury Real Estate",
  description: "Discover luxury properties with unrivalled elegance and sophistication",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <WhatsAppFloat/>
        <Footer />
      </body>
    </html>
  );
}
