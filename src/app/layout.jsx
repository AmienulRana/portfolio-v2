"use client";
import "@/styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { poppins, roboto_mono } from "./font";
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <html
      lang="en"
      className={`${poppins.variable} ${roboto_mono.variable} scroll-smooth `}
    >
      <head />
      <body>
        <Navbar />
        <div className="container mx-auto">{children}</div>
        <Analytics />

        <Footer />
      </body>
    </html>
  );
}
