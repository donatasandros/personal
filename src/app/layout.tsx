import Script from "next/script";

import type { Metadata } from "next";

import "./globals.css";
import { FakeVirusAlert } from "@/components/misc/fake-virus-alert";
import { ThemeProvider } from "@/components/providers/theme-provider";

export const metadata: Metadata = {
  title: "Donatas Andros",
  description:
    "Junior frontend developer passionate about creating clean, user-friendly web experiences. Eager to learn and grow, I enjoy exploring new technologies and building interactive projects that improve user experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/react-scan/dist/auto.global.js"
        />
      </head>
      <body className="bg-[#008080] antialiased has-[&[data-easter-egg]]:overflow-hidden has-[&[data-easter-egg]]:bg-[#0000aa]">
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="default"
          disableTransitionOnChange
        >
          <FakeVirusAlert />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
