/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // 네이버 스마트스토어/인스타그램 CDN 이미지 사용 시
      { protocol: "https", hostname: "shop-phinf.pstatic.net" },
      { protocol: "https", hostname: "shopping-phinf.pstatic.net" },
    ],
  },
};

export default nextConfig;
