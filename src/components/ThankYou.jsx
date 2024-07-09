import React from "react";
import mark from "../assets/mark.png";
import { NavLink } from "react-router-dom";
export default function ThankYou() {
  return (
    <div className="w-full h-[50vh] flex">
      <div className="flex flex-col items-center m-auto gap-6">
        <img
          className="w-[90px] h-[90px] lg:h-[140px] lg:w-[140px]"
          src={mark}
          alt="mark"
        />
        <div className="text-center">
          <h3 className="text-2xl mb-2 font-semibold">
            Thank you for shopping with Timbu!
          </h3>
          <p>We’ll send your receipt to your mail</p>
        </div>
        <NavLink className="w-[284px] btn-blue flex" to="/">
          <button className=" m-auto "> Continue Shopping</button>
        </NavLink>
      </div>
    </div>
  );
}
