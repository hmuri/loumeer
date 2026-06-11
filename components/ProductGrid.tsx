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
      <div className="flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              category === c
                ? "bg-clay-500 text-white shadow-lift"
                : "bg-white text-ink-500 shadow-soft hover:text-clay-600"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-16 text-center text-ink-400">
          이 카테고리에는 아직 제품이 없어요 🌱
        </p>
      ) : (
        <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
