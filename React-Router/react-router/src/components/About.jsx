import React from "react";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  return (
    <div style={{ padding: 20 }}>
      <h2>About View</h2>
      <p>some information goes here.</p>
      <button onClick={() => navigate("/")}>Return Home</button>
      <button onClick={() => navigate(-1)}>go back 1</button>
      <button onClick={() => navigate(1)}>go forward 1</button>
    </div>
  );
}
