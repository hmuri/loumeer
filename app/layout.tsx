import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { brand } from "@/data/brand";

export const metadata: Metadata = {
  title: {
    default: `${brand.nameKo} ${brand.name} — ${brand.tagline}`,
    template: `%s | ${brand.nameKo}`,
  },
  description: brand.description,
  openGraph: {
    title: `${brand.nameKo} — ${brand.tagline}`,
    description: brand.description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
