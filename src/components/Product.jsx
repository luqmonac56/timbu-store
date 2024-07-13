import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import cream from "../assets/cream.png";
import PlusMinusBtn from "./PlusMinusBtn";

const Product = (handleDecreaseItem, handleIncreaseItem) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          `/api/products/${id}?organization_id=3f570a4f4cf14dc99651783723c214bf`,

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
  }, []);

  return (
    <div className="max-w-[1000px]">
      <h2 className="text-2xl">Product Description</h2>
      <div className="flex">
        <img src="" alt="" />
        <div>
          <h2>Touch bright & Clear Cream | 150ml</h2>
          <p>₦12,000</p>
          <p>
            The Touch Bright & Clear Cream is a concentrated cream targeting
            various dark spot concerns: Melasma, age spots, sun spots, and PIH
            (post-inflammatory hyperpigmentation). It also helps clarify acne
            and other blemishes.
          </p>
        </div>
        <div className="">
          {/* <PlusMinusBtn /> */}
          <button className="btn-blue">Add to Cart</button>
        </div>
      </div>
      <div>
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Product;
