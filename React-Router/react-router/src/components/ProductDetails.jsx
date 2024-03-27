import React from "react";
import { useParams } from "react-router-dom";
import productData from "./productData";

export default function ProductDetails() {
  const { productId } = useParams();
  const foundProduct = productData.find((product) => product._id === productId);
  return (
    <div>
      <h1>Product Details </h1>
      <h2>
        {foundProduct.name} - ${foundProduct.price}
      </h2>
      <p>{foundProduct.description}</p>
    </div>
  );
}
