import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ProductGallery from "@/components/ProductGallery";
import ProductCard from "@/components/ProductCard";
import { siteImages } from "@/data/images";
import {
  formatPrice,
  getProduct,
  products,
} from "@/data/products";
import {
  PackageIcon,
  BriefsIcon,
  TrashIcon,
  SunIcon,
  ChairIcon,
  CalendarIcon,
  SparkleIcon,
  ShieldIcon,
  AwardIcon,
  LeafIcon,
  PadIcon,
} from "@/components/icons";

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
    title: product.displayName ?? product.name,
    description: product.shortDescription,
  };
}

const steps = [
  { Icon: PackageIcon, no: "01", title: "뜯고", body: "개별 포장을 뜯어요." },
  { Icon: BriefsIcon, no: "02", title: "붙이고", body: "속옷 안쪽에 붙여요. 피부에 닿지 않아요." },
  { Icon: TrashIcon, no: "03", title: "버리면 끝", body: "하루 사용 후 떼어 버리면 끝!" },
];

const moments = [
  { Icon: SunIcon, title: "출근 전", body: "하루를 산뜻하게 시작하고 싶을 때" },
  { Icon: ChairIcon, title: "오래 앉아 있는 날", body: "장시간 착용에도 쾌적함을 유지하고 싶을 때" },
  { Icon: CalendarIcon, title: "중요한 약속 전", body: "자신감을 갖고 불편함 없이 지내고 싶을 때" },
  { Icon: SparkleIcon, title: "예민한 날", body: "컨디션이 예민할 때 더 신경 쓰일 때" },
];

const trust = [
  { Icon: ShieldIcon, title: "KTL 시험 인증 완료", body: "공식 인증으로 검증된 성능 시험 통과" },
  { Icon: AwardIcon, title: "국내 최초 방귀냄새 제거패드", body: "차별화된 아이디어와 기술력으로 시작된 제품" },
  { Icon: LeafIcon, title: "활성탄소섬유 ACF", body: "흡착력이 뛰어난 검증된 프리미엄 소재 사용" },
  { Icon: PadIcon, title: "엄선한 원자재 사용", body: "안전성을 고려해 엄선된 원자재 사용" },
];

