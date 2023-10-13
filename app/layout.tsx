import type { Metadata } from "next";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Ruan Pionte",
  description: "Portifolio of Ruan Pionte",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
