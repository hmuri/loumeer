import type { Metadata } from "next";
import Link from "next/link";
import { brand } from "@/data/brand";

export const metadata: Metadata = {
  title: "브랜드 이야기",
  description: "루미어가 만들어진 이야기와 우리가 믿는 것들.",
};

const story = [
  {
    title: "말하기 어려운 고민에서 시작했어요",
    body: "누구나 겪지만 쉽게 꺼내지 못했던 냄새 고민. 루미어는 그 민망함을 줄이고 싶었습니다. '생리현상'이라는 모순에 정면돌파한 것이 저희의 시작이에요.",
  },
  {
    title: "향으로 덮지 않고, 흡착으로 줄입니다",
    body: "루미어는 활성탄소섬유(ACF)를 사용해 냄새 분자를 흡착하는 방식에 집중했습니다. KTL 시험 인증으로 성능을 증명했어요.",
  },
  {
    title: "가볍지만 실용적인 솔루션",
    body: "얇고 작은 패드 하나로 외출, 출근, 데이트, 장시간 착석이 조금 더 편안해질 수 있도록 만들었습니다. 냄새 제거 시장에서 '루미어 = 신뢰'가 되는 것이 목표예요.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-fog-300 bg-fog-100">
        <div className="container-md py-20">
          <p className="eyebrow">Our story</p>
          <h1 className="mt-4 max-w-2xl text-3xl font-extrabold leading-[1.25] tracking-tight text-ink-900 sm:text-4xl">
            아무도 말 못 하던 고민을
            <br />
            가장 가볍게 해결합니다
          </h1>
          <p className="mt-5 max-w-xl leading-relaxed text-ink-500">
            {brand.description}
          </p>
        </div>
      </section>

      <section className="container-md py-16">
        <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
          {story.map((s, i) => (
            <div key={s.title} className="card p-7">
              <p className="text-sm font-bold text-mint-600">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-3 text-lg font-bold leading-snug text-ink-900">
                {s.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-500">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 걸어온 길 & 만드는 사람들 */}
      <section className="container-md pb-16">
        <div className="card p-8 sm:p-12">
          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <p className="eyebrow">Milestones</p>
              <h2 className="mt-3 text-xl font-extrabold tracking-tight text-ink-900">
                루미어가 걸어온 길
              </h2>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-ink-500">
                {brand.trust.map((t) => (
                  <li key={t} className="border-l-2 border-mint-500 pl-4">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow">Company</p>
              <h2 className="mt-3 text-xl font-extrabold tracking-tight text-ink-900">
                만드는 사람들
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-ink-500">
                루미어는 전남 여수의 {brand.company.legalName}가 만들어요.
                네이버 공식몰을 비롯해 {brand.channels.join(", ")}에서 만나실
                수 있어요.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink-500">
                제품 문의·제휴는{" "}
                <a
                  href={`mailto:${brand.email}`}
                  className="font-semibold text-mint-600 hover:underline"
                >
                  {brand.email}
                </a>
                로 보내주세요.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-md pb-20 text-center">
        <h2 className="text-2xl font-extrabold tracking-tight text-ink-900">
          루미어가 궁금해졌다면
        </h2>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/products" className="btn-primary">
            제품 구성 보기
          </Link>
          <a
            href={brand.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            인스타그램 보기
          </a>
        </div>
      </section>
    </>
  );
}
