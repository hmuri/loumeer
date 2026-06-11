import Link from "next/link";
import { brand } from "@/data/brand";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-fog-300/60 bg-fog-200/50">
      <div className="container-md grid gap-10 py-14 sm:grid-cols-3">
        <div>
          <p className="text-lg font-extrabold text-mint-600">{brand.name}</p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink-500">
            {brand.tagline}
          </p>
          <div className="mt-4 flex gap-3">
            <a
              href={brand.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink-700 shadow-soft transition hover:text-mint-600"
            >
              Instagram
            </a>
            <a
              href={brand.smartstore}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink-700 shadow-soft transition hover:text-mint-600"
            >
              Naver Store
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm font-bold text-ink-700">바로가기</p>
          <ul className="mt-3 space-y-2 text-sm text-ink-500">
            <li><Link href="/products" className="hover:text-mint-600">전체 제품</Link></li>
            <li><Link href="/about" className="hover:text-mint-600">브랜드 이야기</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-bold text-ink-700">고객센터</p>
          <ul className="mt-3 space-y-2 text-sm text-ink-500">
            <li>{brand.cs.hours}</li>
            <li>{brand.cs.notice}</li>
            <li>{brand.email}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-fog-300/60 py-5 text-center text-xs text-ink-400">
        © {new Date().getFullYear()} {brand.name}. All rights reserved.
      </div>
    </footer>
  );
}
