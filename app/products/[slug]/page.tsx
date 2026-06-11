import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ProductGallery from "@/components/ProductGallery";
import ProductCard from "@/components/ProductCard";
import {
  discountRate,
  formatPrice,
  getProduct,
  products,
} from "@/data/products";

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
    title: product.name,
    description: product.shortDescription,
  };
}

export default function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  const rate = discountRate(product);
  const others = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <article className="container-md py-12">
      <nav className="text-sm text-ink-400">
        <Link href="/products" className="hover:text-ink-900">
          전체 제품
        </Link>
        <span className="mx-2">›</span>
        <span>{product.category}</span>
      </nav>

      <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:gap-14">
        <ProductGallery images={product.images} name={product.name} />

        <div className="flex flex-col">
          <p className="text-sm font-medium text-ink-400">
            {product.shortDescription}
          </p>
          <h1 className="mt-2 text-2xl font-extrabold leading-snug tracking-tight text-ink-900 sm:text-3xl">
            {product.name}
          </h1>

          {product.reviewCount ? (
            <p className="mt-2.5 text-sm text-ink-400">
              ★ <strong className="text-ink-700">{product.reviewScore?.toFixed(1)}</strong>{" "}
              리뷰 {product.reviewCount}개
            </p>
          ) : null}

          <div className="mt-5 flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
            <span className="text-3xl font-extrabold text-ink-900">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-base text-ink-400 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
            {rate && (
              <span className="text-sm font-bold text-mint-600">
                {rate}% OFF
              </span>
            )}
          </div>

          {product.purchaseOptions && product.purchaseOptions.length > 0 && (
            <div className="mt-7">
              <p className="text-sm font-bold text-ink-900">구성 선택</p>
              <ul className="mt-2.5 space-y-2">
                {product.purchaseOptions.map((o, i) => (
                  <li key={o.label}>
                    <a
                      href={o.naverUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block rounded-xl border px-5 py-4 transition ${
                        i === 0
                          ? "border-mint-500 bg-mint-50/60 hover:bg-mint-50"
                          : "border-fog-300 bg-white hover:border-ink-400"
                      }`}
                    >
                      {o.tag && (
                        <span
                          className={`text-[11px] font-bold ${
                            i === 0 ? "text-mint-600" : "text-ink-400"
                          }`}
                        >
                          {o.tag}
                        </span>
                      )}
                      <span className="mt-0.5 flex items-baseline justify-between gap-3">
                        <span className="text-sm font-semibold text-ink-900">
                          {o.label}
                        </span>
                        <span className="shrink-0 font-extrabold text-ink-900">
                          {formatPrice(o.price)}
                        </span>
                      </span>
                      {o.perUnit && (
                        <span className="text-xs text-ink-400">{o.perUnit}</span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>

              {product.moreOptions && product.moreOptions.length > 0 && (
                <details className="mt-3">
                  <summary className="cursor-pointer text-sm text-ink-400 hover:text-ink-900">
                    수량 추가 구성 보기 ({product.moreOptions.length})
                  </summary>
                  <ul className="mt-2 space-y-1.5">
                    {product.moreOptions.map((o) => (
                      <li key={o.label}>
                        <a
                          href={o.naverUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-baseline justify-between rounded-lg border border-fog-200 bg-white px-4 py-2.5 text-sm transition hover:border-ink-400"
                        >
                          <span className="text-ink-700">{o.label}</span>
                          <span className="font-bold text-ink-900">
                            {formatPrice(o.price)}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>
              )}
            </div>
          )}

          <div className="mt-7 flex flex-col gap-2.5 sm:flex-row">
            <a
              href={product.naverUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn-primary flex-1 ${
                product.soldOut ? "pointer-events-none opacity-40" : ""
              }`}
            >
              {product.soldOut ? "품절되었어요" : "네이버 스마트스토어에서 구매하기"}
            </a>
            <Link href="/products" className="btn-ghost">
              계속 둘러보기
            </Link>
          </div>

          <div className="mt-6 rounded-xl border border-fog-300 bg-white p-5 text-sm leading-relaxed text-ink-500">
            <p className="font-bold text-ink-900">배송 안내</p>
            <p className="mt-1.5">
              결제·배송·교환/반품은 모두 네이버 스마트스토어에서 안전하게
              처리돼요. 네이버페이 적립 혜택도 그대로 받으실 수 있어요.
            </p>
          </div>
        </div>
      </div>

      {/* 제품 이야기 — 좌측 정렬 */}
      <section className="mx-auto mt-24 max-w-3xl">
        <div className="space-y-16">
          {product.detail.map((section, i) => (
            <div key={i}>
              <h3 className="text-xl font-extrabold tracking-tight text-ink-900 sm:text-2xl">
                {section.heading}
              </h3>
              <p className="mt-3 max-w-xl leading-relaxed text-ink-500">
                {section.body}
              </p>
              {section.image && (
                <div className="card relative mt-6 aspect-[3/2] overflow-hidden">
                  <Image
                    src={section.image}
                    alt={section.heading}
                    fill
                    sizes="(max-width: 768px) 100vw, 768px"
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 사용법 3단계 */}
        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {[
            ["1", "개별 포장을 뜯어요"],
            ["2", "속옷 안쪽에 붙여요"],
            ["3", "하루 사용 후 떼어 버려요"],
          ].map(([no, t]) => (
            <div key={no} className="card px-5 py-6">
              <p className="text-sm font-bold text-mint-600">STEP {no}</p>
              <p className="mt-1.5 text-sm font-semibold text-ink-900">{t}</p>
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
        <section className="mt-24">
          <h2 className="text-xl font-extrabold tracking-tight text-ink-900">
            다른 구성도 있어요
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
