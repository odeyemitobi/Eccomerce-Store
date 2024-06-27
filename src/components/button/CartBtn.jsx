import React from "react";

function CartBtn(props) {
  return (
    <button className="bg-black text-white text-xl font-semibold py-3 px-12 rounded-xl">
      {props.children}
    </button>
  );
}

export default CartBtn;