import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Comment Devs",
  description: "Uncomment Your Imagination",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
