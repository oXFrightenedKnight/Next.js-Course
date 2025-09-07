import { Suspense } from "react"; // without suspense, all content in the page will
// only load whenever everything has fetched. That may take too long so we use Streaming
// which in simple words loads and displays component whenever it is ready, without
// waiting for the whole page.

import { Product } from "@/components/product";
import { Reviews } from "@/components/reviews";

export default function ProductReviews() {
  return (
    <div>
      <h1>Product reviews</h1>
      <Suspense fallback={<p>Loading product details...</p>}>
        <Product></Product>
      </Suspense>
      <Suspense fallback={<p>Loading reviews...</p>}>
        <Reviews></Reviews>
      </Suspense>
    </div>
  );
}
