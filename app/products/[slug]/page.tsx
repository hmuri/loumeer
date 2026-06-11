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
        <Link href="/products" className="hover:text-clay-600">
          전체 제품
        </Link>
        <span className="mx-2">›</span>
        <span className="text-ink-500">{product.category}</span>
      </nav>

      <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:gap-14">
        <ProductGallery images={product.images} name={product.name} />

        <div className="flex flex-col">
          <p className="font-medium text-clay-500">{product.shortDescription}</p>
          <h1 className="mt-2 text-2xl font-extrabold leading-snug text-ink-900 sm:text-3xl">
            {product.name}
          </h1>

          <div className="mt-5 flex items-baseline gap-3">
            {rate && (
              <span className="text-2xl font-extrabold text-clay-500">
                {rate}%
              </span>
            )}
            <span className="text-3xl font-extrabold text-ink-900">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-lg text-ink-400 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          {product.options && product.options.length > 0 && (
            <div className="mt-6">
              <p className="text-sm font-bold text-ink-700">옵션</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.options.map((o) => (
                  <span
                    key={o}
                    className="rounded-full bg-white px-4 py-2 text-sm font-medium text-ink-500 shadow-soft"
                  >
                    {o}
                  </span>
                ))}
              </div>
              <p className="mt-2 text-xs text-ink-400">
                옵션 선택은 네이버 스마트스토어 주문 단계에서 진행돼요.
              </p>
            </div>
          )}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={product.naverUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn-primary flex-1 text-base ${
                product.soldOut ? "pointer-events-none opacity-40" : ""
              }`}
            >
              {product.soldOut ? "품절되었어요" : "네이버스토어에서 구매하기"}
            </a>
            <Link href="/products" className="btn-ghost">
              계속 둘러보기
            </Link>
          </div>

          <div className="mt-8 rounded-2xl bg-white p-5 text-sm leading-relaxed text-ink-500 shadow-soft">
            <p className="font-bold text-ink-700">🚚 배송 안내</p>
            <p className="mt-1.5">
              결제·배송·교환/반품은 모두 네이버 스마트스토어에서 안전하게
              처리돼요. 네이버페이 적립 혜택도 그대로 받으실 수 있어요.
            </p>
          </div>
        </div>
      </div>

      {/* 상세 스토리 */}
      <section className="mx-auto mt-20 max-w-3xl">
        <h2 className="text-center text-2xl font-extrabold text-ink-900">
          조금 더 자세히 들려드릴게요
        </h2>
        <div className="mt-10 space-y-14">
          {product.detail.map((section, i) => (
            <div key={i} className="text-center">
              {section.image && (
                <div className="relative mx-auto mb-6 aspect-[4/3] overflow-hidden rounded-blob">
                  <Image
                    src={section.image}
                    alt={section.heading}
                    fill
                    sizes="(max-width: 768px) 100vw, 768px"
                    className="object-cover"
                  />
                </div>
              )}
              <h3 className="text-xl font-bold text-clay-600">
                {section.heading}
              </h3>
              <p className="mx-auto mt-3 max-w-xl leading-relaxed text-ink-500">
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 다른 제품 */}
      {others.length > 0 && (
        <section className="mt-24">
          <h2 className="text-2xl font-extrabold text-ink-900">
            이런 아이는 어때요?
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
