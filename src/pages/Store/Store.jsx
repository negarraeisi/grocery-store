import { useEffect, useState } from "react";
import Product from "../../components/Product/Product";
import { Link } from "react-router-dom";
import { getProducts } from "../../services/Api";
function Store() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then((result) => {
      setProducts(result);
    });
  }, []);
  return (
    <div className="grid grid-cols-4">
      {products.map((item) => (
        <Link key={item.id} to={`/product/${item.id}`}>
          <Product product={item} />
        </Link>
      ))}
    </div>
  );
}

export default Store;
