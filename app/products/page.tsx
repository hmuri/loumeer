import type { Metadata } from "next";
import ProductGrid from "@/components/ProductGrid";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "전체 제품",
  description: "루미어의 모든 제품을 한눈에 둘러보세요.",
};

export default function ProductsPage() {
  return (
    <section className="container-md py-14">
      <p className="text-sm font-bold text-clay-500">ALL PRODUCTS</p>
      <h1 className="mt-1 text-3xl font-extrabold text-ink-900">전체 제품</h1>
      <p className="mt-3 text-ink-500">
        마음에 드는 아이를 골라보세요. 구매는 네이버 스마트스토어에서 안전하게 진행돼요.
      </p>
      <div className="mt-8">
        <ProductGrid products={products} />
      </div>
    </section>
  );
}
