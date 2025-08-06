// METADATA IS NOT GOING TO WORK IN CLIENT DIRECTORIES
// To solve, move any client side logic from page.tsx to server ([element].tsx)

// Импортируем тип Metadata из Next.js.
// Этот тип описывает, какие данные можно вернуть в функции generateMetadata.
import { Metadata } from "next";

// Объявляем тип Props — это объект с полем params,
// внутри которого есть productId (из URL), и он строка.
type Props = { params: { productId: string } };

// Экспортируем специальную функцию generateMetadata, которую вызывает Next.js
// ДО отрисовки страницы, чтобы сгенерировать <title> и другие мета-теги в <head>.
export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  // Извлекаем значение productId из объекта params
  const id = params.productId;
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Windows ${id}`);
    }, 100);
  });

  // Возвращаем объект метаданных, в данном случае — только title
  // Например, для /products/123 это будет <title>Product 123</title>
  return {
    title: `Product ${title}`,
  };
};

// Экспортируем компонент страницы по умолчанию.
// Next.js вызовет его, когда пользователь зайдёт на /products/[productId]
export default async function ProductDetails({ params }: Props) {
  // Извлекаем productId из URL-параметров
  const productId = params.productId;

  // Отображаем заголовок с этим ID
  // Например: <h1>Product details about 123</h1>
  return <h1>Product details about Windows {productId}</h1>;
}
