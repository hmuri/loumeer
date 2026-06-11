"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { Product, categories } from "@/data/products";

export default function ProductGrid({ products }: { products: Product[] }) {
  const [category, setCategory] = useState("전체");

  const filtered =
    category === "전체"
      ? products
      : products.filter((p) => p.category === category);

  return (
    <div>
      <div className="flex gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible sm:pb-0">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`shrink-0 rounded-xl border px-4 py-2 text-sm font-medium transition ${
              category === c
                ? "border-ink-900 bg-ink-900 text-white"
                : "border-fog-300 bg-white text-ink-500 hover:border-ink-400 hover:text-ink-900"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-16 text-center text-ink-400">
          이 카테고리에는 아직 제품이 없어요.
        </p>
      ) : (
        <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-6 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
