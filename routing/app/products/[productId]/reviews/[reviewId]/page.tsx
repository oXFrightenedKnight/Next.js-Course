import { notFound, redirect } from "next/navigation";

// Функция случайного числа
function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

// Серверный компонент
export default function ProductReview({
  params,
}: {
  params: { productId: string; reviewId: string }; // ✅ убрали Promise
}) {
  //const random = getRandomInt(5);

  //if (random === 1) {
  //throw new Error("Error loading");
  //}

  const { productId, reviewId } = params;

  if (parseInt(reviewId) > 1000) {
    // notFound(); // Выкидывает 404 страницу
    redirect("/products"); // ✅ редирект, если reviewId > 1000
  }

  return (
    <h1>
      {reviewId} ID for {productId}
    </h1>
  );
}
