import React, { useState } from "react";
import Pricing1 from "./pricingtabs/monthly/monthly";
import Pricing2 from "./pricingtabs/yearly/yearly";


function Pricing() {
  const [activePricing, setActivePricing] = useState("pricing1");

  const handlePricing1 = () => {
    setActivePricing('pricing1')
  }

  const handlePricing2 = () => {
    setActivePricing('pricing2')
  }

  return (
    <div>
      <div className='w-5/6 mx-auto mt-16 mb-16'>
        <h2 className='text-5xl text-center font-bold text-black lg:w-3/4 mx-auto'>
          Ready to get started with Lemon Wares?
        </h2>
        <p className='text-2xl text-center text-blaack font-normal pt-8'>
          Choose the package that suits you
        </p>
        <div className='flex justify-center items-center pt-8 gap-8'>
          <h4 className='text-2xl text-black'>Monthly</h4>
          <div className='h-10 w-20 bg-[#B00000] rounded-3xl py-2'>
            <button
              onClick={handlePricing1}
              className={
                activePricing === "pricing1"
                  ? "rounded-full h-6 w-[40%] bg-white ml-1"
                  : "rounded-full h-6 w-[40%] bg-transparent ml-1"
              }></button>
            <button
              onClick={handlePricing2}
              className={
                activePricing === "pricing2"
                  ? "rounded-full h-6 w-[40%] bg-white ml-1"
                  : "rounded-full h-6 w-[40%] bg-transparent ml-1"
              }></button>
          </div>
          <h4 className='text-2xl text-black'>Yearly</h4>
        </div>
        <div className='mt-8'>
              {activePricing === 'pricing1' ? <Pricing1 /> : <div></div>}
              {activePricing === 'pricing2' ? <Pricing2 /> : <div></div>}
        </div>
      </div>
    </div>
  );
}
export default Pricing;