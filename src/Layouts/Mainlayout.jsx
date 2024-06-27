import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

function Mainlayout({ children }) {
  return (
    <div>
      <NavBar />
      <div className="">{children}</div>
      <Footer />
    </div>
  );
}

export default Mainlayout;
