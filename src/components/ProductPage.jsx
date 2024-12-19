import React, { useState } from "react";
import Container from "./Container";
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import toast from "react-hot-toast";
import Modal from "./Modal";

export default function ProductPage({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState([]);
  const [selectedSize, setSelectedSize] = useState(product.size[0]);
  const [selectedColor, setSelectedColor] = useState(product.band_color[0]);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);

  const size =[
    { size: "S", price: "$69" },
    { size: "M", price: "$79" },
    { size: "L", price: "$89" },
    { size: "XL", price: "$99" },
  ]

  const handleQuantityChange = (type) => {
    if (type === "increment") {
      setQuantity(quantity + 1);
      toast.success("Your product increment success");
    } else if (quantity > 1) {
      setQuantity(quantity - 1);
      toast.success("Your product decrement success");
    }
  };

  const handleAddToCart = () => {
    const newItem = {
      title: product.title,
      color: selectedColor,
      size: selectedSize,
      quantity,
      price: product.price * quantity,
      image: product.images[selectedColor],
    };

    setCartItems([...cartItems, newItem]);
    setQuantity(1);
    toast.success("Your product added success");
  };

  const handleCheckout = () => {
    setShowCheckoutModal(true);
  };

  const closeModal = () => {
    setShowCheckoutModal(false);
  };

  const totalCartPrice = cartItems.reduce(
    (total, item) => total + item.price,
    0
  );
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  return (
    <Container className="py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px]">
        {/* image */}
        <div className=" ">
        <img
            src={product.images[selectedColor]}
            alt={product.title}
            className="w-[630px] h-[720px] rounded"
          />
        </div>
        <div className="py-[90px]">
          {/* Title and Reviews */}
          <h2 className="text-[40px] leading-[44px] tracking-tighter text-lightBlack font-bold py-3">
          {product.title}
          </h2>

          <div className="flex items-center pb-1">
            <div className="flex text-yellow-400">
              {Array(4)
                .fill(0)
                .map((_, index) => (
                  <FaStar key={index} className="w-5 h-5" />
                ))}
              <FaStarHalfAlt className="w-5 h-5 text-gray-300" />
            </div>
            <span className="ml-2 text-sm text-gray-500">(2 Reviews)</span>
          </div>

          {/* Pricing */}
          <div className="flex items-center pt-5">
            <span className="line-through text-textColor mr-2">
            ${product.old_price.toFixed(2)}
            </span>
            <span className="text-2xl font-bold text-btnColor">${product.price.toFixed(2)}</span>
          </div>

          {/* Description */}
          <p className="text-textColor text-lg font-normal leading-[30px] pt-5 pr-1">
          {product.description}
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
              {product.band_color.map((color, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedColor(color)}
                  className={`w-[19px] h-[19px] rounded-full border-2 cursor-pointer ${
                    selectedColor === color
                      ? "border-btnColor"
                      : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color }}
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
              {size.map((item, index) => (
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

            <button
              onClick={handleAddToCart}
              className="px-5 py-2 bg-btnColor text-white rounded hover:bg-blue-700"
            >
              Add to Cart
            </button>
            <span>
              <CiHeart size={24} />
            </span>
          </div>
        </div>
      </div>
      
      {/* checkout button */}
      <div className="mx-auto flex items-center justify-center mt-6">
        {cartItems.length > 0 && (
          <button
            onClick={handleCheckout}
            className="w-[139px] h-[42px] bg-[#FFBB5A] text-black  rounded-full"
          >
            Checkout{" "}
            <span className="bg-white p-0.5 rounded-md px-2">{quantity}</span>
          </button>
        )}
      </div>

      {showCheckoutModal && (
        <Modal
          totalCartPrice={totalCartPrice}
          closeModal={closeModal}
          cartItems={cartItems}
          totalQuantity={totalQuantity}
        />
      )}
    </Container>
  );
}
