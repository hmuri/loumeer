# LOUMEER Code-Ready Asset Pack

이 폴더는 현재 확정된 3개 시안(메인 / 상세 / 브랜드 스토리)에 들어가는 **아이콘과 이미지들을 코드에 바로 꽂을 수 있게** 정리한 패키지입니다.

## 포함 페이지
- `reference-pages/home-page-mockup.png`
- `reference-pages/detail-page-mockup.png`
- `reference-pages/story-page-mockup.png`

## 빠른 사용 순서
1. `asset-manifest.json` 을 먼저 열어 페이지별/섹션별 매핑을 확인합니다.
2. 실제 코드에서는 **PNG 파일을 바로 사용**하면 됩니다.
3. 해상도 독립형 아이콘이 필요하면 같은 이름의 `SVG` 파일을 사용하면 됩니다.
4. 컬러/라운드 값은 `design-tokens.json` 을 참고하면 됩니다.

---

## 1) 메인 페이지(Home)

### Hero
- 오른쪽 대표 제품 이미지: `home/hero/hero-product-main.png`
- 왼쪽 하단 3개 포인트 아이콘
  - 향으로 덮지 않아요 → `home/hero/icon-odor-absorption.png`
  - 속옷 안쪽에 가볍게 → `home/hero/icon-underwear-attach.png`
  - 10cm × 10cm 초경량 패드 → `home/hero/icon-lightweight-pad.png`

### 루미어가 필요한 순간
카드 4개 구성입니다. 각 카드에 **아이콘 1개 + 이미지 1개**를 같이 넣으면 됩니다.
- 출근 전
  - 아이콘: `home/use-moments/icon-commute-before.png`
  - 이미지: `home/use-moments/image-commute-before.png`
- 오래 앉아 있는 날
  - 아이콘: `home/use-moments/icon-long-sitting.png`
  - 이미지: `home/use-moments/image-long-sitting.png`
- 중요한 약속 전
  - 아이콘: `home/use-moments/icon-important-appointment.png`
  - 이미지: `home/use-moments/image-important-appointment.png`
- 예민한 날
  - 아이콘: `home/use-moments/icon-sensitive-day.png`
  - 이미지: `home/use-moments/image-sensitive-day.png`

### BEST PRODUCT
- 4+1 스타터 → `home/products/image-starter.png`
- 30개입 플랜 → `home/products/image-plan-30.png`
- 60개입 플랜 → `home/products/image-plan-60.png`

### 안심하고 사용할 수 있도록 (Trust)
- 국내 최초 방귀냄새 제거패드 → `home/trust/icon-first-in-category.png`
- 활성탄소섬유 ACF → `home/trust/icon-acf-material.png`
- KTL 시험 인증 완료 → `home/trust/icon-ktl-verified.png`
- 청년창업사관학교 선정 → `home/trust/icon-selected-brand.png`

### 하단 CTA 배너
- 오른쪽 이미지: `home/cta/image-starter-banner.png`

---

## 2) 상세 페이지(Detail)

### 상단 제품 영역
- 메인 제품 이미지: `detail/product/image-main-hero.png`
- 썸네일 3개
  - 스타터: `detail/product/image-starter-thumbnail.png`
  - 30개입: `detail/product/image-plan-30-thumbnail.png`
  - 60개입: `detail/product/image-plan-60-thumbnail.png`

### HOW IT WORKS
- 01 뜯고 → `detail/how-it-works/icon-step-01-open-pack.png`
- 02 붙이고 → `detail/how-it-works/icon-step-02-attach-inside-underwear.png`
- 03 버리면 끝 → `detail/how-it-works/icon-step-03-dispose.png`

### 중간 설명 배너
- 오른쪽 설명 이미지: `detail/product/image-support-banner.png`

### 이런 날 추천해요
- 아이콘/이미지는 메인 페이지 `home/use-moments/` 와 동일하게 사용하면 됩니다.

### 하단 신뢰 섹션
- 아이콘은 `detail/trust/` 안의 파일들을 그대로 사용하면 됩니다.

---

## 3) 브랜드 스토리(Story)

### 상단 Hero
- 오른쪽 제품 이미지: `story/hero/image-story-hero.png`

### 3개 핵심 가치 카드(Pillars)
- 누구나 겪지만 쉽게 말하지 못한 고민 → `story/pillars/icon-problem.png`
- 향수가 아니라 과학으로 해결하는 방식 → `story/pillars/icon-science.png`
- 민망함을 덜어주는 작은 실용적인 솔루션 → `story/pillars/icon-practical.png`

### Milestones / Company 박스 장식 이미지
- 제품 스틸 라이프: `story/milestones/image-soft-product-stilllife.png`

### 왜 루미어인가
- 조용한 자신감 → `story/why-loumeer/icon-quiet-confidence.png`
- 가벼운 사용감 → `story/why-loumeer/icon-lightweight-daily-use.png`
- 믿을 수 있는 검증 → `story/why-loumeer/icon-why-verified-badge.png`

### 하단 CTA 장식 이미지
- 오른쪽 식물 장식: `story/cta/image-plant-decoration.png`

---

## 권장 구현 팁
- 아이콘은 가능하면 `SVG`를 우선 사용하세요.
- 카드 이미지/배너 이미지는 `PNG` 그대로 사용하세요.
- 이미지 라운드는 시안과 맞추려면 18px~28px 정도가 적당합니다.
- 컬러 값은 `design-tokens.json` 참고.

## 파일 구조 참고
패키지 구조는 **페이지 > 섹션 단위**로 나눠져 있어서, 폴더 이름만 봐도 어느 위치에 넣을지 바로 알 수 있게 구성했습니다.
