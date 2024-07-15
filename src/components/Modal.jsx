import React from "react";
import close from "../assets/close.png";

export default function Modal({
  cartNumber,
  isOpen,
  onClose,
  children,
  handleModalContentClick,
}) {
  if (!isOpen) return null;

  return (
    <div onClick={onClose} className="modal">
      <div
        onClick={handleModalContentClick}
        className="modal-content lg:mt-[2.5rem] lg:mr-[3rem] lg:m-h-[90%] w-full lg:w-[513px] h-[100vh] lg:h-auto "
      >
        <div className="flex justify-between mb-4">
          <div className="flex gap-4 items-center font-semibold">
            <h3 className="lg:text-2xl">Cart ({cartNumber})</h3>
            <h4 className="text-[#190D40]">Added!</h4>
          </div>
          <button className="" onClick={onClose}>
            <img src={close} alt="" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
