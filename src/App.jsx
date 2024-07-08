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

function App() {
  const data = [
    {
      image: cream,
      price: "₦12,000",
      description: "Touch bright & Clear Cream | 150ml",
    },
    {
      image: vitaminC,
      price: "₦10,000",
      description: "Cosrx The Vitamin C 13 Serum | 60ml",
    },
    {
      image: serum,
      price: "₦15,000",
      description: "G. Niacinamide Brightening Toner | 120ml",
    },
    {
      image: cera,
      price: "₦12,000",
      description: "Cerave Foaming Cleanser | 473ml",
    },
    {
      image: laroche,
      price: "₦22,000",
      description: "LRP Double Gel Moisturizer | 400mll",
    },
    {
      image: coco,
      price: "₦8,000",
      description: "Good Skin Club Emulsion Gel | 30ml",
    },
    {
      image: tikat,
      price: "₦15,000",
      description: "Tam Snail & Azulene Low pH leanser | 150ml",
    },
    {
      image: balance,
      price: "₦10,000",
      description: "Balance Vit.C Glow & Radiance Serum | 30ml",
    },
    {
      image: powderBrush,
      price: "₦10,000",
      description: "Charbarl Charcoal Mask | 150g",
    },
    {
      image: serum2,
      price: "₦12,000",
      description: "The Ordinary AHA & BHA Peeling Solution | 60ml",
    },
    {
      image: clinque,
      price: "₦25,200",
      description: "Clinique Wrinke Correcting Eye Serum | 50ml",
    },
    {
      image: lipgloss,
      price: "₦12,000",
      description: "Curology Foaming Cleanser | 273ml",
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
            <Route path="checkout" element={<Checkout />} />
          </Routes>
        </section>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
