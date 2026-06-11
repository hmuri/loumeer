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
    <article className="container-md py-8 sm:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 상단 구매 영역 — 구성 토글 (클라이언트) */}
      <ProductPurchase product={product} />

      {/* 사용법 */}
      <section className="mt-12 sm:mt-20">
        <div className="rounded-[20px] bg-fog-100 px-4 py-8 sm:rounded-[1.75rem] sm:px-10 sm:py-12">
          <h2 className="text-center text-[22px] font-extrabold tracking-tight text-ink-900 sm:text-2xl">
            루미어는 이렇게 사용해요
          </h2>
          <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-3 sm:gap-4">
            {steps.map(({ icon, no, title, body }) => (
              <div key={no} className="card flex items-center gap-4 px-4 py-4 sm:gap-5 sm:px-6 sm:py-6">
                <span className="text-sm font-bold text-mint-600">{no}</span>
                <Image
                  src={icon}
                  alt=""
                  width={48}
                  height={48}
                  className="h-11 w-11 shrink-0 sm:h-12 sm:w-12"
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

      {/* 사용 가이드 — 권장 사용 기간 & 소취 팁 */}
      <section className="mt-9 sm:mt-12">
        <div className="rounded-[20px] bg-mint-50/70 px-4 py-8 sm:rounded-[1.75rem] sm:px-10 sm:py-11">
          <h2 className="text-center text-[22px] font-extrabold tracking-tight text-ink-900 sm:text-2xl">
            더 확실하게 쓰는 법
          </h2>
          <p className="mx-auto mt-2 max-w-xl break-keep text-center text-sm leading-relaxed text-ink-500">
            루미어 패드는 특수 가공된 활성탄소섬유가 냄새 유발 분자를 흡착해
            가두는 방식이에요. 최상의 효과를 위해 참고해 주세요.
          </p>
          <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4">
            <div className="card p-5 sm:p-7">
              <p className="text-xs font-bold tracking-wide text-mint-600">
                권장 사용 기간
              </p>
              <p className="mt-2 text-lg font-extrabold text-ink-900">
                1일 1패드, 매일 새것으로
              </p>
              <p className="mt-3 break-keep text-sm leading-relaxed text-ink-500">
                필터가 흡착할 수 있는 용량에는 한계가 있어요. 매일 새 제품으로
                교체해 주시는 것이 가장 이상적인 성능을 발휘합니다.
              </p>
            </div>
            <div className="card p-5 sm:p-7">
              <p className="text-xs font-bold tracking-wide text-mint-600">
                착용 팁 · 밀착의 중요성
              </p>
              <p className="mt-2 text-lg font-extrabold text-ink-900">
                굴곡에 완벽히 밀착되게
              </p>
              <p className="mt-3 break-keep text-sm leading-relaxed text-ink-500">
                패드와 신체 사이에 빈틈이 있으면 냄새가 새어 나갈 수 있어요.
                배출 직전, 패드가 엉덩이 굴곡에 완벽히 밀착되도록 착용 위치를
                조정하면 소취 효과를 극대화할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 철학 배너 — "향으로 덮지 않고, 흡착으로 줄입니다" */}
      <section className="mt-9 sm:mt-12">
        <Image
          src={siteImages.detail.supportBanner}
          alt="향으로 덮지 않고, 흡착으로 줄입니다 — 활성탄소섬유(ACF)가 냄새 분자를 흡착해 효과적"
          width={2172}
          height={724}
          className="h-44 w-full rounded-[20px] object-cover object-center sm:h-auto sm:rounded-[24px]"
        />
      </section>

      {/* 이런 날 추천해요 */}
      <section className="mt-9 sm:mt-12">
        <h2 className="text-xl font-extrabold tracking-tight text-ink-900">
          이런 날 추천해요
        </h2>
        <div className="mt-4 grid gap-3 sm:mt-5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {moments.map(({ icon, title, body }) => (
            <div key={title} className="card p-4 sm:p-5">
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
      <section className="mt-9 sm:mt-12">
        <div className="card grid gap-4 px-5 py-5 sm:grid-cols-2 sm:gap-7 sm:px-8 sm:py-8 lg:grid-cols-4">
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
        <section className="mx-auto mt-12 max-w-3xl sm:mt-20">
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
        <section className="mt-12 sm:mt-20">
          <h2 className="text-xl font-extrabold tracking-tight text-ink-900">
            다른 제품도 있어요
          </h2>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:mt-6 sm:gap-6 lg:grid-cols-3">
            {others.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
