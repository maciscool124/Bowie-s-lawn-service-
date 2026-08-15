import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bowie's Lawn Service",
  description: "Professional lawn mowing and landscaping services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white">{children}</body>
    </html>
  );
}
