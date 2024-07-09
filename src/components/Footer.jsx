import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function Footer() {
  return (
    <footer className="text-left lg:text-center lg:items-center bg-[#C9C1DD]  px-4 lg:px-20 py-6 flex flex-col justify-between mt-14">
      <NavLink>
        <img className="w-[55px]" src={logo} alt="logo" />
      </NavLink>
      <p className="text-xs w-[80%]  lg:w-[40%]">
        At Timbu, we bring together the finest skincare products from trusted
        brands to offer you personalized regimens that celebrate your unique
        skin. Our commitment is to help you achieve radiant, healthy skin
        through high-quality products, and a deep understanding of your skincare
        needs.
      </p>
      <p className="text-left text-[8px] mt-[3rem]">2024 Timbu.co. All Right Reserved</p>
    </footer>
  );
}
