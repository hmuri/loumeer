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
    <header className="sticky top-0 z-50 border-b border-fog-300 bg-fog-50/95 backdrop-blur">
      <div className="container-md flex h-16 items-center justify-between">
        <Link
          href="/"
          className="text-lg font-extrabold tracking-[0.08em] text-ink-900"
        >
          LOUMEER
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
          className="flex h-10 w-10 items-center justify-center rounded-xl text-ink-700 hover:bg-fog-200 sm:hidden"
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
        <nav className="border-t border-fog-300 bg-fog-50 px-5 py-3 sm:hidden">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-3 py-3 font-medium text-ink-700 hover:bg-fog-200"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={brand.smartstore}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 block rounded-xl border border-fog-300 bg-white px-3 py-3 text-center font-semibold text-ink-700"
          >
            네이버스토어에서 보기
          </a>
        </nav>
      )}
    </header>
  );
}
