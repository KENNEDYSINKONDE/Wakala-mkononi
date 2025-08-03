'use client';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ReviewCard from './ReviewCard';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

const Review = () => {
  return (
    <div className='pt-16 pb-16 bg-[#fcf6fa]'>
      <h1 className='mt-4 md:mt-6 lg:mt-6 text-xl rounded-full text-violet-500 max-w-4xl mx-auto  bg-violet-100 sm:text-2xl md:text-2xl lg:text-3xl font-bold text-center py-3'>
        What client says about Wakala Mkononi</h1>
      <div className='mt-20 w-[90%] mx-auto'>
        <Carousel
          arrows={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          infinite
          responsive={responsive}
          showDots
        >

          <ReviewCard
            name="Kennedy Richard sinkonde"
            image="/images/reviews/review1.jpeg" />
          <ReviewCard
            name="Mawazo kadamhi mhoja"
            image="/images/reviews/review2.jpeg" />

          <ReviewCard
            name="Danieli ntamausu"
            image="/images/reviews/review3.jpg" />

          <ReviewCard
            name="Tabitha jelard"
            image="/images/reviews/review4.jpg" />

          <ReviewCard
            name="Baraka Chakupewa"
            image="/images/reviews/review5.jpg" />

          <ReviewCard
            name="Juma kibegi"
            image="/images/reviews/review6.jpg" />


        </Carousel>
      </div>
    </div>
  )
}

export default Review
