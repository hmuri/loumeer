"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProductGallery({
  images,
  name,
}: {
  images: string[];
  name: string;
}) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="relative aspect-square overflow-hidden rounded-[20px] border border-fog-300 bg-white sm:rounded-blob">
        <Image
          src={images[active]}
          alt={`${name} 이미지 ${active + 1}`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-contain p-4 sm:p-6"
        />
      </div>
      {images.length > 1 && (
        <div className="mt-3 flex gap-2.5 overflow-x-auto pb-1">
          {images.map((src, i) => (
            <button
              key={src}
              onClick={() => setActive(i)}
              className={`relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border bg-white transition sm:h-16 sm:w-16 ${
                i === active
                  ? "border-mint-500"
                  : "border-fog-300 opacity-80 hover:opacity-100"
              }`}
              aria-label={`이미지 ${i + 1} 보기`}
            >
              <Image src={src} alt="" fill sizes="64px" className="object-contain p-1.5" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
