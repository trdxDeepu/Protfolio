import React from 'react'
import './Portfolio.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import Qrcode from '../../img/qrcode.png';
import Quote from '../../img/quote.png';
import Darkmode from '../../img/darklight.png';
import Guessgame from '../../img/guessgame.png'
import Unsplash from '../../img/unsplash.png'
import 'swiper/css'
import { EffectCoverflow, Pagination } from "swiper";


 const Portfolio = () => {
  return (
   <div className="portfolio">
    <span>Recents</span>
    <span>Projects</span>
    {/* Swiper */}

  <Swiper 
  effect={"coverflow"}
  grabCursor={true}
  centeredSlides={true}
  slidesPerView={"auto"}
  coverflowEffect={{
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  }}
  pagination={true}
  modules={[EffectCoverflow, Pagination]}
  spaceBetween={60}
  
  className='portfolio-slider'
  >
    <SwiperSlide>
        <a href="https://qrcodegen-nine.vercel.app/" target="_blank">
        <img src={Qrcode} alt="" />

        <button className="button">Preview</button>
        </a>
    </SwiperSlide>
    <SwiperSlide>
        <a href="https://quote-generator-henna-chi.vercel.app/" target="_blank">
        <img src={Quote} alt="" />
        <button className="button">Preview</button>
        </a>
    </SwiperSlide>
    <SwiperSlide>
        <a href="https://dark-lightmode.vercel.app/" target="_blank">
        <img src={Darkmode} alt="" />
        <button className="button">Preview</button>
        </a>
    </SwiperSlide>
    <SwiperSlide>
       < a href="https://guessgame-xi.vercel.app/" target="_blank">
        <img src={Guessgame} alt="" />
        <button className="button">Preview</button>
        </a>
    </SwiperSlide>
    <SwiperSlide>
      <a href="https://unsplash-images-demo.vercel.app/" target="_blank">
        <img src={Unsplash} alt="" />
        <button className="button">Preview</button>
        </a>
    </SwiperSlide>
  </Swiper>
    
   </div>
  )
}

export default Portfolio
