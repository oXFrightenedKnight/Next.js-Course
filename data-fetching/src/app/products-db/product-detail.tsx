"use client";

import { useOptimistic } from "react";
import { removeProduct } from "@/actions/products";
import Link from "next/link";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

export default function ProductsDetail({ products }: { products: Product[] }) {
  const [changedProducts, setOptimisticProducts] = useOptimistic(
    products,
    (currentProducts, productId) => {
      return currentProducts.filter((product) => product.id !== productId);
      // Every product which id doesn't match the deleted product id (productId)
      // stays in the list. "Next, filter out only those whose id doesn't match
      // this one."
    }
  );

  const removeProductById = async (productId: number) => {
    setOptimisticProducts(productId);
    await removeProduct(productId);
  };

  return (
    <ul className="space-y-4 p-4">
      {changedProducts.map((product) => (
        <li key={product.id} className="p-4 bg-white shadow-md rounded-lg text-gray-700">
          <h2 className="text-xl font-semibold">
            <Link href={`/products-db/${product.id}`}>{product.title}</Link>
          </h2>
          <p>{product.description}</p>
          <p className="text-lg font-medium">${product.price}</p>
          <form action={removeProductById.bind(null, product.id)}>
            <button
              type="submit"
              className="px-4 py-2 mt-4 text-white bg-red-500 rounded-md hover:bg-red"
            >
              Delete
            </button>
          </form>
        </li>
      ))}
    </ul>
  );
}
