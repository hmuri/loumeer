import Image from "next/image";
import Link from "next/link";
import { Product, formatPrice } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  const first = product.variants[0];
  const multi = product.variants.length > 1;

  return (
    <Link
      href={`/products/${product.slug}`}
      className="card group block overflow-hidden transition hover:-translate-y-1 hover:shadow-lift"
    >
      <div className="relative aspect-square overflow-hidden bg-white">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        {product.soldOut && (
          <div className="absolute inset-0 flex items-center justify-center bg-ink-900/40 text-lg font-bold text-white">
            SOLD OUT
          </div>
        )}
      </div>

      <div className="border-t border-fog-200 p-3.5 sm:p-5">
        <h3 className="line-clamp-2 break-keep text-[14px] font-bold leading-snug text-ink-900 sm:text-[15px]">
          {product.name}
        </h3>
        <p className="mt-1 line-clamp-2 break-keep text-[12px] leading-snug text-ink-400 sm:line-clamp-1 sm:text-[13px]">
          {product.shortDescription}
        </p>
        <div className="mt-2.5 flex flex-wrap items-baseline gap-x-2 gap-y-0.5 sm:mt-3">
          <span className="text-[17px] font-extrabold text-ink-900 sm:text-lg">
            {formatPrice(first.price)}
            {multi && <span className="text-sm font-semibold">~</span>}
          </span>
          {first.originalPrice && (
            <span className="text-[13px] text-ink-400 line-through">
              {formatPrice(first.originalPrice)}
            </span>
          )}
        </div>
        {multi && (
          <p className="mt-1 text-xs text-ink-400">
            {product.variants.map((v) => v.label).join(" · ")} 구성
          </p>
        )}
        {product.reviewCount ? (
          <p className="mt-1.5 text-xs text-ink-400">
            ★ {product.reviewScore?.toFixed(1)} · 리뷰 {product.reviewCount}
          </p>
        ) : null}
      </div>
    </Link>
  );
}
