'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import{ EffectFade, Navigation, Pagination } from 'swiper/modules';
import './data.css'

export default function Swiperss() {
  return (
      <>
        <Swiper
            spaceBetween={30}
            effect={'fade'}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[EffectFade, Navigation, Pagination]}
            className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://img.freepik.com/premium-vector/e-commerce-icon-robotic-hand-internet-shopping-online-purchase-add-cart_127544-586.jpg" alt='no image'/>
            <div data-aos="fade-up" style={{zIndex:'1',marginTop:'10% !important',position:'absolute'}} className="overly">
              <h1>Growth Partnets</h1>
              <h3>Connect with top consultants hand-picked by Elixir consulting and finance.</h3>
              <div className="buttondiv">
                <button style={{backgroundColor:'rgb(42, 56, 85)',color:'#fff'}}>Read more <i className='bi bi-chevron-right'></i></button>
                <button>Contact Us <i className='bi bi-chevron-right'></i></button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/048/104/780/small_2x/elegant-black-friday-shopping-bag-on-dark-blue-ligtht-bokeh-background-with-copy-space-photo.jpg" alt='no image'/>
            <div data-aos="fade-up" style={{zIndex:'1',marginTop:'10% !important',position:'absolute'}} className="overly">
              <h1>Growth Partnets</h1>
              <h3>Connect with top consultants hand-picked by Elixir consulting and finance.</h3>
              <div className="buttondiv">
                <button style={{backgroundColor:'rgb(42, 56, 85)',color:'#fff'}}>Read more <i className='bi bi-chevron-right'></i></button>
                <button>Contact Us <i className='bi bi-chevron-right'></i></button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://img.freepik.com/free-photo/black-friday-sales-sign-neon-light_23-2151833076.jpg?semt=ais_hybrid&w=740" alt='no image'/>
            <div data-aos="fade-up" style={{zIndex:'1',marginTop:'10% !important',position:'absolute'}} className="overly">
              <h1>Helping Leaders</h1>
              <h3>We look forward to help you in taking your company to new height.</h3>
              <div className="buttondiv">
                <button style={{backgroundColor:'rgb(42, 56, 85)',color:'#fff'}}>Read more <i className='bi bi-chevron-right'></i></button>
                <button>Contact Us <i className='bi bi-chevron-right'></i></button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
  );
}
