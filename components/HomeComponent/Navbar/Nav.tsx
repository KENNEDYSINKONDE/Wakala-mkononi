'use client';
import { navLinks } from '@/constant/Constant';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { HiBars3BottomRight } from 'react-icons/hi2';
import { useState } from 'react';

type props = {
  openNav: () => void
}

const Nav = ({ openNav }: props) => {

  const [navBg, setNavBg] = useState(false);

  useEffect(() => {

    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };

    window.addEventListener('scroll', handler);

    return () => {
      window.removeEventListener('scroll', handler);
    }

  },
    []);

  return (
    <div className={`fixed ${navBg ? 'bg-white shadow-md' : 'fixed'} w-full transition-all duration-200 h-[12vh] z-[1000]`}>
      <div className='flex items-center justify-between w-[90%] xl:w-[80%] mx-auto h-full '>
        {/* LOGO */}
        <h1 className='text-xl md:text-2xl xl:text-2xl font-bold tracking-tight mr-5'><span className='text-3xl md:text-4xl xl:text-5xl text-violet-500'>Wakala</span> <span>Mkononi</span></h1>
        {/* NAV LINKS */}
        <div className='hidden lg:flex items:center space-x-10'>

          {navLinks.map((link) => {
            return <Link href={link.url} key={link.id}>
              <p className='nav__link'>
                {link.label}
              </p>


            </Link>


          })}

        </div>
        {/* Buttons */}

        <div className='flex items-center space-x-4'></div>
        <a 
  href="http://127.0.0.1:8001" 
  target="_blank" 
  rel="noopener noreferrer"
  className="inline-block md:px-8 md:py-2.5 px-6 py-2 text-sm text-white bg-violet-500 
             hover:bg-violet-600 rounded-full font-semibold transition-all duration-200"
>
  Join Now
</a>


        {/* Burger Menu */}
        <HiBars3BottomRight
          onClick={openNav}
          className='w-8 h-8 cursor-pointer lg:hidden ' />
      </div>

    </div>
  )
}

export default Nav;
