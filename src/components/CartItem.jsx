import React from "react";
import PlusMinusBtn from "./PlusMinusBtn";


export default function CartItem() {
  return (
    <div className="item">
      <div className="flex gap-4 items-start justify-between py-4">
        <img
          className="w-[90px] h-[90px]"
          src="../src/assets/cream.png"
          alt="item img"
        />
        <div>
          <p>Touch bright & Clear Cream | 150ml</p>
          <div className="flex flex-row justify-between mt-4 lg:mt-2 items-center lg:items-start lg:flex-col">
            <span className="font-semibold">₦12,000</span>
            <PlusMinusBtn />
          </div>
        </div>
        <button>
          <img
            className="w-[20px] h-[20px]"
            src="../src/assets/close.png"
            alt="close botton"
          />
        </button>
      </div>
      <div className="h-[0.5px] w-full bg-[#121212]"></div>
    </div>
  );
}
