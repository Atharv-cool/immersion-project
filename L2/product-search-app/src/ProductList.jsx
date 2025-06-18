import React from "react";
import "./Product.css";

function ProductList({ products }) {
  return (
    <div>
      {products.length === 0 && <p>No products found.</p>}
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <h2 className="product-title">{product.title}</h2>
          <p><strong>Price:</strong> ${product.price}</p>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="product-image"
          />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
