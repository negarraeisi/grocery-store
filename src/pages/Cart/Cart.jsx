import { useCart } from "../../context/CartContext";
import CartItem from "../../components/CartItem/CartItem";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="m-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onDelete={removeFromCart}
            onIncrease={increaseQuantity}
            onDecrease={decreaseQuantity}
          />
        ))
      )}
      <div className="mt-8 flex justify-between items-center border-t pt-4">
            <h2 className="text-2xl font-semibold">Total:</h2>
            <span className="text-2xl font-bold text-green-700">${total.toFixed(2)}</span>
          </div>

          <button className="mt-6 bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800">
            Checkout
          </button>
    </div>
  );
}

export default Cart;