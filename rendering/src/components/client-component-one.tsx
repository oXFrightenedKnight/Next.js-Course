"use client";

import { useState } from "react";

export const ClientComponentOne = ({ children }: { children: React.ReactNode }) => {
  const [age, setAge] = useState(15);

  return (
    <>
      <h1>Client component one {age}</h1>
      {children}
    </>
  );
};
