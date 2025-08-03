import React from 'react'
import {
    FaMobileAlt,
    FaMoneyCheckAlt,
    FaBolt,
    FaShieldAlt,
    FaWallet,
    FaHandshake,
    FaUserPlus,
    FaMapMarkerAlt,
    FaUniversalAccess,
} from "react-icons/fa";

const Feature = () => {



    const features = [
        {
            icon: <FaMobileAlt className="text-blue-500 text-2xl" />,
            text: "Mobile/Computer/Tablet-Based Acces",
        },
        {
            icon: <FaMoneyCheckAlt className="text-green-500 text-2xl" />,
            text: "Secure Recode Keeping",
        },
        {
            icon: <FaBolt className="text-yellow-500 text-2xl" />,
            text: "Fast Report Processing and Generation",
        },
        {
            icon: <FaShieldAlt className="text-red-500 text-2xl" />,
            text: "Reliable & Safe Platform",
        },
        {
            icon: <FaWallet className="text-purple-500 text-2xl" />,
            text: "Smart Account & Bills Management",
        },
        {
            icon: <FaHandshake className="text-pink-500 text-2xl" />,
            text: "Intuitive User Interface Design (Inclusive)",
        },
        {
            icon: <FaUserPlus className="text-indigo-500 text-2xl" />,
            text: "Easy Registration Process",
        },
        {
            icon: <FaMapMarkerAlt className="text-orange-500 text-2xl" />,
            text: "Work from Anywhere(Remote Working)",
        },
        {
            icon: <FaUniversalAccess className="text-teal-500 text-2xl" />,
            text: "Disability Inclusive Design",
        },
    ];

    return (
        <div className='bg-violet-100 pt-20 pb-20'>
            <div className='w-[80%] mx-auto text-center '>
                <h1 className='mt-4 md:mt-6 lg:mt-6 text-xl text-violet-500 max-w-4xl mx-auto  bg-violet-100 sm:text-2xl md:text-2xl lg:text-3xl font-bold text-center py-3'>
                    Things that you could not even think</h1>
                <div className='grid mt-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {features.map((feature, index) => (

                        <div
                            data-aos='flip-right'
                            data-ios-anchor-placement="top-center"
                            data-aos-delay={`${index * 100}`}
                            key={index}
                            className='flex items-center justify-center p-4 bg-white rounded-lg shadow-md space-x-3 '
                        >
                            <div className='text-3xl w-14 h-14 bg-violet-100 rounded-full flex items-center justify-center flex-col'>
                                <span>{feature.icon}</span>
                            </div>
                            <span className='font-semibold'>{feature.text}</span>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Feature
