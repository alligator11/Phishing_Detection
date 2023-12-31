import React, {useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Navbar() {

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-red-500'>PhishDetection.</h1>
      <ul className='hidden md:flex'>
        <li className='p-4 hover:text-red-400'><Link to="/Phishing_Detection">Home</Link></li>
        <li className='p-4 hover:text-red-400'><Link to="/">Pawned</Link></li>
        <li className='p-4 hover:text-red-400'><Link to="/">Learn</Link></li>
        <li className='p-4 hover:text-red-400'><Link to="/about">About</Link></li>
        <li className='p-4 hover:text-red-400'><Link to="/">Contact</Link></li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-red-500 m-4'>PhishDetection.</h1>
          <li className='p-4 border-b border-gray-600'><Link to="/Phishing_Detection">Home</Link></li>
          <li className='p-4 border-b border-gray-600'><Link to="/">Pawned</Link></li>
          <li className='p-4 border-b border-gray-600'><Link to="/">Learn</Link></li>
          <li className='p-4 border-b border-gray-600'><Link to="/about">About</Link></li>
          <li className='p-4'><Link to="/">Contact</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
