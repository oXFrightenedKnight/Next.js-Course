// "use client";
import { useParams, useSearchParams } from "next/navigation"; // Use when working with client
// const params = useParams();
// const searchParams = useSearchParams();

// Most of the time, you should use page.tsx as a server component, while importing client
// components to it that handle user interactions.
// layout.tsx only has access to params (no searchParams)

import Link from "next/link";

export default function NewsArticle({
  params,
  searchParams,
}: {
  params: { articleId: string };
  searchParams: { lang?: "en" | "fr" };
}) {
  const { articleId } = params;
  const { lang = "en" } = searchParams;

  return (
    <div>
      <h1>Article {articleId}</h1>
      <p>Reading in {lang}</p>

      <div>
        <Link href={`/articles/${articleId}?lang=en`}>English</Link>
        <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
      </div>
    </div>
  );
}
