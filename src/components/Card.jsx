import React from "react";
import PlusMinusBtn from "./PlusMinusBtn";

export default function Card({ item, index }) {
  return (
    <>
      <div key={index} className="card py-4 px-3">
        <div className="w-full">
          <img
            src="../src/assets/f7_heart.svg"
            className="w-5 h-5 float-right -mb-6"
            alt=""
          />
        </div>
        <img
          className="w-[90px] h-[90px] m-auto"
          src={item.image}
          alt={item.title}
        />
        <div className="flex items-start text-xs">
          <p className=" ">{item.description}</p>
          <p className="font-bold">{item.price}</p>
        </div>
        <div className="flex justify-between items-center">
          <PlusMinusBtn />
          <button className="py-2 px-2 lg:px-4 text-white rounded-xl bg-[#190D40]">
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
}
