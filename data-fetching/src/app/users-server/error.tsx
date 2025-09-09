"use client";
import { useEffect } from "react";

export default function ErrorPage({ error }: { error: Error }) {
  useEffect(() => {
    console.error(`${error}`);
  }, [error]);
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text2xl text-red-500">Error fetching users data</div>
    </div>
  );
}

// Same principle as you would use with normal pages. Error.tsx and laoding.tsx
// handle everything for you.
