import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Footer() {
  const { theme } = useContext(ThemeContext);
  return (
    <footer className={`footer ${theme}`}>
      <p>Footer Content</p>
    </footer>
  );
}
