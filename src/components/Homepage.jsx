import React from "react";
import Cards from "./Cards";
import filter from "../assets/filter.svg";

export default function Homepage({data}) {
  return (
    <>
      
      <main className="px-4 gap-4 lg:px-20 mt-4">
        <section className="flex mt-5 max-w-[1150px] my-0 mx-auto flex-wrap justify-between gap-4">
          <Cards data={data} />
        </section>
      </main>
    </>
  );
}
