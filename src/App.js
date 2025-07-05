import Header from "./components/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home/Home";
import Cart from "../src/pages/Cart/Cart";
import Store from "../src/pages/Store/Store";
import Footer from "./components/footer/Footer";
import ProductPage from "./pages/Produt/ProductPage";
import { CartProvider } from "./context/CartContext";
import { ToastProvider } from "./context/ToastContext";

function App() {
  return (
    <BrowserRouter basename="/grocery-store">
      <ToastProvider>
        <CartProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/store" element={<Store />} />
            <Route path="/product/:id" element={<ProductPage />} />
          </Routes>
          <Footer />
        </CartProvider>
      </ToastProvider>
    </BrowserRouter>
  );
}

export default App;
