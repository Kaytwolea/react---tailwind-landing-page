import React from "react";

const Footer = () => {
  return (
    <div className='lg:h-96 lg:w-5/6 w-full bg-[#B00000] rounded-lg mx-auto mt-20 mb-4'>
      <div className=' pt-16 lg:flex gap-14 pl-10'>
        <div className=''>
          <img
            src='./images/lemon.svg'
            alt=' '
          />
          <p className='text-white font-normal text-base w-80 pt-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim praesent elem
          </p>
        </div>
        <div className='mt-4'>
          <ul className='flex flex-col gap-4 text-white'>
            <li className='font-extrabold text-xl'>Service</li>
            <li className='text-base font-normal'>Domain</li>
            <li className='text-base font-normal'>Shared hosting</li>
            <li className='text-base font-normal'>Cloud hosting</li>
            <li className='text-base font-normal'>Private hosting</li>
          </ul>
        </div>
        <div className='mt-4'>
          <ul className='flex flex-col gap-4 text-white'>
            <li className='font-extrabold text-xl'>Hosting</li>
            <li className='text-base font-normal'>Cheap Hosting</li>
            <li className='text-base font-normal'>Hosting Wordpress</li>
            <li className='text-base font-normal'>Email Hosting</li>
            <li className='text-base font-normal'>Hosting Unlimited</li>
          </ul>
        </div>
        <div className='mt-4'>
          <ul className='flex flex-col gap-4 text-white'>
            <li className='font-extrabold text-xl'>Company</li>
            <li className='text-base font-normal'>About</li>
            <li className='text-base font-normal'>Career</li>
            <li className='text-base font-normal'>Contact Us</li>
          </ul>
        </div>
        <div className='mt-4'>
          <ul className='flex flex-col gap-4 text-white'>
            <li className='font-extrabold text-xl'>Help</li>
            <li className='text-base font-normal'>FAQ</li>
            <li className='text-base font-normal'>Help Support</li>
          </ul>
        </div>
      </div>
      <div className='pl-10 mt-10 pb-8'>
        <p className='text-base font-normal text-left text-white'>
          Built by{" "}
          <a
            href='https://wa.me/23409036228765'
            target='_blank'>
            Kaytwolea
          </a>{" "}
          with in Ibadan. Copyright 2022
        </p>
      </div>
    </div>
  );
};

export default Footer;