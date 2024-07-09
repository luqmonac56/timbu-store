import React from "react";
import Card from "./Card";

export default function Cards({ data, openModal,}) {
  return (
    <>
      {data.map((item, index) => (
        <Card
          openModal={openModal}
          item={item}
          index={index}
        />
      ))}
    </>
  );
}
