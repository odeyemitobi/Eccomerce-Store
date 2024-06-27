import React, { useState } from "react";
import { ACTIVEIMG4 } from "../../misc/activeimg";
import CartBtn from "../../components/button/CartBtn";
import { TiShoppingCart } from "react-icons/ti";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FaBalanceScale } from "react-icons/fa";
import Mainlayout from "../../Layouts/Mainlayout";

function Paradiseproduct() {
  const slides = ACTIVEIMG4;
  const [slide, setSlide] = useState(slides[0]);
  const [quantity, setQuantity] = useState(1);

  return (
    <Mainlayout>
      <div className="py-5 px-12 gap-12 flex">
        <div className=" flex-1 flex gap-5">
          <div className="flex-1">
            {slides.map((s, index) => (
              <img
                key={s.id}
                onClick={() => setSlide(slides[index])}
                className="w-full h-[12rem] cursor-pointer object-cover mb-2"
                src={s.image}
                alt=""
              />
            ))}
          </div>
          <div className="flowkey">
            <img
              className="h-[50rem] w-full object-cover max-h-full"
              src={slide.image}
              alt=""
            />
          </div>
        </div>
        <div className="flex-1 flex-col flex gap-7">
          <h1 className="font-bold text-2xl">
            PARADISE STRONG FRAGRANCE PERFUME{" "}
          </h1>
          <span className="text-[#a52a2a] text-[2rem] font-medium">
            #12,000
          </span>
          <p className="text-lg font-light text-justify">
            Paradise perfume with very good frangrance that last long for more
            than 24hours and frangrance stays after washing.
          </p>
          <div className="flex items-center gap-2">
            <button
              className="w-[30px] h-[30px] text-xl flex items-center justify-center rounded-lg bg-black text-white"
              onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
            >
              -
            </button>
            {quantity}
            <button
              className="w-[30px] h-[30px] text-xl flex items-center justify-center rounded-lg bg-black text-white"
              onClick={() => setQuantity((prev) => prev + 1)}
            >
              +
            </button>
          </div>
          <div className="">
            <CartBtn>
              <div className="flex items-center gap-4">
                <TiShoppingCart />
                ADD TO CART
              </div>
            </CartBtn>
          </div>
          <div className="flex gap-7">
            <div className="flex items-center gap-2 cursor-pointer text-[#a52a2a]">
              <MdOutlineFavoriteBorder />
              ADD TO WISH LIST
            </div>
            <div className="flex items-center gap-2 cursor-pointer text-[#a52a2a]">
              <FaBalanceScale />
              ADD TO COMAPRE
            </div>
          </div>
          <div className="flex flex-col gap-2 text-[1rem] mt-7 text-gray-500">
            <span>Vendor: Testimony Stores</span>
            <span>Product Type: Perfume</span>
            <span>Tag: Perfume, Body Spray</span>
          </div>
          <hr />
          <div className=" flex flex-col gap-2 text-[1rem] mt-7 text-gray-500">
            <span>DESCRIPTION</span>
            <hr className="w-[30%]" />
            <span>ADDITIONAL INFORMATION</span>
            <hr className="w-[30%]" />
            <span>FAQ</span>
          </div>
        </div>
      </div>
    </Mainlayout>
  );
}

export default Paradiseproduct;
