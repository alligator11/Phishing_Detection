import React from "react";

function Hero() {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='md:text-5xl sm:text-4xl text-xl text-gray-400 font-bold my-6 py-4'>
            Check URL for phishing.
        </p>
        <div class="flex">
          <input
                className='p-3 flex-1 rounded-md text-black'
                type="url"
                placeholder='Enter URL'
              />
          <button className='bg-red-500 hover:font-bold rounded-md font-medium w-[200px] ml-4 px-6 py-3'>
                CHECK
          </button>
          </div>
      </div>
    </div>
  );
}

export default Hero;
