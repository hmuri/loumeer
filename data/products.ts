/**
 * ─────────────────────────────────────────────────────────────
 *  LOUMEER 제품 데이터 — 네이버 스마트스토어 1:1 연동 (실데이터)
 *  출처: smartstore.naver.com/loumeerkorea (2026-06-11 기준)
 * ─────────────────────────────────────────────────────────────
 *  상품군 3개 × 구성(variants) = 스토어 8개 리스팅 1:1 매핑
 *  - 제거패드 4+1   : 4개입 × 1~5개  → 12497890371~12497890375
 *  - 먼슬리 플랜    : 30개입 / 60개입 → 12843310687 / 12843347068
 *  - 풉캐스트 콜라보 : 단일            → 13381194728
 *  상세 페이지에서 구성을 골라 보다가, [네이버스토어에서 구매하기]를
 *  눌렀을 때만 선택된 구성의 리스팅으로 이동합니다.
 * ─────────────────────────────────────────────────────────────
 */

export interface DetailSection {
  heading: string;
  body: string;
  image?: string;
}

export interface Variant {
  /** 스마트스토어 정식 상품명 (1:1) */
  name: string;
  /** 구성 선택 버튼 표기 */
  label: string;
  price: number;
  originalPrice?: number;
  perUnit?: string;
  naverUrl: string;
  /** 구성별 대표 이미지 (있으면 갤러리 첫 장 교체) */
  image?: string;
}

export interface Product {
  slug: string;
  /** 상품군 공통 명칭 (정식 상품명의 공통 부분) */
  name: string;
  shortDescription: string;
  images: string[];
  category: string;
  badges?: string[];
  variants: Variant[];
  reviewCount?: number;
  reviewScore?: number;
  detail: DetailSection[];
  detailImages?: string[];
  soldOut?: boolean;
}

export const categories = ["전체", "4+1", "먼슬리 플랜", "콜라보"];

const store = "https://smartstore.naver.com/loumeerkorea/products/";
const cdn = "https://shop-phinf.pstatic.net/";

const howTo: DetailSection[] = [
  {
    heading: "속옷 안쪽에 붙이면 끝",
    body: "루미어는 피부에 직접 붙이는 제품이 아니에요. 속옷 안쪽에 가볍게 부착해 일상 속 냄새 고민을 조용히 줄여줍니다.",
    image: "/loumeer_code_ready_asset_pack/detail/product/image-support-banner.png",
  },
  {
    heading: "향으로 덮지 않고, 흡착으로 줄입니다",
    body: "활성탄소섬유(ACF)가 냄새 분자 자체를 흡착해요. 10cm × 10cm, 얇고 가벼워서 붙인 걸 잊어버릴 정도예요. 하루 사용 후 떼어 버리면 끝.",
  },
];

const commonDetailImages = [
  cdn + "20251031_157/1761875824729t9og4_JPEG/%ED%9B%84%ED%82%B9.jpg",
  cdn + "20251031_140/1761875785348acPqI_GIF/2.gif",
  cdn + "20251031_16/1761875785309sx3vT_JPEG/3.jpg",
  cdn + "20251031_168/1761875786573rfg78_GIF/4.gif",
  cdn + "20251031_273/1761875786418CRkqh_JPEG/5.jpg",
  cdn + "20251031_198/1761875785876X0xs5_JPEG/6.jpg",
  cdn + "20251031_192/1761875786020OOgaq_JPEG/7.jpg",
  cdn + "20251031_86/1761875785884uF5ah_JPEG/8.jpg",
  cdn + "20251031_251/1761875786820EyAiG_GIF/9.gif",
  cdn + "20251031_38/1761875787130rmFSm_GIF/10.gif",
  cdn + "20251031_239/1761875786626HrDku_JPEG/11.jpg",
  cdn + "20251031_1/1761875785346xXll3_JPEG/12.jpg",
  cdn + "20251031_79/1761875785356WNvlk_JPEG/13.jpg",
  cdn + "20251031_164/1761875785556y3Tgx_JPEG/14.jpg",
];

const starterDetailImages = [
  cdn + "20251031_125/1761875785319hhAV4_JPEG/1.jpg",
  ...commonDetailImages,
];

const monthlyDetailImages = [
  cdn + "20251222_118/1766367147274VQdwA_PNG/1.png",
  cdn + "20251222_35/1766367147421bGXfS_PNG/2.png",
  cdn + "20251222_185/1766367147368nYp5m_PNG/3.png",
  ...commonDetailImages,
];

const n41 = (count: number) =>
  `루미어 방귀냄새 제거패드 과민성대장증후군 가스실금 4+1 10x10cm, 4개입, ${count}개`;

