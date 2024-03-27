import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <header>
        <h1>Home</h1>
        <button onClick={() => navigate("/products")}>
          go to products page
        </button>
        <button onClick={() => navigate(-1)}>go back 1</button>
        <button onClick={() => navigate(1)}>go forward 1</button>
        <button onClick={() => navigate(2)}>go forward 2</button>
      </header>
    </div>
  );
}
