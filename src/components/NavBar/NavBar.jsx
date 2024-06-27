import React, { useState } from "react";
import flag from "../../Assets/pic/fgn.png";
import { useNavigate } from "react-router";
import { FiChevronDown } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineFavoriteBorder, MdOutlineShoppingCart } from "react-icons/md";
// import { PersonOutlineOutlined } from "@mui/icons-material";
// import { HiOutlineLogout } from "react-icons/hi";
import Cart from "../Cart/Cart";
import { AuthComponent } from "../../Pages/sub/Accounts/Account";

function NavBar() {
  const [openCart, setOpenCart] = useState(false);
  const [openAuthComponent, setOpenAuthComponent] = useState(false);


  const navigate = useNavigate();

  return (
    <div className=" bg-black">
      <div className="h-[80px] text-white">
        <div className="flex justify-between py-[10px] px-[30px]">
          <div className="flex items-center gap-6">
            <div className="flex items-center cursor-pointer">
              <img className="h-4" src={flag} alt="flag" />
              <FiChevronDown />
            </div>
            <div className="flex items-center cursor-pointer">
              <h1>USD</h1>
              <FiChevronDown />
            </div>
            <div
              className="cursor-pointer"
              onClick={() => navigate("/cosmetics")}
            >
              <h1>Perfumes</h1>
            </div>
            <div className="cursor-pointer" onClick={() => navigate("/wine")}>
              <h1>Wine</h1>
            </div>
            <div
              className="cursor-pointer"
              onClick={() => navigate("/children")}
            >
              <h1>Children</h1>
            </div>
            <div
              className="cursor-pointer"
              onClick={() => navigate("/accessories")}
            >
              <h1>Accessories</h1>
            </div>
          </div>
          <div className="flex items-center">
            <h1
              onClick={() => navigate("/")}
              className="first text-[30px] font-bold cursor-pointer tracking-[2px]"
            >
              TESTIMONYSTORE
            </h1>
          </div>
          <div className="flex items-center gap-6">
            <div onClick={() => navigate("/")} className="cursor-pointer">
              Home
            </div>
            <div
              onClick={() => navigate("/products")}
              className="cursor-pointer"
            >
              Stores
            </div>
            <div className="flex items-center gap-4 text-[#777]">
              <AiOutlineSearch size={20} className="cursor-pointer" />
              <div className="text-white cursor-pointer"onClick={() => setOpenAuthComponent(true)}>
                Login/Sign Up
              </div>
              <MdOutlineFavoriteBorder size={20} className="cursor-pointer" />
              <div
                className="flex items-center relative cursor-pointer"
                onClick={() => setOpenCart(!openCart)}
              >
                <MdOutlineShoppingCart size={20} />
                <span className="w-5 absolute text-[12px] h-5 rounded-[50%] bg-[#2879fe] text-white right-[-10px] top-[-10px] justify-center items-center flex">
                  0
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {openCart && <Cart />}
      {openAuthComponent && <AuthComponent handleClose={() => setOpenAuthComponent(false)} />}
    </div>
  );
}

export default NavBar;
