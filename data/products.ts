/**
 * ─────────────────────────────────────────────────────────────
 *  LOUMEER 제품 데이터 — 네이버 스마트스토어 1:1 연동 (실데이터)
 *  출처: smartstore.naver.com/loumeerkorea (2026-06-11 기준)
 * ─────────────────────────────────────────────────────────────
 *  스마트스토어의 8개 리스팅을 4개 제품 + 구성 옵션으로 매핑:
 *  - 4+1 스타터 ×1~×5세트  → 12497890371~12497890375
 *  - 먼슬리 플랜 30개입     → 12843310687
 *  - 먼슬리 플랜 60개입     → 12843347068
 *  - 풉캐스트 콜라보 4+1    → 13381194728
 *  각 옵션의 naverUrl이 해당 스마트스토어 리스팅으로 연결됩니다.
 * ─────────────────────────────────────────────────────────────
 */

export interface DetailSection {
  heading: string;
  body: string;
  image?: string;
}

export interface PurchaseOption {
  label: string;
  price: number;
  originalPrice?: number;
  perUnit?: string; // "1개당 2,125원"
  naverUrl: string;
}

export interface Product {
  slug: string;
  name: string;
  shortDescription: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  badges?: ("BEST" | "NEW" | "품절임박")[];
  naverUrl: string; // 대표 리스팅 (기본 구매 버튼)
  purchaseOptions?: PurchaseOption[]; // 구성별 가격·링크
  reviewCount?: number;
  reviewScore?: number;
  detail: DetailSection[];
  detailImages?: string[]; // 스마트스토어 상세페이지 원본 이미지 (CDN)
  soldOut?: boolean;
}

export const categories = ["전체", "스타터", "먼슬리 플랜", "콜라보"];

const store = "https://smartstore.naver.com/loumeerkorea/products/";
const cdn = "https://shop-phinf.pstatic.net/";

/** 두 제품군이 공유하는 브랜드 상세 이미지 시퀀스 */
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

const howTo: DetailSection[] = [
  {
    heading: "쓰는 법은 1초면 충분해요",
    body: "① 개별 포장을 뜯고 ② 속옷 안쪽에 붙인 뒤 ③ 하루를 마치면 떼서 버리세요. 활성탄소섬유가 냄새 분자를 흡착해서, 참지 않아도 티 나지 않아요.",
  },
  {
    heading: "피부에 닿지 않게, 부담 없이",
    body: "피부가 아닌 속옷에 부착하는 방식이라 자극 걱정이 없어요. 10cm × 10cm, 얇고 가벼워서 붙인 걸 잊어버릴 정도예요.",
    image: "/products/brand-pads.jpg",
  },
];

