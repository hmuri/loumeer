"use client";

import Image from "next/image";
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
    <header className="sticky top-0 z-50 border-b border-fog-300 bg-fog-50/95 backdrop-blur">
      <div className="container-md flex h-14 items-center justify-between sm:h-16">
        <Link href="/" className="flex items-center gap-2.5" aria-label="루미어 홈">
          <Image
            src={brand.symbol}
            alt=""
            width={32}
            height={32}
            priority
            className="h-7 w-7 rounded-lg sm:h-8 sm:w-8"
          />
          <span className="text-base font-extrabold tracking-[0.08em] text-ink-900 sm:text-lg">
            LOUMEER
          </span>
        </Link>

        <nav className="hidden items-center gap-7 sm:flex">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-[15px] font-medium transition ${
                  active ? "text-ink-900" : "text-ink-400 hover:text-ink-900"
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-mint-500" />
                )}
              </Link>
            );
          })}
          <a
            href={brand.smartstore}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-mint-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-mint-600"
          >
            네이버스토어 ↗
          </a>
        </nav>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-fog-300 bg-white text-ink-700 shadow-soft hover:bg-fog-100 sm:hidden"
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
        <nav className="border-t border-fog-300 bg-white px-4 py-3 shadow-soft sm:hidden">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-3 py-3 text-[15px] font-bold text-ink-700 hover:bg-fog-100"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={brand.smartstore}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block rounded-xl bg-mint-500 px-3 py-3 text-center text-[15px] font-bold text-white"
          >
            네이버스토어에서 보기
          </a>
        </nav>
      )}
    </header>
  );
}
