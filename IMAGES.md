# 이미지·아이콘 교체 가이드

사이트가 실제로 읽는 파일 위치와 표시 자리 전체 목록.
**같은 경로에 같은 파일명으로 덮어쓰면 코드 수정 없이 바로 반영됩니다.**
(경로를 바꾸고 싶으면 `data/images.ts` 한 파일만 수정)

권장 공통 톤: 화이트/아이보리 배경, 자연광, 얼굴 정면 대신 뒷모습·손·사물.
아이콘은 SVG 우선 사용 중 (96×96 viewBox, 민트 원 배경 + #00A878 라인).

---

## 1. 홈 (`/`)

| 자리 | 파일 (public/loumeer_code_ready_asset_pack/) | 현재 크기 | 권장 |
|---|---|---|---|
| 히어로 우측 대표컷 | `home/hero/hero-product-main.png` | 515×475 | **1030×950** (2배), 투명배경 또는 연출컷 |
| 히어로 포인트 아이콘 ① 향으로 덮지 않아요 | `home/hero/icon-odor-absorption.svg` | 96 viewBox | 그대로 OK |
| 〃 ② 속옷 안쪽에 가볍게 | `home/hero/icon-underwear-attach.svg` | 〃 | 〃 |
| 〃 ③ 10cm×10cm 초경량 | `home/hero/icon-lightweight-pad.svg` | 〃 | 〃 |
| 필요한 순간 — 출근 전 (아이콘/사진) | `home/use-moments/icon-commute-before.svg` / `image-commute-before.png` | 사진 640×360 | 사진 **960×600** (16:10 크롭됨) |
| 〃 오래 앉아 있는 날 | `icon-long-sitting.svg` / `image-long-sitting.png` | 〃 | 〃 |
| 〃 중요한 약속 전 | `icon-important-appointment.svg` / `image-important-appointment.png` | 〃 | 〃 |
| 〃 예민한 날 | `icon-sensitive-day.svg` / `image-sensitive-day.png` | 〃 | 〃 |
| 베스트 카드 — 4+1 스타터 | `home/products/image-starter.png` | **92×86 (너무 작음)** | **400×400 이상**, 투명배경 제품컷 |
| 〃 30개입 플랜 | `home/products/image-plan-30.png` | 80×85 | 〃 |
| 〃 60개입 플랜 | `home/products/image-plan-60.png` | 80×86 | 〃 |
| 신뢰 아이콘 4종 (국내최초/ACF/KTL/청창사) | `home/trust/icon-first-in-category.svg`, `icon-acf-material.svg`, `icon-ktl-verified.svg`, `icon-selected-brand.svg` | 96 viewBox | 그대로 OK |
| 하단 CTA 우측 이미지 | `home/cta/image-starter-banner.png` | **416×107 (얇은 띠)** | **880×440** 정도의 연출컷 권장 |

## 2. 제품 상세 (`/products/[slug]`) + 전체 제품 목록 카드

| 자리 | 파일 | 현재 크기 | 권장 |
|---|---|---|---|
| 갤러리 메인 (4+1 기본컷, 목록 카드에도 사용) | `detail/product/image-main-hero.png` | 515×475 | **1030×950** |
| 갤러리/구성선택 썸네일 — 스타터 | `detail/product/image-starter-thumbnail.png` | **92×86 (너무 작음)** | **400×400 이상** |
| 〃 30개입 | `detail/product/image-plan-30-thumbnail.png` | 80×85 | 〃 |
| 〃 60개입 | `detail/product/image-plan-60-thumbnail.png` | 80×86 | 〃 |
| 풉캐스트 콜라보 대표컷 | `public/products/poopcast.jpg` (스토어 원본) | 750×750 | 콜라보 전용컷 있으면 교체 |
| HOW IT WORKS 스텝 아이콘 ①뜯고 ②붙이고 ③버리면 끝 | `detail/how-it-works/icon-step-01-open-pack.svg`, `icon-step-02-attach-inside-underwear.svg`, `icon-step-03-dispose.svg` | 96 viewBox | 그대로 OK |
| "향으로 덮지 않고" 중간 배너 우측 | `detail/product/image-support-banner.png` | **575×146 (얇은 띠)** | **900×600 (3:2)** 연출컷 권장 |
| 이런 날 추천해요 아이콘 4종 | 홈 `home/use-moments/icon-*.svg` 재사용 | — | — |
| 하단 신뢰 아이콘 4종 | `detail/trust/icon-*.svg` (홈과 동일 세트) | — | — |

### ⚠️ 상세 페이지 "상세 정보" 영역 — 네이버 CDN (교체 필수)
지금 스마트스토어 상세 원본 이미지를 네이버 CDN(`shop-phinf.pstatic.net`)에서 직접 불러오고 있어요. **실배포 전 반드시 자체 파일로 교체해야 합니다.**

- 4+1 스타터·풉캐스트: 15장 (`1.jpg`, `후킹.jpg`, `2.gif`~`14.jpg`)
- 먼슬리 30/60: 위 14장 + 전용 3장 (`1~3.png`)

**교체 방법**: 이미지를 받아서 `public/detail-content/starter/01.jpg ...`, `public/detail-content/monthly/01.png ...` 식으로 넣고 `data/products.ts`의 `commonDetailImages` / `monthlyDetailImages` 배열 경로만 바꾸면 됩니다. 파일 주시면 제가 정리해서 넣을게요.

## 3. 브랜드 이야기 (`/about`)

| 자리 | 파일 | 현재 크기 | 권장 |
|---|---|---|---|
| 히어로 우측 제품컷 | `story/hero/image-story-hero.png` | 515×475 | **1030×950** |
| 필라 카드 아이콘 ①고민 ②과학 ③실용 | `story/pillars/icon-problem.svg`, `icon-science.svg`, `icon-practical.svg` | 96 viewBox | 그대로 OK |
| 걸어온 길 카드 하단 스틸컷 | `story/milestones/image-soft-product-stilllife.png` | 252×142 | **560×320** |
| 왜 루미어인가 아이콘 ①자신감 ②사용감 ③검증 | `story/why-loumeer/icon-quiet-confidence.svg`, `icon-lightweight-daily-use.svg`, `icon-why-verified-badge.svg` | 96 viewBox | 그대로 OK |
| 하단 CTA 우측 식물 장식 | `story/cta/image-plant-decoration.png` | 262×169 | **560×360**, 투명배경 |

---

## 우선순위 (다시 제작한다면)
1. **제품컷 4장 크게**: `image-main-hero` + 썸네일 3종(스타터/30/60) — 지금 80~92px라 제일 티 나요
2. **상세 정보 원본 이미지** 자체 호스팅 교체 (네이버 CDN 의존 제거)
3. 필요한 순간 사진 4장, CTA·support 배너 2장
4. 아이콘들은 현재 SVG 그대로 써도 충분해요
