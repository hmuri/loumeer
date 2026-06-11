import type { Config } from "tailwindcss";

/**
 * LOUMEER 디자인 토큰 — "조용하고 깨끗한 웰니스 생활 브랜드"
 * - 배경은 아이보리 화이트, 그린은 버튼·라벨·가격 강조에만 (면적 최소화)
 * - fog  : 배경/라인 뉴트럴 (#FAFAF7 베이스, #E9E9E4 라인)
 * - mint : 브랜드 그린 #12B886 (포인트 전용), soft mint #E8F7F1
 * - ink  : 텍스트 (#171717 / #777A75)
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fog: {
          50: "#FAFAF7",
          100: "#F7F8F5",
          200: "#EFEFEA",
          300: "#E9E9E4",
        },
        /* 브랜드 그린 #00A878 — 제작 에셋(loumeer_hero_assets) 기준 */
        mint: {
          50: "#E9F8F2",
          100: "#D2F1E5",
          200: "#A6E4CD",
          300: "#66D0AB",
          400: "#26BC8E",
          500: "#00A878",
          600: "#009168",
          700: "#007A57",
        },
        blue: {
          50: "#EDF2FB",
          500: "#3B5BDB",
        },
        ink: {
          400: "#777A75",
          500: "#5C5F5A",
          700: "#2E302C",
          900: "#171717",
        },
      },
      fontFamily: {
        sans: [
          "Pretendard Variable",
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "Apple SD Gothic Neo",
          "Segoe UI",
          "sans-serif",
        ],
      },
      borderRadius: {
        blob: "1.25rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(23,23,23,0.04), 0 8px 24px rgba(23,23,23,0.05)",
        lift: "0 12px 32px rgba(23,23,23,0.09)",
      },
    },
  },
  plugins: [],
};
export default config;
