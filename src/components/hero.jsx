import React, { useState } from "react";
import Tab1 from "./herotabs/tab1";
import Tab2 from "./herotabs/tab2";
import Tab3 from "./herotabs/tab3";
import Tab4 from "./herotabs/tab4";

function Hero() {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTab1 = () => {
    setActiveTab('tab1')
  }
  const handleTab2 = () => {
    setActiveTab('tab2')
  }
  const handleTab3 = () => {
    setActiveTab('tab3')
  }
  const handleTab4 = () => {
    setActiveTab('tab4')
  }

  return (
    <div className='w-5/6  mx-auto'>
      <div className='mt-12'>
        <div className='flex'>
          <button
            onClick={handleTab1}
            className={
              activeTab === "tab1"
                ? "text-[#B00000] border-b-2 border-[#B00000] text-base font-semibold w-28"
                : "text-gray-400 border-b-2 border-gray-400 w-28"
            }>
            Hosting
          </button>
          <button
            onClick={handleTab2}
            className={
              activeTab === "tab2"
                ? "text-[#B00000] border-b-2 border-[#B00000] text-base font-semibold w-28"
                : "text-gray-400 border-b-2 border-gray-400 w-28"
            }>
            Domain
          </button>
          <button
            onClick={handleTab3}
            className={
              activeTab === "tab3"
                ? "text-[#B00000] border-b-2 border-[#B00000] text-base font-semibold w-28"
                : "text-gray-400 border-b-2 border-gray-400 w-28"
            }>
            SEO
          </button>
          <button
            onClick={handleTab4}
            className={
              activeTab === "tab4"
                ? "text-[#B00000] border-b-2 border-[#B00000] text-base font-semibold w-28"
                : "text-gray-400 border-b-2 border-gray-400 w-28"
            }>
            Email
          </button>
        </div>
      </div>
      <div>
        {activeTab === "tab1" ? <Tab1 /> : <div></div>}
        {activeTab === "tab2" ? <Tab2 /> : <div></div>}
        {activeTab === "tab3" ? <Tab3 /> : <div></div>}
        {activeTab === "tab4" ? <Tab4 /> : <div></div>}
      </div>
    </div>
  );
}

export default Hero;
