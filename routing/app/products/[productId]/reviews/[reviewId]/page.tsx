import { notFound, redirect } from "next/navigation";

export default async function ProductReview({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;
  if (parseInt(reviewId) > 1000) {
    // notFound();
    redirect("/products"); // Automatically redirects you to specified URL
  }
  return (
    <h1>
      {reviewId} ID for {productId}
    </h1>
  );
}
