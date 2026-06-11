import type { Config } from "tailwindcss";

/**
 * LOUMEER 브랜드 디자인 토큰
 * - clay   : 메인 컬러 (따뜻한 테라코타/피치 — 정감 가는 리빙 브랜드 무드)
 * - cream  : 바탕색 (포근한 크림)
 * - sage   : 보조 포인트 (차분한 세이지 그린)
 * - ink    : 텍스트 (따뜻한 다크브라운)
 *
 * 인스타그램/실제 브랜드 컬러 확정 시 이 파일의 HEX만 바꾸면 사이트 전체에 반영됩니다.
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
        cream: {
          50: "#FDFAF5",
          100: "#FBF6EE",
          200: "#F5EBDD",
          300: "#EEDFCB",
        },
        clay: {
          50: "#FDF1EC",
          100: "#FAE0D6",
          200: "#F4C2AE",
          300: "#EEA487",
          400: "#E8866B",
          500: "#DF6E4F",
          600: "#C9573A",
          700: "#A6452E",
        },
        sage: {
          100: "#E8F0E8",
          200: "#CFE0D0",
          300: "#AECBB2",
          400: "#8FB597",
          500: "#6F9B79",
        },
        ink: {
          400: "#8C7F75",
          500: "#6B5D52",
          700: "#4A3F36",
          900: "#332B24",
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
        blob: "2rem",
      },
      boxShadow: {
        soft: "0 8px 30px rgba(74, 63, 54, 0.08)",
        lift: "0 14px 40px rgba(223, 110, 79, 0.18)",
      },
      keyframes: {
        "float-y": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "float-y": "float-y 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
