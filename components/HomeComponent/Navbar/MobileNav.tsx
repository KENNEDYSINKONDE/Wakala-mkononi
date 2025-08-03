import React from 'react'
import Link from 'next/link'
import { navLinks } from '@/constant/Constant'
import { CgClose } from 'react-icons/cg'
type props = {
    showNav: boolean;
    closeNav: () => void;
}

const MobileNav = ({ showNav, closeNav }: props) => {
    const navOpen = showNav ? 'translate-x-0' : '-translate-x-full';
    return (
        <div>

            {/* overlay */}
            <div className={`fixed ${navOpen} inset-0 transform z-[1000] transition-all duration-300 bg-black opacity-70 w-full h-screen`}>

            </div>

            {/* navlinks */}
            <div className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%]  bg-violet-500 space-y-6 z-[10006]`}
            >

                {navLinks.map((link) => {
                    return <Link href={link.url} key={link.id}>
                        <p className='nav__link text-white text-[20px] ml-12 border-b-[1.5px] pb-1 border-violet-500 sm:text-[30px] md:text-[35px] lg:text-[40px]'>
                            {link.label}
                        </p>


                    </Link>


                })}
                {/* Close Icon */}
                <CgClose
                    onClick={closeNav}
                    className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 lg:w-10 cursor-pointer w-6 h-7' />

            </div>

        </div>
    )
}

export default MobileNav;
