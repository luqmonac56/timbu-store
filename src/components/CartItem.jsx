import React from "react";
import PlusMinusBtn from "./PlusMinusBtn";
import cream from "../assets/cream.png";
import close from "../assets/close.png";

export default function CartItem() {
  return (
    <>
      <div className="item mb-4">
        <div className="flex gap-4 items-start justify-between py-4">
          <img className="w-[90px] h-[90px]" src={cream} alt="item img" />
          <div>
            <p>Touch bright & Clear Cream | 150ml</p>
            <div className="flex flex-row justify-between mt-4 lg:mt-2 items-center lg:items-start lg:flex-col lg:gap-6">
              <span className="font-semibold">₦12,000</span>
              <PlusMinusBtn />
            </div>
          </div>
          <button>
            <img
              className="w-[20px] h-[20px]"
              src={close}
              alt="close botton"
            />
          </button>
        </div>
        <div className="h-[0.5px] w-full bg-[#121212]"></div>
      </div>

      <div className="item mb-4">
        <div className="flex gap-4 items-start justify-between py-4">
          <img className="w-[90px] h-[90px]" src={cream} alt="item img" />
          <div>
            <p>Touch bright & Clear Cream | 150ml</p>
            <div className="flex flex-row justify-between mt-4 lg:mt-2 items-center lg:items-start lg:flex-col lg:gap-6">
              <span className="font-semibold">₦12,000</span>
              <PlusMinusBtn />
            </div>
          </div>
          <button>
            <img
              className="w-[20px] h-[20px]"
              src={close}
              alt="close botton"
            />
          </button>
        </div>
        <div className="h-[0.5px] w-full bg-[#121212]"></div>
      </div>

      
    </>
  );
}
