
import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "80px 20px" }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for does not exist.</p>
      <Link to="/" style={{ color: "#007bff", fontWeight: "bold" }}>← Back to Home</Link>
    </div>
  );
}