export default function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  const others = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <article className="container-md py-12">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
        <ProductGallery images={product.images} name={product.name} />

        <div className="flex flex-col">
          <p className="text-sm font-bold text-mint-600">
            {product.roleLabel && `${product.shortDescription}`}
          </p>
          <h1 className="mt-2 text-2xl font-extrabold leading-snug tracking-tight text-ink-900 sm:text-[28px]">
            {product.displayName ?? product.name}
          </h1>
          <p className="mt-1.5 text-sm text-ink-400">{product.name}</p>

          {product.reviewCount ? (
            <p className="mt-3 text-sm text-ink-500">
              <span className="text-mint-600">★</span>{" "}
              <strong>{product.reviewScore?.toFixed(1)}</strong> · 리뷰{" "}
              {product.reviewCount}개
            </p>
          ) : null}

          <div className="mt-4 flex items-baseline gap-2.5">
            <span className="text-[28px] font-extrabold text-ink-900">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-base text-ink-400 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          {product.purchaseOptions && product.purchaseOptions.length > 0 && (
            <div className="mt-6">
              <p className="text-sm font-bold text-ink-900">구성 선택</p>
              <div
                className={`mt-2.5 grid gap-2.5 ${
                  product.purchaseOptions.length > 1 ? "sm:grid-cols-3" : ""
                }`}
              >
                {product.purchaseOptions.map((o, i) => (
                  <a
                    key={o.label}
                    href={o.naverUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative flex flex-col rounded-xl border p-4 text-center transition ${
                      i === 0
                        ? "border-mint-500 bg-white"
                        : "border-fog-300 bg-white hover:border-ink-400"
                    }`}
                  >
                    {i === 0 && product.purchaseOptions!.length > 1 && (
                      <span className="absolute -top-2.5 left-3 rounded-md bg-mint-500 px-2 py-0.5 text-[11px] font-bold text-white">
                        추천
                      </span>
                    )}
                    <span className="font-bold text-ink-900">{o.label}</span>
                    {o.description && (
                      <span className="mt-1 text-[12px] leading-snug text-ink-400">
                        {o.description}
                      </span>
                    )}
                    {o.image && (
                      <span className="relative mx-auto mt-3 block h-20 w-20 overflow-hidden rounded-lg">
                        <Image
                          src={o.image}
                          alt={o.label}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      </span>
                    )}
                    <span className="mt-3 text-[15px] font-extrabold text-ink-900">
                      {formatPrice(o.price)}
                      {o.originalPrice && (
                        <span className="ml-1.5 text-xs font-normal text-ink-400 line-through">
                          {formatPrice(o.originalPrice)}
                        </span>
                      )}
                    </span>
                  </a>
                ))}
              </div>

              {product.moreOptions && product.moreOptions.length > 0 && (
                <details className="mt-3">
                  <summary className="cursor-pointer text-sm text-ink-400 hover:text-ink-900">
                    수량 추가 구성 보기 ({product.moreOptions.length})
                  </summary>
                  <ul className="mt-2 space-y-1.5">
                    {product.moreOptions.map((o) => (
                      <li key={o.label}>
                        <a
                          href={o.naverUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-baseline justify-between rounded-lg border border-fog-200 bg-white px-4 py-2.5 text-sm transition hover:border-ink-400"
                        >
                          <span className="text-ink-700">{o.label}</span>
                          <span className="font-bold text-ink-900">
                            {formatPrice(o.price)}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>
              )}
            </div>
          )}

          <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
            <a
              href={product.naverUrl}
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

          <div className="mt-6 rounded-xl border border-fog-300 bg-white p-5 text-sm leading-relaxed text-ink-500">
            <p className="font-bold text-ink-900">배송 안내</p>
            <p className="mt-1.5">
              결제·배송·교환/반품은 모두 네이버 스마트스토어에서 안전하게
              처리돼요. 네이버페이 적립 혜택도 그대로 받으실 수 있어요.
            </p>
          </div>
        </div>
      </div>

      {/* 사용법 */}
      <section className="mt-20">
        <div className="rounded-[1.75rem] bg-fog-100 px-6 py-12 sm:px-10">
          <h2 className="text-center text-2xl font-extrabold tracking-tight text-ink-900">
            루미어는 이렇게 사용해요
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {steps.map(({ Icon, no, title, body }) => (
              <div key={no} className="card flex items-center gap-5 px-6 py-6">
                <span className="text-sm font-bold text-mint-600">{no}</span>
                <Icon className="h-9 w-9 shrink-0 text-ink-500" />
                <div>
                  <p className="font-bold text-ink-900">{title}</p>
                  <p className="mt-0.5 text-[13px] leading-snug text-ink-400">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 철학 + 제품 이야기 */}
      <section className="mt-12">
        <div className="card grid items-center gap-8 overflow-hidden lg:grid-cols-2">
          <div className="px-8 py-10 sm:px-12">
            <h2 className="text-[24px] font-extrabold leading-[1.3] tracking-tight text-ink-900">
              향으로 덮지 않고,
              <br />
              흡착으로 줄입니다
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-500">
              활성탄소섬유(ACF)가 냄새 분자를 촘촘히 흡착해 근본적인 냄새를
              줄여줘요.
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-500">
              피부가 아닌 속옷 안쪽에 부착하는 방식이라 하루 종일 편안하게
              사용하실 수 있어요.
            </p>
          </div>
          <div className="relative aspect-[3/2] lg:aspect-auto lg:h-full">
            <Image
              src={product.detail.find((d) => d.image)?.image ?? siteImages.philosophy}
              alt="루미어 패드"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 이런 날 추천해요 */}
      <section className="mt-12">
        <h2 className="text-xl font-extrabold tracking-tight text-ink-900">
          이런 날 추천해요
        </h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {moments.map(({ Icon, title, body }) => (
            <div key={title} className="card p-5">
              <div className="flex items-center gap-2.5">
                <Icon className="h-5 w-5 text-mint-600" />
                <p className="font-bold text-ink-900">{title}</p>
              </div>
              <p className="mt-2 text-[13px] leading-relaxed text-ink-400">
                {body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 안심 근거 */}
      <section className="mt-12">
        <div className="card grid gap-7 px-8 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {trust.map(({ Icon, title, body }) => (
            <div key={title} className="flex items-start gap-3.5">
              <Icon className="h-7 w-7 shrink-0 text-mint-600" />
              <div>
                <p className="text-sm font-bold leading-snug text-ink-900">
                  {title}
                </p>
                <p className="mt-1 text-[13px] leading-relaxed text-ink-400">
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 스마트스토어 원본 상세 이미지 */}
      {product.detailImages && product.detailImages.length > 0 && (
        <section className="mx-auto mt-20 max-w-3xl">
          <h2 className="text-xl font-extrabold tracking-tight text-ink-900">
            상세 정보
          </h2>
          <div className="card mt-5 overflow-hidden">
            {product.detailImages.map((src) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={src} src={src} alt="" className="w-full" loading="lazy" />
            ))}
          </div>
        </section>
      )}

      {/* 다른 제품 */}
      {others.length > 0 && (
        <section className="mt-20">
          <h2 className="text-xl font-extrabold tracking-tight text-ink-900">
            다른 구성도 있어요
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
