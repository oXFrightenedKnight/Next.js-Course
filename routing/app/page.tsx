// page.tsx in app folder automatically maps to your site's root URL (e.g localhost:3000)

// routes are directly tied to their folder name in the app directory

import Link from "next/link"; // Links are main way to redirect users to another page
// instead of <a>

export default function Home() {
  return (
    <>
      <h1>Welcome to home page</h1>
      <Link href="/blog">Blog</Link>
      <br></br>
      <Link href="/products">Product</Link>
      <Link href="articles/breaking-news?lang=en">Read in English</Link>
      <Link href="articles/breaking-news?lang=fr">Read in French</Link>
    </>
  );
}
