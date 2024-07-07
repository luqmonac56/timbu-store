import "./App.css";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  const data = [
    {
      image: "../src/assets/cream.png",
      price: "₦12,000",
      description: "Touch bright & Clear Cream | 150ml",
    },
    {
      image: "../src/assets/cream.png",
      price: "₦12,000",
      description: "Touch bright & Clear Cream | 150ml",
    },
    {
      image: "../src/assets/cream.png",
      price: "₦12,000",
      description: "Touch bright & Clear Cream | 150ml",
    },
    {
      image: "../src/assets/cream.png",
      price: "₦12,000",
      description: "Touch bright & Clear Cream | 150ml",
    },
    {
      image: "../src/assets/cream.png",
      price: "₦12,000",
      description: "Touch bright & Clear Cream | 150ml",
    },
    {
      image: "../src/assets/cream.png",
      price: "₦12,000",
      description: "Touch bright & Clear Cream | 150ml",
    },
    {
      image: "../src/assets/cream.png",
      price: "₦12,000",
      description: "Touch bright & Clear Cream | 150ml",
    },
    {
      image: "../src/assets/cream.png",
      price: "₦12,000",
      description: "Touch bright & Clear Cream | 150ml",
    },
  ];
  return (
    <>
      <BrowserRouter>
        <Header />
        <section>
          <Routes>
            <Route index element={<Homepage data={data} />} />
            <Route path="cart" element={<Cart data={data} />} />
            <Route path="checkout" element={<Checkout/>} />
          </Routes>
        </section>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
