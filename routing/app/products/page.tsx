import Link from "next/link";

export default function Product() {
  const productId = 13;

  return (
    <>
      <h1>Product List</h1>
      <h2>
        <Link href="/products/98">Windows 98</Link>
      </h2>
      <h2>
        <Link href="/products/11">Windows 11</Link>
      </h2>
      <h2>
        <Link href="/products/12" replace>
          Windows 12
        </Link>
      </h2>
      <h2>
        <Link href={`/products/${productId}`}>Windows 13</Link>
      </h2>
      <Link href="/">Home</Link>
    </>
  );
}
