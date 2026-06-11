import type { Metadata } from "next";
import ProductGrid from "@/components/ProductGrid";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "전체 제품",
  description: "루미어의 모든 제품을 한눈에 둘러보세요.",
};

export default function ProductsPage() {
  return (
    <section className="container-md py-9 sm:py-14">
      <p className="eyebrow">All products</p>
      <h1 className="mt-3 text-[28px] font-extrabold tracking-tight text-ink-900 sm:text-3xl">
        전체 제품
      </h1>
      <p className="mt-2 break-keep text-sm leading-relaxed text-ink-400 sm:mt-3 sm:text-base">
        구매는 네이버 스마트스토어에서 안전하게 진행돼요.
      </p>
      <div className="mt-6 sm:mt-8">
        <ProductGrid products={products} />
      </div>
    </section>
  );
}
