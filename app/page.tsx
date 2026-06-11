import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { brand } from "@/data/brand";
import { products } from "@/data/products";

const values = [
  {
    emoji: "🌷",
    title: "매일 쓰는 물건의 다정함",
    body: "자주 쓰는 물건일수록 더 예뻐야 한다고 믿어요. 손이 닿는 순간이 기분 좋아지도록.",
  },
  {
    emoji: "📦",
    title: "정성스러운 포장",
    body: "상자를 여는 순간부터 루미어의 경험이 시작돼요. 선물처럼 받아보세요.",
  },
  {
    emoji: "💬",
    title: "가까운 소통",
    body: "인스타그램과 네이버 톡톡으로 언제든 편하게 말 걸어주세요.",
  },
];

export default function HomePage() {
  const best = products.filter((p) => p.badges?.includes("BEST"));
  const featured = (best.length >= 3 ? best : products).slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-clay-100 blur-3xl" />
        <div className="pointer-events-none absolute -left-16 top-40 h-64 w-64 rounded-full bg-sage-100 blur-3xl" />
        <div className="container-md relative flex flex-col items-center py-20 text-center sm:py-28">
          <span className="animate-float-y rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-clay-600 shadow-soft">
            ✨ {brand.nameKo}에 오신 걸 환영해요
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-ink-900 sm:text-5xl">
            매일의 공간을
            <br />
            <span className="text-clay-500">조금 더 다정하게</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-500 sm:text-lg">
            {brand.description}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/products" className="btn-primary">
              제품 구경하기
            </Link>
            <Link href="/about" className="btn-ghost">
              브랜드 이야기
            </Link>
          </div>
        </div>
      </section>

      {/* Best products */}
      <section className="container-md py-12">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm font-bold text-clay-500">MD&apos;S PICK</p>
            <h2 className="mt-1 text-2xl font-extrabold text-ink-900 sm:text-3xl">
              요즘 가장 사랑받는 아이들 🧡
            </h2>
          </div>
          <Link
            href="/products"
            className="hidden text-sm font-semibold text-ink-500 hover:text-clay-600 sm:block"
          >
            전체 보기 →
          </Link>
        </div>
        <div className="mt-7 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
        <div className="mt-8 text-center sm:hidden">
          <Link href="/products" className="btn-ghost">
            전체 제품 보기
          </Link>
        </div>
      </section>

      {/* Brand values */}
      <section className="container-md py-16">
        <div className="rounded-blob bg-white p-8 shadow-soft sm:p-12">
          <h2 className="text-center text-2xl font-extrabold text-ink-900 sm:text-3xl">
            루미어가 일하는 방식
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cream-200 text-3xl">
                  {v.emoji}
                </div>
                <h3 className="mt-4 font-bold text-ink-900">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="container-md pb-8 pt-4">
        <div className="relative overflow-hidden rounded-blob bg-clay-500 px-8 py-12 text-center text-white sm:py-16">
          <div className="pointer-events-none absolute -left-10 -top-10 h-44 w-44 rounded-full bg-white/10" />
          <div className="pointer-events-none absolute -bottom-12 -right-8 h-52 w-52 rounded-full bg-white/10" />
          <h2 className="relative text-2xl font-extrabold sm:text-3xl">
            루미어의 일상이 궁금하다면
          </h2>
          <p className="relative mt-3 text-clay-100">
            신제품 소식과 비하인드는 인스타그램에서 가장 먼저 만나요.
          </p>
          <a
            href={brand.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="relative mt-7 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-bold text-clay-600 transition hover:-translate-y-0.5"
          >
            @loumeer.official 팔로우하기
          </a>
        </div>
      </section>
    </>
  );
}
