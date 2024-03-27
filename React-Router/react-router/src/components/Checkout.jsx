import React from "react";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Checkout</h1>
      <button onClick={() => navigate("/products")}>go to products page</button>
      <button onClick={() => navigate(-1)}>go back 1</button>
      <button onClick={() => navigate(-2)}>go back 2</button>
    </div>
  );
}
