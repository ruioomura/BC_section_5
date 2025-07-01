import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter ({ subsets: ["latin"]});

export const  metadata: Metadata = {
  title: "My Next.js App",
  description: "Built with Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  );
}