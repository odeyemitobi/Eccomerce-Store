import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { useState } from "react";
import { SLIDERIMG } from "./../../misc/sliderimg";

function Slider() {
  const [slide, setSlide] = useState(SLIDERIMG);

  const prevSlide = () => {
    const newSlide = [];
    for (let i = 0; i < slide.length; i++) {
      if (i !== 0) {
        newSlide.push(slide[i]);
      }
    }
    newSlide.push(slide[0]);
    setSlide(newSlide);
  };

  const nextSlide = () => {
    const newSlide = [];
    for (let i = 0; i < slide.length; i++) {
      if (i === 0) {
        newSlide.push(slide[slide.length - 1]);
      } else {
        newSlide.push(slide[i - 1]);
      }
    }
    setSlide(newSlide);
  };

  return (
    <div className="w-full relative sly">
      <div className="w-full h-full ">
        <img
          className="w-[100vw] h-full object-cover"
          src={slide[Math.floor(slide.length / 2)].image}
          alt="Nath"
        />
      </div>
      <div className="w-fit flex absolute left-0 right-0 gap-[10px] m-auto bottom-[100px]">
        <div
          onClick={prevSlide}
          className="w-[50px] h-[50px] bg-slate-800 text-white hover:bg-[#a52a2a] cursor-pointer rounded-[50%] border-[1px] border-solid border-[#999] flex items-center justify-center"
        >
          <GoArrowLeft size={30} />
        </div>
        <div
          onClick={nextSlide}
          className="w-[50px] h-[50px] bg-slate-800 text-white hover:bg-[#a52a2a] cursor-pointer rounded-[50%] border-[1px] border-solid border-[#999] flex items-center justify-center"
        >
          <GoArrowRight size={30} />
        </div>
      </div>
    </div>
  );
}

export default Slider;
