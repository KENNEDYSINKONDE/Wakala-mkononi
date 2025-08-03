import React from 'react'
import PriceCard from './PriceCard'

const Plan = () => {
  return (
    <div className='pt-16 pb-16 bg-[#edfbff]'>
      <h2 className='mt-6 text-2xl text-violet-500 max-w-4xl mx-auto  bg-violet-100 rounded-full  sm:text-3xl md:text-3xl capitalize lg:text-4xl font-bold text-center'>
        Choose Your Plan
      </h2>
      <div className='w-[90%] mx-auto md:w-[80%] mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>

        <div
          data-aos='fade-up'
          data-ios-anchor-placement="top-center"

        >
          <PriceCard price={0} plan="Free Plan" />
        </div>

        <div
          data-aos='fade-up'
          data-ios-anchor-placement="top-center"
          data-aos-delay="100"
        >
          <PriceCard price={10000} plan="Baby Plan" />
        </div>
        <div

          data-aos='fade-up'
          data-ios-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <PriceCard price={20000} plan="Medium Plan" />
        </div>
        <div

          data-aos='fade-up'
          data-ios-anchor-placement="top-center"
          data-aos-delay="300"

        >
          <PriceCard price={50000} plan="Premium Plan" />
        </div>
      </div>

    </div>
  )
}

export default Plan;
