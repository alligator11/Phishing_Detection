import React from "react";

function Team(){
    return(
        <div className='w-full bg-white py-16 px-4'>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-center'>Meet our Team</h1>
        <div>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg'>
                <h2 className='text-2xl font-bold text-center py-8'>Aditi Gaikwad</h2>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg'>
                <h2 className='text-2xl font-bold text-center py-8'>Vaibhav Vanage</h2>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg'>
               <h2 className='text-2xl font-bold text-center py-8'>Shivam Musterya</h2>
            </div>
        </div>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg'>
                <h2 className='text-2xl font-bold text-center py-8'>Dhruv Sheth</h2>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg'>
                <h2 className='text-2xl font-bold text-center py-8'>Aryan Surve</h2>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg'>
               <h2 className='text-2xl font-bold text-center py-8'>Farin Khan</h2>
            </div>
        </div>
        </div>
      </div>
    )
}

export default Team;