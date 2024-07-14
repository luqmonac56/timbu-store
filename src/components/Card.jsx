import React, { useState } from "react";
import PlusMinusBtn from "./PlusMinusBtn";
import { NavLink } from "react-router-dom";
import heart from "../assets/f7_heart.svg";
import filledHeart from "../assets/filled-heart.png";

export default function Card({
  addToCart,
  item,
  openModal,
  handleDecreaseItem,
  handleIncreaseItem,
}) {
  const [isClicked, setIsclicked] = useState(false);

  const handleClicked = () => {
    setIsclicked(!isClicked);
  };

  const doTwoThings = (item) => {
    openModal();
    addToCart(item);
  };

  return (
    <>
      <div className="card w-[170px] md:w-[200px] md lg:w-[260px] py-4 px-3">
        <div className="w-full">
          <button onClick={handleClicked} className="w-5 h-5 float-right -mb-6">
            {!isClicked && <img className="heart" src={heart} alt="heart" />}
            {isClicked && (
              <img
                className="filledHeart"
                src={filledHeart}
                alt="filledHeart"
              />
            )}
          </button>
        </div>
        <NavLink to={`/products/${item.id}`}>
          {item.photos.length && (
            <img
              className="w-[90px] h-[90px] m-auto"
              src={`https://api.timbu.cloud/images/${item.photos[0].url}`}
              alt={item.name}
            />
          )}
        </NavLink>
        <div className="flex justify-between items-start text-xs">
          <p className=" w-[70%]">{item.name}</p>
          {item.current_price && (
            <p className="font-bold">₦{item.current_price[0].NGN[0]}</p>
          )}
        </div>
        <div className="flex justify-between items-center">
          <PlusMinusBtn
            item={item}
            handleDecreaseItem={handleDecreaseItem}
            handleIncreaseItem={handleIncreaseItem}
          />
          <button
            onClick={() => doTwoThings(item)}
            className="py-2 px-2 lg:px-4 text-white text-xs rounded-xl bg-[#190D40]"
          >
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
}
