import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { brand } from "@/data/brand";
import { siteImages } from "@/data/images";
import {
  LeafIcon,
  FlaskIcon,
  BriefsIcon,
  ShieldIcon,
  SparkleIcon,
  AwardIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "브랜드 이야기",
  description: "루미어가 만들어진 이야기와 우리가 믿는 것들.",
};

const story = [
  {
    Icon: LeafIcon,
    title: "누구나 겪지만\n쉽게 말하지 못한 고민",
    body: "누구나 겪지만 아무도 말하지 못했던 고민, 루미어는 그 민감한 순간에 조용히 곁을 지킵니다. 민망함을 덜어주고, 일상을 더 편안하게 만듭니다.",
  },
  {
    Icon: FlaskIcon,
    title: "향수가 아니라\n과학으로 해결하는 방식",
    body: "향으로 덮는 대신, 활성탄소섬유(ACF)로 냄새 분자를 흡착하는 방식으로 근본 원인을 다룹니다. KTL 시험 인증까지 마친 과학적 솔루션을 제공합니다.",
  },
  {
    Icon: BriefsIcon,
    title: "민망함을 덜어주는\n작고 실용적인 솔루션",
    body: "작고 얇은 패드 하나로 언제 어디서나 간편하게. 가볍고 눈에 띄지 않아 누구나 부담 없이 사용할 수 있는 일상의 파트너입니다.",
  },
];

const why = [
  {
    Icon: ShieldIcon,
    title: "조용한 자신감",
    body: "말하지 않아도 괜찮도록, 민망한 순간을 덜어줍니다.",
  },
  {
    Icon: LeafIcon,
    title: "가벼운 사용감",
    body: "얇고 가볍게, 늘어짐 없이. 매일의 습관이 될 수 있도록 만듭니다.",
  },
  {
    Icon: AwardIcon,
    title: "믿을 수 있는 검증",
    body: "KTL 시험 인증으로 입증된 성능. 신뢰할 수 있는 기준으로 만듭니다.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-fog-300 bg-fog-50">
        <div className="container-md relative py-20 text-center lg:py-24">
          <p className="eyebrow">Our story</p>
          <h1 className="mt-4 text-3xl font-extrabold leading-[1.3] tracking-tight text-ink-900 sm:text-4xl">
            아무도 말하지 못했던 고민을
            <br />
            가장 가볍게 해결합니다
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-ink-500">
            루미어는 일상의 냄새 고민을 조용히 해결하는 솔루션 브랜드입니다.
            <br className="hidden sm:block" />
            향으로 덮지 않고, 과학으로 원인을 다루어 민망함 없이 편안한 하루를
            제안합니다.
          </p>
        </div>
        <div className="pointer-events-none absolute -right-10 top-1/2 hidden h-72 w-80 -translate-y-1/2 overflow-hidden rounded-2xl xl:block">
          <Image
            src={siteImages.hero}
            alt=""
            fill
            priority
            sizes="320px"
            className="object-cover"
          />
        </div>
      </section>

      {/* 스토리 3카드 */}
      <section className="container-md py-12">
        <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
          {story.map(({ Icon, title, body }) => (
            <div key={title} className="card p-7">
              <Icon className="h-8 w-8 text-mint-600" />
              <h2 className="mt-4 whitespace-pre-line text-lg font-bold leading-snug text-ink-900">
                {title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-500">
                {body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 걸어온 길 & 만드는 사람들 */}
      <section className="container-md pb-12">
        <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
          <div className="card p-8 sm:p-10">
            <p className="eyebrow">Milestones</p>
            <h2 className="mt-3 text-xl font-extrabold tracking-tight text-ink-900">
              루미어가 걸어온 길
            </h2>
            <div className="relative mt-7">
              <span className="absolute bottom-2 left-[4.5px] top-2 w-px bg-fog-300" />
              <ul className="space-y-6">
                {brand.trust.map((t) => (
                  <li key={t} className="relative flex items-start gap-4">
                    <span className="relative z-10 mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-mint-500 ring-4 ring-white" />
                    <span className="text-sm leading-relaxed text-ink-700">
                      {t}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative mt-8 aspect-[5/3] w-56 overflow-hidden rounded-xl">
              <Image
                src="/products/pad-30-clean.jpg"
                alt="루미어 패드 제품"
                fill
                sizes="224px"
                className="object-cover"
              />
            </div>
          </div>
          <div className="card p-8 sm:p-10">
            <p className="eyebrow">Company</p>
            <h2 className="mt-3 text-xl font-extrabold tracking-tight text-ink-900">
              만드는 사람들
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-ink-500">
              루미어는 {brand.company.legalName}가 만듭니다. 생활 속 불편을
              작은 아이디어와 과학으로 해결하고자 모인 사람들이, 더 나은
              일상을 위해 오늘도 연구합니다.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-500">
              루미어는 {brand.channels.join(", ")}에서 만나실 수 있습니다.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-500">
              제품 문의·제휴는{" "}
              <a
                href={`mailto:${brand.email}`}
                className="font-semibold text-mint-600 hover:underline"
              >
                {brand.email}
              </a>
              으로 보내주세요.
            </p>
          </div>
        </div>
      </section>

      {/* 왜 루미어인가 */}
      <section className="container-md pb-12">
        <div className="rounded-[1.75rem] bg-mint-50/70 px-6 py-12 sm:px-10">
          <h2 className="text-center text-2xl font-extrabold tracking-tight text-ink-900">
            왜 루미어인가
          </h2>
          <div className="mt-9 grid gap-8 sm:grid-cols-3 sm:divide-x sm:divide-mint-100">
            {why.map(({ Icon, title, body }) => (
              <div key={title} className="px-2 text-center sm:px-6">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-mint-200 bg-white">
                  <Icon className="h-7 w-7 text-mint-600" />
                </span>
                <p className="mt-4 font-extrabold text-ink-900">{title}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-md pb-20 text-center">
        <h2 className="text-2xl font-extrabold tracking-tight text-ink-900">
          루미어가 궁금해졌다면
        </h2>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/products" className="btn-primary">
            제품 만나보기
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
