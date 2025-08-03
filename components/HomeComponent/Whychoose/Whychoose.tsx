import React from 'react'
import { SlArrowDownCircle } from "react-icons/sl";
import WhyChooseCard from './WhyChooseCard';

const Whychoose = () => {
    return (
        <div className='pt-5 pb-16'>
            <h1 className='mt-5 md:mt-6 lg:mt-6 text-xl text-violet-500 max-w-4xl mx-auto  bg-violet-100 rounded-full  sm:text-2xl md:text-2xl lg:text-3xl font-bold text-center py-3'>
                Why Wakala Mkononi?

            </h1>

            <SlArrowDownCircle className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl justify-center flex mx-auto text-violet-500 animate-bounce mt-6' />
            <div className='mt-10 grid w-[90%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 bg-white rounded-lg'>
         
                    <div 
                    data-aos='fade-right'
                     data-ios-anchor-placement="top-center"
                     >
                        <WhyChooseCard 
                        image="/images/whywakala/fast.webp"
                            title="Fast and Secure"
                            linkText="Handles multiple data"
                         
                        />
                    </div>

                    <div  
                     data-aos='fade-right'
                     data-ios-anchor-placement="top-right"
                     data-aos-delay="100"
                    >
                        <WhyChooseCard 
                        image="/images/whywakala/easy.webp"
                            title="Easy to use"
                            linkText="All users can use the system"
                        />
                    </div>

                    <div  data-aos='fade-right'
                     data-ios-anchor-placement="top-center"
                     data-aos-delay="200"
                     >
                        <WhyChooseCard image="/images/whywakala/responsive.avif"
                            title="Compatible with all devices"
                            linkText="Look to the demos"
                        />
                    </div>

                    <div 
                     data-aos='fade-right'
                     data-ios-anchor-placement="top-center"
                     data-aos-delay="300"
                    
                    >
                        <WhyChooseCard image="/images/whywakala/report.jpg"
                            title="Report Generation"
                            linkText="View summeries"
                        />
                    </div>
                    <div
                     data-aos='fade-right'
                     data-ios-anchor-placement="top-center"
                     data-aos-delay="400"
                    >
                        <WhyChooseCard image="/images/whywakala/profit.webp"
                            title="Automatic profit reporting"
                            linkText="Try Now"
                        />
                    </div>
                    <div 
                     data-aos='fade-right'
                     data-ios-anchor-placement="top-center"
                     data-aos-delay="500"
                    >
                        <WhyChooseCard image="/images/whywakala/service.png"
                            title="24/7 Support"
                            linkText="Contact us"
                        />
                    </div>
                    <div 
                     data-aos='fade-right'
                     data-ios-anchor-placement="top-center"
                     data-aos-delay="600"

                    >
                        <WhyChooseCard image="/images/whywakala/secure.png"
                            title="Safe & Trusted"
                            linkText="Get the app"
                        />
                    </div>
               
            </div>

        </div>
    )
}

export default Whychoose
