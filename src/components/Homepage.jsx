import React from "react";
import Cards from "./Cards";

export default function Homepage({addToCart, data, openModal, handleAddToCart }) {
  return (
    <>
      <main className="px-4 gap-4 lg:px-20 mt-4">
        <section className="flex mt-5 max-w-[1280px]  my-0 mx-auto justify-around items-center flex-col  gap-4">
          <div className="flex flex-wrap gap-4 max-w-[1100px] justify-center">
            <Cards
              addToCart={addToCart}
              handleAddToCart={handleAddToCart}
              data={data}
              openModal={openModal}
            />
          </div>
        </section>
      </main>
    </>
  );
}
