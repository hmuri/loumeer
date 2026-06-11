import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ProductPurchase from "@/components/ProductPurchase";
import ProductCard from "@/components/ProductCard";
import { siteImages } from "@/data/images";
import { SITE_URL } from "@/data/site";
import { getProduct, products } from "@/data/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const product = getProduct(params.slug);
  if (!product) return {};
  return {
    title: product.variants[0].name,
    description: product.shortDescription,
  };
}

const steps = [
  { icon: siteImages.detail.steps[0], no: "01", title: "뜯고", body: "개별 포장을 뜯어요." },
  { icon: siteImages.detail.steps[1], no: "02", title: "붙이고", body: "속옷 안쪽에 붙여요. 피부에 닿지 않아요." },
  { icon: siteImages.detail.steps[2], no: "03", title: "버리면 끝", body: "하루 사용 후 떼어 버리면 끝!" },
];

const moments = [
  { icon: siteImages.moments.commute.icon, title: "출근 전", body: "하루를 산뜻하게 시작하고 싶을 때" },
  { icon: siteImages.moments.sitting.icon, title: "오래 앉아 있는 날", body: "장시간 착용에도 쾌적함을 유지하고 싶을 때" },
  { icon: siteImages.moments.promise.icon, title: "중요한 약속 전", body: "자신감을 갖고 불편함 없이 지내고 싶을 때" },
  { icon: siteImages.moments.sensitive.icon, title: "예민한 날", body: "컨디션이 예민할 때 더 신경 쓰일 때" },
];

const trust = [
  { icon: siteImages.trustIcons.ktl, title: "KTL 시험 인증 완료", body: "공식 인증으로 검증된 성능 시험 통과" },
  { icon: siteImages.trustIcons.first, title: "국내 최초 방귀냄새 제거패드", body: "차별화된 아이디어와 기술력으로 시작된 제품" },
  { icon: siteImages.trustIcons.acf, title: "활성탄소섬유 ACF", body: "흡착력이 뛰어난 검증된 프리미엄 소재 사용" },
  { icon: siteImages.trustIcons.selected, title: "엄선한 원자재 사용", body: "안전성을 고려해 엄선된 원자재 사용" },
];

export default function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  const others = products.filter((p) => p.slug !== product.slug);
  const prices = product.variants.map((v) => v.price);

  // 구글 검색 리치 스니펫용 구조화 데이터
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.variants[0].name,
    image: product.images.map((i) => SITE_URL + i),
    description: product.shortDescription,
    brand: { "@type": "Brand", name: "LOUMEER" },
    ...(product.reviewCount
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: product.reviewScore,
            reviewCount: product.reviewCount,
          },
        }
      : {}),
    offers: {
      "@type": "AggregateOffer",
      lowPrice: Math.min(...prices),
      highPrice: Math.max(...prices),
      priceCurrency: "KRW",
      offerCount: product.variants.length,
      availability: "https://schema.org/InStock",
      url: product.variants[0].naverUrl,
    },
  };

  return (
    <article className="container-md py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 상단 구매 영역 — 구성 토글 (클라이언트) */}
      <ProductPurchase product={product} />

      {/* 사용법 */}
      <section className="mt-20">
        <div className="rounded-[1.75rem] bg-fog-100 px-6 py-12 sm:px-10">
          <h2 className="text-center text-2xl font-extrabold tracking-tight text-ink-900">
            루미어는 이렇게 사용해요
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {steps.map(({ icon, no, title, body }) => (
              <div key={no} className="card flex items-center gap-5 px-6 py-6">
                <span className="text-sm font-bold text-mint-600">{no}</span>
                <Image
                  src={icon}
                  alt=""
                  width={48}
                  height={48}
                  className="h-12 w-12 shrink-0"
                />
                <div>
                  <p className="font-bold text-ink-900">{title}</p>
                  <p className="mt-0.5 text-[13px] leading-snug text-ink-400">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 철학 + 제품 이야기 */}
      <section className="mt-12">
        <div className="card grid items-center gap-8 overflow-hidden lg:grid-cols-2">
          <div className="px-8 py-10 sm:px-12">
            <h2 className="break-keep text-[24px] font-extrabold leading-[1.3] tracking-tight text-ink-900">
              향으로 덮지 않고,
              <br />
              흡착으로 줄입니다
            </h2>
            <p className="mt-4 max-w-md break-keep text-sm leading-relaxed text-ink-500">
              활성탄소섬유(ACF)가 냄새 분자를 촘촘히 흡착해 근본적인 냄새를
              줄여줘요.
            </p>
            <p className="mt-3 max-w-md break-keep text-sm leading-relaxed text-ink-500">
              피부가 아닌 속옷 안쪽에 부착하는 방식이라 하루 종일 편안하게
              사용하실 수 있어요.
            </p>
          </div>
          <div className="relative aspect-[3/2] lg:aspect-auto lg:h-full">
            <Image
              src={
                product.detail.find((d) => d.image)?.image ??
                siteImages.philosophy
              }
              alt="루미어 패드"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 이런 날 추천해요 */}
      <section className="mt-12">
        <h2 className="text-xl font-extrabold tracking-tight text-ink-900">
          이런 날 추천해요
        </h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {moments.map(({ icon, title, body }) => (
            <div key={title} className="card p-5">
              <div className="flex items-center gap-2.5">
                <Image
                  src={icon}
                  alt=""
                  width={34}
                  height={34}
                  className="h-[34px] w-[34px] shrink-0"
                />
                <p className="font-bold text-ink-900">{title}</p>
              </div>
              <p className="mt-2 break-keep text-[13px] leading-relaxed text-ink-400">
                {body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 안심 근거 */}
      <section className="mt-12">
        <div className="card grid gap-7 px-8 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {trust.map(({ icon, title, body }) => (
            <div key={title} className="flex items-start gap-3.5">
              <Image
                src={icon}
                alt=""
                width={44}
                height={44}
                className="h-11 w-11 shrink-0"
              />
              <div>
                <p className="break-keep text-sm font-bold leading-snug text-ink-900">
                  {title}
                </p>
                <p className="mt-1 break-keep text-[13px] leading-relaxed text-ink-400">
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 스마트스토어 원본 상세 이미지 */}
      {product.detailImages && product.detailImages.length > 0 && (
        <section className="mx-auto mt-20 max-w-3xl">
          <h2 className="text-xl font-extrabold tracking-tight text-ink-900">
            상세 정보
          </h2>
          <div className="card mt-5 overflow-hidden">
            {product.detailImages.map((src) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={src} src={src} alt="" className="w-full" loading="lazy" />
            ))}
          </div>
        </section>
      )}

      {/* 다른 제품 */}
      {others.length > 0 && (
        <section className="mt-20">
          <h2 className="text-xl font-extrabold tracking-tight text-ink-900">
            다른 제품도 있어요
          </h2>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
            {others.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
