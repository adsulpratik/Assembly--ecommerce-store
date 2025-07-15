import React from 'react';
import logo from '../assets/logo-2.avif';
import { FaUserEdit } from "react-icons/fa";
import { IoSearch,IoBagOutline  } from "react-icons/io5";
import { NavLink } from 'react-router';


const Header = () => {
    return (
        <header className='flex justify-between px-10 items-center z-20 bg-white py-3  w-screen sticky top-0 '>
            <div><img className='h-[20px] cursor-pointer' src={logo} alt="Logo" /></div>

            <div className='p-[15px] text-[18px]'>
                <ul className='flex gap-4 font-semibold'>
                    <div className='flex flex-col gap-2  mb-[-13px] lineHover'>
                        <NavLink  className={({ isActive }) => (isActive ? "customclass" : "link")} to="/" ><li className='cursor-pointer'>Home</li></NavLink>
                        <div className="underline underline1 ml-[-10px] mr-5"></div>
                    </div>
                    <div className='flex flex-col gap-2 mb-[-13px] lineHover'>
                        <NavLink  className={({ isActive }) => (isActive ? "customclass" : "link")} to="/about" ><li className='cursor-pointer'>Shop</li></NavLink>
                        <div className="underline underline2 ml-[-10px] mr-5"></div>
                    </div>
                    <div className='flex flex-col gap-2 mb-[-13px] lineHover'>
                        <li className='cursor-pointer'>About Us</li>
                        <div className="underline underline3 ml-[-10px] mr-5"></div>
                    </div>
                    <div className='flex flex-col gap-2 mb-[-13px] lineHover'>
                        <li className='cursor-pointer'>Corporate Inquiry</li>
                        <div className="underline underline4 ml-[-10px] mr-5"></div>
                    </div>
                    <div className='flex flex-col gap-2 mb-[-13px] lineHover'>
                        <li className='cursor-pointer'>Help</li>
                        <div className="underline underline5 ml-[-10px] mr-5"></div>
                    </div>
                    <div className='flex flex-col gap-2 mb-[-13px] lineHover'>
                        <li className='cursor-pointer'>Blogs</li>
                        <div className="underline underline6 ml-[-10px] mr-5"></div>
                    </div>
                </ul>
            </div>

            <div>
                <ul className='flex gap-8'>
                    <li className='cursor-pointer'><FaUserEdit className="scale-150" /></li>
                    <li className='cursor-pointer'><IoSearch className="scale-150" /></li>
                    <NavLink to="/cart" >
                       <li className='cursor-pointer'><IoBagOutline className="scale-150" /></li>
                    </NavLink>
                </ul>
            </div>
        </header>
    );
};

export default Header;
