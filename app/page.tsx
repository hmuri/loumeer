import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import { siteImages } from "@/data/images";

const heroValues = [
  {
    icon: siteImages.heroIcons.absorption,
    title: "향으로 덮지 않아요",
    body: "활성탄소섬유 기반 흡착 케어",
  },
  {
    icon: siteImages.heroIcons.attach,
    title: "속옷 안쪽에 가볍게",
    body: "피부에 직접 붙이지 않는 방식",
  },
  {
    icon: siteImages.heroIcons.lightweight,
    title: "10cm × 10cm 초경량 패드",
    body: "작고 가벼운 일회용 설계",
  },
];

const moments = [
  {
    icon: siteImages.moments.commute.icon,
    title: "출근 전",
    body: "하루를 산뜻하게 시작하고 싶을 때",
    image: siteImages.moments.commute.image,
  },
  {
    icon: siteImages.moments.sitting.icon,
    title: "오래 앉아 있는 날",
    body: "장시간 앉아 있어도 쾌적함을 유지하고 싶을 때",
    image: siteImages.moments.sitting.image,
  },
  {
    icon: siteImages.moments.promise.icon,
    title: "중요한 약속 전",
    body: "자신감 있게, 불편함 없이 지내고 싶을 때",
    image: siteImages.moments.promise.image,
  },
  {
    icon: siteImages.moments.sensitive.icon,
    title: "예민한 날",
    body: "컨디션이 예민해 더 신경 쓰이는 날",
    image: siteImages.moments.sensitive.image,
  },
];

const trust = [
  {
    icon: siteImages.trustIcons.first,
    title: "국내 최초 방귀냄새 제거패드",
    body: "처음을 향이 아닌 기술로 잡아냈습니다.",
  },
  {
    icon: siteImages.trustIcons.acf,
    title: "활성탄소섬유 ACF",
    body: "흡착·탈취 성능이 검증된 프리미엄 소재를 사용합니다.",
  },
  {
    icon: siteImages.trustIcons.ktl,
    title: "KTL 시험 인증 완료",
    body: "공신력 있는 기관의 성능 시험을 통과했습니다.",
  },
  {
    icon: siteImages.trustIcons.selected,
    title: "청년창업사관학교 선정",
    body: "혁신성과 성장 가능성을 인정받은 브랜드입니다.",
  },
];

const steps = [
  {
    icon: siteImages.detail.steps[0],
    no: "01",
    title: "뜯고",
    body: "개별 포장을 뜯어요.",
  },
  {
    icon: siteImages.detail.steps[1],
    no: "02",
    title: "붙이고",
    body: "속옷 안쪽에 붙여요. 피부에 직접 붙이지 않아요.",
  },
  {
    icon: siteImages.detail.steps[2],
    no: "03",
    title: "버리면 끝",
    body: "하루 사용 후 떼어 버리면 끝이에요.",
  },
];

/** 홈 제품 카드 이미지 — 스마트스토어 원본 기반 고해상 컷 */
const productImages: Record<string, string> = {
  "pad-4plus1": "/products/brand-pads-clean.jpg",
  "pad-monthly": "/products/pad-30.jpg",
  "pad-poopcast": "/products/poopcast.jpg",
};

