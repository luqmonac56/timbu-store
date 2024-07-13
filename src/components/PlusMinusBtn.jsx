import React, { useState } from "react";

export default function PlusMinusBtn({item, handleDecreaseItem, handleIncreaseItem }) {
  return (
    <div>
      <p className="flex gap-2 px-2 mb-1">
        <button
          onClick={() => handleDecreaseItem(item.unique_id)}
        >
          -
        </button>
        <span>
          {item.count}
        </span>
        <button
          onClick={()=>handleIncreaseItem(item.unique_id)}
        >
          +
        </button>
      </p>
      <div className="h-[0.5px] w-[100%] bg-[#121212]"></div>
    </div>
  );
}
