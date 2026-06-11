import type { Metadata } from "next";
import Link from "next/link";
import { brand } from "@/data/brand";

export const metadata: Metadata = {
  title: "브랜드 이야기",
  description: "루미어가 만들어진 이야기와 우리가 믿는 것들.",
};

const story = [
  {
    emoji: "🌅",
    title: "루미어의 시작",
    body: "좋아하는 물건 하나가 하루의 기분을 바꾼다는 걸 알게 된 순간, 루미어가 시작됐어요. 거창한 것이 아니라 매일 손이 닿는 작은 물건들부터요.",
  },
  {
    emoji: "🔍",
    title: "직접 써보고, 또 써보고",
    body: "모든 제품은 저희가 가장 먼저 일상에서 충분히 써본 뒤에야 소개해요. 자신 있게 권할 수 없는 물건은 올리지 않아요.",
  },
  {
    emoji: "🤝",
    title: "함께 만드는 브랜드",
    body: "고객님들의 후기와 DM 한 줄 한 줄이 다음 제품의 힌트가 돼요. 루미어는 여러분과 함께 자라는 브랜드예요.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="container-md py-20 text-center">
        <p className="text-sm font-bold text-clay-500">OUR STORY</p>
        <h1 className="mt-2 text-3xl font-extrabold leading-tight text-ink-900 sm:text-4xl">
          작지만 다정한 변화를
          <br />
          매일의 공간에 더해요
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
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cream-200 text-2xl">
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

      <section className="container-md py-16 text-center">
        <h2 className="text-2xl font-extrabold text-ink-900">
          루미어의 물건들이 궁금해졌다면
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
