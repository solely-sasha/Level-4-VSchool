import React from "react";
import { Link, useNavigate } from "react-router-dom";
import productData from "./productData";

export default function Products() {
  const navigate = useNavigate();
  const products = productData.map((product) => (
    <h3 key={product._id}>
      <Link to={`/products/${product._id}`}>
        {product.name} - ${product.price}
      </Link>
    </h3>
  ));

  return (
    <div>
      <h1>Products</h1>
      <button onClick={() => navigate("/checkout")}>Checkout</button>
      <button onClick={() => navigate("/")}>Return Home</button>
      <button onClick={() => navigate(1)}>go forward 1</button>
      <button onClick={() => navigate(-1)}>go back 1</button>

      <div>
        <h3>{products}</h3>
      </div>
    </div>
  );
}
