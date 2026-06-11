"use client";

import Link from "next/link";
import { useState } from "react";
import ProductGallery from "@/components/ProductGallery";
import { Product, discountRate, formatPrice } from "@/data/products";

/**
 * 상세 페이지 상단 구매 영역.
 * 구성(variants)을 눌러 페이지 안에서 가격·이름·이미지를 전환하며 구경하고,
 * [네이버스토어에서 구매하기]를 눌렀을 때만 선택된 리스팅으로 이동합니다.
 */
export default function ProductPurchase({ product }: { product: Product }) {
  const [selected, setSelected] = useState(0);
  const variant = product.variants[selected];
  const rate = discountRate(variant);

  // 구성별 대표 이미지가 있으면 갤러리 첫 장을 교체
  const galleryImages = variant.image
    ? [variant.image, ...product.images.filter((i) => i !== variant.image)]
    : product.images;

  return (
    <div className="grid gap-7 lg:grid-cols-2 lg:gap-14">
      <ProductGallery
        key={selected}
        images={galleryImages}
        name={variant.name}
      />

      <div className="flex flex-col">
        <p className="text-[13px] font-bold text-mint-600 sm:text-sm">
          {product.shortDescription}
        </p>
        <h1 className="mt-2 break-keep text-[22px] font-extrabold leading-snug tracking-tight text-ink-900 sm:text-2xl">
          {variant.name}
        </h1>

        {product.reviewCount ? (
          <p className="mt-2.5 text-sm text-ink-400">
            ★{" "}
            <strong className="text-ink-700">
              {product.reviewScore?.toFixed(1)}
            </strong>{" "}
            리뷰 {product.reviewCount}개
          </p>
        ) : null}

        <div className="mt-4 flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
          <span className="text-[27px] font-extrabold text-ink-900 sm:text-[28px]">
            {formatPrice(variant.price)}
          </span>
          {variant.originalPrice && (
            <span className="text-base text-ink-400 line-through">
              {formatPrice(variant.originalPrice)}
            </span>
          )}
          {rate && (
            <span className="text-sm font-bold text-mint-600">{rate}%</span>
          )}
        </div>
        {variant.perUnit && (
          <p className="mt-1 text-[13px] text-ink-400">{variant.perUnit}</p>
        )}

        {product.variants.length > 1 && (
          <div className="mt-6">
            <p className="text-sm font-bold text-ink-900">구성 선택</p>
            <div
              className={`mt-2.5 grid gap-2 ${
                product.variants.length > 3 ? "grid-cols-2 sm:grid-cols-5" : "grid-cols-2"
              }`}
            >
              {product.variants.map((v, i) => (
                <button
                  key={v.naverUrl}
                  type="button"
                  onClick={() => setSelected(i)}
                  className={`rounded-xl border px-3 py-3 text-center transition ${
                    i === selected
                      ? "border-mint-500 bg-mint-50/70"
                      : "border-fog-300 bg-white hover:border-ink-400"
                  }`}
                >
                  <span
                    className={`block text-sm font-bold ${
                      i === selected ? "text-mint-700" : "text-ink-900"
                    }`}
                  >
                    {v.label}
                  </span>
                  <span className="mt-0.5 block text-[12px] text-ink-400">
                    {formatPrice(v.price)}
                  </span>
                </button>
              ))}
            </div>
            <p className="mt-2 text-xs text-ink-400">
              구성을 눌러 비교해보세요. 구매하기를 누르면 선택한 구성의 네이버
              스마트스토어로 이동해요.
            </p>
          </div>
        )}

        <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
          <a
            href={variant.naverUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn-primary flex-1 ${
              product.soldOut ? "pointer-events-none opacity-40" : ""
            }`}
          >
            {product.soldOut ? "품절되었어요" : "네이버스토어에서 구매하기 ↗"}
          </a>
          <Link href="/about" className="btn-ghost">
            브랜드 이야기 보기
          </Link>
        </div>

        <div className="mt-5 rounded-2xl border border-fog-300 bg-white p-4 text-sm leading-relaxed text-ink-500 sm:mt-6 sm:rounded-xl sm:p-5">
          <p className="font-bold text-ink-900">배송 안내</p>
          <p className="mt-1.5">
            결제·배송·교환/반품은 모두 네이버 스마트스토어에서 안전하게
            처리돼요. 네이버페이 적립 혜택도 그대로 받으실 수 있어요.
          </p>
        </div>
      </div>
    </div>
  );
}
