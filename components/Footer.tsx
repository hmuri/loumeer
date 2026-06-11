import Image from "next/image";
import Link from "next/link";
import { brand } from "@/data/brand";

export default function Footer() {
  return (
    <footer className="mt-14 border-t border-fog-300 bg-white sm:mt-24">
      <div className="container-md grid gap-8 py-10 sm:grid-cols-4 sm:gap-10 sm:py-14">
        <div className="sm:col-span-2">
          <Image
            src={brand.logo}
            alt="Loumeer 로고"
            width={130}
            height={40}
            className="h-8 w-auto"
          />
          <p className="mt-3 max-w-xs break-keep text-sm leading-relaxed text-ink-400">
            {brand.tagline}
          </p>
          <div className="mt-4 flex gap-4 text-sm font-medium text-ink-500">
            <a
              href={brand.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink-900"
            >
              Instagram
            </a>
            <a
              href={brand.smartstore}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink-900"
            >
              Naver Store
            </a>
          </div>
        </div>

        <div className="rounded-2xl bg-fog-50 p-4 sm:rounded-none sm:bg-transparent sm:p-0">
          <p className="text-sm font-bold text-ink-900">바로가기</p>
          <ul className="mt-3 space-y-2 text-sm text-ink-400">
            <li><Link href="/products" className="hover:text-ink-900">전체 제품</Link></li>
            <li><Link href="/about" className="hover:text-ink-900">브랜드 이야기</Link></li>
          </ul>
          <p className="mt-6 text-sm font-bold text-ink-900">판매 채널</p>
          <p className="mt-2 text-sm leading-relaxed text-ink-400">
            {brand.channels.join(" · ")}
          </p>
        </div>

        <div className="rounded-2xl bg-fog-50 p-4 sm:rounded-none sm:bg-transparent sm:p-0">
          <p className="text-sm font-bold text-ink-900">고객센터</p>
          <ul className="mt-3 space-y-2 text-sm text-ink-400">
            <li className="font-semibold text-ink-700">{brand.cs.phone}</li>
            <li>{brand.cs.notice}</li>
            <li>
              <a
                href={`mailto:${brand.cs.email}`}
                className="hover:text-ink-900"
              >
                {brand.cs.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-fog-200">
        <div className="container-md py-6 text-[11px] leading-relaxed text-ink-400 sm:text-xs">
          <p>
            상호명 {brand.company.legalName} · 대표자 {brand.company.ceo} ·
            사업자등록번호 {brand.company.bizNumber} · 통신판매업신고{" "}
            {brand.company.mailOrderNumber}
          </p>
          <p className="mt-1">
            {brand.company.address} · 고객센터 {brand.cs.phone} ·{" "}
            {brand.cs.email}
          </p>
          <p className="mt-3">
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
