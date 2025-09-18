"use client";
import { useState } from "react";
import { useAuth, useUser } from "@clerk/nextjs";

export const Counter = () => {
  const [count, setCount] = useState(0);

  // Both methods work similarly to conditionally render components
  // (like if user is signed in)
  const { isLoaded, userId, sessionId, getToken } = useAuth(); // Use when need
  // to personalize experiences, or associate data with the user

  // const { isLoaded, isSignedIn, user } = useUser(); // Use if you need the full
  // user object

  if (!isLoaded || !userId) {
    return null;
  }

  return (
    <>
      <p>Count: {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
    </>
  );
};
