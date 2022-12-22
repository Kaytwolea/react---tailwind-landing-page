import React from "react";

const Cta = () => {
  return (
    <div>
      <div className='w-5/6 mx-auto lg:h-80 bg-[#F7FAFE] rounded-2xl cta'>
        <div className='w-2/3 mx-auto flex flex-col items-center justify-center pt-20'>
          <h2 className='text-5xl font-bold text-center'>
            We're here to make your website awesome.
          </h2>
          <button className='bg-[#B00000] h-16 w-64 mt-8 rounded-3xl flex gap-4 items-center justify-center text-white font-semibold'>
            <img
              src='./images/whatsapp.svg'
              alt=''
            />
            Get in touch with us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cta;
