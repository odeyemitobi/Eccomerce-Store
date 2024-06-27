import React from "react";
import { useState } from "react";
import { useParams } from "react-router";
import Mainlayout from "../../Layouts/Mainlayout";
import Men from "../../Assets/pictures/mens.jpg";
import List from "../../components/List/List";

function Products() {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sortby, setSortby] = useState(null);

  return (
    <Mainlayout>
      <div className="flex px-8 py-14">
        <div className="flex-1 sticky h-full top-[50px]">
          <div className="mb-7">
            <h1 className="font-medium mb-5 text-2xl">Categories</h1>
            <div>
              <input
                className="cursor-pointer"
                type="checkbox"
                id="1"
                value={1}
              />
              <label htmlFor="1">Wine</label>
            </div>
            <div>
              <input
                className="cursor-pointer"
                type="checkbox"
                id="2"
                value={2}
              />
              <label htmlFor="2">Utensils</label>
            </div>
            <div>
              <input
                className="cursor-pointer"
                type="checkbox"
                id="3"
                value={3}
              />
              <label htmlFor="3">Baby food</label>
            </div>
            <div>
              <input
                className="cursor-pointer"
                type="checkbox"
                id="4"
                value={4}
              />
              <label htmlFor="4">Clothes</label>
            </div>
            <div>
              <input
                className="cursor-pointer"
                type="checkbox"
                id="5"
                value={5}
              />
              <label htmlFor="5">Women Accessories</label>
            </div>
            <div>
              <input
                className="cursor-pointer"
                type="checkbox"
                id="6"
                value={6}
              />
              <label htmlFor="6">Men Accessories</label>
            </div>
          </div>
          <div className="mb-7">
            <h1 className="font-medium mb-5 text-2xl">Filter</h1>
            <div>
              <span>0</span>
              <input
                className="cursor-pointer"
                type="range"
                min={0}
                max={1000}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
              <span>{maxPrice}</span>
            </div>
          </div>
          <div className="mb-7">
            <h1 className="font-medium mb-5 text-2xl">Sort by</h1>
            <div>
              <input
                className="cursor-pointer"
                type="radio"
                id="low"
                value="low"
                name="price"
                onChange={(e) => setSortby("low")}
              />
              <label htmlFor="low">Price (Lowest first)</label>
            </div>
            <div>
              <input
                className="cursor-pointer"
                type="radio"
                id="high"
                value="high"
                name="price"
                onChange={(e) => setSortby("high")}
              />
              <label htmlFor="high">Price (Highest first)</label>
            </div>
          </div>
        </div>
        <div className="catalo">
          <img
            className="w-full h-[300px] object-cover mb-12"
            src={Men}
            alt=""
          />
          <div>
            <List catId={catId} maxPrice={maxPrice} sort={sortby} />
          </div>
        </div>
      </div>
    </Mainlayout>
  );
}

export default Products;
