import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import cream from "../assets/cream.png";
import PlusMinusBtn from "./PlusMinusBtn";
import axios from "axios";

const Product = ({addToCart,openModal, handleDecreaseItem, handleIncreaseItem}) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          `https://timbu-get-single-product.reavdev.workers.dev/${id}?organization_id=3f570a4f4cf14dc99651783723c214bf&Appid=4CVO1BXR3OYKFD8&Apikey=${
            import.meta.env.VITE_APP_API_KEY
          }`,
          {
            headers: {
              Accept: "application/json",
            },
          }
        );
        setProduct(res.data);
        setProduct((prev) => ({ ...prev, count: 1 }));
      } catch (error) {
        console.log(error.message);
      }
    };

    getProduct();
  }, []);


  const doTwoThings = (product) => {
    // openModal();
    // addToCart(product);
    console.log(product);
    console.log(product.count);
  };

  return (
    <section className="lg:w-[1000px] px-4 my-[3rem] mx-auto">
      <NavLink className="text-5xl font-black" to={"/"}>
        &larr;
      </NavLink>
      <h2 className="text-2xl font-semibold my-8">Product Description</h2>
      <div className="flex flex-col lg:items-stretch items-center lg:flex-row gap-10">
        <div className=" flex rounded-xl h-[204px] w-[202px] bg-[#F2F2F2]">
          {product.photos && (
            <img
              className="m-auto"
              src={`https://api.timbu.cloud/images/${product.photos[0].url}`}
              alt=""
            />
          )}
        </div>
        <div className="flex flex-col gap-8">
          <div>
            <div className="flex flex-col font-semibold  mb-4 text-2xl gap-4">
              <h2>{product.name}</h2>
              <p>₦{product.current_price}</p>
            </div>
            <p>
              The Touch Bright & Clear Cream is a concentrated cream targeting
              various dark spot concerns.
            </p>
          </div>
          <div className="flex gap-4">
            <PlusMinusBtn
              item={product}
              handleDecreaseItem={handleDecreaseItem}
              handleIncreaseItem={handleIncreaseItem}
            />
            <button
              onClick={() => doTwoThings(product)}
              className="btn-blue w-[30%] max-w-[180px]"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-2 mt-12 ">
        {product.photos &&
          product.photos.map((image, index) => (
            <div className="rounded-[4px] w-[88px] h-[88px] flex gap-4 bg-[#F2F2F2]">
              <img
                className=" m-auto w-full h-full"
                key={index}
                src={`https://api.timbu.cloud/images/${image.url}`}
                alt=""
              />
            </div>
          ))}
      </div>
    </section>
  );
};

export default Product;
