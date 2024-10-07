import { Navigation, Pagination, A11y, Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import "../carousel/Carousel.css"
import hero1 from '../../images/hero1.jpg';
import hero2 from '../../images/hero2.jpg';
import hero3 from '../../images/hero3.webp';
import hero4 from '../../images/hero4.webp';
import hero5 from '../../images/hero5.avif';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade'; 
import 'swiper/css/autoplay';

const Hero = () => {
  return (
    <div className='laptop_hero'>
      <Swiper

      modules={[Navigation, Pagination, A11y, EffectFade, Autoplay]}
      slidesPerView={1}
      autoplay={{ delay: 5000 }}
      navigation
      pagination={{ clickable: true }}
      effect="fade" 
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img className='h-[600px] object-cover  w-full' src={hero1} alt="hero" /></SwiperSlide>
      <SwiperSlide><img className='h-[600px] object-cover  w-full' src={hero2} alt="hero" /></SwiperSlide>
      <SwiperSlide><img className='h-[600px] object-cover  w-full' src={hero3} alt="hero" /></SwiperSlide>
      <SwiperSlide><img className='h-[600px] object-cover  w-full' src={hero4} alt="hero" /></SwiperSlide>
      <SwiperSlide><img className='h-[600px] object-cover  w-full' src={hero5} alt="hero" /></SwiperSlide>
    </Swiper>
    </div>
  );
};

export default Hero;
