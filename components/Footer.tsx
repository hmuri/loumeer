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
          <p className="mt-6 text-sm font-bold text-ink-700">판매 채널</p>
          <p className="mt-2 text-sm leading-relaxed text-ink-500">
            {brand.channels.join(" · ")}
          </p>
        </div>

        <div>
          <p className="text-sm font-bold text-ink-700">고객센터</p>
          <ul className="mt-3 space-y-2 text-sm text-ink-500">
            <li className="text-base font-bold text-ink-700">{brand.cs.phone}</li>
            <li>{brand.cs.hours}</li>
            <li>{brand.cs.notice}</li>
            <li>
              <a href={`mailto:${brand.email}`} className="hover:text-mint-600">
                {brand.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* 사업자 정보 */}
      <div className="border-t border-fog-300/60">
        <div className="container-md py-6 text-xs leading-relaxed text-ink-400">
          <p>
            상호명 {brand.company.legalName} | 대표자 {brand.company.ceo} |
            사업자등록번호 {brand.company.bizNumber} | 통신판매업신고{" "}
            {brand.company.mailOrderNumber}
          </p>
          <p className="mt-1">
            {brand.company.address} | 고객센터 {brand.cs.phone} |{" "}
            {brand.email}
          </p>
          <p className="mt-3">
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
