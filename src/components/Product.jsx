import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import cream from "../assets/cream.png";
import PlusMinusBtn from "./PlusMinusBtn";
import axios from "axios";

const Product = (data, handleDecreaseItem, handleIncreaseItem) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          `/api/products/${data.id}?organization_id=3f570a4f4cf14dc99651783723c214bf`,

          {
            headers: {
              Accept: "application/json",
            },
          }
        );
        console.log(res);
        
      } catch (error) {
        console.log(error.message);
      }
    };

    getProduct();
  }, []);

  console.log(data);

  return (
    <section className="max-w-[1000px] my-[3rem] mx-auto">
      <h2 className="text-2xl font-semibold mb-8">Product Description</h2>
      <div className="flex gap-10">
        <div className="rounded-xl h-[204px] w-[202px] bg-[#F2F2F2]">
          <img src={cream} alt="" />
        </div>
        <div className="flex flex-col gap-8">
          <div>
            {/* <h2>{product.name}</h2> */}
            <div className="flex flex-col font-600 text-2xl gap-4">
              <h2>Touch bright & Clear Cream | 150ml</h2>
              <p>₦12,000</p>
            </div>
            <p>
              The Touch Bright & Clear Cream is a concentrated cream targeting
              various dark spot concerns.
            </p>
          </div>
          <div className="">
            {/* <PlusMinusBtn /> */}
            <button className="btn-blue w-[30%] max-w-[180px]">Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="flex gap-2 mt-12 ">
        <img className="w-[88px] h-[88px]" src={cream} alt="" />
        <img className="w-[88px] h-[88px]" src={cream} alt="" />
        <img className="w-[88px] h-[88px]" src={cream} alt="" />
      </div>
    </section>
  );
};

export default Product;
