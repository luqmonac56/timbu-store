import React from "react";
import PlusMinusBtn from "./PlusMinusBtn";
import close from "../assets/close.png";

export default function CartItem({
  handleDecreaseItem,
  handleIncreaseItem,
  cartItems,
  handleRemove,
}) {
  return (
    <>
      {cartItems.map((item, index) => (
        <div key={index} className="item mb-4">
          <div className="flex gap-4 items-start justify-between py-4">
            <img
              className="w-[90px] h-[90px]"
              src={`https://api.timbu.cloud/images/${item.photos[0].url}`}
              alt="item img"
            />
            <div>
              <p>{item.name}</p>
              <div className="flex flex-row justify-between mt-4 lg:mt-2 items-center lg:items-start lg:flex-col lg:gap-6">
                <span className="font-semibold">{item.current_price[0].NGN[0]}</span>
                <PlusMinusBtn
                  item={item}
                  handleDecreaseItem={handleDecreaseItem}
                  handleIncreaseItem={handleIncreaseItem}
                />
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
          <div className="h-[0.5px] w-full bg-[#121212]"></div>
        </div>
      ))}
    </>
    // <>

    // </>
  );
}