export default function HomePage() {
  const featured = ["pad-4plus1", "pad-monthly", "pad-poopcast"]
    .map((slug) => products.find((product) => product.slug === slug))
    .filter(Boolean);

  return (
    <>
      <section className="border-b border-fog-300 bg-white">
        <div className="container-md grid min-h-[620px] items-center gap-10 py-12 lg:grid-cols-[0.92fr_1.08fr] lg:py-16">
          <div>
            <span className="inline-flex rounded-full bg-mint-50 px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.12em] text-mint-700">
              Our story
            </span>
            <h1 className="mt-5 break-keep text-[28px] font-bold leading-[1.32] tracking-tight text-ink-900 sm:text-[38px]">
              아무도 말하지 못했던 고민을
              <br />
              가장 가볍게 해결합니다
            </h1>
            <p className="mt-5 max-w-[520px] text-[15px] leading-7 text-ink-500">
              루미어는 일상 속 민망한 냄새 고민을 향으로 덮지 않고,
              활성탄소섬유로 조용하게 덜어내는 개인위생 솔루션 브랜드입니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/about" className="btn-primary">
                루미어 이야기
              </Link>
              <Link href="/products" className="btn-ghost">
                제품 만나보기
              </Link>
            </div>

            <div className="mt-12 grid gap-6 border-t border-fog-300 pt-8 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-fog-300">
              {heroValues.map(({ icon, title, body }, i) => (
                <div
                  key={title}
                  className={`flex items-center gap-3 ${
                    i === 0 ? "sm:pr-5" : "sm:px-5"
                  }`}
                >
                  <Image
                    src={icon}
                    alt=""
                    width={44}
                    height={44}
                    className="h-11 w-11 shrink-0"
                  />
                  <div>
                    <p className="break-keep text-[13px] font-bold leading-snug text-ink-900">
                      {title}
                    </p>
                    <p className="mt-0.5 break-keep text-xs leading-relaxed text-ink-400">
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <Image
              src={siteImages.hero}
              alt="루미어 방귀냄새 제거패드 패키지와 패드"
              width={515}
              height={475}
              priority
              className="w-full max-w-[640px] rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
            />
          </div>
        </div>
      </section>

      <section className="container-md py-5">
        <div className="rounded-[24px] bg-fog-100 px-4 py-10 sm:px-6">
          <h2 className="text-center text-xl font-extrabold tracking-tight text-ink-900">
            루미어가 필요한 순간
          </h2>
          <div className="mt-7 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
            {moments.map(({ icon, title, body, image }) => (
              <article
                key={title}
                className="flex flex-col overflow-hidden rounded-2xl border border-fog-200 bg-white"
              >
                <div className="flex-1 p-5">
                  <div className="flex items-center gap-2.5">
                    <Image
                      src={icon}
                      alt=""
                      width={34}
                      height={34}
                      className="h-[34px] w-[34px] shrink-0"
                    />
                    <h3 className="font-extrabold text-ink-900">{title}</h3>
                  </div>
                  <p className="mt-2 text-[13px] leading-relaxed text-ink-500">
                    {body}
                  </p>
                </div>
                <div className="relative aspect-[16/10]">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-md py-5">
        <div className="grid gap-6 rounded-[24px] bg-fog-100 p-5 sm:p-7 lg:grid-cols-[0.82fr_2.18fr]">
          <div className="p-2 sm:p-3">
            <p className="eyebrow">Best product</p>
            <h2 className="mt-4 text-[28px] font-extrabold leading-[1.25] tracking-tight text-ink-900">
              처음이라면
              <br />이 구성부터
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-500">
              가장 사랑받는 구성을 합리적인 가격으로 경험해보세요.
            </p>
            <Link
              href="/products"
              className="mt-8 inline-flex text-sm font-bold text-mint-700 hover:underline"
            >
              전체 제품 보기 →
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {featured.map((product) => {
              if (!product) return null;

              return (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className="group flex min-h-[420px] flex-col rounded-[24px] border border-fog-200 bg-white p-6 text-center transition hover:-translate-y-1 hover:shadow-lift"
                >
                  <h3 className="break-keep text-[15px] font-extrabold leading-snug text-ink-900">
                    {product.name}
                  </h3>
                  <p className="mx-auto mt-2 min-h-[40px] max-w-[210px] break-keep text-[13px] leading-relaxed text-ink-500">
                    {product.shortDescription}
                  </p>
                  <div className="relative mt-5 aspect-[4/3] overflow-hidden rounded-2xl">
                    <Image
                      src={productImages[product.slug] ?? product.images[0]}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 28vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="mt-auto border-t border-fog-200 pt-4">
                    <span className="text-sm font-bold text-mint-700">
                      제품 자세히 보기 →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container-md py-5">
        <div className="rounded-[24px] border border-fog-300 bg-white px-6 py-10 shadow-soft sm:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_2.18fr]">
            <div>
              <h2 className="text-[25px] font-extrabold leading-[1.3] tracking-tight text-ink-900">
                안심하고
                <br />
                사용할 수 있도록
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-ink-500">
                루미어는 검증된 원료와 인증을 바탕으로 더 안심하고 사용할 수
                있게 만듭니다.
              </p>
            </div>
            <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-fog-300">
              {trust.map(({ icon, title, body }) => (
                <div key={title} className="px-2 py-5 text-center lg:px-7">
                  <Image
                    src={icon}
                    alt=""
                    width={52}
                    height={52}
                    className="mx-auto h-[52px] w-[52px]"
                  />
                  <p className="mt-4 text-sm font-extrabold leading-snug text-ink-900">
                    {title}
                  </p>
                  <p className="mt-2 text-[13px] leading-relaxed text-ink-500">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-md py-5">
        <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[24px] border border-fog-300 bg-white p-8 shadow-soft sm:p-10">
            <p className="eyebrow">How it works</p>
            <h2 className="mt-4 text-[28px] font-extrabold leading-[1.25] tracking-tight text-ink-900">
              하루를 가볍게
              <br />
              만드는 3단계
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-500">
              루미어는 속옷 안쪽에 부착해 사용하는 얇고 가벼운 일회용
              패드입니다.
            </p>
          </div>
          <div className="grid gap-3">
            {steps.map(({ icon, no, title, body }) => (
              <div
                key={no}
                className="flex items-center gap-5 rounded-2xl border border-fog-300 bg-white px-6 py-5 shadow-soft"
              >
                <span className="text-sm font-extrabold text-mint-700">
                  {no}
                </span>
                <Image
                  src={icon}
                  alt=""
                  width={48}
                  height={48}
                  className="h-12 w-12 shrink-0"
                />
                <div>
                  <p className="font-extrabold text-ink-900">{title}</p>
                  <p className="mt-1 text-[13px] leading-relaxed text-ink-500">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-md py-5 pb-12">
        <div className="relative overflow-hidden rounded-[24px]">
          <Image
            src={siteImages.cta}
            alt="첫 경험을 가볍고 확실하게 — 4+1 스타터 구성으로 루미어를 경험해보세요"
            width={2172}
            height={724}
            className="w-full"
          />
          {/* 좌하단 구매 버튼 (데스크탑/태블릿) */}
          <a
            href={products[0].variants[0].naverUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary absolute bottom-[20%] left-[5.5%] hidden sm:inline-flex"
          >
            네이버스토어에서 구매하기 ↗
          </a>
        </div>
        {/* 모바일에서는 배너 아래 버튼 */}
        <a
          href={products[0].variants[0].naverUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-4 w-full sm:hidden"
        >
          네이버스토어에서 구매하기 ↗
        </a>
      </section>
    </>
  );
}
