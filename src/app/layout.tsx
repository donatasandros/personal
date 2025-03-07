import type { Metadata } from "next";
import "./globals.css";

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
      <body
        className={`bg-[#008080] antialiased has-[&[data-easter-egg]]:overflow-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
