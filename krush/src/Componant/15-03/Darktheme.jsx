import React, { createContext, useContext, useState } from "react";
// import "./style.css";

const ThemeContext = createContext();

const useTheme = () => useContext(ThemeContext);

const Darktheme = () => {
  const [theme, setTheme] = useState("yellow");
  const [textColor, setTextColor] = useState("#333");

  const handleDarkTheme = () => {
    setTheme("dark");
    setTextColor("#fff"); 
  };

  const handleLightTheme = () => {
    setTheme("yellow");
    setTextColor("#333");
  };

  return (
    <div className={theme === "dark" ? "Dark" : "Dark"}>
      <h1 style={{ color: textColor }}> Theme change</h1>
      <button onClick={handleDarkTheme}>Dark Theme</button>
      <button onClick={handleLightTheme}>Light Theme</button>

      <ThemeContext.Provider value={{ theme }}>
        <Themebody />
      </ThemeContext.Provider>
    </div>
  );
};

const Themebody = () => {
  const { theme } = useTheme();

  document.body.style.backgroundColor = theme === "dark" ? "#333" : "#fff";

  return null;
};

export default Darktheme;