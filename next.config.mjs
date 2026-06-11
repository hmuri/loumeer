/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    // 구버전 제품 URL → 통합 페이지
    return [
      { source: "/products/pad-monthly-30", destination: "/products/pad-monthly", permanent: true },
      { source: "/products/pad-monthly-60", destination: "/products/pad-monthly", permanent: true },
      { source: "/products/pad-4plus1-x:n", destination: "/products/pad-4plus1", permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      // 네이버 스마트스토어/인스타그램 CDN 이미지 사용 시
      { protocol: "https", hostname: "shop-phinf.pstatic.net" },
      { protocol: "https", hostname: "shopping-phinf.pstatic.net" },
    ],
  },
};

export default nextConfig;
