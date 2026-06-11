/**
 * ─────────────────────────────────────────────────────────────
 *  LOUMEER 제품 데이터 (네이버 스마트스토어 1:1 연동)
 * ─────────────────────────────────────────────────────────────
 *  ⚠️ 아래는 사이트 구조 확인용 PLACEHOLDER 데이터입니다.
 *  스마트스토어(https://smartstore.naver.com/loumeerkorea)의
 *  실제 제품 정보를 받아 이 배열만 교체하면 사이트 전체에 반영됩니다.
 *
 *  - naverUrl  : 해당 제품의 스마트스토어 상세 페이지 주소 (구매 버튼 연결)
 *  - images    : public/products/ 폴더에 이미지를 넣고 경로 지정
 *                (스마트스토어 CDN 주소 https://shop-phinf.pstatic.net/... 도 사용 가능)
 *  - detail    : 상세 페이지의 스토리텔링 섹션들
 * ─────────────────────────────────────────────────────────────
 */

export interface DetailSection {
  heading: string;
  body: string;
  image?: string;
}

export interface Product {
  slug: string; // URL에 쓰이는 고유 id (영문-하이픈)
  name: string;
  shortDescription: string; // 카드에 보이는 한 줄 설명
  price: number; // 판매가
  originalPrice?: number; // 소비자가 (있으면 할인율 자동 표시)
  images: string[]; // 첫 번째가 대표 이미지
  category: string;
  badges?: ("BEST" | "NEW" | "품절임박")[];
  naverUrl: string; // 스마트스토어 제품 페이지 (구매하기 연결)
  options?: string[]; // 색상/구성 등 옵션 안내
  detail: DetailSection[];
  soldOut?: boolean;
}

export const categories = ["전체", "리빙", "패브릭", "주방", "선물세트"];

export const products: Product[] = [
  {
    slug: "placeholder-cushion",
    name: "[PLACEHOLDER] 루미어 구름 쿠션",
    shortDescription: "안고 있으면 스르르 잠이 오는 포근함",
    price: 29000,
    originalPrice: 36000,
    images: ["/products/placeholder-1.svg"],
    category: "패브릭",
    badges: ["BEST"],
    naverUrl: "https://smartstore.naver.com/loumeerkorea",
    options: ["크림", "피치", "세이지"],
    detail: [
      {
        heading: "하루의 끝, 가장 먼저 찾게 되는 자리",
        body: "푹신한 충전재와 부드러운 원단으로, 소파 위 가장 인기 있는 자리가 되어줄 거예요.",
      },
      {
        heading: "세탁기에 쏙, 관리도 쉽게",
        body: "커버 분리형이라 세탁기로 간편하게 관리할 수 있어요.",
      },
    ],
  },
  {
    slug: "placeholder-mug",
    name: "[PLACEHOLDER] 루미어 모닝 머그",
    shortDescription: "아침이 기다려지는 도톰한 머그컵",
    price: 18000,
    images: ["/products/placeholder-2.svg"],
    category: "주방",
    badges: ["NEW"],
    naverUrl: "https://smartstore.naver.com/loumeerkorea",
    detail: [
      {
        heading: "손에 꼭 맞는 도톰한 핸들",
        body: "따뜻한 음료의 온기가 오래 머무는 두께감 있는 도자기 머그예요.",
      },
    ],
  },
  {
    slug: "placeholder-tray",
    name: "[PLACEHOLDER] 우드 트레이",
    shortDescription: "흐트러진 물건들이 정돈되는 마법",
    price: 24000,
    images: ["/products/placeholder-3.svg"],
    category: "리빙",
    naverUrl: "https://smartstore.naver.com/loumeerkorea",
    detail: [
      {
        heading: "어디에 두어도 어울리는 톤",
        body: "현관, 화장대, 책상 위 어디든 자연스럽게 스며드는 우드 톤이에요.",
      },
    ],
  },
  {
    slug: "placeholder-blanket",
    name: "[PLACEHOLDER] 코지 블랭킷",
    shortDescription: "사계절 내내 곁에 두는 담요",
    price: 42000,
    originalPrice: 49000,
    images: ["/products/placeholder-4.svg"],
    category: "패브릭",
    badges: ["BEST"],
    naverUrl: "https://smartstore.naver.com/loumeerkorea",
    detail: [
      {
        heading: "가볍지만 따뜻하게",
        body: "에어컨 바람이 쌀쌀한 여름부터 한겨울 이불 속까지, 일 년 내내 함께해요.",
      },
    ],
  },
  {
    slug: "placeholder-diffuser",
    name: "[PLACEHOLDER] 룸 디퓨저",
    shortDescription: "현관문을 열면 반겨주는 우리 집 향기",
    price: 32000,
    images: ["/products/placeholder-5.svg"],
    category: "리빙",
    naverUrl: "https://smartstore.naver.com/loumeerkorea",
    detail: [
      {
        heading: "은은하게, 질리지 않게",
        body: "공간에 부담스럽지 않게 퍼지는 잔향 중심의 블렌딩이에요.",
      },
    ],
  },
  {
    slug: "placeholder-giftset",
    name: "[PLACEHOLDER] 루미어 선물세트",
    shortDescription: "받는 사람의 표정이 그려지는 선물",
    price: 55000,
    originalPrice: 65000,
    images: ["/products/placeholder-6.svg"],
    category: "선물세트",
    badges: ["NEW"],
    naverUrl: "https://smartstore.naver.com/loumeerkorea",
    detail: [
      {
        heading: "포장까지 루미어답게",
        body: "선물 상자와 리본 포장이 기본으로 포함되어 바로 선물할 수 있어요.",
      },
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
