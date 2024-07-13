import React from "react";
import vitaminC from "../assets/Vitamin-C-13-Serum.png";
import cream from "../assets/cream.png";
import { NavLink } from "react-router-dom";

export default function Checkout({ subTotal,cartItems }) {
  return (
    <section className="px-4 max-w-[1280px] my-4 mx-auto lg:px-8">
      <div>
        <h2 className="text-base font-medium lg:text-2xl">Billing Details</h2>
        <p>
          Carefully Input the appropriate details in its appropriate place
          below.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-between  gap-8">
        <form className="checkout-form mt-6 flex-1 flex text-[#191919] flex-col gap-3  max-w-[550px] md:w-[500px] my-0 mx-auto">
          <div className="mainFormDiv">
            <label htmlFor="email">Email Address</label>
            <input id="email" type="email" placeholder="Email Address" />
          </div>
          <div className="name flex flex-col lg:flex-row gap-3">
            <div className="lg:w-[50%]">
              <label htmlFor="first-name">First Name</label>
              <input id="first-name" type="text" placeholder="First Name" />
            </div>
            <div className="lg:w-[50%]">
              <label htmlFor="last-name">Last Name</label>
              <input id="last-name" type="text" placeholder="Last Name" />
            </div>
          </div>
          <div className="mainFormDiv">
            <label htmlFor="Address">Address</label>
            <input id="text" type="email" placeholder="Address" />
          </div>
          <div className="country-state flex flex-col w-full lg:flex-row gap-3 ">
            <div className="lg:w-[50%]">
              <label htmlFor="country">Country</label>
              <input id="country" type="text" placeholder="Country" />
            </div>
            <div className="lg:w-[50%]">
              <label htmlFor="state">State</label>
              <input id="state" type="text" placeholder="State" />
            </div>
          </div>
          <div className="mainFormDiv">
            <label htmlFor="phone">Phone Number</label>
            <input id="phone" type="email" placeholder="Phone Number" />
          </div>
        </form>
        <div className="flex-1 w-full max-w-[500px] my-0 mx-auto">
          <div className="bg-[#C6BDDE] rounded-xl py-6 mt-8 ">
            <div className="text-center">
              <h2 className="font-semibold ">Your Order</h2>
              <div className="h-[0.2px] mt-2 w-full bg-[#191919]"></div>
            </div>

            <div className="checkout-items mt-8 flex flex-col gap-4">
              {cartItems.map((item, index) => (
                <>
                  <div
                    key={index}
                    className="item flex gap-4 items-center p-2 bg-white rounded-xl w-[80%] lg:w-[90%] mx-auto my-0"
                  >
                    <img
                      className="w-[73px] h-[73px]"
                      src={`https://api.timbu.cloud/images/${item.photos[0].url}`}
                      alt="cream img"
                    />
                    <div className="flex flex-col gap-1 px-2">
                      <p>{item.name}</p>
                      <span className="font-semibold">
                        ₦{item.current_price[0].NGN[0]}
                      </span>
                      <span>Qty: { item.count}</span>
                    </div>
                  </div>
                </>
              ))}
            </div>
            <div className="mt-4">
              <div className="flex mb-2 px-4 justify-between items-center">
                <span>Subtotal</span>
                <h4 className="font-semibold">₦{subTotal}</h4>
              </div>
              <div className="flex mb-2 px-4 justify-between items-center">
                <span>Shipping fee</span>
                <h4 className="font-semibold">₦4,000</h4>
              </div>
              <div className="flex px-4 justify-between items-center">
                <span>Transaction fee</span>
                <h4 className="font-semibold">₦300</h4>
              </div>

              <div className="h-[0.4px] mt-8 mb-6 w-full bg-[#191919]"></div>

              <div className=" flex font-semibold px-4 justify-between items-center">
                <span>Total</span>
                <h4 className="font-semibold">₦26,300</h4>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <NavLink
              className="flex btn-blue mt-8 w-[80%] lg:w-[60%] m-auto"
              to="/thankyou"
            >
              <button className="m-auto ">Pay Now</button>
            </NavLink>
            <p>
              We accept every and any type of payment; Bank transfer,
              Debit/Credit cards, USSD
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
