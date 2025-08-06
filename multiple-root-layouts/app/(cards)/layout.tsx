export default function CardsLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <header>This header belongs to cards</header>
      <body>{children}</body>
      <footer>Footer</footer>
    </html>
  );
}
