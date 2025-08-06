"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css";

const navLinks = [
  { name: "Sign Up", href: "/signup" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthNav() {
  const pathname = usePathname();
  return (
    <nav className="border-b pb-2 mb-4">
      {navLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.name}
            href={link.href}
            className={`mr-4 underline ${isActive ? "text-blue-700 font-semibold" : "text-black"}`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
