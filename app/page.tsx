import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { brand } from "@/data/brand";
import { products } from "@/data/products";

const values = [
  {
    emoji: "🌬️",
    title: "활성탄소섬유가 냄새를 흡착",
    body: "향으로 덮는 게 아니라, 활성탄소섬유(ACF)가 냄새 분자 자체를 잡아요. KTL 시험 인증 완료.",
  },
  {
    emoji: "🩲",
    title: "속옷에 붙이면 끝",
    body: "피부가 아닌 속옷에 부착하는 방식이라 자극 걱정 없이, 1초 만에 준비 완료예요.",
  },
  {
    emoji: "🪶",
    title: "10cm의 가벼움",
    body: "10cm × 10cm, 얇고 가벼운 개별 포장. 붙인 것도, 챙긴 것도 잊어버릴 만큼요.",
  },
];

export default function HomePage() {
  const best = products.filter((p) => p.badges?.includes("BEST"));
  const featured = (best.length >= 3 ? best : products).slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-mint-100 blur-3xl" />
        <div className="pointer-events-none absolute -left-16 top-40 h-64 w-64 rounded-full bg-blue-100 blur-3xl" />
        <div className="container-md relative flex flex-col items-center py-20 text-center sm:py-28">
          <span className="animate-float-y rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-mint-600 shadow-soft">
            🦨 냄새 걱정은 루미어가 맡을게요
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-ink-900 sm:text-5xl">
            참을 수 없는 가벼움,
            <br />
            <span className="text-mint-500">이제 루미어 하세요</span>
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

      {/* 런칭 프로모션 */}
      <section className="container-md pb-4">
        <div className="relative overflow-hidden rounded-blob bg-ink-900 px-7 py-8 text-white sm:px-10">
          <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-mint-500/20" />
          <div className="pointer-events-none absolute -bottom-16 left-1/3 h-40 w-40 rounded-full bg-blue-500/20" />
          <div className="relative flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span className="rounded-full bg-mint-500 px-3 py-1 text-xs font-bold">
                🎉 {brand.promo.badge}
              </span>
              <p className="mt-3 text-xl font-extrabold leading-snug sm:text-2xl">
                {brand.promo.lines[0]}
                <br />
                {brand.promo.lines[1]}
              </p>
              <p className="mt-2 text-sm text-white/60">{brand.promo.note}</p>
            </div>
            <a
              href={brand.smartstore}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-full bg-white px-6 py-3 font-bold text-ink-900 transition hover:-translate-y-0.5"
            >
              혜택 받으러 가기 →
            </a>
          </div>
        </div>
      </section>

      {/* Best products */}
      <section className="container-md py-12">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm font-bold text-mint-500">MD&apos;S PICK</p>
            <h2 className="mt-1 text-2xl font-extrabold text-ink-900 sm:text-3xl">
              지금 가장 사랑받는 루미어 💚
            </h2>
          </div>
          <Link
            href="/products"
            className="hidden text-sm font-semibold text-ink-500 hover:text-mint-600 sm:block"
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
            루미어가 냄새를 없애는 방식
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-fog-200 text-3xl">
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

      {/* 신뢰 요소 */}
      <section className="container-md pb-16">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-blob bg-mint-50 p-7">
            <p className="text-sm font-bold text-mint-600">WHY LOUMEER</p>
            <h3 className="mt-2 text-lg font-extrabold text-ink-900">
              믿고 쓸 수 있는 이유
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-ink-700">
              {brand.trust.map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <span className="mt-0.5 text-mint-500">✓</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-blob bg-blue-50 p-7">
            <p className="text-sm font-bold text-blue-500">WHERE TO BUY</p>
            <h3 className="mt-2 text-lg font-extrabold text-ink-900">
              여기에서도 만날 수 있어요
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {brand.channels.map((c) => (
                <span
                  key={c}
                  className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink-700 shadow-soft"
                >
                  {c}
                </span>
              ))}
            </div>
            <p className="mt-4 text-xs text-ink-400">
              공식몰 인증 제품은 네이버 스마트스토어에서 구매하실 수 있어요.
            </p>
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="container-md pb-8 pt-4">
        <div className="relative overflow-hidden rounded-blob bg-mint-500 px-8 py-12 text-center text-white sm:py-16">
          <div className="pointer-events-none absolute -left-10 -top-10 h-44 w-44 rounded-full bg-white/10" />
          <div className="pointer-events-none absolute -bottom-12 -right-8 h-52 w-52 rounded-full bg-white/10" />
          <h2 className="relative text-2xl font-extrabold sm:text-3xl">
            루미어의 일상이 궁금하다면
          </h2>
          <p className="relative mt-3 text-mint-100">
            신제품 소식과 비하인드는 인스타그램에서 가장 먼저 만나요.
          </p>
          <a
            href={brand.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="relative mt-7 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-bold text-mint-600 transition hover:-translate-y-0.5"
          >
            @loumeer.official 팔로우하기
          </a>
        </div>
      </section>
    </>
  );
}
