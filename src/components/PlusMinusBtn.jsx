import React, { useState } from "react";

export default function PlusMinusBtn() {
  const [itemNumber, setItemNumber] = useState(1)

  const handleIncreaseItem = () => {
    setItemNumber(itemNumber + 1)
  }
  const handleDecreaseItem = () => {
    setItemNumber(itemNumber - 1)
  }
  return (
    <div>
      <p className="flex gap-2 px-2 mb-1">
        <button onClick={handleDecreaseItem}>-</button>
        <span>{itemNumber < 1 ? 1 : itemNumber}</span>
        <button onClick={handleIncreaseItem}>+</button>
      </p>
      <div className="h-[0.5px] w-[100%] bg-[#121212]"></div>
    </div>
  );
}
