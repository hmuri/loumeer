/**
 * 사이트 기본 URL — 도메인 확정 시 여기만 바꾸면
 * sitemap / robots / og / canonical 전부 반영됩니다.
 * (배포 환경변수 NEXT_PUBLIC_SITE_URL이 있으면 그걸 우선 사용)
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://loumeer.kr";
