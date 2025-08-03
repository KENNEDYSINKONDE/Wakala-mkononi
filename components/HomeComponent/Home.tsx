'use client'
import React from 'react'
import Hero from './Hero/Hero'
import Whychoose from './Whychoose/Whychoose'
import Analytics from './Analytics/Analytics'
import Feature from './Feature/Feature'
import Review from './Review/Review'
import Plan from './Price/Price'
import Offer from './Offer/Offer'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Home = () => {

  useEffect(() => {
    const initAOS = async () => {
      await import('aos');
      AOS.init({

        duration: 1000,
        easing: 'ease',
        once: true,
        anchorPlacement: 'top-bottom'
      });

    };
    initAOS();

  },

    []);
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Whychoose />
      <Analytics />
      <Feature />
      <Review />
      <Plan />
      <Offer />

    </div>
  )
}

export default Home
