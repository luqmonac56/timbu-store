import React from "react";
import Card from "./Card";

export default function Cards({data}) {
  

  return (
    <>
      {data.map((item, index) => (
        <Card item={item} index={index} />
      ))}
    </>
  );
}
