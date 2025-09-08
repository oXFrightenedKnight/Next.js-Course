"use client";

import { useState } from "react";

export const ClientComponentTwo = () => {
  const [age, setAge] = useState(33);

  return <h1>Client component two {age}</h1>;
};
