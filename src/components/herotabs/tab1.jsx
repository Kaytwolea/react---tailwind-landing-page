import React from "react";

function Tab1() {
  return (
    <div>
      <div className='grid md:grid-cols-2 gap-8'>
        <div className='md:mt-12 mt-6'>
          <h1 className='lg:text-6xl text-3xl font-bold text-black lg:leading-[1.2] leading-normal'>
            Premium Web Hosting for Your Website
          </h1>
          <p className='text-base font-normal text-gray-500 pt-12 w-5/6'>
            Blazing fast web hosting for individuals and businesses of all sizes
            backed by 24x7x365 Support.
          </p>
          <div className='flex lg:gap-8 gap-2 mx-auto mt-12'>
            <button className='h-14 lg:w-40 w-32 rounded-xl herobtn bg-[#B00000] text-white'>
              Create account
            </button>
            <button className='h-14 lg:w-40 w-32 rounded-xl border-2 border-black bg-white text-black'>
              Create account
            </button>
          </div>
        </div>
        <div className=''>
          <img
            src='./images/hero1.png'
            alt=' '
          />
        </div>
      </div>
    </div>
  );
}

export default Tab1;
