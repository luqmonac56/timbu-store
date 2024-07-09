import "./App.css";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import cream from "../src/assets/cream.png";
import vitaminC from "../src/assets/Vitamin-C-13-Serum.png";
import serum from "../src/assets/serum.png";
import cera from "../src/assets/WhatsApp-Image.png";
import laroche from "../src/assets/La-Roche.png";
import coco from "../src/assets/coco.png";
import tikat from "../src/assets/tikat.png";
import balance from "../src/assets/BALANCE_VITC_SERUM_BOTTLE.png";
import powderBrush from "../src/assets/powder-brush.png";
import serum2 from "../src/assets/serum2.png";
import clinque from "../src/assets/clinque.png";
import lipgloss from "../src/assets/lipgloss.png";
import ThankYou from "./components/ThankYou";
import { useState } from "react";

function App() {
  const [data, setData] = useState([
    {
      id: 1,
      image: cream,
      price: "₦12,000",
      description: "Touch bright & Clear Cream | 150ml",
    },
    {
      id: 2,
      image: vitaminC,
      price: "₦10,000",
      description: "Cosrx The Vitamin C 13 Serum | 60ml",
    },
    {
      id: 3,
      image: serum,
      price: "₦15,000",
      description: "G. Niacinamide Brightening Toner | 120ml",
    },
    {
      id: 4,
      image: cera,
      price: "₦12,000",
      description: "Cerave Foaming Cleanser | 473ml",
    },
    {
      id: 5,
      image: laroche,
      price: "₦22,000",
      description: "LRP Double Gel Moisturizer | 400mll",
    },
    {
      id: 6,
      image: coco,
      price: "₦8,000",
      description: "Good Skin Club Emulsion Gel | 30ml",
    },
    {
      id: 7,
      image: tikat,
      price: "₦15,000",
      description: "Tam Snail & Azulene Low pH leanser | 150ml",
    },
    {
      id: 8,
      image: balance,
      price: "₦10,000",
      description: "Balance Vit.C Glow & Radiance Serum | 30ml",
    },
    {
      id: 9,
      image: powderBrush,
      price: "₦10,000",
      description: "Charbarl Charcoal Mask | 150g",
    },
    {
      id: 10,
      image: serum2,
      price: "₦12,000",
      description: "The Ordinary AHA & BHA Peeling Solution | 60ml",
    },
    {
      id: 11,
      image: clinque,
      price: "₦25,200",
      description: "Clinique Wrinke Correcting Eye Serum | 50ml",
    },
    {
      id: 12,
      image: lipgloss,
      price: "₦12,000",
      description: "Curology Foaming Cleanser | 273ml",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const likelyItems = data.slice(0, 4);

  const cartItems = data.slice(0, 2);

  const handleRemove = (id) => {
    const filteredData = cartItems.filter((item) => item.id !== id);
    setData(filteredData);
  };

  return (
    <>
      <BrowserRouter>
        <Header
          data={data}
          handleCloseModal={handleCloseModal}
          handleOpenModal={handleOpenModal}
          handleRemove={handleRemove}
          isModalOpen={isModalOpen}
        />
        <section>
          <Routes>
            <Route
              index
              element={<Homepage openModal={handleOpenModal} data={data} />}
            />
            <Route
              path="cart"
              element={
                <Cart
                  cartItems={cartItems}
                  handleRemove={handleRemove}
                  likelyItems={likelyItems}
                />
              }
            />
            <Route path="checkout" element={<Checkout />} />
            <Route path="/thankyou" element={<ThankYou />} />
          </Routes>
        </section>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
