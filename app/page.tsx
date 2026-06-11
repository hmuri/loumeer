import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { brand } from "@/data/brand";
import { products } from "@/data/products";

const moments = [
  { emoji: "🪑", title: "오래 앉아 있는 날", body: "사무실, 강의실, 장거리 이동" },
  { emoji: "👗", title: "외출, 데이트 전", body: "괜한 긴장 없이 가볍게" },
  { emoji: "💼", title: "회의, 중요한 자리", body: "집중해야 하는 순간" },
  { emoji: "🌙", title: "생리 전후 민감한 날", body: "몸이 예민해지는 시기" },
];

const steps = [
  {
    no: "01",
    title: "붙여요",
    body: "개별 포장을 뜯어 속옷 안쪽에 가볍게 부착해요. 피부에 직접 닿지 않아요.",
  },
  {
    no: "02",
    title: "흡착해요",
    body: "활성탄소섬유(ACF)가 향으로 덮지 않고 냄새 분자 자체를 흡착해요.",
  },
  {
    no: "03",
    title: "버려요",
    body: "하루 사용 후 떼어 버리면 끝. 10cm × 10cm, 얇고 가벼워요.",
  },
];

export default function HomePage() {
  const featured = ["pad-4plus1", "pad-monthly-30", "pad-monthly-60"]
    .map((slug) => products.find((p) => p.slug === slug)!)
    .filter(Boolean);

  return (
    <>
      {/* 1. Hero — 제품이 바로 보이게 */}
      <section className="border-b border-fog-300 bg-fog-100">
        <div className="container-md grid items-center gap-10 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="eyebrow">속옷 안쪽에 붙이는 방귀냄새 제거패드</p>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.2] tracking-tight text-ink-900 sm:text-5xl">
              참지 않아도 되는
              <br />
              하루를 만들어요
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink-500">
              활성탄소섬유가 냄새 분자를 흡착해 일상 속 민망한 순간을 가볍게
              줄여줘요. 국내 최초 방귀냄새 제거패드, 루미어.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/products/pad-4plus1" className="btn-primary">
                처음이라면 4+1 스타터 보기
              </Link>
              <Link href="/about" className="btn-ghost">
                루미어가 궁금하다면
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -right-8 -top-8 h-56 w-56 rounded-full bg-mint-50 blur-2xl" />
            <div className="card relative aspect-[5/4] overflow-hidden">
              <Image
                src="/products/brand-pads-clean.jpg"
                alt="루미어 방귀냄새 제거패드 패키지와 활성탄소섬유 패드"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. 핵심 가치 한 줄 스트립 */}
      <section className="container-md py-10">
        <div className="card grid divide-y divide-fog-200 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {[
            ["활성탄소섬유가 냄새 분자 흡착", "향으로 덮지 않는 ACF 방식"],
            ["속옷 안쪽에 간편 부착", "피부에 닿지 않아 안심"],
            ["10cm × 10cm 패드", "얇고 가벼워 티 나지 않아요"],
          ].map(([t, b]) => (
            <div key={t} className="px-6 py-5">
              <p className="text-sm font-bold text-ink-900">{t}</p>
              <p className="mt-1 text-[13px] text-ink-400">{b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Problem — 루미어가 필요한 순간들 */}
      <section className="container-md py-14">
        <h2 className="text-2xl font-extrabold tracking-tight text-ink-900 sm:text-[28px]">
          루미어가 필요한 순간들
        </h2>
        <p className="mt-2 text-ink-400">
          말하기 민망했던 고민, 여러분의 일상에 조용히 함께해요.
        </p>
        <div className="mt-7 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {moments.map((m) => (
            <div key={m.title} className="card p-6">
              <span className="text-2xl">{m.emoji}</span>
              <p className="mt-3 font-bold text-ink-900">{m.title}</p>
              <p className="mt-1 text-[13px] text-ink-400">{m.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. How it works */}
      <section className="border-y border-fog-300 bg-fog-100">
        <div className="container-md py-16">
          <p className="eyebrow">How to use</p>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-ink-900 sm:text-[28px]">
            루미어가 냄새를 없애는 방식
          </h2>
          <div className="mt-9 grid gap-8 sm:grid-cols-3">
            {steps.map((s) => (
              <div key={s.no}>
                <p className="text-sm font-bold text-mint-600">{s.no}</p>
                <h3 className="mt-2 text-lg font-bold text-ink-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Best products */}
      <section className="container-md py-16">
        <div className="flex items-end justify-between">
          <div>
            <p className="eyebrow">Best product</p>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-ink-900 sm:text-[28px]">
              많은 분들이 선택한 루미어
            </h2>
          </div>
          <Link
            href="/products"
            className="hidden text-sm font-medium text-ink-400 hover:text-ink-900 sm:block"
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

      {/* 6. Trust */}
      <section className="container-md pb-16">
        <div className="card px-8 py-10 sm:px-12">
          <p className="eyebrow">Trust</p>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-ink-900">
            국내 최초 방귀냄새 제거패드
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-4">
            {[
              ["KTL 시험 인증", "활성탄소섬유 소취 성능"],
              ["2025 예비창업패키지", "선정 기업"],
              ["2026 청년창업사관학교", "16기"],
              ["전남형 청년창업사관학교", "1기"],
            ].map(([t, b]) => (
              <div key={t} className="border-l-2 border-mint-500 pl-4">
                <p className="text-sm font-bold text-ink-900">{t}</p>
                <p className="mt-0.5 text-[13px] text-ink-400">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA — 런칭 혜택 */}
      <section className="container-md pb-20">
        <div className="rounded-blob bg-mint-50 px-8 py-12 text-center sm:py-14">
          <p className="text-sm font-bold text-mint-600">{brand.promo.badge}</p>
          <h2 className="mt-3 text-2xl font-extrabold leading-snug tracking-tight text-ink-900 sm:text-3xl">
            처음이라면 부담 없이,
            <br />
            4+1 스타터로 경험해보세요
          </h2>
          <p className="mt-3 text-sm text-ink-500">
            {brand.promo.lines.join(" · ")} — {brand.promo.note}
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link href="/products/pad-4plus1" className="btn-primary">
              지금 바로 경험하기
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
        </div>
      </section>
    </>
  );
}
