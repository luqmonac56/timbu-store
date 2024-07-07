import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="bg-[#190D40] py-3 px-3 text-center text-white">
        <p className="w-[80%] my-0 mx-auto ">
          Free shipping on orders over ₦60,000 | 30-day money-back guarantee
        </p>
      </div>
      <nav className="flex bg-[#C6BDDE] justify-between items-center px-4 lg:px-20">
        <img src="../src/assets/logo.svg" alt="logo" />
        <div className=" flex gap-2">
          <img
            className="w-5 h-5"
            src="../src/assets/line-md_account.svg"
            alt="person"
          />
          <img
            className="w-5 h-5"
            src="../src/assets/f7_heart.svg"
            alt="person"
          />
          <button>
            <img
              className="w-5 h-5"
              src="../src/assets/uil_cart.png"
              alt="person"
            />
          </button>
          <img
            className="w-5 h-5"
            src="../src/assets/pajamas_hamburger.svg"
            alt="person"
          />
        </div>
      </nav>
      <header className="flex lg:h-[170px] lg:px-20">
        <h1 className="text-center m-auto lg:text-2xl">
          Shop all our Products
        </h1>
      </header>
    </>
  );
}
