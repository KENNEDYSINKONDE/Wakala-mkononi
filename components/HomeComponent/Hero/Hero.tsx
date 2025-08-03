import React from 'react'
import Image from 'next/image'

const Hero = () => {

    return (
        <div className='w-full pt-[4vh] md:pt-[12vh] h-screen bg-white'>
            <div className='flex justify-center flex-col w-[90%] sm:w-[80%] mx-auto h-full'>
                <div className='grid grid-cols-1 md:grid-cols-2 h-full items-center gap-12'>
                    {/* Home contents */}
                    <div>
                        {/* Top text */}
                        <div className='w-fit py-1.5 px-2 md:px-5 rounded-full shadow-medium flex items-center space-x-3 md:space-x-5 bg-violet-200'>
                            <div className='px-3 py-1 md:px-5 md:py-1 rounded-full bg-violet-500 md:text-base sm:text-sm text-xs text-white font-semibold '>
                                News</div>
                            <p className='md:text-base sm:text-sm text-xs font-semibold text-violet-500'>
                                Happy to see you in our site where you will learn and dive into practical applications</p>
                        </div>
                        {/* Heading */}
                        <h1 data-aos='fade-up'
                         className=' text-2xl text-gray-500 sm:text-4xl md:text-5xl lg:text-6xl font-bold  mb-6 mt-6  md:reading-[3rem] lg:leading-[3.5rem]'>
                            Wakala Mkononi sasa ni wakati wako</h1>
                        {/* description */}
                        <p className="text-gray-700">
                            Welcome to<span className='text-violet-500 font-bold text-xl sm:text-4xl md:text-5xl lg:text-6xl'> Wakala Mkononi</span> – a simple and fast solution for your financial needs.
                            Through our app, you can perform banking transactions, send and receive money, and
                            track all your activities with ease, wherever you are.
                            Download now from the Google Play Store or Apple App Store, register your
                            account, and enjoy financial freedom at your fingertips. Don’t miss this opportunity – now is your time to be part of the change!
                        </p>

                        {/* where to get app */}
                        <div className='flex items-center space-x-4  mb-8 mt-8'>
                            <Image src='/images/google.webp'
                                alt='google'
                                width={150}
                                height={150} />

                            <Image src='/images/apple.png'
                                alt='apple'
                                width={150}
                                height={150} />
                        </div>

                    </div>
                    {/*  image for header section */}
                    <div data-aos='fade-up' data-aos-delay="200" className='hidden lg:block'>
                        <Image src='/images/home3.avif'
                            alt='hero'
                            width={700}
                            height={700} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero
