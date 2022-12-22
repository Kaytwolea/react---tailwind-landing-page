import React from "react";
import Data from './data';

const Aboutcard = (props) => {
  return (
    <div>
      <div className=' h-72'>
        <div className='flex items-center justify-center'>
          <img
            src={props.image}
            alt=' '
          />
        </div>
        <div className='text-center whitespace-normal'>
          <h2 className='text-xl font-bold'>{props.title}</h2>
          <p className='text-sm text-black font-light pt-1'>
            {props.para}
          </p>
        </div>
      </div>
    </div>
  );
};

function About() {
  console.log(Data)
  return (
    <div className='w-5/6 mx-auto'>
      <div className='grid lg:grid-cols-2 gap-4 mt-36'>
        <div className=''>
          <h2 className='text-4xl font-extrabold'>True Cloud Web Hosting</h2>
          <p className='text-base text-black font-normal lg:w-[90%] w-full pt-4'>
            True Cloud Web Hosting All of the hosting packages we offer are
            deployed instantly on our SSD powered cloud. We don’t use dedicated
            servers that operate on single pieces of hardware. Our entire
            infrastructure is built to be reliable, secure, and scalable.
          </p>
        </div>
        <div className='mt-4'>
          <div className='grid grid-cols-3 gap-4'>
            <img
              src='./images/cpanel.svg'
              alt=' '
            />
            <img
              src='./images/soft.svg'
              alt=' '
              className='-mt-4'
            />
            <img
              src='./images/litespeed.svg'
              alt=' '
            />
          </div>
          <div className='grid grid-cols-3 gap-4'>
            <img
              src='./images/wordpress.svg'
              alt=' '
            />
            <img
              src='./images/imunify.svg'
              alt=' '
            />
            <img
              src='./images/cloudfare.svg'
              alt=' '
            />
          </div>
        </div>
      </div>
      <div className='grid lg:grid-cols-4 mt-28'>
        {Data.map(items => 
          <Aboutcard
          key={items.id}
          image={items.image}
          title={items.title}
          para={items.para}
          />
          )}
      </div>
    </div>
  );
}

export default About;