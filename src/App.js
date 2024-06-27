import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/main/Home";
import Products from "./Pages/main/Products";
import Channelproducts from "./Pages/sub/Channelproducts";
import Herproduct from "./Pages/sub/Herproduct";
import Bentleyproduct from "./Pages/sub/Bentleyproduct";
import Paradiseproduct from './Pages/sub/Paradiseproduct';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/products" element={<Products/>} />
          <Route exact path="/channelproducts" element={<Channelproducts/>} />
          <Route exact path="/herproducts" element={<Herproduct/>} />
          <Route exact path="/bentleyproducts" element={<Bentleyproduct/>} />
          <Route exact path="/paradiseproducts" element={<Paradiseproduct/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
