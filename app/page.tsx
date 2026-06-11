import Image from "next/image";
import Link from "next/link";
import { brand } from "@/data/brand";
import { products } from "@/data/products";
import { siteImages } from "@/data/images";
import {
  LeafIcon,
  BriefsIcon,
  PadIcon,
  SunIcon,
  ChairIcon,
  CalendarIcon,
  SparkleIcon,
  ShieldIcon,
  AwardIcon,
  FlaskIcon,
  BuildingIcon,
  PackageIcon,
  TrashIcon,
} from "@/components/icons";

const values = [
  {
    Icon: LeafIcon,
    title: "향으로 덮지 않아요",
    body: "근본적인 냄새 케어",
  },
  {
    Icon: BriefsIcon,
    title: "속옷 안쪽에 가볍게",
    body: "티 나지 않는 편안함",
  },
  {
    Icon: PadIcon,
    title: "10cm × 10cm 초경량 패드",
    body: "작고 가벼운 맞춤 설계",
  },
];

const moments = [
  {
    Icon: SunIcon,
    title: "출근 전",
    body: "하루를 산뜻하게 시작하고 싶을 때",
    image: siteImages.momentCommute,
  },
  {
    Icon: ChairIcon,
    title: "오래 앉아 있는 날",
    body: "장시간 착용에도 쾌적함을 유지하고 싶을 때",
    image: siteImages.momentSitting,
  },
  {
    Icon: CalendarIcon,
    title: "중요한 약속 전",
    body: "자신감 있게, 불편함 없이 지내고 싶을 때",
    image: siteImages.momentPromise,
  },
  {
    Icon: SparkleIcon,
    title: "예민한 날",
    body: "컨디션이 예민할 때 더 신경 쓰일 때",
    image: siteImages.momentSensitive,
  },
];

const trust = [
  {
    Icon: AwardIcon,
    title: "국내 최초 방귀냄새 제거패드",
    body: "처음을 향이 아닌 기술로 잡아냈습니다",
  },
  {
    Icon: LeafIcon,
    title: "활성탄소섬유 ACF",
    body: "흡착·탈취 성능이 검증된 프리미엄 소재 사용",
  },
  {
    Icon: ShieldIcon,
    title: "KTL 시험 인증 완료",
    body: "공신력 있는 기관의 성능 시험 통과",
  },
  {
    Icon: BuildingIcon,
    title: "청년창업사관학교 선정",
    body: "혁신성과 성장 가능성을 인정받은 브랜드",
  },
];

