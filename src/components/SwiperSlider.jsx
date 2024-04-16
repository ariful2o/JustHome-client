// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '../components/SwiperSlider.css';

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

import img4 from '../assets/homepage-slide-1.jpg';
import img5 from '../assets/how1-370x233.jpg';
import img6 from '../assets/how3-370x233.jpg';
import img2 from '../assets/istockphoto-1297055506-612x612.jpg';
import img1 from '../assets/istockphoto-1338737831-612x612.jpg';
import img3 from '../assets/lk-home-union-life-protect1600x490.jpg';
import img7 from '../assets/post-15-370x370.jpg';
import img8 from '../assets/post-4-370x370.jpg';
import img9 from '../assets/program1-1170x658.jpg';
export default function SwiperSlider() {
  return (
    <Swiper
        effect={'coverflow'}
        grabCursor={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 500,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[Autoplay,EffectCoverflow, Pagination]}
        className="mySwiper"
      >
         <SwiperSlide>
        <img className='h-full' src={img6} />
        </SwiperSlide>
        <SwiperSlide>
        <img className='h-full' src={img7} />
        </SwiperSlide>
        <SwiperSlide>
        <img className='h-full' src={img8} />
        </SwiperSlide>
        <SwiperSlide>
        <img className='h-full' src={img9} />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-full' src={img1} />
        </SwiperSlide>
        <SwiperSlide>
        <img className='h-full' src={img2} />
        </SwiperSlide>
        <SwiperSlide>
        <img className='h-full' src={img5} />
        </SwiperSlide>
        <SwiperSlide>
        <img className='h-full' src={img3} />
        </SwiperSlide>
        <SwiperSlide>
        <img className='h-full' src={img4} />
        </SwiperSlide>
       
      </Swiper>
  )
}