export const products: Product[] = [
  {
    slug: "pad-4plus1",
    name: "루미어 방귀냄새 제거패드 4+1 (4개입)",
    shortDescription: "처음이라면 부담 없이, 4+1 스타터",
    price: 8500,
    originalPrice: 15000,
    images: ["/products/brand-pads.jpg", "/products/poopcast.jpg"],
    category: "스타터",
    badges: ["BEST"],
    naverUrl: store + "12497890371",
    reviewCount: 40,
    reviewScore: 4.7,
    purchaseOptions: [
      { label: "4개입 × 1세트", price: 8500, originalPrice: 15000, perUnit: "1개당 2,125원", naverUrl: store + "12497890371" },
      { label: "4개입 × 2세트", price: 16800, originalPrice: 30000, perUnit: "1개당 2,100원", naverUrl: store + "12497890372" },
      { label: "4개입 × 3세트", price: 24900, originalPrice: 45000, perUnit: "1개당 2,075원", naverUrl: store + "12497890373" },
      { label: "4개입 × 4세트", price: 32800, originalPrice: 60000, perUnit: "1개당 2,050원", naverUrl: store + "12497890374" },
      { label: "4개입 × 5세트", price: 40500, originalPrice: 75000, perUnit: "1개당 2,025원", naverUrl: store + "12497890375" },
    ],
    detail: [
      {
        heading: "루미어가 처음이신가요?",
        body: "효과가 궁금하다면 4+1 구성으로 가볍게 시작해보세요. 과민성대장증후군, 가스실금으로 고민하는 분들이 가장 먼저 찾는 구성이에요. 10cm × 10cm 패드 4개입 + 1개 추가 증정.",
      },
      ...howTo,
    ],
    detailImages: [
      cdn + "20251031_125/1761875785319hhAV4_JPEG/1.jpg",
      ...commonDetailImages,
    ],
  },
  {
    slug: "pad-monthly-30",
    name: "루미어 방귀냄새 제거패드 먼슬리 플랜 30개입",
    shortDescription: "한 달의 쾌적함, 매일 1개 먼슬리 플랜",
    price: 47900,
    originalPrice: 117500,
    images: ["/products/pad-30.jpg", "/products/brand-pads.jpg"],
    category: "먼슬리 플랜",
    naverUrl: store + "12843310687",
    reviewCount: 5,
    reviewScore: 4.2,
    purchaseOptions: [
      { label: "30개입 × 1박스", price: 47900, originalPrice: 117500, perUnit: "1개당 1,597원", naverUrl: store + "12843310687" },
      { label: "60개입이 더 저렴해요 →", price: 89900, originalPrice: 225000, perUnit: "1개당 1,498원", naverUrl: store + "12843347068" },
    ],
    detail: [
      {
        heading: "매일 쓰는 분들을 위한 한 달 구성",
        body: "하루 1개, 30일의 쾌적함. 개별 포장이라 출근 가방, 파우치 어디든 챙기기 좋아요. 스타터 대비 1개당 가격이 훨씬 합리적이에요.",
      },
      ...howTo,
    ],
    detailImages: [
      cdn + "20251222_118/1766367147274VQdwA_PNG/1.png",
      cdn + "20251222_35/1766367147421bGXfS_PNG/2.png",
      cdn + "20251222_185/1766367147368nYp5m_PNG/3.png",
      ...commonDetailImages,
    ],
  },
  {
    slug: "pad-monthly-60",
    name: "루미어 방귀냄새 제거패드 먼슬리 플랜 60개입",
    shortDescription: "최저 단가, 두 달의 여유 60개입",
    price: 89900,
    originalPrice: 225000,
    images: ["/products/pad-60.jpg", "/products/brand-pads.jpg"],
    category: "먼슬리 플랜",
    badges: ["BEST"],
    naverUrl: store + "12843347068",
    reviewCount: 6,
    reviewScore: 5.0,
    purchaseOptions: [
      { label: "60개입 × 1박스", price: 89900, originalPrice: 225000, perUnit: "1개당 1,498원 · 최저단가", naverUrl: store + "12843347068" },
      { label: "가볍게 30개입부터 →", price: 47900, originalPrice: 117500, perUnit: "1개당 1,597원", naverUrl: store + "12843310687" },
    ],
    detail: [
      {
        heading: "이미 써본 분들이 다시 찾는 구성",
        body: "1개당 1,498원, 루미어 최저 단가예요. 리뷰 평점 5.0 — 효과를 아는 분들의 선택입니다.",
      },
      ...howTo,
    ],
    detailImages: [
      cdn + "20251222_118/1766367147274VQdwA_PNG/1.png",
      cdn + "20251222_35/1766367147421bGXfS_PNG/2.png",
      cdn + "20251222_185/1766367147368nYp5m_PNG/3.png",
      ...commonDetailImages,
    ],
  },
  {
    slug: "pad-poopcast",
    name: "[풉캐스트 전용] 루미어 방귀냄새 제거패드 4+1",
    shortDescription: "루미어 × POOPCAST 콜라보 에디션",
    price: 15000,
    images: ["/products/poopcast.jpg", "/products/brand-pads.jpg"],
    category: "콜라보",
    badges: ["NEW"],
    naverUrl: store + "13381194728",
    reviewCount: 1,
    reviewScore: 5.0,
    purchaseOptions: [
      { label: "콜라보 에디션 4개입 + 1", price: 15000, naverUrl: store + "13381194728" },
    ],
    detail: [
      {
        heading: "POOPCAST와 함께한 한정 에디션",
        body: "유쾌한 똥 이야기 채널 풉캐스트와의 콜라보 패키지예요. 구성은 4+1 스타터와 동일하고, 패키지가 특별해요.",
      },
      ...howTo,
    ],
    detailImages: [
      cdn + "20251031_125/1761875785319hhAV4_JPEG/1.jpg",
      ...commonDetailImages,
    ],
  },
];

export const formatPrice = (n: number) => n.toLocaleString("ko-KR") + "원";

export const discountRate = (p: { price: number; originalPrice?: number }) =>
  p.originalPrice && p.originalPrice > p.price
    ? Math.round((1 - p.price / p.originalPrice) * 100)
    : null;

export const getProduct = (slug: string) =>
  products.find((p) => p.slug === slug);
