import React from "react";

function CreateBtn(props) {
  return (
    <button className="w-full bg-[#a52a2a] text-white text-base font-semibold py-3 px-8 rounded-xl">
      {props.children}
    </button>
  );
}

export default CreateBtn;
