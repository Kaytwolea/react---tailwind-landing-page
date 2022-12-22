import React, { useState } from "react";
import Basic from "./basic";
import Premium from "./premium";

function Monthly() {
  const [activePlan, setActivePlan] = useState("plan1");

  const handlePlan1 = () => {
    setActivePlan("plan1");
  };

  const handlePlan2 = () => {
    setActivePlan("plan2");
  };
  return (
    <div>
      <div className='w-3/4 mx-auto'>
        <div className='flex mt-16'>
          <button
            onClick={handlePlan1}
            className={
              activePlan === "plan1"
                ? "w-1/2 text-2xl font-bold text-black border-b-4 border-[#B00000]"
                : "w-1/2 text-2xl font-bold text-black border-b-4 border-gray-300"
            }>
            Basic
          </button>
          <button
            onClick={handlePlan2}
            className={
              activePlan === "plan2"
                ? "w-1/2 text-2xl font-bold text-black border-b-4 border-[#B00000]"
                : "w-1/2 text-2xl font-bold text-black border-b-4 border-gray-300"
            }>
            Premium
          </button>
        </div>
      </div>
      <div>
        {activePlan === "plan1" ? <Basic /> : <div></div>}
        {activePlan === "plan2" ? <Premium /> : <div></div>}
      </div>
    </div>
  );
}

export default Monthly;
