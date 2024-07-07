import React from "react";

export default function PlusMinusBtn() {
  return (
    <div>
      <p className="flex gap-2">
        <button>-</button>
        <span>1</span>
        <button>+</button>
      </p>
      <div className="h-[0.5px] w-[100%] bg-[#121212]"></div>
    </div>
  );
}
