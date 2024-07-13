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
import { useState, useEffect } from "react";
import Product from "./components/Product";
import axios from "axios";

function App() {
  const [data, setData] = useState([
    // {
    //   id: 1,
    //   image: cream,
    //   price: 12000,
    //   description: "Touch bright & Clear Cream | 150ml",
    // },
    // {
    //   id: 2,
    //   image: vitaminC,
    //   price: 10000,
    //   description: "Cosrx The Vitamin C 13 Serum | 60ml",
    // },
    // {
    //   id: 3,
    //   image: serum,
    //   price: 15000,
    //   description: "G. Niacinamide Brightening Toner | 120ml",
    // },
    // {
    //   id: 4,
    //   image: cera,
    //   price: 12000,
    //   description: "Cerave Foaming Cleanser | 473ml",
    // },
    // {
    //   id: 5,
    //   image: laroche,
    //   price: 22000,
    //   description: "LRP Double Gel Moisturizer | 400mll",
    // },
    // {
    //   id: 6,
    //   image: coco,
    //   price: 8000,
    //   description: "Good Skin Club Emulsion Gel | 30ml",
    // },
    // {
    //   id: 7,
    //   image: tikat,
    //   price: 15000,
    //   description: "Tam Snail & Azulene Low pH leanser | 150ml",
    // },
    // {
    //   id: 8,
    //   image: balance,
    //   price: 10000,
    //   description: "Balance Vit.C Glow & Radiance Serum | 30ml",
    // },
    // {
    //   id: 9,
    //   image: powderBrush,
    //   price: 10000,
    //   description: "Charbarl Charcoal Mask | 150g",
    // },
    // {
    //   id: 10,
    //   image: serum2,
    //   price: 12000,
    //   description: "The Ordinary AHA & BHA Peeling Solution | 60ml",
    // },
    // {
    //   id: 11,
    //   image: clinque,
    //   price: 25200,
    //   description: "Clinique Wrinke Correcting Eye Serum | 50ml",
    // },
    // {
    //   id: 12,
    //   image: lipgloss,
    //   price: 12000,
    //   description: "Curology Foaming Cleanser | 273ml",
    // },
  ]);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          `/api/products?organization_id=3f570a4f4cf14dc99651783723c214bf&reverse_sort=false&page=1&size=10&Appid=4CVO1BXR3OYKFD8&Apikey=${
            import.meta.env.VITE_APP_API_KEY
          }`,
          {
            headers: {
              Accept: "application/json",
            },
          }
        );
        console.log(res);
        setData(res.data.items.map((arg) => ({ ...arg, count: 1 })));
      } catch (error) {
        console.log(error.message);
      }
    };

    getData();
  }, []);

  console.log(data);

  const [itemNumber, setItemNumber] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const likelyItems = data.slice(0, 4);

  const [cartItems, setCartItems] = useState([
    
  ]);

  const cartNumber = cartItems.length;

  const subTotal = cartItems.reduce(
    (acc, curr) => acc + curr.current_price[0].NGN[0] * curr.count,
    0
  );

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleIncreaseItem = (id) => {
    setData((prev) =>
      prev.map((item) =>
        item.unique_id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const handleDecreaseItem = (id) => {
    setData((prev) =>
      prev.map((item) =>
        item.unique_id === id
          ? { ...item, count: item.count <= 1 ? 1 : item.count - 1 }
          : item
      )
    );
  };


  const handleRemove = (id) => {
    const filteredData = cartItems.filter((item) => item.id !== id);
    setCartItems(filteredData);
  };

  const addToCart = (data) => {
    setCartItems([...cartItems, data]);
  };

  // const addToCart = (data) => {
  //   setCartItems((prevItems) => {
  //     const itemInCart = prevItems.find((item) => item.id === data.id);
  //     if (itemInCart) {
  //       return prevItems.map((item) =>
  //         item.id === data.id
  //           ? { ...item, quantity: item.quantity + 1 }
  //           : item
  //       );
  //     } else {
  //       return [...prevItems, { ...data, quantity: 1 }];
  //     }
  //   });
  // };

  return (
    <>
      <BrowserRouter>
        <Header
          subTotal={subTotal}
          cartItems={cartItems}
          cartNumber={cartNumber}
          handleCloseModal={handleCloseModal}
          handleOpenModal={handleOpenModal}
          handleRemove={handleRemove}
          isModalOpen={isModalOpen}
          handleDecreaseItem={handleDecreaseItem}
          handleIncreaseItem={handleIncreaseItem}
        />
        <section>
          <Routes>
            <Route
              index
              element={
                <Homepage
                  itemNumber={itemNumber}
                  handleDecreaseItem={handleDecreaseItem}
                  handleIncreaseItem={handleIncreaseItem}
                  addToCart={addToCart}
                  openModal={handleOpenModal}
                  data={data}
                />
              }
            />
            <Route
              path="cart"
              element={
                <Cart
                  itemNumber={itemNumber}
                  handleDecreaseItem={handleDecreaseItem}
                  handleIncreaseItem={handleIncreaseItem}
                  cartItems={cartItems}
                  handleRemove={handleRemove}
                  likelyItems={likelyItems}
                />
              }
            />
            <Route
              path="checkout"
              element={<Checkout subTotal={subTotal} cartItems={cartItems} />}
            />
            <Route path="/products/:id" element={<Product />} />
            <Route path="/thankyou" element={<ThankYou />} />
          </Routes>
        </section>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
