import type { Metadata } from "next";
import Link from "next/link";
import { brand } from "@/data/brand";

export const metadata: Metadata = {
  title: "브랜드 이야기",
  description: "루미어가 만들어진 이야기와 우리가 믿는 것들.",
};

const story = [
  {
    emoji: "🦨",
    title: "'생리현상'이라는 모순에 정면돌파",
    body: "누구나 겪지만 아무도 말하지 못하던 고민 — 방귀 냄새. 루미어는 이 모순에 정면으로 돌파한 것이 시작이에요. 그렇게 국내 최초 방귀냄새 제거패드가 태어났어요.",
  },
  {
    emoji: "🔬",
    title: "향수가 아니라 과학으로",
    body: "향으로 덮으면 섞일 뿐이에요. 루미어는 활성탄소섬유(ACF)로 냄새 분자를 흡착하는 방식을 택했고, KTL 시험 인증까지 마쳤어요.",
  },
  {
    emoji: "🤝",
    title: "신선하면서도 실용적인 브랜드",
    body: "냄새 제거 시장에서 '루미어 = 신뢰'가 되는 것이 저희의 목표예요. 참을 수 없는 가벼움, 그게 루미어가 만들고 싶은 일상이에요.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="container-md py-20 text-center">
        <p className="text-sm font-bold text-mint-500">OUR STORY</p>
        <h1 className="mt-2 text-3xl font-extrabold leading-tight text-ink-900 sm:text-4xl">
          아무도 말 못 하던 고민을
          <br />
          가장 가볍게 해결합니다
        </h1>
        <p className="mx-auto mt-5 max-w-xl leading-relaxed text-ink-500">
          {brand.description}
        </p>
      </section>

      <section className="container-md pb-6">
        <div className="grid gap-6 sm:grid-cols-3">
          {story.map((s) => (
            <div
              key={s.title}
              className="rounded-blob bg-white p-7 shadow-soft"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-fog-200 text-2xl">
                {s.emoji}
              </div>
              <h2 className="mt-4 text-lg font-bold text-ink-900">{s.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 걸어온 길 & 만드는 사람들 */}
      <section className="container-md py-14">
        <div className="rounded-blob bg-white p-8 shadow-soft sm:p-12">
          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <p className="text-sm font-bold text-mint-600">MILESTONES</p>
              <h2 className="mt-2 text-xl font-extrabold text-ink-900">
                루미어가 걸어온 길
              </h2>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-ink-500">
                {brand.trust.map((t) => (
                  <li key={t} className="flex items-start gap-2.5">
                    <span className="mt-0.5 text-mint-500">●</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-bold text-blue-500">COMPANY</p>
              <h2 className="mt-2 text-xl font-extrabold text-ink-900">
                만드는 사람들
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-ink-500">
                루미어는 전남 여수의 {brand.company.legalName}가 만들어요.
                네이버 공식몰을 비롯해 {brand.channels.join(", ")}에서 만나실 수
                있어요.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink-500">
                제품 문의·제휴는{" "}
                <a
                  href={`mailto:${brand.email}`}
                  className="font-semibold text-blue-500 hover:underline"
                >
                  {brand.email}
                </a>
                로 보내주세요.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-md py-16 text-center">
        <h2 className="text-2xl font-extrabold text-ink-900">
          루미어가 궁금해졌다면
        </h2>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/products" className="btn-primary">
            제품 구경하기
          </Link>
          <a
            href={brand.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            인스타그램 보러가기
          </a>
        </div>
      </section>
    </>
  );
}
