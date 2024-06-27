import React from "react";

function Footer() {
  return (
    <div className="mx-[200px] mt-[100px] mb-[20px]">
      <div className="flex gap-12">
        <div className="flex flex-col gap-2 fit grey text-[14px] cursor-pointer">
          <h1 className="font-medium text-[18px] text-[#555]">Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="flex flex-col gap-2 fit grey text-[14px] cursor-pointer">
          <h1 className="font-medium text-[18px] text-[#555]">Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="flex flex-col gap-2 fit grey text-[14px] cursor-pointer">
          <h1 className="font-medium text-[18px] text-[#555]">About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            aliquam? Quod, ex id odio incidunt nam nisi sunt totam eos excepturi
            eaque, voluptates dolore minus, omnis corporis facere nemo vitae.
          </span>
        </div>
        <div className="flex flex-col gap-2 fit grey text-[14px] cursor-pointer">
          <h1 className="font-medium text-[18px] text-[#555]">Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            aliquam? Quod, ex id odio incidunt nam nisi sunt totam eos excepturi
            eaque, voluptates dolore minus, omnis corporis facere nemo vitae.
          </span>
        </div>
      </div>

      <div className="mt-9">
        <div className="text-center items-center">
          <span className="font-bold text-[24px] text-[#2879fe]">Testimonystore</span>
          <span className="ml-5 text-[12px] grey"> &copy; Copyright 2023. All Rights Reserved.</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
