import React from "react";
import Card from "./Card";

export default function Cards({
  addToCart,
  data,
  openModal,
  itemNumber,
  handleDecreaseItem,
  handleIncreaseItem,
}) {
  return (
    <>
      {data.map((item, index) => (
        <Card key={index}
          openModal={openModal}
          addToCart={addToCart}
          item={item}
          itemNumber={itemNumber}
          handleDecreaseItem={handleDecreaseItem}
          handleIncreaseItem={handleIncreaseItem}
        />
      ))}
    </>
  );
}
