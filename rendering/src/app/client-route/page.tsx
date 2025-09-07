"use client";
import { useTheme } from "@/components/theme-provider";
// import { serverSideFunction } from "@/utils/server-utils"; // this will throw an error
//                                                            due to installed "server-only"
// It protects your code and prevents accidental server code leaks to client side.

export default function ClientRoutePage() {
  // const { result } = serverSideFunction();
  const theme = useTheme();

  return <h1 style={{ color: theme.colors.primary }}>Client route</h1>;
}

// WARNING! If you try to use third-party packages on a server component it might break!
// To avoid that, create a separate client component and import it to server component.
