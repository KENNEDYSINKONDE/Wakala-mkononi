import Image from 'next/image'
import React from 'react'

type Props = {
    title: string;
    linkText: string;
    image: string;
}
const WhyChooseCard = ({ title, linkText, image }: Props) => {
    return (
        <div>
            <Image src={image}
                alt="title"
                width={90}
                height={90}
                className='image-contained mx-auto mt-6 md:h-[90px] md:w-[90px] h-[300px] w-[300px] object-contain'
                
                />

                <h1 className='text-2xl text-gray-500 sm:text-4xl md:text-2xl lg:text-2xl mt-5 mb-5 font-semibold text-center'>
                    {title}
                </h1>
                <p className='text-gray-500 text-center font-medium text-sm mb-7 '>
                    </p>
                    <p className='text-violet-500 text-center font-semibold hover:text-violet-800 transform transision-all duration-200 cursor-pointer'>{linkText} &#8594;</p>

        </div>
    )
}

export default WhyChooseCard
