import { createContext } from "react";

export type ThemeModeType = "dark" | "light" 

export type ThemeContextType = {
  theme: { mode: ThemeModeType };
  toggleTheme: ({ newTheme }: { newTheme: { mode: ThemeModeType } }) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: { mode: "dark" },
  toggleTheme: () => {},
});