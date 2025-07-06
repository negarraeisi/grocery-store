import { useEffect, useState } from "react";
import { getProducts } from "../../services/Api";
import { Link } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  const featured = products.slice(0, 4);
  const deals = products.filter((p) => p.price < 10).slice(0, 4);
  const newArrivals = products.slice(-4);

  const renderSection = (title, items) => (
    <section className="my-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <div className="bg-white rounded-lg shadow hover:shadow-md transition p-4 flex flex-col items-center">
              <img
                src={product.imageUrl.replace(/^\//, "")}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-green-600 font-medium">${product.price}</p>
              <button className="mt-2 bg-blue-950 hover:bg-blue-800 text-white py-1 px-3 rounded">
                View
              </button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );

  return (
    <div className="p-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-green-700">
          Welcome to Grocery Shop!
        </h1>
        <p className="text-gray-600 text-lg mt-2">
          Fresh, organic, and handpicked for you.
        </p>
      </div>

      {renderSection("🌟 Featured Products", featured)}

      {renderSection("🛒 Best Deals Under $10", deals)}

      {renderSection("🆕 New Arrivals", newArrivals)}

      <div className="mt-16 bg-green-100 p-8 text-center rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-3">Ready to explore more?</h2>
        <Link to="/store">
          <button className="bg-green-700 hover:bg-green-800 text-white py-2 px-6 rounded-lg text-lg">
            Browse All Products
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
