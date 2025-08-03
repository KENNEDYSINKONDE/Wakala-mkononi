import React from 'react'
import { FaCheck } from 'react-icons/fa'

type props = {
  price: number,
  plan: string
}

const PriceCard = ({ price, plan }: props) => {
  return (
    <div className='bg-white shadow-lg rounded-lg'>
      <p className='mt-8 font-semibold text-xl text-violet-500 text-center'>{plan}</p>
      <div className='font-medium text-3xl text-center mt-4 text-gray-900'>
        TZS:<span className='text-5xl font-bold'>{price}</span>/mo
      </div>
      <p className='mt-2 text-violet-500 text-center'>Per user</p>
      <div className='mt-10'>
        <div className='text-center mb-4 flex items-center space-x-2'>
          <div className='text-center w-8 h-8 rounded-full bg-violet-500 justify-center flex items-center flex-col'>
            <FaCheck className='rounded-full bg-violet-500 text-white' />
          </div>
          <p className='text-gray-900'>Unlimited records keeping per month</p>
        </div>
        <div className='text-center mb-4 flex items-center space-x-2'>
          <div className='text-center w-8 h-8 rounded-full bg-violet-500 justify-center flex items-center flex-col'>
            <FaCheck className='rounded-full bg-violet-500 text-white' />
          </div>
          <p className='text-gray-900'>Report generation</p>
        </div>
        <div className='text-center mb-4 flex items-center space-x-2'>
          <div className='text-center w-8 h-8 rounded-full bg-violet-500 justify-center flex items-center flex-col'>
            <FaCheck className='rounded-full bg-violet-500 text-white' />
          </div>
          <p className='text-gray-900'>Profit obtained per day</p>
        </div>
        <div className='text-center mb-4 flex items-center space-x-2'>
          <div className='text-center w-8 h-8 rounded-full bg-violet-500 justify-center flex items-center flex-col'>
            <FaCheck className='rounded-full bg-violet-500 text-white' />
          </div>
          <p className='text-gray-900'>Number of customers per each day</p>
        </div>
        <div className='text-center mb-4 flex items-center space-x-2'>
          <div className='text-center w-8 h-8 rounded-full bg-violet-500 justify-center flex items-center flex-col'>
            <FaCheck className='rounded-full bg-violet-500 text-white' />
          </div>
          <p className='text-gray-900'>Reports for expenses with details</p>
        </div>
        <div className='mt-8'>
          <button className='block mt-10 w-full bg-violet-500 hover:bg-violet-600 text-white py-2 rounded-full font-bold text-base transition-all duration-300 '>Get 30 days free trial</button>
        </div>
      </div>

    </div>
  )
}

export default PriceCard;
