import React, { useState } from "react";
import Basicyearly from "./basicyearly";
import Premiumyearly from "./premiumyearly";

function Yearly() {
  const [activeyearlyPlan, setActiveyearlyPlan] = useState("yearlyplan1");

  const handleyearlyPlan1 = () => {
    setActiveyearlyPlan("yearlyplan1");
  };

  const handleyearlyPlan2 = () => {
    setActiveyearlyPlan("yearlyplan2");
  };
  return (
    <div>
      <div className='w-3/4 mx-auto'>
        <div className='flex mt-16'>
          <button
            onClick={handleyearlyPlan1}
            className={
              activeyearlyPlan === "yearlyplan1"
                ? "w-1/2 text-2xl font-bold text-black border-b-4 border-[#B00000]"
                : "w-1/2 text-2xl font-bold text-black border-b-4 border-gray-300"
            }>
            Basic
          </button>
          <button
            onClick={handleyearlyPlan2}
            className={
              activeyearlyPlan === "yearlyplan2"
                ? "w-1/2 text-2xl font-bold text-black border-b-4 border-[#B00000]"
                : "w-1/2 text-2xl font-bold text-black border-b-4 border-gray-300"
            }>
            Premium
          </button>
        </div>
      </div>
      <div>
        {activeyearlyPlan === "yearlyplan1" ? <Basicyearly /> : <div></div>}
        {activeyearlyPlan === "yearlyplan2" ? <Premiumyearly /> : <div></div>}
      </div>
    </div>
  );
}

export default Yearly;
