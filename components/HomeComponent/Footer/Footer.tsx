import React from 'react'
import Link from 'next/link'
import {
    FaFacebook,
    FaYoutube,
    FaInstagram,
    FaMapMarkedAlt,
    FaPhoneAlt,
    FaClock, FaEnvelope,

} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='bg-white py-10'>
            <div className='w-[90%] mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8'>

                    <div>
                        {/* Logo */}
                        <h1 className='text-xl md:text-2xl xl:text-2xl font-bold tracking-tight mr-5'>
                            <span className='text-3xl md:text-4xl xl:text-5xl text-violet-500'>Wakala</span> <span>Mkononi</span>
                        </h1>

                        <p className='mt-4 text-sm font-medium leading-[2rem] w-[80%] text-gray-500'>
                            Wakala Mkononi is a smart solution built to simplify daily record keeping and
                            automate report generation for agents and businesses. Track transactions, monitor
                            performance, and generate clean, professional reports in just a few clicks — all from your phone or desktop.
                            Stay organized, informed, and in control.
                        </p>


                    </div>
                    {/* About us links */}
                    <div>
                        <h3 className='text-lg font-semibold text-gray-800'>
                            About Wakala mkononi
                        </h3>
                        <ul className='mt-4 space-y-4 text-sm font-semibold text-gray-500'>
                            <li>Mission</li>
                            <li>Vission</li>
                            <li>Team</li>
                            <li>Support center</li>
                            <li>Customer center</li>
                            <li>About Wakala mkononi</li>
                            <li>policy & privacy</li>
                            <li>Popular questions</li>
                        </ul>
                    </div>
                    {/* Information links */}
                    <div>
                        <h3 className='text-lg font-semibold text-gray-800'>
                            Information
                        </h3>
                        <ul className='mt-4 space-y-4 text-sm font-semibold text-gray-500'>
                            <li>The policy</li>
                            <li>Norms and regulations</li>
                            <li>Terms and conditions</li>
                            <li>Site Map</li>
                            <li>Security</li>
                        </ul>
                    </div>
                    {/* Contact */}
                    <div>
                        <h3 className='text-lg font-semibold text-gray-800'>
                            Contact
                        </h3>
                        <ul className='mt-4 space-y-4 text-sm font-semibold text-gray-500'>
                            <li className='text-violet-500 flex items-center'>
                                <FaPhoneAlt className='mr-2' />
                                +255 786 037 737
                            </li>
                            <li className='text-violet-500 flex items-center'>
                                <FaMapMarkedAlt className='mr-2' />
                                AFRICA- TANZANIA DAR ES SALAAM ,KIGAMBONI
                            </li>
                            <li className='text-violet-500 flex items-center'>
                                <FaClock className='mr-2' />
                                24/7 Hrs with full time support
                            </li>
                            <li className='text-violet-500 flex items-center'>
                                <FaEnvelope className='mr-2' />
                                sinkondekenedy.2022@.gmail.com
                            </li>

                        </ul>
                    </div>
                </div>
                {/* Bootom section */}
                <div className='mt-8 border-t pt-8 flex flex-col md:flex-row text-gray-500 text-sm justify-between items-center '>
                    <p className='text-gray-500 text-sm text-center md:text-left'>Copyright &copy; 2025 Wakala mkononi  V1. All rights reserved</p>
                    <div className='flex items-center space-x-4 mt-4 md:mt-0'>
                        <span>Social : </span>
                        <Link href='#' className='text-violet-500 hover:text-violet-600 h-8 w-8'>
                            <FaFacebook />

                        </Link>
                        <Link href='#' className='text-violet-500 hover:text-violet-600 h-8 w-8'>
                            <FaYoutube />

                        </Link>

                        <Link href='#' className='text-violet-500 hover:text-violet-600 h-8 w-8'>
                            <FaInstagram />

                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
