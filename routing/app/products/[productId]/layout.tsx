// NESTED LAYOUT

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function ProductDetailsLayout({ children }: { children: React.ReactNode }) {
  const random = getRandomInt(5);

  if (random === 1) {
    throw new Error("Error loading product");
  }

  return (
    <>
      {children}
      <h2>This page is about product</h2>
    </>
  );
}
