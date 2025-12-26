import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quick Build - Professional Websites in 48 Hours",
  description: "Modern, responsive websites with clean code—no templates, no shortcuts. Professional results in just two days.",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

