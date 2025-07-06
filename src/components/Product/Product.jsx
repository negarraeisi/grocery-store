import React from "react";

function Product({ product }) {
  return (
    <div className="m-4 shadow-lg rounded-lg">
      <img
        className="rounded-lg object-cover h-48 w-full"
        src={`${process.env.PUBLIC_URL}/${product.imageUrl.replace(/^\/+/, "")}`}
        alt={product.name}
      />
      <div>
        <h3>{product.name}</h3>
        <span>{product.price}$</span>
      </div>
    </div>
  );
}

export default Product;
