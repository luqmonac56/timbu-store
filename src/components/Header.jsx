import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import Modal from "./Modal";
import CartItem from "./CartItem";
import PlusMinusBtn from "./PlusMinusBtn";
import person from "../assets/line-md_account.svg";
import heart from "../assets/f7_heart.svg";
import cart from "../assets/uil_cart.png";
import hamburger from "../assets/pajamas_hamburger.svg";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="bg-[#190D40] py-3 px-3 text-center text-white">
        <p className="w-[80%] my-0 mx-auto ">
          Free shipping on orders over ₦60,000 | 30-day money-back guarantee
        </p>
      </div>
      <nav className="flex bg-[#C6BDDE] justify-between items-center px-4 lg:px-20">
        <NavLink to="/">
          <img src="../src/assets/logo.svg" alt="logo" />
        </NavLink>
        <div className=" flex gap-2">
          <img className="w-5 h-5" src={person} alt="md_account" />
          <img className="w-5 h-5" src={heart} alt="heart" />
          <button onClick={handleOpenModal}>
            <img
              className="w-5 h-5"
              src={cart}
              alt="cart"
            />
          </button>
          <img
            className="w-5 h-5 lg:hidden"
            src={hamburger}
            alt="hamburger"
          />
        </div>
      </nav>
      <header className="flex lg:h-[170px] lg:px-20">
        <h1 className="text-center m-auto lg:text-2xl">
          Shop all our Products
        </h1>
      </header>

      <div>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <>
            <div className="item mt-4 pr-10">
              <div className="flex items-start gap-4 py-4">
                <div className="flex gap-4  justify-between">
                  <img
                    className="w-[90px] h-[90px]"
                    src="../src/assets/cream.png"
                    alt="item img"
                  />
                  <div className="flex flex-col justify-between">
                    <p className="w-[90%]">
                      Touch bright & Clear Cream | 150ml
                    </p>
                    <div className="flex flex-row justify-between mt-4 lg:mt-2 items-center">
                      <span className="font-semibold">₦12,000</span>
                      <PlusMinusBtn />
                    </div>
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

              <div className="h-[0.2px] w-full bg-[#C6BDDE]"></div>
            </div>
            <div className="item mt-4 pr-10">
              <div className="flex items-start gap-4 py-4">
                <div className="flex gap-4  justify-between">
                  <img
                    className="w-[90px] h-[90px]"
                    src="../src/assets/cream.png"
                    alt="item img"
                  />
                  <div className="flex flex-col justify-between">
                    <p className="w-[90%]">
                      Touch bright & Clear Cream | 150ml
                    </p>
                    <div className="flex flex-row justify-between mt-4 lg:mt-2 items-center">
                      <span className="font-semibold">₦12,000</span>
                      <PlusMinusBtn />
                    </div>
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

              <div className="h-[0.5px] w-full bg-[#C6BDDE]"></div>
            </div>

            <div className="flex mt-4 px-4 justify-between items-center">
              <span>Subtotal</span>
              <h4 className="font-semibold">₦22,000</h4>
            </div>

            <div className="flex flex-col mt-4 lg:flex-row gap-2 lg:gap-4">
              <NavLink
                className=" flex w-[40%] py-2 text-[#190D40] border-[#190D40] border-[1px] border-solid rounded-xl"
                to="/cart"
              >
                <button className="m-auto">View Cart</button>
              </NavLink>
              <NavLink
                className="flex w-[60%] py-2 bg-[#190D40] text-white rounded-xl"
                to="/checkout"
              >
                <button className="m-auto">Checkout</button>
              </NavLink>
            </div>
          </>
        </Modal>
      </div>
    </>
  );
}
