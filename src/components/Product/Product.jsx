import React from "react";
const apiURL = "https://grocery-store-api-tn34.onrender.com";

function Product({ product }) {
  return (
    <div className="m-4 shadow-lg rounded-lg">
      <img className="rounded-lg object-cover h-48 w-full" src={`${apiURL}${product.imageUrl}`} alt={product.name}  />
      <div>
        <h3>{product.name}</h3>
        <span>{product.price}$</span>
      </div>
    </div>
  );
}

export default Product;
