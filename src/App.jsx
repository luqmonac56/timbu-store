import "./App.css";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import ThankYou from "./components/ThankYou";
import { useState, useEffect } from "react";
import Product from "./components/Product";
import axios from "axios";
import Loader from "./components/Loader";

function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          `/api/products?organization_id=3f570a4f4cf14dc99651783723c214bf&reverse_sort=false&page=${page}&size=10&Appid=4CVO1BXR3OYKFD8&Apikey=${
            import.meta.env.VITE_APP_API_KEY
          }`,
          {
            headers: {
              Accept: "application/json",
            },
          }
        );
        setData(res.data.items.map((arg) => ({ ...arg, count: 1 })));
        setLoading(false);
      } catch (error) {
        // console.log(error.message);
        setError(error);
        setLoading(false);
      }
    };

    getData();
  }, [page]);


  // console.log(error);
  // console.log(data[0].id);

  const [itemNumber, setItemNumber] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const likelyItems = data.slice(0, 4);

  const [cartItems, setCartItems] = useState([]);

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

  const handleNextPage = () => {
    if (page > 3) {
      setPage(3);
    } else {
      setPage((prevCount) => prevCount + 1);
    }
    console.log(page);
  };
  const handlePrevPage = () => {
    if (page < 1) {
      setPage(1);
    } else {
      setPage((prevCount) => prevCount - 1);
    }

    console.log(page);
  };

  const addToCart = (data) => {
    setCartItems((prevItems) => {
      const itemInCart = prevItems.find((item) => item.id === data.id);
      if (itemInCart) {
        return prevItems.map((item) =>
          item.id === data.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...data, quantity: 1 }];
      }
    });
  };

  const clearCart = () => {
    setCartItems([])
  }

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
          clearCart={clearCart}
        />
        <section>
          <Routes>
            <Route
              index
              element={
                <Homepage
                  loading={loading}
                  itemNumber={itemNumber}
                  handleDecreaseItem={handleDecreaseItem}
                  handleIncreaseItem={handleIncreaseItem}
                  addToCart={addToCart}
                  openModal={handleOpenModal}
                  data={data}
                  handleNextPage={handleNextPage}
                  handlePrevPage={handlePrevPage}
                  error={error}
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
            <Route
              path="/products/:id"
              element={<Product addToCart={addToCart} />}
            />
            <Route path="/thankyou" element={<ThankYou />} />
          </Routes>
        </section>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
