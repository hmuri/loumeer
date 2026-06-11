import Image from "next/image";
import Link from "next/link";
import { Product, discountRate, formatPrice } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  const rate = discountRate(product);

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block overflow-hidden rounded-blob bg-white shadow-soft transition hover:-translate-y-1.5 hover:shadow-lift"
    >
      <div className="relative aspect-square overflow-hidden bg-fog-200">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        {product.badges && product.badges.length > 0 && (
          <div className="absolute left-3 top-3 flex gap-1.5">
            {product.badges.map((b) => (
              <span
                key={b}
                className={`rounded-full px-2.5 py-1 text-[11px] font-bold text-white ${
                  b === "NEW" ? "bg-blue-500" : "bg-mint-500"
                }`}
              >
                {b}
              </span>
            ))}
          </div>
        )}
        {product.soldOut && (
          <div className="absolute inset-0 flex items-center justify-center bg-ink-900/40 text-lg font-bold text-white">
            SOLD OUT
          </div>
        )}
      </div>

      <div className="p-4 sm:p-5">
        <p className="text-[13px] font-medium text-ink-400">
          {product.shortDescription}
        </p>
        <h3 className="mt-1 line-clamp-2 font-semibold leading-snug text-ink-900">
          {product.name}
        </h3>
        <div className="mt-2 flex items-baseline gap-2">
          {rate && <span className="font-extrabold text-mint-500">{rate}%</span>}
          <span className="text-lg font-extrabold text-ink-900">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-ink-400 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
        {product.reviewCount ? (
          <p className="mt-1.5 text-xs text-ink-400">
            <span className="text-mint-500">★</span>{" "}
            {product.reviewScore?.toFixed(1)} · 리뷰 {product.reviewCount}
          </p>
        ) : null}
      </div>
    </Link>
  );
}
