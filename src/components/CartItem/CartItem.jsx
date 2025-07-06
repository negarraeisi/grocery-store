function CartItem({ item, onDelete, onIncrease, onDecrease }) {
  return (
    <div className="flex m-4 gap-6 border-b-2 p-4 items-center shadow-sm">
      <img
        className="rounded-lg size-20 object-cover"
        src={item.imageUrl.replace(/^\//, "")}
        alt={item.name}
      />
      <div className="flex flex-col gap-1 w-48">
        <h1 className="text-lg font-semibold">{item.name}</h1>
        <h4 className="text-green-700 font-medium">${item.price}</h4>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => onDecrease(item.id)}
          className="px-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          −
        </button>
        <span className="px-2">{item.quantity}</span>
        <button
          onClick={() => onIncrease(item.id)}
          className="px-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          +
        </button>
      </div>
      <button
        className="bg-red-700 text-white px-3 py-1 rounded hover:bg-red-900 ml-auto"
        onClick={() => onDelete(item.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default CartItem;
