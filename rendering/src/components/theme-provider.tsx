"use client";

import { useContext, createContext } from "react";

type Theme = {
  colors: {
    primary: string;
    secondary: string;
  };
};

const defaultTheme: Theme = {
  colors: {
    primary: "#007bff",
    secondary: "6c757d",
  },
};

const themeContext = createContext<Theme>(defaultTheme);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <themeContext.Provider value={defaultTheme}>{children}</themeContext.Provider>;
};

export const useTheme = () => useContext(themeContext);
