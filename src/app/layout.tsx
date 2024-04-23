"use client";
// import type { Metadata } from "next";

import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from "next-themes";

import Header from "@/components/Layouts/Header";
import Footer from "@/components/Layouts/Footer";
import Rainbow from "@/components/Rainbow";

import "./globals.css";

// export const metadata: Metadata = {
//   title: "Simon's Blog",
//   description: "Simon's Blog",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <NextUIProvider>
          <NextThemesProvider attribute="class">
            <Rainbow />
            <Header />
            <main className="mx-auto max-w-[1024px] py-12 px-6">
              {children}
            </main>
            <Footer />
          </NextThemesProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
