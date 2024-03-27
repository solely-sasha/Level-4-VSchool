import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Main() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <main className={`main ${theme}`}>
      <h1>Main Content</h1>
      <p>Some content should go here.</p>

      <button className="theme-toggle" onClick={toggleTheme}>
        Toggle Theme
      </button>
    </main>
  );
}
