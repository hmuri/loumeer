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
        <div className="container-md grid items-center gap-7 py-9 sm:gap-10 sm:py-12 lg:min-h-[620px] lg:grid-cols-[0.92fr_1.08fr] lg:py-16">
          <div>
            <span className="inline-flex rounded-full bg-mint-50 px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.12em] text-mint-700">
              Our story
            </span>
            <h1 className="mt-4 break-keep text-[27px] font-bold leading-[1.28] tracking-tight text-ink-900 sm:mt-5 sm:text-[38px]">
              아무도 말하지 못했던 고민을
              <br />
              가장 가볍게 해결합니다
            </h1>
            <p className="mt-4 max-w-[520px] text-[14px] leading-7 text-ink-500 sm:mt-5 sm:text-[15px]">
              루미어는 일상 속 민망한 냄새 고민을 향으로 덮지 않고,
              활성탄소섬유로 조용하게 덜어내는 개인위생 솔루션 브랜드입니다.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-2.5 sm:mt-8 sm:flex sm:flex-wrap sm:gap-3">
              <Link href="/about" className="btn-primary px-3 sm:px-6">
                루미어 이야기
              </Link>
              <Link href="/products" className="btn-ghost px-3 sm:px-6">
                제품 만나보기
              </Link>
            </div>

            <div className="mt-12 hidden gap-6 border-t border-fog-300 pt-8 sm:grid sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-fog-300">
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
              className="w-full max-w-[640px] rounded-[22px] shadow-[0_16px_42px_rgba(0,0,0,0.06)] sm:rounded-[28px] sm:shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
            />
          </div>

          <div className="grid gap-2.5 sm:hidden">
            {heroValues.map(({ icon, title, body }) => (
              <div
                key={title}
                className="flex items-center gap-3 rounded-2xl border border-fog-200 bg-fog-50 px-3.5 py-3"
              >
                <Image
                  src={icon}
                  alt=""
                  width={38}
                  height={38}
                  className="h-[38px] w-[38px] shrink-0"
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
      </section>

      <section className="container-md py-4 sm:py-5">
        <div className="rounded-[20px] bg-fog-100 px-3.5 py-7 sm:rounded-[24px] sm:px-6 sm:py-10">
          <h2 className="text-center text-[19px] font-extrabold tracking-tight text-ink-900 sm:text-xl">
            루미어가 필요한 순간
          </h2>
          <div className="mt-5 grid gap-3 sm:mt-7 sm:grid-cols-2 sm:gap-3.5 lg:grid-cols-4">
            {moments.map(({ icon, title, body, image }) => (
              <article
                key={title}
                className="grid grid-cols-[1fr_104px] overflow-hidden rounded-2xl border border-fog-200 bg-white sm:flex sm:flex-col"
              >
                <div className="flex-1 p-4 sm:p-5">
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
                  <p className="mt-2 break-keep text-[13px] leading-relaxed text-ink-500">
                    {body}
                  </p>
                </div>
                <div className="relative min-h-[126px] sm:aspect-[16/10] sm:min-h-0">
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

      <section className="container-md py-4 sm:py-5">
        <div className="grid gap-5 rounded-[20px] bg-fog-100 p-4 sm:gap-6 sm:rounded-[24px] sm:p-7 lg:grid-cols-[0.55fr_2.45fr]">
          <div className="p-1 sm:p-3">
            <p className="eyebrow">Best product</p>
            <h2 className="mt-3 text-[24px] font-extrabold leading-[1.25] tracking-tight text-ink-900 sm:mt-4 sm:text-[28px]">
              처음이라면
              <br />이 구성부터
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-500">
              가장 사랑받는 구성을 합리적인 가격으로 경험해보세요.
            </p>
            <Link
              href="/products"
              className="mt-5 inline-flex text-sm font-bold text-mint-700 hover:underline sm:mt-8"
            >
              전체 제품 보기 →
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
            {featured.map((product) => {
              if (!product) return null;

              return (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className="group flex min-h-0 flex-col rounded-[20px] border border-fog-200 bg-white p-4 text-center transition hover:-translate-y-1 hover:shadow-lift sm:min-h-[420px] sm:rounded-[24px] sm:p-6"
                >
                  <h3 className="break-keep text-[15px] font-extrabold leading-snug text-ink-900">
                    {product.name}
                  </h3>
                  <p className="mx-auto mt-2 min-h-[40px] max-w-[240px] break-keep text-[13px] leading-relaxed text-ink-500">
                    {product.shortDescription}
                  </p>
                  <div className="relative mt-4 aspect-[4/3] overflow-hidden rounded-2xl sm:mt-5 sm:aspect-square">
                    <Image
                      src={productImages[product.slug] ?? product.images[0]}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 30vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="mt-4 border-t border-fog-200 pt-3 sm:mt-5 sm:pt-4">
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

      <section className="container-md py-4 sm:py-5">
        <div className="rounded-[20px] border border-fog-300 bg-white px-4 py-7 shadow-soft sm:rounded-[24px] sm:px-10 sm:py-10">
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-[0.82fr_2.18fr]">
            <div>
              <h2 className="text-[23px] font-extrabold leading-[1.3] tracking-tight text-ink-900 sm:text-[25px]">
                안심하고
                <br />
                사용할 수 있도록
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-ink-500">
                루미어는 검증된 원료와 인증을 바탕으로 더 안심하고 사용할 수
                있게 만듭니다.
              </p>
            </div>
            <div className="grid gap-2 sm:grid-cols-2 sm:gap-0 lg:grid-cols-4 lg:divide-x lg:divide-fog-300">
              {trust.map(({ icon, title, body }) => (
                <div key={title} className="flex items-start gap-3 rounded-2xl bg-fog-50 px-3.5 py-4 text-left sm:block sm:bg-transparent sm:px-2 sm:py-5 sm:text-center lg:px-7">
                  <Image
                    src={icon}
                    alt=""
                    width={52}
                    height={52}
                    className="h-11 w-11 shrink-0 sm:mx-auto sm:h-[52px] sm:w-[52px]"
                  />
                  <div>
                    <p className="text-sm font-extrabold leading-snug text-ink-900 sm:mt-4">
                      {title}
                    </p>
                    <p className="mt-1.5 break-keep text-[13px] leading-relaxed text-ink-500 sm:mt-2">
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-md py-4 sm:py-5">
        <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[20px] border border-fog-300 bg-white p-5 shadow-soft sm:rounded-[24px] sm:p-10">
            <p className="eyebrow">How it works</p>
            <h2 className="mt-3 text-[24px] font-extrabold leading-[1.25] tracking-tight text-ink-900 sm:mt-4 sm:text-[28px]">
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
                className="flex items-center gap-4 rounded-2xl border border-fog-300 bg-white px-4 py-4 shadow-soft sm:gap-5 sm:px-6 sm:py-5"
              >
                <span className="text-sm font-extrabold text-mint-700">
                  {no}
                </span>
                <Image
                  src={icon}
                  alt=""
                  width={48}
                  height={48}
                  className="h-11 w-11 shrink-0 sm:h-12 sm:w-12"
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

      <section className="container-md py-4 pb-10 sm:py-5 sm:pb-12">
        <div className="relative overflow-hidden rounded-[20px] sm:rounded-[24px]">
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
