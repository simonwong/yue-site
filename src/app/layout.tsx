"use client";

import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from "next-themes";

import Header from "@/components/Layouts/Header";
import Footer from "@/components/Layouts/Footer";
import Rainbow from "@/components/Rainbow";

import "./globals.css";

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
            <main className="mx-auto max-w-[1024px] min-h-[calc(100vh-64px-150px)] py-12 px-6">
              {children}
            </main>
            <Footer />
          </NextThemesProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
