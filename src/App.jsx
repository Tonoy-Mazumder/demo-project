import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  const [products, setProducts] = useState([]);
  const [cartCount, setCartCount] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data || []));
  }, []);

  return (
    <BrowserRouter>
      <Navbar cartCount={cartCount} />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              products={products}
              cartCount={cartCount}
              setCartCount={setCartCount}
            />
          }
        />

        <Route path="/cart" element={<Cart cartCount={cartCount} setCartCount={setCartCount} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
