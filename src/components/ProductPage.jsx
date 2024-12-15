import React from "react";
import Container from "./Container";
import image1 from "../assets/photos/image1.png";
import { useState } from "react";
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { CiHeart } from "react-icons/ci";

export default function ProductPage() {
  const [quantity, setQuantity] = useState(0);
  const [selectedSize, setSelectedSize] = useState("S");

  const handleQuantityChange = (type) => {
    setQuantity((prev) =>
      type === "increment" ? prev + 1 : prev > 0 ? prev - 1 : 0
    );
  };
  return (
    <Container className="py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px]">
        {/* image */}
        <div className=" ">
          <img src={image1} className="w-[630px] h-[720px] rounded" />
        </div>
        <div className="py-[90px]">
          {/* Title and Reviews */}
          <h2 className="text-[40px] leading-[44px] tracking-tighter text-lightBlack font-bold py-3">
            Classy Modern Smart Watch
          </h2>
          <div className="flex items-center pb-1">
            <div className="flex text-yellow-400">
              {Array(4)
                .fill(0)
                .map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M12 17.27l5.18 3.04-1.64-5.3 4.46-3.88-5.5-.43L12 5.5 9.5 10.7l-5.5.43 4.46 3.88-1.64 5.3L12 17.27z" />
                  </svg>
                ))}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-gray-300"
              >
                <path d="M12 17.27l5.18 3.04-1.64-5.3 4.46-3.88-5.5-.43L12 5.5 9.5 10.7l-5.5.43 4.46 3.88-1.64 5.3L12 17.27z" />
              </svg>
            </div>
            <span className="ml-2 text-sm text-gray-500">(2 Reviews)</span>
          </div>

          {/* Pricing */}
          <div className="flex items-center pt-5">
            <span className="line-through text-[#8091A7] text-textColor mr-2">
              $99.00
            </span>
            <span className="text-2xl font-bold text-btnColor">$79.00</span>
          </div>

          {/* Description */}
          <p className="text-textColor text-lg font-normal leading-[30px] pt-5 pr-1">
            I must explain to you how all this mistaken idea of denoun cing ple
            praising pain was born and I will give you a complete account of the
            system, and expound the actual teaching.
          </p>

          {/* Product Details */}
          <div className="pt-5 pr-1">
            <div className="flex  gap-[43px]  text-textColor text-sm mb-2">
              <span className="w-[46px]">Type</span>
              <span>Model Number</span>
            </div>
            <div className="flex gap-[43px] text-lightBlack text-[16px] leading-6 font-bold">
              <span className="w-[46px]">Watch</span>
              <span>Forerunner 290XT</span>
            </div>
          </div>

          {/* Band Color */}
          <div className="pt-5 flex flex-col gap-[10px]">
            <span className="text-lightBlack text-lg font-bold leading-5 block">
              Band Color
            </span>
            <div className="flex gap-3">
              {[
                "bg-purple-500",
                "bg-blue-500",
                "bg-teal-500",
                "bg-gray-900",
              ].map((color, index) => (
                <div
                  key={index}
                  className={`w-4 h-4 rounded-full border-2 cursor-pointer ${color}`}
                ></div>
              ))}
            </div>
          </div>

          {/* Wrist Size */}
          <div className="pt-5 flex flex-col gap-[10px]">
            <span className="text-lightBlack text-lg font-bold leading-5 block">
              Wrist Size
            </span>
            <div className="flex gap-2">
              {[
                { size: "S", price: "$69" },
                { size: "M", price: "$79" },
                { size: "L", price: "$89" },
                { size: "XL", price: "$99" },
              ].map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedSize(item.size)}
                  className={`px-[18px] py-2 border rounded-sm flex items-center gap-[10px] text-sm ${
                    selectedSize === item.size
                      ? "border-btnColor text-btnColor"
                      : "border-gray-300 text-lightBlack"
                  }`}
                >
                  <span className="font-bold">{item.size}</span>
                  <span className="text-textColor text-[10px]">
                    {item.price}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <div className="flex items-center gap-4 pt-5 ">
            <div className="flex items-center gap-0 border py-2">
              <button
                onClick={() => handleQuantityChange("decrement")}
                className="px-3 border-r rounded hover:scale-110 duration-300 hover:text-red-600"
              >
                <span className="w-9 h-9">
                  <FiMinus size={19} />
                </span>
              </button>
              <span className="px-[26px] border-x text-center">{quantity}</span>
              <button
                onClick={() => handleQuantityChange("increment")}
                className="px-3 border-l rounded hover:scale-110 duration-300 hover:text-green-600"
              >
                <span className="w-9 h-9">
                  <GoPlus size={19} />
                </span>
              </button>
            </div>

            <button className="px-5 py-2 bg-btnColor text-white rounded hover:bg-blue-700">
              Add to Cart
            </button>
            <span>
              <CiHeart size={24} />
            </span>
          </div>
        </div>
      </div>
      {/* checkout button */}
      <div className="flex items-center justify-center pt-10  ">
        <button className="w-[140px] h-10 py-2 px-6 rounded-[20px] text-sm bg-[#FFBB5A]">
          Checkout
          <span className=" ml-2 bg-white w-5 text-[12px] h-5 py-[2px] px-[6px]  rounded   text-center">
            {quantity}
          </span>
        </button>
      </div>
    </Container>
  );
}