export default function HomePage() {
  const featured = ["pad-4plus1", "pad-monthly-30", "pad-monthly-60"]
    .map((slug) => products.find((p) => p.slug === slug)!)
    .filter(Boolean);

  return (
    <>
      {/* 1. Hero — 브랜드 선언 */}
      <section className="bg-fog-50">
        <div className="container-md grid items-center gap-12 py-16 lg:grid-cols-[1fr_1.05fr] lg:py-20">
          <div>
            <span className="inline-flex items-center rounded-full bg-mint-50 px-4 py-1.5 text-xs font-bold tracking-[0.12em] text-mint-600">
              OUR STORY
            </span>
            <h1 className="mt-5 text-[34px] font-extrabold leading-[1.28] tracking-tight text-ink-900 sm:text-[42px]">
              아무도 말하지 못했던 고민을
              <br />
              가장 가볍게 해결합니다
            </h1>
            <p className="mt-5 max-w-md leading-relaxed text-ink-500">
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

            {/* 가치 3종 */}
            <div className="mt-12 grid gap-6 border-t border-fog-300 pt-8 sm:grid-cols-3">
              {values.map(({ Icon, title, body }) => (
                <div key={title} className="flex items-start gap-3 sm:block">
                  <Icon className="h-7 w-7 shrink-0 text-mint-600" />
                  <div>
                    <p className="mt-0 text-[13px] font-bold leading-snug text-ink-900 sm:mt-3">
                      {title}
                    </p>
                    <p className="mt-1 text-xs text-ink-400">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-[5/4] overflow-hidden rounded-blob">
            <Image
              src={siteImages.hero}
              alt="루미어 방귀냄새 제거패드 패키지와 활성탄소섬유 패드"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 2. Problem — 루미어가 필요한 순간 */}
      <section className="container-md py-8">
        <div className="rounded-[1.75rem] bg-fog-100 px-6 py-12 sm:px-10">
          <h2 className="text-center text-2xl font-extrabold tracking-tight text-ink-900">
            루미어가 필요한 순간
          </h2>
          <p className="mt-2 text-center text-sm text-ink-400">
            누구나 겪지만, 쉽게 말하지 못했던 고민이에요.
          </p>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {moments.map(({ Icon, title, body, image }) => (
              <div key={title} className="card overflow-hidden">
                <div className="p-5">
                  <div className="flex items-center gap-2.5">
                    <Icon className="h-5 w-5 text-mint-600" />
                    <p className="font-bold text-ink-900">{title}</p>
                  </div>
                  <p className="mt-2 text-[13px] leading-relaxed text-ink-400">
                    {body}
                  </p>
                </div>
                <div className="relative aspect-[4/3]">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Philosophy — 향으로 덮지 않습니다 */}
      <section className="container-md py-14">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Philosophy</p>
            <h2 className="mt-4 text-[28px] font-extrabold leading-[1.3] tracking-tight text-ink-900 sm:text-3xl">
              향으로 덮지 않고,
              <br />
              흡착으로 줄입니다
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-ink-500">
              루미어는 냄새를 강한 향으로 가리는 대신, 활성탄소섬유가 냄새
              분자를 흡착하는 방식에 집중했습니다.
            </p>
            <p className="mt-3 max-w-md leading-relaxed text-ink-500">
              피부가 아닌 속옷 안쪽에 붙이는 방식으로, 더 조용하고 부담 없는
              사용감을 지향합니다.
            </p>
          </div>
          <div className="relative aspect-[3/2] overflow-hidden rounded-blob">
            <Image
              src={siteImages.philosophy}
              alt="활성탄소섬유 패드 질감"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 4. How it works — 3단계 */}
      <section className="container-md py-8">
        <div className="rounded-[1.75rem] bg-fog-100 px-6 py-12 sm:px-10">
          <h2 className="text-center text-2xl font-extrabold tracking-tight text-ink-900">
            하루를 가볍게 만드는 3단계
          </h2>
          <p className="mt-2 text-center text-sm text-ink-400">
            루미어는 속옷 안쪽에 부착해 사용하는 얇고 가벼운 일회용 패드입니다.
          </p>
          <div className="mt-9 grid gap-4 sm:grid-cols-3">
            {[
              { Icon: PackageIcon, no: "01", title: "뜯고", body: "개별 포장을 뜯어요" },
              { Icon: BriefsIcon, no: "02", title: "붙이고", body: "속옷 안쪽에 붙여요. 피부에 닿지 않아요" },
              { Icon: TrashIcon, no: "03", title: "버리면 끝", body: "하루 사용 후 떼어 버리면 끝" },
            ].map(({ Icon, no, title, body }) => (
              <div key={no} className="card flex items-center gap-5 px-6 py-6">
                <span className="text-sm font-bold text-mint-600">{no}</span>
                <Icon className="h-9 w-9 shrink-0 text-ink-500" />
                <div>
                  <p className="font-bold text-ink-900">{title}</p>
                  <p className="mt-0.5 text-[13px] text-ink-400">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Product — 조용하게, 가격 없이 */}
      <section className="container-md py-14">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_2.2fr]">
          <div>
            <p className="eyebrow">Best product</p>
            <h2 className="mt-4 text-[26px] font-extrabold leading-[1.3] tracking-tight text-ink-900">
              처음이라면
              <br />이 구성부터
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-400">
              가장 사랑받는 구성을 합리적인 가격으로 경험해보세요.
            </p>
            <Link
              href="/products"
              className="mt-5 inline-block text-sm font-semibold text-mint-600 hover:underline"
            >
              전체 제품 보기 →
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {featured.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="card group flex flex-col p-6 text-center transition hover:-translate-y-1 hover:shadow-lift"
              >
                <p className="text-xs font-bold text-mint-600">{p.roleLabel}</p>
                <h3 className="mt-1.5 text-lg font-extrabold text-ink-900">
                  {p.displayName}
                </h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-ink-400">
                  {p.shortDescription}
                </p>
                <div className="relative mt-4 aspect-square overflow-hidden rounded-xl">
                  <Image
                    src={p.images[0]}
                    alt={p.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 30vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <span className="mt-4 text-sm font-semibold text-mint-600">
                  제품 자세히 보기 →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Trust — 안심 근거 */}
      <section className="container-md py-8">
        <div className="rounded-[1.75rem] bg-fog-100 px-6 py-12 sm:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_2.2fr]">
            <div>
              <h2 className="text-[24px] font-extrabold leading-[1.3] tracking-tight text-ink-900">
                안심하고
                <br />
                사용할 수 있도록
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-400">
                루미어는 검증된 원료와 인증으로 더 안심하고 사용할 수 있습니다.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {trust.map(({ Icon, title, body }) => (
                <div key={title} className="text-center sm:text-left">
                  <Icon className="mx-auto h-8 w-8 text-mint-600 sm:mx-0" />
                  <p className="mt-3 text-sm font-bold leading-snug text-ink-900">
                    {title}
                  </p>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-ink-400">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Starter CTA */}
      <section className="container-md py-8 pb-20">
        <div className="grid items-center gap-8 overflow-hidden rounded-[1.75rem] bg-gradient-to-r from-mint-50 to-fog-100 lg:grid-cols-2">
          <div className="px-8 py-12 sm:px-12">
            <h2 className="text-2xl font-extrabold tracking-tight text-ink-900 sm:text-[28px]">
              첫 경험을 가볍고 확실하게
            </h2>
            <p className="mt-3 text-ink-500">
              4+1 스타터 구성으로 루미어를 경험해보세요.
            </p>
            <a
              href={products[0].naverUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-7"
            >
              네이버스토어에서 구매하기 ↗
            </a>
          </div>
          <div className="relative hidden aspect-[16/10] lg:block">
            <Image
              src={siteImages.cta}
              alt="루미어 4+1 스타터 구성"
              fill
              sizes="50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
