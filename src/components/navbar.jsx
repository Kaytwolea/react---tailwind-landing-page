import React from "react";

function Navbar() {
  return (
    <div>
      <div className='w-full h-16'>
        <div className='w-5/6 mx-auto h-full flex justify-between'>
          <div className='flex gap-16'>
            <img
              src='./images/logo.svg'
              alt=' '
              className='mt-2'
            />
            <h4 className='text-base text-black font-semibold mt-6 border-b-4 border-[#B00000]'>
              Our Services
            </h4>
          </div>
          <div className="hidden md:block">
            <ul className='mt-6 flex gap-6 text-base text-black font-semibold'>
              <li className='hover:border-b-4 hover:border-[#B00000]'>About</li>
              <li className='hover:border-b-4 hover:border-[#523636]'>
                Blog & News
              </li>
              <li className='hover:border-b-4 hover:border-[#B00000]'>
                Contact
              </li>
            </ul>
          </div>
          <div className='md:flex gap-24 mt-6 hidden'>
            <h4 className='text-base font-semibold text-black'>Account</h4>
            <div className='flex gap-6'>
              <img
                src='./images/phone.svg'
                alt=' '
              />
              <h4 className='text-base font-semibold text-black'>
                +2349036228765
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
