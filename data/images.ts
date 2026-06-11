/**
 * 사이트 이미지/아이콘 경로 — public/loumeer_code_ready_asset_pack 기준.
 * 매핑 출처: loumeer_code_ready_asset_pack/README.md, asset-manifest.json
 */
const pack = "/loumeer_code_ready_asset_pack";

export const siteImages = {
  // ── 홈 ──────────────────────────────────────────────
  hero: `${pack}/home/hero/hero-product-main.png`,
  heroIcons: {
    absorption: `${pack}/home/hero/icon-odor-absorption.svg`,
    attach: `${pack}/home/hero/icon-underwear-attach.svg`,
    lightweight: `${pack}/home/hero/icon-lightweight-pad.svg`,
  },
  moments: {
    commute: {
      icon: `${pack}/home/use-moments/icon-commute-before.svg`,
      image: `${pack}/home/use-moments/image-commute-before.png`,
    },
    sitting: {
      icon: `${pack}/home/use-moments/icon-long-sitting.svg`,
      image: `${pack}/home/use-moments/image-long-sitting.png`,
    },
    promise: {
      icon: `${pack}/home/use-moments/icon-important-appointment.svg`,
      image: `${pack}/home/use-moments/image-important-appointment.png`,
    },
    sensitive: {
      icon: `${pack}/home/use-moments/icon-sensitive-day.svg`,
      image: `${pack}/home/use-moments/image-sensitive-day.png`,
    },
  },
  products: {
    starter: `${pack}/home/products/image-starter.png`,
    plan30: `${pack}/home/products/image-plan-30.png`,
    plan60: `${pack}/home/products/image-plan-60.png`,
  },
  trustIcons: {
    first: `${pack}/home/trust/icon-first-in-category.svg`,
    acf: `${pack}/home/trust/icon-acf-material.svg`,
    ktl: `${pack}/home/trust/icon-ktl-verified.svg`,
    selected: `${pack}/home/trust/icon-selected-brand.svg`,
  },
  cta: `${pack}/home/cta/image-starter-banner.png`,

  // ── 상세 ────────────────────────────────────────────
  detail: {
    mainHero: `${pack}/detail/product/image-main-hero.png`,
    thumbStarter: `${pack}/detail/product/image-starter-thumbnail.png`,
    thumb30: `${pack}/detail/product/image-plan-30-thumbnail.png`,
    thumb60: `${pack}/detail/product/image-plan-60-thumbnail.png`,
    supportBanner: `${pack}/detail/product/image-support-banner.png`,
    steps: [
      `${pack}/detail/how-it-works/icon-step-01-open-pack.svg`,
      `${pack}/detail/how-it-works/icon-step-02-attach-inside-underwear.svg`,
      `${pack}/detail/how-it-works/icon-step-03-dispose.svg`,
    ],
  },

  // ── 브랜드 스토리 ───────────────────────────────────
  story: {
    hero: `${pack}/story/hero/image-story-hero.png`,
    pillars: {
      problem: `${pack}/story/pillars/icon-problem.svg`,
      science: `${pack}/story/pillars/icon-science.svg`,
      practical: `${pack}/story/pillars/icon-practical.svg`,
    },
    stilllife: `${pack}/story/milestones/image-soft-product-stilllife.png`,
    why: {
      quiet: `${pack}/story/why-loumeer/icon-quiet-confidence.svg`,
      light: `${pack}/story/why-loumeer/icon-lightweight-daily-use.svg`,
      verified: `${pack}/story/why-loumeer/icon-why-verified-badge.svg`,
    },
    plant: `${pack}/story/cta/image-plant-decoration.png`,
  },

  // 철학/기타 (실제 제품컷)
  philosophy: `${pack}/detail/product/image-support-banner.png`,
};
