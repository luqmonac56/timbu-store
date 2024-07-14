import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import Modal from "./Modal";
import CartItem from "./CartItem";
import PlusMinusBtn from "./PlusMinusBtn";
import person from "../assets/line-md_account.svg";
import heart from "../assets/f7_heart.svg";
import cart from "../assets/uil_cart.png";
import logo from "../assets/logo.svg";
import search from "../assets/search-solid.png";
import close from "../assets/close.png";
import { useLocation } from "react-router-dom";

export default function Header({
  subTotal,
  handleDecreaseItem,
  handleIncreaseItem,
  cartNumber,
  handleOpenModal,
  handleCloseModal,
  isModalOpen,
  handleRemove,
  cartItems,
  clearCart,
}) {
  const location = useLocation();

  // const cartItems = data.slice(0, 2);
  console.log(cartItems);

  return (
    <>
      <div className="bg-[#190D40] py-3 px-3 text-center text-white">
        <p className="w-[80%] text-xs my-0 mx-auto ">
          Free shipping on orders over ₦60,000 | 30-day money-back guarantee
        </p>
      </div>
      <nav className="flex lg:bg-white max-w-[1280px] my-0 mx-auto bg-[#C6BDDE] justify-between items-center px-4  lg:py-2">
        <div className="hidden lg:flex border-[#C8C0DE] rounded-3xl px-4 py-2 border-[0.5px] border-solid  gap-3">
          <label htmlFor="search">
            <img src={search} alt="Search icon" />
          </label>
          <input
            id="search"
            className="bg-transparent outline-none "
            type="search"
            placeholder="Search "
          />
        </div>
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
        <div className=" flex gap-2 lg:gap-4">
          <button className="flex items-center" onClick={handleOpenModal}>
            <span className="text-[8px] py-[1.5px] rounded-full text-white w-[15px] h-[15px] bg-[#190D40]">
              {cartNumber}
            </span>
            <img className="w-5 h-5" src={cart} alt="cart" />
          </button>
          <NavLink to="/">
            <img className="w-5 h-5" src={person} alt="md_account" />
          </NavLink>
        </div>
      </nav>
      <header className="flex lg:h-[170px] lg:px-20">
        <h1 className="text-center m-auto lg:text-2xl">
          {location.pathname === "/" ? "Shop all our Products" : " "}
          {location.pathname === "/cart" ? "Cart (2)" : " "}
          {location.pathname === "/checkout" ? "Checkout" : " "}
          {location.pathname === "/thankyou" ? "Thank You" : " "}
        </h1>
      </header>

      <div>
        <Modal
          cartNumber={cartNumber}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        >
          <>
            {cartItems.length === 0 ? (
              ""
            ) : (
              <div>
                <button onClick={clearCart} className="btn-blue px-4">
                  Clear Cart
                </button>
              </div>
            )}
            {cartItems.length === 0 ? (
              <div className="text-center h-[75%] flex">
                <p className="m-auto font-semibold text-xl">
                  Your Cart is currently empty.
                </p>
              </div>
            ) : (
              ""
            )}
            {cartItems.map((item, index) => (
              <div key={index} className="item mt-4 pr-10">
                <div className="flex items-start gap-4 py-4">
                  <div className="flex gap-4  justify-between">
                    <img
                      className="w-[90px] h-[90px]"
                      src={`https://api.timbu.cloud/images/${item.photos[0].url}`}
                      alt="item img"
                    />
                    <div className="flex flex-col justify-between">
                      <p className="w-[90%]">{item.name}</p>
                      <div className="flex flex-row justify-between mt-4 lg:mt-2 items-center">
                        <span className="font-semibold">
                          {item.current_price[0].NGN[0]}
                        </span>
                        <PlusMinusBtn
                          item={item}
                          handleDecreaseItem={handleDecreaseItem}
                          handleIncreaseItem={handleIncreaseItem}
                        />
                      </div>
                    </div>
                  </div>
                  <button onClick={() => handleRemove(item.id)}>
                    <img
                      className="w-[20px] h-[20px]"
                      src={close}
                      alt="close botton"
                    />
                  </button>
                </div>

                <div className="h-[0.2px] w-full bg-[#C6BDDE]"></div>
              </div>
            ))}

            <div className="flex mt-4 px-4 justify-between items-center">
              <span>Subtotal</span>
              <h4 className="font-semibold">₦{subTotal}</h4>
            </div>

            <div className="flex flex-col mt-8 lg:flex-row gap-4 lg:gap-4 lg:w-full mx-auto w-[90%] absolute bottom-4 lg:relative">
              <NavLink
                onClick={handleCloseModal}
                className=" flex lg:w-[40%] w-full py-2 text-[#190D40] border-[#190D40] border-[1px] border-solid rounded-xl"
                to="/cart"
              >
                <button className="m-auto">View Cart</button>
              </NavLink>
              <NavLink
                onClick={handleCloseModal}
                className="flex lg:w-[60%] w-full py-2 bg-[#190D40] text-white rounded-xl"
                to="/checkout"
              >
                <button className="m-auto">Checkout</button>
              </NavLink>
            </div>
          </>
        </Modal>
      </div>
    </>
  );
}