export const products: Product[] = [
  {
    slug: "pad-4plus1",
    name: "루미어 방귀냄새 제거패드 과민성대장증후군 가스실금 4+1 10x10cm, 4개입",
    shortDescription: "처음 사용해보는 분들을 위한 가장 합리적인 구성",
    images: ["/products/brand-pads-clean.jpg", "/products/pad-30-clean.jpg"],
    category: "4+1",
    badges: ["BEST"],
    reviewCount: 75,
    reviewScore: 4.53,
    variants: [
      { name: n41(1), label: "1개", price: 8500, originalPrice: 15000, perUnit: "1개당 2,125원", naverUrl: store + "12497890371" },
      { name: n41(2), label: "2개", price: 16800, originalPrice: 30000, perUnit: "1개당 2,100원", naverUrl: store + "12497890372" },
      { name: n41(3), label: "3개", price: 24900, originalPrice: 45000, perUnit: "1개당 2,075원", naverUrl: store + "12497890373" },
      { name: n41(4), label: "4개", price: 32800, originalPrice: 60000, perUnit: "1개당 2,050원", naverUrl: store + "12497890374" },
      { name: n41(5), label: "5개", price: 40500, originalPrice: 75000, perUnit: "1개당 2,025원", naverUrl: store + "12497890375" },
    ],
    detail: [
      {
        heading: "루미어가 처음이신가요?",
        body: "효과가 궁금하다면 4+1 구성으로 가볍게 시작해보세요. 과민성대장증후군, 가스실금으로 고민하는 분들이 가장 먼저 찾는 구성이에요. 10cm × 10cm 패드 4개입에 1개를 더 드려요.",
      },
      ...howTo,
    ],
    detailImages: starterDetailImages,
  },
  {
    slug: "pad-monthly",
    name: "루미어 방귀냄새 제거패드 먼슬리 플랜 10x10cm",
    shortDescription: "매일 사용하기 좋은 경제적인 구성",
    images: ["/products/pad-30.jpg", "/products/brand-pads-clean.jpg"],
    category: "먼슬리 플랜",
    badges: ["BEST"],
    reviewCount: 11,
    reviewScore: 4.64,
    variants: [
      {
        name: "루미어 방귀냄새 제거패드 먼슬리 플랜 10x10cm, 30개입, 1개",
        label: "30개입",
        price: 47900,
        originalPrice: 117500,
        perUnit: "1개당 1,597원",
        naverUrl: store + "12843310687",
        image: "/products/pad-30.jpg",
      },
      {
        name: "루미어 방귀냄새 제거패드 먼슬리 플랜 10x10cm, 60개입, 1개",
        label: "60개입",
        price: 89900,
        originalPrice: 225000,
        perUnit: "1개당 1,498원 · 최저단가",
        naverUrl: store + "12843347068",
        image: "/products/pad-60.jpg",
      },
    ],
    detail: [
      {
        heading: "매일 쓰는 분들을 위한 구성",
        body: "하루 1개, 한 달의 쾌적함. 개별 포장이라 출근 가방, 파우치 어디든 챙기기 좋아요. 4+1 구성 대비 1개당 가격이 훨씬 합리적이에요.",
      },
      ...howTo,
    ],
    detailImages: monthlyDetailImages,
  },
  {
    slug: "pad-poopcast",
    name: "[풉캐스트 전용] 루미어 방귀냄새 제거패드 과민성대장증후군 가스실금 4+1 10x10cm, 4개입, 1개",
    shortDescription: "루미어 × POOPCAST 콜라보 에디션",
    images: ["/products/poopcast.jpg", "/products/brand-pads-clean.jpg"],
    category: "콜라보",
    badges: ["LIMITED"],
    reviewCount: 1,
    reviewScore: 5.0,
    variants: [
      {
        name: "[풉캐스트 전용] 루미어 방귀냄새 제거패드 과민성대장증후군 가스실금 4+1 10x10cm, 4개입, 1개",
        label: "4개입, 1개",
        price: 15000,
        naverUrl: store + "13381194728",
      },
    ],
    detail: [
      {
        heading: "POOPCAST와 함께한 한정 에디션",
        body: "유쾌한 똥 이야기 채널 풉캐스트와의 콜라보 패키지예요. 구성은 4+1 구성과 동일하고, 패키지가 특별해요.",
      },
      ...howTo,
    ],
    detailImages: starterDetailImages,
  },
];

export const formatPrice = (n: number) => n.toLocaleString("ko-KR") + "원";

export const discountRate = (v: { price: number; originalPrice?: number }) =>
  v.originalPrice && v.originalPrice > v.price
    ? Math.round((1 - v.price / v.originalPrice) * 100)
    : null;

export const getProduct = (slug: string) =>
  products.find((p) => p.slug === slug);
