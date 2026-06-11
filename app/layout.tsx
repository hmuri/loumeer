import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { brand } from "@/data/brand";
import { SITE_URL } from "@/data/site";

const previewImage = {
  url: "/icon.png",
  width: 512,
  height: 512,
  alt: "루미어 로고",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${brand.nameKo} ${brand.name} — ${brand.tagline}`,
    template: `%s | ${brand.nameKo} 공식몰`,
  },
  description: brand.description,
  keywords: [
    "루미어",
    "LOUMEER",
    "방귀냄새 제거패드",
    "소취 패드",
    "방귀 냄새",
    "과민성대장증후군",
    "가스실금",
    "활성탄소섬유",
    "ACF",
    "속옷 패드",
    "개인위생",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: `${brand.nameKo} — ${brand.tagline}`,
    description: brand.description,
    url: SITE_URL,
    siteName: `${brand.nameKo} 공식몰`,
    locale: "ko_KR",
    type: "website",
    images: [previewImage],
  },
  twitter: {
    card: "summary",
    title: `${brand.nameKo} — ${brand.tagline}`,
    description: brand.description,
    images: [previewImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  // TODO: 구글 서치콘솔/네이버 서치어드바이저 등록 후 코드 입력
  // verification: { google: "...", other: { "naver-site-verification": "..." } },
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
