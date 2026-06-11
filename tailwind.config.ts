import type { Config } from "tailwindcss";

/**
 * LOUMEER 브랜드 디자인 토큰 (실제 브랜드 컬러 기반)
 * - mint : 메인 컬러 #0FBB81 — 패키지/뱃지의 그린. 상쾌함·소취
 * - blue : 포인트 컬러 #114FEE — 공식몰 인증 뱃지 블루. 신뢰
 * - fog  : 뉴트럴 배경 — 화이트/라이트그레이 패키지 무드
 * - ink  : 텍스트 블랙 — 로고/타이포
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
          50: "#FAFAF9",
          100: "#F4F4F2",
          200: "#E9E9E6",
          300: "#DBDBD7",
        },
        mint: {
          50: "#E9FBF4",
          100: "#CFF6E6",
          200: "#A2EDCF",
          300: "#5FDDAC",
          400: "#27CB90",
          500: "#0FBB81",
          600: "#0C9D6C",
          700: "#0B7B56",
        },
        blue: {
          50: "#EBF0FE",
          100: "#D3DFFD",
          200: "#A8BFFA",
          300: "#7B9CF6",
          400: "#4674F2",
          500: "#114FEE",
          600: "#0E41C6",
          700: "#0C349C",
        },
        ink: {
          400: "#8B8B93",
          500: "#5C5C64",
          700: "#2E2E34",
          900: "#161619",
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
        soft: "0 8px 30px rgba(22, 22, 25, 0.07)",
        lift: "0 14px 40px rgba(15, 187, 129, 0.25)",
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
