"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { brand } from "@/data/brand";

const nav = [
  { href: "/", label: "홈" },
  { href: "/products", label: "전체 제품" },
  { href: "/about", label: "브랜드 이야기" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-cream-300/60 bg-cream-50/90 backdrop-blur">
      <div className="container-md flex h-16 items-center justify-between">
        <Link href="/" className="flex items-baseline gap-1.5">
          <span className="text-xl font-extrabold tracking-tight text-clay-600">
            {brand.name}
          </span>
          <span className="text-sm font-medium text-ink-400">{brand.nameKo}</span>
        </Link>

        <nav className="hidden items-center gap-1 sm:flex">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  active
                    ? "bg-clay-100 text-clay-700"
                    : "text-ink-500 hover:bg-cream-200 hover:text-ink-700"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={brand.smartstore}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 rounded-full bg-clay-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-clay-600"
          >
            네이버스토어
          </a>
        </nav>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full text-ink-700 hover:bg-cream-200 sm:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="메뉴 열기"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-cream-300/60 bg-cream-50 px-5 py-3 sm:hidden">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-3 py-3 font-semibold text-ink-700 hover:bg-cream-200"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={brand.smartstore}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 block rounded-xl bg-clay-500 px-3 py-3 text-center font-semibold text-white"
          >
            네이버스토어에서 보기
          </a>
        </nav>
      )}
    </header>
  );
}
