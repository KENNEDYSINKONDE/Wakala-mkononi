import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa'
import { FaStar } from 'react-icons/fa'
import Image from 'next/image'


type Props = {
    name: string,
    image: string,
}
const ReviewCard = ({ name, image }: Props) => {
    return (
        <div className='w-full lg:[90%] relative mx-auto p-6 bg-white shadow-lg rounded-lg'>
            <div>
                <FaQuoteLeft className=' w-14 h-14 opacity-10 absolute top-8 text-2xl text-violet-500' />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-5 gap-6 items-center'>
                {/* Text content */}
                <div className='col-span-3 order-2 lg:order-1'>

                    <p className='mt-8 text-sm sm:text-base md:text-lg font-medium text-gray-500 leading-[1.5rem] sm:leading-[1.8rem] md:leading-[2.5rem]'>
                        “Wakala Mkononi has completely changed the way I do business.
                        I can now offer services like sending money and selling airtime without even
                        owning a physical shop. It’s flexible, secure, and works perfectly even in remote areas.
                        I’ve increased my income and helped my community at the same time.”
                    </p>
                    <div className='flex items-center mt-6'>
                        <FaStar className='text-violet-500 w-6 h-6 ' />
                        <FaStar className='text-violet-500 w-6 h-6 ' />
                        <FaStar className='text-violet-500 w-6 h-6 ' />
                        <FaStar className='text-violet-500 w-6 h-6 ' />
                        <FaStar className='text-violet-500 w-6 h-6 ' />
                        <FaStar className='text-violet-500 w-6 h-6 ' />
                    </div>
                    <h1 className='text-xl font-semibold mt-8'>{name}</h1>
                    <p className='mt-2 text-lg text-gray-500 font-medium mb-6'>Full Web Stack Developer</p>
                </div>
                {/* Image content */}
                <div className='col-span-2 order-1 lg:order-2 mx-auto'>
                    <Image
                        src={image}
                        alt="name"
                        width={250}
                        height={120}
                        className='rounded-full'
                        priority
                    />
                </div>
            </div>
        </div>
    )
}

export default ReviewCard
