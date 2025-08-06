"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import "./styles.css";

const navLinks = [
  { name: "Sign Up", href: "/signup" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const [input, setInput] = useState("");
  const pathname = usePathname();
  return (
    <div>
      <div>
        <input value={input} onChange={(e) => setInput(e.target.value)}></input>
        {/*This input will persist across all elements that have this layout. Think of it as
        if only the elements would change when you redirect the user to another element, 
        while the layout stays the same*/}
      </div>
      {navLinks.map((link) => {
        const isActive =
          pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/");

        return (
          <Link href={link.href} key={link.name}>
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
