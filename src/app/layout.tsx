import type { Metadata } from "next";
import { NextUIProvider } from "@nextui-org/react";

import Header from "@/components/Layouts/Header";
import Footer from "@/components/Layouts/Footer";

import "./globals.css";
import Rainbow from "@/components/Rainbow";

export const metadata: Metadata = {
  title: "Simon's Blog",
  description: "Simon's Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <NextUIProvider>
          <Rainbow />
          <Header />
          <main className="mx-auto max-w-[1024px] py-12 px-6">
            {children}
          </main>
          <Footer />
        </NextUIProvider>
      </body>
    </html>
  );
}
