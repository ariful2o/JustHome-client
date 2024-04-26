// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '../components/SwiperSlider.css';

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';


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
        <img className='h-full' src={'https://demo.softhopper.studio/house-rent/wp-content/uploads/sites/7/2017/04/blog-single-360x232.jpg'} />
        </SwiperSlide>
        <SwiperSlide>
        <img className='h-full' src={'https://demo.softhopper.studio/house-rent/wp-content/uploads/sites/7/2017/04/demo-image-rental-21-360x270.jpg'} />
        </SwiperSlide>
        <SwiperSlide>
        <img className='h-full' src={'https://demo.softhopper.studio/house-rent/wp-content/uploads/sites/7/2017/04/demo-image-rental-36-360x270.jpg'} />
        </SwiperSlide>
        <SwiperSlide>
        <img className='h-full' src={'https://demo.softhopper.studio/house-rent/wp-content/uploads/sites/7/2017/04/gallery-9-150x150.jpg'} />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-full' src={'https://demo.softhopper.studio/house-rent/wp-content/uploads/sites/7/2017/04/gallery-8-150x150.jpg'} />
        </SwiperSlide>
        <SwiperSlide>
        <img className='h-full' src={'https://demo.softhopper.studio/house-rent/wp-content/uploads/sites/7/2017/04/gallery-11-150x150.jpg'} />
        </SwiperSlide>
        <SwiperSlide>
        <img className='h-full' src={'https://demo.softhopper.studio/house-rent/wp-content/uploads/sites/7/2017/04/demo-image-rental-37-360x270.jpg'} />
        </SwiperSlide>
        <SwiperSlide>
        <img className='h-full' src={'https://demo.softhopper.studio/house-rent/wp-content/uploads/sites/7/2017/04/gallery-five-266x300-1.png'} />
        </SwiperSlide>
        
       
      </Swiper>
  )
}
