import React from "react";
import Mainlayout from "../../Layouts/Mainlayout";
import Slider from "../../components/Slider/Slider";
import Chanel1 from "../../Assets/images/chanel1.jpg";
import Chanel2 from "../../Assets/images/chanel2.jpg";
import Her1 from "../../Assets/images/her1.jpg";
import Her2 from "../../Assets/images/her2.jpg";
import Bent1 from "../../Assets/images/bent1.jpg";
import Bent2 from "../../Assets/images/bent2.jpg";
import Para1 from "../../Assets/images/paradise1.jpg";
import Para2 from "../../Assets/images/paradise2.jpg";
import Wine from "../../Assets/pictures/wines.jpg";
import Women from "../../Assets/pictures/womens.jpg";
import Men from "../../Assets/pictures/mens.jpg";
import Ute from "../../Assets/pictures/utensils.jpg";
import Baby from "../../Assets/pictures/bbyfood.jpg";
import Cloth from "../../Assets/pictures/clothes.jpg";
import { useNavigate } from "react-router";
import { FaFacebookSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { BsLinkedin } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";

function Home() {
  const navigate = useNavigate();

  return (
    <Mainlayout>
      <div>
        <div>
          <Slider />
        </div>
        <div>
          <div className="mx-[200px] my-[100px]">
            <div className="flex justify-between items-center">
              <h1 className="font-bold text-2xl flex-[2] cap">
                Featured Products
              </h1>
              <p className="flex-[3] text-gray-400">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptates dolores beatae recusandae. Voluptatibus vel
                blanditiis officia reprehenderit, distinctio commodi magnam illo
                doloremque quaerat, harum similique obcaecati voluptate ipsa
                adipisci corrupti.
              </p>
            </div>
            <div className="flex justify-center gap-[50px] pt-12">
              <div className="w-[280px] flex flex-col gap-2 hover:shadow-xl rounded-md border-2">
                <div
                  onClick={() => navigate("/channelproducts")}
                  className="w-full overflow-hidden relative cursor-pointer joe"
                >
                  <img
                    className="w-full h-[26rem]"
                    src={Chanel1}
                    alt="chanel1"
                  />
                  <div className="overlay">
                    <img
                      className="w-full h-full"
                      src={Chanel2}
                      alt="chanel2"
                    />
                  </div>
                </div>
                <div className="px-3 pb-5">
                  <h2 className="font-medium">Chanel Perfume</h2>
                  <div className="">
                    <h3 className="text-gray-500 line-through">#23000</h3>
                    <h3 className="font-bold">#17000</h3>
                  </div>
                </div>
              </div>

              <div className="w-[280px] flex flex-col gap-2 hover:shadow-xl rounded-md border-2">
                <div
                  onClick={() => navigate("/herproducts")}
                  className="w-full overflow-hidden relative cursor-pointer joe"
                >
                  <img className="w-full h-[26rem]" src={Her1} alt="Her1" />
                  <div className="overlay">
                    <img className="w-full h-full" src={Her2} alt="Her2" />
                  </div>
                </div>
                <div className="px-3 pb-5">
                  <h2 className="font-medium">Her Perfume</h2>
                  <div className="">
                    <h3 className="text-gray-500 line-through">#19000</h3>
                    <h3 className="font-bold">#13000</h3>
                  </div>
                </div>
              </div>

              <div className="w-[280px] flex flex-col gap-2 hover:shadow-xl rounded-md border-2">
                <div
                  onClick={() => navigate("/bentleyproducts")}
                  className="w-full overflow-hidden relative cursor-pointer joe"
                >
                  <img className="w-full h-[26rem]" src={Bent1} alt="Bent1" />
                  <div className="overlay">
                    <img className="w-full h-full" src={Bent2} alt="Bent2" />
                  </div>
                </div>
                <div className="px-3 pb-5">
                  <h2 className="font-medium">Bentley Perfume</h2>
                  <div className="">
                    <h3 className="text-gray-500 line-through">#27000</h3>
                    <h3 className="font-bold">#22000</h3>
                  </div>
                </div>
              </div>

              <div className="w-[280px] flex flex-col gap-2 hover:shadow-xl rounded-md border-2">
                <div
                  onClick={() => navigate("/paradiseproducts")}
                  className="w-full overflow-hidden relative cursor-pointer joe"
                >
                  <img className="w-full h-[26rem]" src={Para1} alt="Para1" />
                  <div className="overlay">
                    <img className="w-full h-full" src={Para2} alt="Para2" />
                  </div>
                </div>
                <div className="px-3 pb-5">
                  <h2 className="font-medium">Paradise Perfume</h2>
                  <div className="">
                    <h3 className="text-gray-500 line-through">#16000</h3>
                    <h3 className="font-bold">#12000</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex h-[80vh] gap-3 m-3">
            <div className=" flex-1 flex flex-col gap-3">
              <div className="flex-1 flex gap-3 relative overflow-hidden jora">
                <img className="w-full h-full object-cover" src={Wine} alt="" />
                <button
                  onClick={() => navigate("/products")}
                  className="absolute hover:bg-red-400 hover:text-white min-w-[100px] w-fit bg-white rounded top-0 bottom-0 left-0 right-0 h-12 p-3 m-auto cursor-pointer"
                >
                  <p className=" font-bold">Wine</p>
                </button>
              </div>
              <div className="flex-1 flex gap-3 relative overflow-hidden jora">
                <img className="w-full h-full object-cover" src={Ute} alt="" />
                <button
                  onClick={() => navigate("/products")}
                  className="absolute hover:bg-red-400 hover:text-white min-w-[100px] w-fit bg-white rounded top-0 bottom-0 left-0 right-0 h-12 p-3 m-auto cursor-pointer"
                >
                  <p className=" font-bold">Utensils</p>
                </button>
              </div>
            </div>
            <div className=" flex-1 flex flex-col gap-3 jora">
              <div className="flex-1 flex gap-3 relative overflow-hidden">
                <img className="w-full h-full object-cover" src={Baby} alt="" />
                <button
                  onClick={() => navigate("/products")}
                  className="absolute hover:bg-red-400 hover:text-white min-w-[100px] w-fit bg-white rounded top-0 bottom-0 left-0 right-0 h-12 p-3 m-auto cursor-pointer"
                >
                  <p className=" font-bold">Baby food</p>
                </button>
              </div>
            </div>
            <div className="feye2 flex-1 flex flex-col gap-3">
              <div className="flex-1 flex gap-3 relative overflow-hidden">
                <div className="flex-1 flex flex-col gap-3 jora">
                  <div className="flex-1 flex gap-3 relative overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={Cloth}
                      alt=""
                    />
                    <button
                      onClick={() => navigate("/products")}
                      className="absolute hover:bg-red-400 hover:text-white min-w-[100px] w-fit bg-white rounded top-0 bottom-0 left-0 right-0 h-12 p-3 m-auto cursor-pointer"
                    >
                      <p className=" font-bold">Clothes</p>
                    </button>
                  </div>
                </div>
                <div className="flex-1 flex flex-col gap-3 jora">
                  <div className="flex-1 flex gap-3 relative overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={Women}
                      alt=""
                    />
                    <button
                      onClick={() => navigate("/products")}
                      className="absolute hover:bg-red-400 hover:text-white min-w-[100px] w-fit bg-white rounded top-0 bottom-0 left-0 right-0 h-12 p-3 m-auto cursor-pointer"
                    >
                      <p className=" font-bold">Women Accessories</p>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex gap-3 relative overflow-hidden jora">
                <img className="w-full h-full object-cover" src={Men} alt="" />
                <button
                  onClick={() => navigate("/products")}
                  className="absolute hover:bg-red-400 hover:text-white min-w-[100px] w-fit bg-white rounded top-0 bottom-0 left-0 right-0 h-12 p-3 m-auto cursor-pointer"
                >
                  <p className=" font-bold">Men Accessories</p>
                </button>
              </div>
            </div>
          </div>

          <div className="mx-[200px] my-[100px]">
            <div className="flex justify-between items-center">
              <h1 className="font-bold text-2xl flex-[2] cap">
                Trending Products
              </h1>
              <p className="flex-[3] text-gray-400">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptates dolores beatae recusandae. Voluptatibus vel
                blanditiis officia reprehenderit, distinctio commodi magnam illo
                doloremque quaerat, harum similique obcaecati voluptate ipsa
                adipisci corrupti.
              </p>
            </div>

            <div className="flex justify-center gap-[50px] pt-12">
              <div className="w-[280px] flex flex-col gap-2 hover:shadow-xl rounded-md border-2">
                <div
                  onClick={() => navigate("/channelproducts")}
                  className="w-full overflow-hidden relative cursor-pointer joe"
                >
                  <img
                    className="w-full h-[26rem]"
                    src={Chanel1}
                    alt="chanel1"
                  />
                  <div className="overlay">
                    <img
                      className="w-full h-full"
                      src={Chanel2}
                      alt="chanel2"
                    />
                  </div>
                </div>
                <div className="px-3 pb-5">
                  <h2 className="font-medium">Chanel Perfume</h2>
                  <div className="gap-5">
                    <h3 className="text-gray-500 line-through">#23000</h3>
                    <h3 className="font-bold">#17000</h3>
                  </div>
                </div>
              </div>

              <div className="w-[280px] flex flex-col gap-2 hover:shadow-xl rounded-md border-2">
                <div
                  onClick={() => navigate("/herproducts")}
                  className="w-full overflow-hidden relative cursor-pointer joe"
                >
                  <img className="w-full h-[26rem]" src={Her1} alt="Her1" />
                  <div className="overlay">
                    <img className="w-full h-full" src={Her2} alt="Her2" />
                  </div>
                </div>
                <div className="px-3 pb-5">
                  <h2 className="font-medium">Her Perfume</h2>
                  <div className="">
                    <h3 className="text-gray-500 line-through">#19000</h3>
                    <h3 className="font-bold">#13000</h3>
                  </div>
                </div>
              </div>

              <div className="w-[280px] flex flex-col gap-2 hover:shadow-xl rounded-md border-2">
                <div
                  onClick={() => navigate("/bentleyproducts")}
                  className="w-full overflow-hidden relative cursor-pointer joe"
                >
                  <img className="w-full h-[26rem]" src={Bent1} alt="Bent1" />
                  <div className="overlay">
                    <img className="w-full h-full" src={Bent2} alt="Bent2" />
                  </div>
                </div>
                <div className="px-3 pb-5">
                  <h2 className="font-medium">Bentley Perfume</h2>
                  <div className="">
                    <h3 className="text-gray-500 line-through">#27000</h3>
                    <h3 className="font-bold">#22000</h3>
                  </div>
                </div>
              </div>

              <div className="w-[280px] flex flex-col gap-2 hover:shadow-xl rounded-md border-2">
                <div
                  onClick={() => navigate("/paradiseproducts")}
                  className="w-full overflow-hidden relative cursor-pointer joe"
                >
                  <img className="w-full h-[26rem]" src={Para1} alt="Para1" />
                  <div className="overlay">
                    <img className="w-full h-full" src={Para2} alt="Para2" />
                  </div>
                </div>
                <div className="px-3 pb-5">
                  <h2 className="font-medium">Paradise Perfume</h2>
                  <div className="">
                    <h3 className="text-gray-500 line-through">#16000</h3>
                    <h3 className="font-bold">#12000</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-14">
          <div className="py-4 bg-black">
            <div className="flex text-white place-items-center items-center justify-center gap-[13rem]">
              <div>
                <p className="font-semibold">BE IN TOUCH WITH US:</p>
              </div>
              <div className="">
                <div className="rounded-full border-white border-[1px] border-solid pr-4 flex cursor-pointer text-white">
                  <div className="bg-white rounded-s-2xl items-center pt-2 px-2">
                    <p className="text-black font-bold">SEND</p>
                  </div>
                  <input
                    type="text"
                    placeholder="Enter your e-mail"
                    className="text-sm ml-2 py-2 mr-[1rem] w-[75%] bg-transparent focus:outline-none"
                  />
                </div>
              </div>
              <div className="">
                <div className="flex gap-3">
                  <FaFacebookSquare size={25} color="#1877F2" />
                  <BsInstagram size={25} color="#C13584" />
                  <FaXTwitter size={25} />
                  <FcGoogle size={25} />
                  <BsLinkedin size={25} color="#0072b1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Mainlayout>
  );
}

export default Home;
