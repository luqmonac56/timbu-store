import React from "react";
import Card from "./Card";

export default function Cards({ addToCart, data, openModal }) {
  return (
    <>
      {data.map((item, index) => (
        <Card
          openModal={openModal}
          addToCart={addToCart}
          item={item}
          index={index}
        />
      ))}
    </>
  );
}
