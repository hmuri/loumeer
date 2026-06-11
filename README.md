# LOUMEER 자사몰

루미어(loumeer) 공식 자사몰. Next.js 14 (App Router) + TypeScript + Tailwind CSS.

## 실행

```bash
npm install
npm run dev   # http://localhost:3000
```

## 구조

| 경로 | 설명 |
|---|---|
| `data/products.ts` | **제품 데이터 단일 소스.** 네이버 스마트스토어와 1:1 매칭. 이 파일만 수정하면 목록/상세/홈 전체에 반영 |
| `data/brand.ts` | 브랜드 정보 (이름, 소개, SNS 링크, CS 안내) |
| `tailwind.config.ts` | 브랜드 컬러 토큰 (clay/cream/sage/ink) — HEX만 바꾸면 전체 테마 변경 |
| `app/` | 홈, `/products`(목록+필터), `/products/[slug]`(상세), `/about` |
| `public/products/` | 제품 이미지 |

## 제품 추가/수정 방법

1. 스마트스토어 제품 페이지에서 이름·가격·소비자가·설명·옵션·이미지를 확인
2. 이미지를 `public/products/`에 저장 (또는 스마트스토어 CDN URL 사용)
3. `data/products.ts`의 `products` 배열에 항목 추가:
   - `naverUrl`에 해당 제품의 스마트스토어 주소 → "구매하기" 버튼이 그 페이지를 새 탭으로 엶
4. 끝. 빌드 시 상세 페이지가 자동 생성됨 (`generateStaticParams`)

> ⚠️ 현재 들어있는 제품은 전부 `[PLACEHOLDER]` 표시된 샘플 데이터입니다.

## 백엔드 없음

결제·장바구니·회원 기능 없이, 모든 구매는 네이버 스마트스토어로 연결됩니다.
