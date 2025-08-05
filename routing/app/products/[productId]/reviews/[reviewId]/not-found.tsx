"use client";

// Next.js uses the closest Not-Found error file in relation to the file where its used.

import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();

  const productId = pathname.split("/")[2];
  const reviewId = pathname.split("/")[4];
  return (
    <h1>
      Review {reviewId} not found for product {productId}
    </h1>
  );
}
