import "./globals.css";
import Header from "@/components/Header";
import type { Metadata } from "next";
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
      <body data-theme="light" className="bg-primary">
        <Header />
        {children}
      </body>
    </html>
  );
}
