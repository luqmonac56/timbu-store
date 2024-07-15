import React from "react";
import Cards from "./Cards";
import Loader from "./Loader";

export default function Homepage({
  addToCart,
  data,
  openModal,
  handleDecreaseItem,
  handleIncreaseItem,
  handlePrevPage,
  handleNextPage,
  loading,
  error,
}) {
  return (
    <>
      <main className="px-4 gap-4 lg:px-20 mt-4">
        <section className="flex mt-5 max-w-[1280px]  my-0 mx-auto justify-around items-center flex-col  gap-4">
          <div className="flex flex-wrap gap-4 max-w-[1100px] justify-center">
            {loading && <Loader />}
            {error && <div>Error: {error.message}</div>}

            {data && (
              <Cards
                addToCart={addToCart}
                data={data}
                openModal={openModal}
                handleDecreaseItem={handleDecreaseItem}
                handleIncreaseItem={handleIncreaseItem}
              />
            )}
          </div>
        </section>

        <div className="flex gap-2 justify-center lg:w-[100px] my-0 mx-auto mt-8 ">
          <button onClick={handlePrevPage} className="btn-blue px-4">
            prev
          </button>
          <button onClick={handleNextPage} className="btn-blue px-4">
            Next
          </button>
        </div>
      </main>
    </>
  );
}
