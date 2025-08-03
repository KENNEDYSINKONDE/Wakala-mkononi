import React from 'react'
import Image from 'next/image'
import { FaCheckCircle } from 'react-icons/fa'

const Analytics = () => {
    return (
        <div className='pt-20 pb-16'>
            <div className='w-[95%] sm:w-[80%] mx-auto items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
                {/* Image content */}
                <div

                    data-aos='fade-up'
                    data-ios-anchor-placement="top-center"
                    

                >
                    <Image src='/images/analytics.png'
                        alt='Analytics'
                        width={500}
                        height={500} />
                </div>
                {/* Content section */}
                <div className='p-6 '>

                    <h1 className="text-base font-semibold text-violet-500">
                        Wakala Mkononi – Your Business, In Your Hands
                    </h1>
                    <h1 className="mt-4 text-gray-500 text-xl sm:text-1xl  md:text-2xl font-bold ">
                        Become smart in record keeping just in one step. Wakala Mkononi has made it easy for you.
                    </h1>
                    <p className='mt-4 text-gray-700 text-sm font-medium leading-[2rem]'>.</p>
                    <ul className='mt-7 space-y-2 text-gray-800'>
                        <li className='flex items-center font-semibold'>
                            <FaCheckCircle className='text-violet-500 mr-2' />
                            Get transactions reports instantly

                        </li>
                        <li className='flex items-center font-semibold'>
                            <FaCheckCircle className='text-violet-500 mr-2' />
                            View your transaction history effortlessly

                        </li>
                        <li className='flex items-center font-semibold'>
                            <FaCheckCircle className='text-violet-500 mr-2' />
                            No need of going to the shop wakala mkononi any where

                        </li>
                        <li className='flex items-center font-semibold'>
                            <FaCheckCircle className='text-violet-500 mr-2' />
                            Minimize all leackages serve your profit circulation

                        </li>
                    </ul>
                    <button className='mt-8 px-8 py-3 bg-violet-500 hover:bg-violet-600 font-semibold text-white rounded-full transform transition-all duration-200 hover:text-white'>Need more? &#8594;</button>

                </div>
            </div>

        </div>
    )
}

export default Analytics
