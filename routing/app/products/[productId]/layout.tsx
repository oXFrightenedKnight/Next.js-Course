// NESTED LAYOUT

export default function ProductDetailsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <h2>This page is about product</h2>
    </>
  );
}
