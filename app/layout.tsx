import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavContainer from "@/components/Home/Navbar/NavContainer";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";

const font = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Corporate Landing Page",
  description: "Generated Corporate Landing Page with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased bg-[#1f242c]`}>
        <NavContainer/>
        {children}
        <Footer/>
        <ScrollToTop/>
      </body>
    </html>
  );
}
