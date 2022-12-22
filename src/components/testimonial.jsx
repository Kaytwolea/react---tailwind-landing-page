import React from "react";
import images from "./images";

const Junk = () => {
  return (
    <div>
      <div className='pt-4'>
        <img
          src='./images/crypto.svg'
          alt=''
        />
        <p className='text-base text-black text-left w-5/6'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim praesent elem
        </p>
        <p className='text-xl font-semibold text-left pt-8'>Floyd Miles</p>
        <p className='text-sm font-normal text-left'>Vice President, CLI</p>
      </div>
    </div>
  );
};

const Junk2 = () => {
  return (
    <div>
      <div className='pt-4'>
        <img
          src='./images/jerry.svg'
          alt=''
        />
        <p className='text-base text-black text-left w-5/6 pt-4'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim praesent elem
        </p>
        <p className='text-xl font-semibold text-left pt-4'>Jane Cooper</p>
        <p className='text-sm font-normal text-left'>CEO, JPNL</p>
      </div>
    </div>
  );
};

const Junk3 = () => {
  return (
    <div>
      <div className='pt-4'>
        <img
          src='./images/leave.svg'
          alt=''
        />
        <p className='text-base text-black text-left w-5/6 pt-4'>
          LemonWares saved our time in Hosting my company page.
        </p>
        <p className='text-base font-semibold text-left pt-4'>Kristin Watson</p>
        <p className='text-sm font-normal text-left'>
          Co-Founder, LeeveOn Branding
        </p>
      </div>
    </div>
  );
};

function Testimonial() {
  console.log(images);
  return (
    <div className=''>
      <div className='w-5/6 mx-auto testimonial'>
        <div className='w-5/6 mx-auto pt-16'>
          <div>
            <h2 className='text-5xl font-bold lg:w-1/2'>
              Real Stories from Real Customers
            </h2>
            <p className='text-base font-normal pt-6'>
              Get inspired by these stories.
            </p>
          </div>
          <div className='lg:w-[90%] w-full mt-8 grid lg:grid-cols-2 lg:gap-0 gap-10'>
            <div className='card1 pb-8 flex gap-2 lg:w-80'>
              <div className='pt-6 lg:pl-6'>
                <img
                  src='./images/smallquote.svg'
                  alt=' '
                />
              </div>
              <div>
                <Junk />
              </div>
            </div>
            <div>
              <div className='card1 lg:h-72 lg:-mt-40 pb-8 flex gap-4 w-full'>
                <div className='pt-6 lg:pl-6'>
                  <img
                    src='./images/smallquote.svg'
                    alt=' '
                  />
                </div>
                <div>
                  <Junk2 />
                </div>
              </div>
              <div className='card1 pb-8'>
                <div className='h-60 flex gap-4 w-full '>
                  <div className='pt-6 pl-6'>
                    <img
                      src='./images/smallquote.svg'
                      alt=' '
                    />
                  </div>
                  <div>
                    <Junk3 />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='lg:h-72 h-auto w-5/6 mx-auto mt-32 grid lg:grid-cols-2 gap-2'>
        <div className=''>
          <h4 className='font-extrabold text-5xl text-black'>
            We serve over 100 Nigerian Websites
          </h4>
          <p className='text-base font-normal pt-8 w-5/6'>
            Connect LemonWares with your favourite tools that you use daily and
            keep things on track.
          </p>
        </div>
        <div className='grid grid-cols-3 gap-4 lg:-mt-8'>
          {images.map((image) => (
            <div key={image.id}>
              <img
                src={image.path}
                alt=' '
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonial;