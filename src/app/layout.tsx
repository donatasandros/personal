import Script from "next/script";

import type { Metadata } from "next";

import "./globals.css";
import { FakeVirusAlert } from "@/components/misc/fake-virus-alert";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SITE_CONFIG } from "@/config/site";

export const metadata: Metadata = {
  title: SITE_CONFIG.name,
  metadataBase: new URL(SITE_CONFIG.url),
  description: SITE_CONFIG.description,
  keywords: [
    "frontend",
    "developer",
    "Vilnius",
    "Lithuania",
    "nextjs",
    "react",
    "sveltekit",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.jpg",
    apple: "/apple-touch-icon.jpg",
  },
  manifest: `${SITE_CONFIG.url}/site.webmanifest`,
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
