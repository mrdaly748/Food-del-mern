import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Card from "./pages/Card/Card";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/footer/footer";
import LoginpopUp from "./components/LoginPopUp/LoginPopUp"
import Verify from "./pages/verify/verify";
import MyOrders from "./pages/MyOrders/MyOrders";
               
const App = () => {

  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
    {showLogin?<LoginpopUp setShowLogin={setShowLogin}/>:<></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin}  />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card" element={<Card />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path='/verify' element={<Verify />} />
          <Route path='/myorders' element={<MyOrders />} />
        </Routes>
      </div>
      <Footer/>
      
    </>
  );
};

export default App;
