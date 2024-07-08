import React from "react";
import Card from "./Card";
import CartItem from "./CartItem";

export default function Cart({ data }) {
  const likelyItems = data.slice(0, 4);
  
  return (
    <section className="px-6 py-4 lg:px-10">
      <div className="flex flex-col gap-8 lg:flex-row  justify-between">
        <div className="cart-items lg:w-[50%]">
          <CartItem/>
          
        </div>

        <div className="bg-[#C6BDDE] pt-6 pb-4 rounded-xl flex flex-col gap-4 min-w-80">
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
          <button className="bg-[#190D40] w-[90%] mx-auto my-0 rounded-xl px-4 py-2 text-white">
            Checkout
          </button>
        </div>
      </div>
      <div className=" my-8 h-[0.5px] w-full bg-[#C6BDDE]"></div>
      <h4 className="mb-4 font-semibold text-xl lg:text-2xl">
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
