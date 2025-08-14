"use client";

import { useState } from "react";

export default function DashPage() {
  console.log("Dashboard");
  const [name, setName] = useState("");

  return (
    <div>
      <h1>This is dashboard page</h1>
      <input value={name} onChange={(e) => setName(e.target.value)}></input>
      <h2>Hello, {name}!</h2>
    </div>
  );
}
