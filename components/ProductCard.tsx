import Image from "next/image";
import Link from "next/link";
import { Product, discountRate, formatPrice } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  const rate = discountRate(product);

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

      <div className="border-t border-fog-200 p-4 sm:p-5">
        {product.badges && product.badges.length > 0 && (
          <p className="mb-1.5 text-[11px] font-bold tracking-[0.12em] text-mint-600">
            {product.badges.join(" · ")}
          </p>
        )}
        <h3 className="line-clamp-2 font-semibold leading-snug text-ink-900">
          {product.name}
        </h3>
        <p className="mt-1 text-[13px] text-ink-400">
          {product.shortDescription}
        </p>
        <div className="mt-3 flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
          <span className="text-lg font-extrabold text-ink-900">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-[13px] text-ink-400 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
          {rate && (
            <span className="text-[12px] font-bold text-mint-600">
              {rate}% OFF
            </span>
          )}
        </div>
        {product.reviewCount ? (
          <p className="mt-1.5 text-xs text-ink-400">
            ★ {product.reviewScore?.toFixed(1)} 리뷰 {product.reviewCount}
          </p>
        ) : null}
      </div>
    </Link>
  );
}
