import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../services/Api";
import { useCart } from "../../context/CartContext";
import { useToast } from "../../context/ToastContext";

function ProductPage() {
  const params = useParams();
  const [product, setProduct] = useState();
  const { addToCart, increaseQuantity, decreaseQuantity, getItemQuantity } =
    useCart();
  const { showToast } = useToast();
  const apiURL = "https://grocery-store-api-tn34.onrender.com";

  useEffect(() => {
    getProduct(params.id).then((data) => {
      setProduct(data);
    });
  }, [params.id]);

  const quantity = product ? getItemQuantity(product.id) : 0;

  const handleAddToCart = () => {
    addToCart(product);
    showToast(`${product.name} added to cart`);
  };

  return !product ? (
    <div>Loading...</div>
  ) : (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 m-8">
      <div className="w-full h-96 overflow-hidden rounded-lg shadow">
        <img
          className="w-full h-full object-cover"
          src={`${process.env.PUBLIC_URL}/${product.imageUrl.replace(/^\/+/, "")}`}
          alt={product.name}
        />
      </div>

      <div className="p-6 bg-white rounded-lg shadow flex flex-col gap-4">
        <h1 className="text-2xl md:text-4xl font-bold">{product.name}</h1>
        <span className="text-xl text-green-600">{product.price}$</span>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          tenetur eum dolore totam nihil quisquam quasi velit? Magni quasi sint,
          numquam saepe veritatis rem ad nobis aliquam blanditiis enim sit?
        </p>

        {quantity === 0 ? (
          <button
            onClick={handleAddToCart}
            className="bg-blue-950 hover:bg-blue-800 text-white py-2 px-4 rounded-xl transition-colors"
          >
            Add to Cart
          </button>
        ) : (
          <div className="flex items-center gap-4">
            <button
              onClick={() => decreaseQuantity(product.id)}
              className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
            >
              -
            </button>
            <span className="font-semibold">{quantity}</span>
            <button
              onClick={() => increaseQuantity(product.id)}
              className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductPage;
