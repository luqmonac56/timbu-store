import React from "react";
import Card from "./Card";
import CartItem from "./CartItem";
import { NavLink } from "react-router-dom";

export default function Cart({
  handleRemove,
  likelyItems,
  cartItems,
  handleDecreaseItem,
  handleIncreaseItem,
  clearCart,
}) {
  return (
    <section className="max-w-[1280px] my-0 mx-auto px-6 py-4 mt-[2rem] lg:px-10">
      <div className="flex flex-col w-full my-0 mx-auto gap-8 lg:flex-row items-start  justify-between">
        <div className="cart-items lg:w-[50%] my-0 mx-auto">
          <CartItem
            handleDecreaseItem={handleDecreaseItem}
            handleIncreaseItem={handleIncreaseItem}
            handleRemove={handleRemove}
            cartItems={cartItems}
          />

          {cartItems.length === 0 ? (
            " "
          ) : (
            <div className="mt-8">
              <button onClick={clearCart} className="btn-blue  px-4">
                Clear Cart
              </button>
            </div>
          )}
        </div>

        <div className="bg-[#C6BDDE] my-0 mx-auto pt-6 pb-4 lg:mt-6 rounded-xl flex flex-col gap-4 min-w-80">
          <h3 className="text-center text-2xl font-semibold">Order Summary</h3>
          <div className="h-[0.5px] w-full bg-[#121212]"></div>
          <div className="flex px-4 justify-between items-center">
            <span>Subtotal</span>
            <h4 className="font-semibold">₦12,000</h4>
          </div>
          <div className="h-[0.5px] w-full bg-[#121212]"></div>
          <div className=" font-semibold flex px-4 justify-between items-center">
            <span>Total</span>
            <h4>₦12,000</h4>
          </div>
          <NavLink
            className="bg-[#190D40] flex w-[90%] mx-auto my-0 rounded-xl px-4 py-2 text-white"
            to="/checkout"
          >
            <button className="m-auto">Checkout</button>
          </NavLink>
        </div>
      </div>
      <div className=" my-8 h-[0.5px] w-full bg-[#C6BDDE]"></div>
      <h4 className="mb-8 lg:mb-[3rem] font-semibold text-xl lg:text-2xl">
        You may also Like
      </h4>
      <div className="card-section gap-4 ">
        <>
          {likelyItems.map((item, index) => (
            <Card item={item} index={index} />
          ))}
        </>
      </div>
    </section>
  );
}
