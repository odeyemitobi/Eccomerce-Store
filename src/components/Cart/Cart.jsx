import React from "react";
import Chanel1 from "../../Assets/images/chanel1.jpg";
import Chanel2 from "../../Assets/images/chanel2.jpg";
import { MdDelete } from "react-icons/md";
import CartBtn from "../button/CartBtn";

function Cart() {
  const data = [
    {
      id: 1,
      image: <img className="h-[7rem] object-cover" src={Chanel1} alt="" />,
      image2: <img className="h-[5rem]" src={Chanel2} alt="" />,
      tittle: "CHANEL STRONG FRAGRANCE PERFUME",
      desc: "Chanel perfume",
      oldPrice: 23000,
      price: 17000,
      isNew: true,
    },
  ];

  return (
    <div className="bg-white absolute right-5 top-20 z-[999] p-5 shadow-2xl">
      <div>
        <h1 className="font-bold text-2xl mb-7">Cart Items</h1>
        {data?.map((items) => (
          <div className="flex mb-7 gap-5 items-center" key={items.id}>
            {items.image}
            <div>
              <h1 className="text-[13px] mb-3 font-medium">{items.tittle}</h1>
              <p className="mb-5 text-[13px]">
                {items.desc?.substring(0, 100)}
              </p>
              <div className="text-[#a52a2a] text-[105x] font-medium">
                1 x #{items.price}
              </div>
            </div>
            <MdDelete className="cursor-pointer" color="red" size={25} />
          </div>
        ))}
        <div className="flex justify-between font-medium text-base mb-7">
          <span>CART SUMMARY</span>
          <span>#17,000</span>
        </div>
        <div className="mb-5">
          <CartBtn>CHECKOUT</CartBtn>
        </div>
        <span className="text-red-600 text-[16px] font-medium cursor-pointer">
          Reset Cart
        </span>
      </div>
    </div>
  );
}

export default Cart;
