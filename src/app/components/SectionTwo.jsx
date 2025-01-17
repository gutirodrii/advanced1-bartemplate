'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Navigation } from 'swiper/modules'

import review1 from '/public/reviews/review1.webp'
import review2 from '/public/reviews/review2.webp'
import review3 from '/public/reviews/review3.webp'
import review4 from '/public/reviews/review4.webp'
import review5 from '/public/reviews/review5.webp'
import review6 from '/public/reviews/review6.webp'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import Image from 'next/image';

const SectionTwo = () => {
  const reviews = [review1, review2, review3, review4, review5, review6]

  return (
    <section className='bg-secondary w-full h-auto pt-10 pb-20 px-2 md:px-0'>
      <h1 className='text-6xl pb-10 text-center font-serif'>Reseñas</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 40,
          depth: 250,
          modifier: 2,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Navigation]}
        navigation={{
          prevEl: '#prevReview',
          nextEl: '#nextReview',
          clickable: true
        }}
      >
        {
          reviews.map((review, index) => (
            <SwiperSlide key={index} className='p-2 md:p-4 bg-white rounded-xl shadow-md md:shadow-xl'>
                <Image 
                  className='rounded-lg w-full h-auto xl:h-44' 
                  src={review} 
                  quality={100}
                  alt={`Review ${index}`} 
                />
            </SwiperSlide>
          ))
        }

        <div className='pt-5 flex gap-8 items-center justify-center'>
          <div id='prevReview' className='bg-white rounded-full w-8 h-8 text-black cursor-pointer hover:scale-105 duration-200'>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-left"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M5 12l4 4" /><path d="M5 12l4 -4" /></svg>
          </div>

          <a 
            href='https://www.google.com/search?sa=X&sca_esv=d0580cbe2d2c330e&hl=es-ES&biw=1536&bih=702&tbm=lcl&sxsrf=ADLYWIJoglUKfj41SNAElBNl_XIdDtAKdA:1737036516485&q=Bar%20restaurante%20El%20Sitio%20Rese%C3%B1as&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxtDAwNzA2NbYwM7MwMTAxMLA0Nd3AyPiKUdEpsUihKLW4JLG0KDGvJFXBNUchOLMkM18hKLU49fDGxOJFrITVAABNEswFYwAAAA&rldimm=18070353866840400955&ved=0CAgQ5foLahcKEwjghZmltfqKAxUAAAAAHQAAAAAQDA#lkt=LocalPoiReviews&arid=ChdDSUhNMG9nS0VJQ0FnSUNmdHRTU3NnRRAB'
            target='_blank'
            className='font-serif underline'
          >
            Ver más
          </a>

          <div id='nextReview' className='bg-white rounded-full w-8 h-8 text-black cursor-pointer hover:scale-105 duration-200'>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M15 16l4 -4" /><path d="M15 8l4 4" /></svg>
          </div>
        </div>
      </Swiper>
    </section>
  )
}

export default SectionTwo