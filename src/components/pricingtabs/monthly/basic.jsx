import React from "react";
import offers from "./offers";

const Plancard = (props) => {
  return (
    <div>
      <div className='h-auto border-2 border-gray-500 rounded-3xl'>
        <div className='w-5/6 mx-auto pt-6 pb-6'>
          <h4 className='text-2xl text-black font-bold'>{props.plan}</h4>
          <p className='text-[12px] font-normal text-black pt-2'>
            with all your customers via all conversation channels in one central
            dashboard.
          </p>
          <h5 className='text-4xl font-bold text-black pt-6'>{props.price}</h5>
          <p className='text-[12px] font-normal text-black'>per month</p>
          <div className='mx-auto w-full mt-6'>
            <button className='h-12 w-full bg-transparent border-2 rounded-2xl border-black'>
              Choose this plan
            </button>
          </div>
          <div className='mt-6'>
            {offers.map((list) => (
              <div
                className='flex gap-4'
                key={list.id}>
                <img
                  src='./images/check.svg'
                  alt=' '
                />
                <p className='text-sm text-black font-normal'>{list.offer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
const Basic = () => {
  return (
    <div className='w-5/6 mx-auto lg:grid grid-cols-3 space-y-4 gap-16 mt-16'>
      <Plancard
        plan='Starter'
        price='$4.20'
      />
      <Plancard
        plan='Standard'
        price='$7.20'
      />
      <Plancard
        plan='Supreme'
        price='$10.30'
      />
    </div>
  );
};

export default Basic;
