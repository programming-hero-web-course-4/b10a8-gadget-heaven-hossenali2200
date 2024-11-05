import React, { useState } from 'react';
import Cart from '../components/Cart';
import Wishlist from '../components/Wishlist';
import { Helmet } from 'react-helmet-async';
 

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Cart");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
       <Helmet>
      
      <title>Dashboard</title>
      </Helmet>
      <div className="bg-purple-600 lg:h-[400px] h-[300px]">
        <div className="relative items-center w-full px-5 py-8 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
          <div className="flex w-full mx-auto text-left">
            <div className="relative inline-flex items-center mx-auto align-middle">
              <div className="text-center">
                <h1 className="max-w-5xl text-lg font-bold leading-none tracking-tighter text-white md:text-5xl lg:text-6xl lg:max-w-7xl">
                  Dashboard
                </h1>
                <p className="max-w-xl mx-auto mt-8 text-base leading-relaxed text-white">
                  Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </p>
                <div className="flex justify-center mt-4 gap-3">
                  <button
                    onClick={() => handleTabClick("Cart")}
                    className={`px-12 py-2 text-xl font-semibold rounded-full border ${activeTab === "Cart" ? "bg-white text-black" : "bg-purple-500 text-white"}`}
                  >
                    Cart
                  </button>
                  <button
                    onClick={() => handleTabClick("Wishlist")}
                    className={`px-12 py-2 text-xl font-semibold rounded-full border ${activeTab === "Wishlist" ? "bg-white text-black" : "bg-purple-500 text-white"}`}
                  >
                    Wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conditionally Render Cart or Wishlist based on activeTab */}
      <div className="p-4">
        {activeTab === "Cart" ? <Cart /> : <Wishlist />}
      </div>
    </div>
  );
};

export default Dashboard;
