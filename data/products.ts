/**
 * ─────────────────────────────────────────────────────────────
 *  LOUMEER 제품 데이터 (네이버 스마트스토어 1:1 연동)
 * ─────────────────────────────────────────────────────────────
 *  ⚠️ 가격·구성·URL은 스마트스토어 본문 HTML 확인 후 확정 필요.
 *  아직 [가격확인필요] 표시가 있는 값은 임시값입니다.
 *
 *  - naverUrl : 해당 제품의 스마트스토어 상세 페이지 (구매 버튼 연결)
 *  - images   : public/products/ 또는 스마트스토어 CDN URL
 * ─────────────────────────────────────────────────────────────
 */

export interface DetailSection {
  heading: string;
  body: string;
  image?: string;
}

export interface Product {
  slug: string;
  name: string;
  shortDescription: string;
  price: number; // 판매가 [가격확인필요]
  originalPrice?: number; // 소비자가 (있으면 할인율 자동 표시)
  images: string[];
  category: string;
  badges?: ("BEST" | "NEW" | "품절임박")[];
  naverUrl: string;
  options?: string[];
  detail: DetailSection[];
  soldOut?: boolean;
}

export const categories = ["전체", "소취 패드", "세트"];

/** 모든 제품 공통 상세 섹션 (사용법) */
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
    slug: "deodorizing-pad-30",
    name: "루미어 소취 패드 30매",
    shortDescription: "한 달의 가벼움, 데일리 30매",
    price: 29900, // [가격확인필요]
    images: ["/products/pad-30.jpg", "/products/brand-pads.jpg"],
    category: "소취 패드",
    badges: ["BEST"],
    naverUrl: "https://smartstore.naver.com/loumeerkorea", // [URL확인필요]
    detail: [
      {
        heading: "매일 쓰는 분들을 위한 한 달 구성",
        body: "개별 포장 30매로 출근 가방, 파우치 어디든 챙기기 좋아요.",
      },
      ...howTo,
    ],
  },
  {
    slug: "deodorizing-pad-60",
    name: "루미어 소취 패드 60매",
    shortDescription: "넉넉하게 두 달, 가장 합리적인 선택",
    price: 49900, // [가격확인필요]
    images: ["/products/pad-60.jpg", "/products/brand-pads.jpg"],
    category: "소취 패드",
    badges: ["BEST"],
    naverUrl: "https://smartstore.naver.com/loumeerkorea", // [URL확인필요]
    detail: [
      {
        heading: "이미 써본 분들이 다시 찾는 대용량",
        body: "매당 가격이 가장 합리적인 구성이에요. 가족과 나눠 쓰기에도 좋아요.",
      },
      ...howTo,
    ],
  },
  {
    slug: "deodorizing-pad-starter",
    name: "루미어 소취 패드 스타터 (4매 박스)",
    shortDescription: "처음이라면, 부담 없이 4매부터",
    price: 9900, // [가격확인필요]
    images: ["/products/poopcast.jpg", "/products/brand-pads.jpg"],
    category: "세트",
    badges: ["NEW"],
    naverUrl: "https://smartstore.naver.com/loumeerkorea", // [URL확인필요]
    detail: [
      {
        heading: "루미어가 처음이신가요?",
        body: "효과가 궁금하다면 4매 박스로 가볍게 시작해보세요. KTL 시험 인증을 완료한 활성탄소섬유 패드예요.",
      },
      ...howTo,
    ],
  },
];

export const formatPrice = (n: number) => n.toLocaleString("ko-KR") + "원";

export const discountRate = (p: Product) =>
  p.originalPrice && p.originalPrice > p.price
    ? Math.round((1 - p.price / p.originalPrice) * 100)
    : null;

export const getProduct = (slug: string) =>
  products.find((p) => p.slug === slug);
