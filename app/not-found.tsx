import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-md flex flex-col items-center py-32 text-center">
      <p className="text-5xl">🫥</p>
      <h1 className="mt-4 text-2xl font-extrabold text-ink-900">
        앗, 페이지를 찾지 못했어요
      </h1>
      <p className="mt-2 text-ink-500">
        주소가 바뀌었거나 사라진 페이지인 것 같아요.
      </p>
      <Link href="/" className="btn-primary mt-8">
        홈으로 돌아가기
      </Link>
    </section>
  );
}
