import { createContext, useContext, useState } from "react";

const themeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("Light");
  const toggleTheme = () => {
    setTheme((prev) => (prev === "Light" ? "Dark" : "Light"));
    document.querySelector("html").classList.toggle("dark");
  };
  return (
    <themeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </themeContext.Provider>
  );
};

const useTheme = () => {
  console.log(themeContext);
  return useContext(themeContext);
};

export { ThemeContextProvider, themeContext, useTheme };
