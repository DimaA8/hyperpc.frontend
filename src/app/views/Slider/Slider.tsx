import React from 'react'

import { 
  EffectFade, 
  Navigation, 
  Pagination,
  Autoplay,
} from 'swiper'
import {
  Swiper,
  SwiperSlide
} from 'swiper/react'
import {
  Box,
} from '@mui/material'
import { Slide } from './Slide'
import 'swiper/css'
import 'swiper/css/effect-fade'
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const slides = [
  {
    bgmobile: {
      src: '/images/views/slider/hyperpc-intel-mobile.jpg',
      alt: 'hyperpc-intel-mobile'
    },
    bgdesktop: {
      src: '/images/views/slider/hyperpc-intel.jpg',
      alt: 'hyperpc-intel'
    },
    title: 'Intel Core 12-ого поколения',
    lead: 'Производительность следующего уровня',
    moreBtn: {
      text: 'Подробнее',
      to: '/news/geeforce/rtx/40'
    }
  },
  {
    bgmobile: {
      src: '/images/views/slider/hyperpc-rtx-mobile.jpg',
      alt: 'hyperpc-intel-mobile'
    },
    bgdesktop: {
      src: '/images/views/slider/hyperpc-rtx.jpg',
      alt: 'hyperpc-intel'
    },
    title: 'NVIDIA GeForce RTX 4070',
    lead: 'Больше чем сокрость',
    moreBtn: {
      text: 'Подробнее',
      to: '/news/geeforce-rtx-40'
    }
  }
]

export const Slider = () => {
  return (
    <Box>
      <Swiper
        slidesPerView={1}
        effect="fade"
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        navigation
        autoplay={{
          pauseOnMouseEnter: true
        }}
        loop
        pagination={{
          clickable: true,
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Slide {...slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}