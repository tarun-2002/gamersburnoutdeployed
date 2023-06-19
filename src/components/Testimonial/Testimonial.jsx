import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';
import "../Testimonial/Testimonial.css"


// import required modules
import { EffectCoverflow, Pagination } from "swiper";

function Testimonial() {
  SwiperCore.use([Autoplay])
  return (
    <>
    
      <Swiper
autoplay={{ delay: 1000 }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        coverflowEffect={{
          rotate: 5,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="gb-swiper-slide">
          <div className="gb-testimonialBox">
          <div  className="gb-quote"> <img src="/images/quote.png" alt="" /></div>
            <div className="gb-content">
              <p>"I have discovered gaming heaven at Gamer's Burnout! With their exceptional gaming equipment, extensive game library, and affordable prices, they have truly surpassed my expectations. The staff is incredibly friendly and knowledgeable, making my experience even more enjoyable."</p>
              <div className="gb-details">
                <div className="gb-imgBx">
                  <img src="/images/DHRUV_PASSPORT.jpg" alt="" />
                </div>
                <h3>Dhruv Mishra <br /><span>Thrilled Gamer</span></h3>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="gb-swiper-slide">
          <div className="gb-testimonialBox">
          <div  className="gb-quote"> <img src="/images/quote.png" alt="" /></div>
            <div className="gb-content">
              <p>"I have discovered gaming heaven at Gamer's Burnout! With their exceptional gaming equipment, extensive game library, and affordable prices, they have truly surpassed my expectations. The staff is incredibly friendly and knowledgeable, making my experience even more enjoyable."</p>
              <div className="gb-details">
                <div className="gb-imgBx">
                  <img src="/images/DHRUV_PASSPORT.jpg" alt="" />
                </div>
                <h3>Dhruv Mishra <br /><span>Thrilled Gamer</span></h3>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="gb-swiper-slide">
          <div className="gb-testimonialBox">
          <div  className="gb-quote"> <img src="/images/quote.png" alt="" /></div>
            <div className="gb-content">
              <p>"I have discovered gaming heaven at Gamer's Burnout! With their exceptional gaming equipment, extensive game library, and affordable prices, they have truly surpassed my expectations. The staff is incredibly friendly and knowledgeable, making my experience even more enjoyable."</p>
              <div className="gb-details">
                <div className="gb-imgBx">
                  <img src="/images/DHRUV_PASSPORT.jpg" alt="" />
                </div>
                <h3>Dhruv Mishra <br /><span>Thrilled Gamer</span></h3>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="gb-swiper-slide">
          <div className="gb-testimonialBox">
          <div  className="gb-quote"> <img src="/images/quote.png" alt="" /></div>
            <div className="gb-content">
              <p>"I have discovered gaming heaven at Gamer's Burnout! With their exceptional gaming equipment, extensive game library, and affordable prices, they have truly surpassed my expectations. The staff is incredibly friendly and knowledgeable, making my experience even more enjoyable."</p>
              <div className="gb-details">
                <div className="gb-imgBx">
                  <img src="/images/DHRUV_PASSPORT.jpg" alt="" />
                </div>
                <h3>Dhruv Mishra <br /><span>Thrilled Gamer</span></h3>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="gb-swiper-slide">
          <div className="gb-testimonialBox">
          <div  className="gb-quote"> <img src="/images/quote.png" alt="" /></div>
            <div className="gb-content">
              <p>"I have discovered gaming heaven at Gamer's Burnout! With their exceptional gaming equipment, extensive game library, and affordable prices, they have truly surpassed my expectations. The staff is incredibly friendly and knowledgeable, making my experience even more enjoyable."</p>
              <div className="gb-details">
                <div className="gb-imgBx">
                  <img src="/images/DHRUV_PASSPORT.jpg" alt="" />
                </div>
                <h3>Dhruv Mishra <br /><span>Thrilled Gamer</span></h3>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="gb-swiper-slide">
          <div className="gb-testimonialBox">
          <div  className="gb-quote"> <img src="/images/quote.png" alt="" /></div>
            <div className="gb-content">
              <p>"I have discovered gaming heaven at Gamer's Burnout! With their exceptional gaming equipment, extensive game library, and affordable prices, they have truly surpassed my expectations. The staff is incredibly friendly and knowledgeable, making my experience even more enjoyable."</p>
              <div className="gb-details">
                <div className="gb-imgBx">
                  <img src="/images/DHRUV_PASSPORT.jpg" alt="" />
                </div>
                <h3>Dhruv Mishra <br /><span>Thrilled Gamer</span></h3>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="gb-swiper-slide">
          <div className="gb-testimonialBox">
          <div  className="gb-quote"> <img src="/images/quote.png" alt="" /></div>
            <div className="gb-content">
              <p>"I have discovered gaming heaven at Gamer's Burnout! With their exceptional gaming equipment, extensive game library, and affordable prices, they have truly surpassed my expectations. The staff is incredibly friendly and knowledgeable, making my experience even more enjoyable."</p>
              <div className="gb-details">
                <div className="gb-imgBx">
                  <img src="/images/DHRUV_PASSPORT.jpg" alt="" />
                </div>
                <h3>Dhruv Mishra <br /><span>Thrilled Gamer</span></h3>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="gb-swiper-slide">
          <div className="gb-testimonialBox">
          <div  className="gb-quote"> <img src="/images/quote.png" alt="" /></div>
            <div className="gb-content">
              <p>"I have discovered gaming heaven at Gamer's Burnout! With their exceptional gaming equipment, extensive game library, and affordable prices, they have truly surpassed my expectations. The staff is incredibly friendly and knowledgeable, making my experience even more enjoyable."</p>
              <div className="gb-details">
                <div className="gb-imgBx">
                  <img src="/images/DHRUV_PASSPORT.jpg" alt="" />
                </div>
                <h3>Dhruv Mishra <br /><span>Thrilled Gamer</span></h3>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="gb-swiper-slide">
          <div className="gb-testimonialBox">
           <div  className="gb-quote"> <img src="/images/quote.png" alt="" /></div>
            <div className="gb-content">
              <p>"I have discovered gaming heaven at Gamer's Burnout! With their exceptional gaming equipment, extensive game library, and affordable prices, they have truly surpassed my expectations. The staff is incredibly friendly and knowledgeable, making my experience even more enjoyable."</p>
              <div className="gb-details">
                <div className="gb-imgBx">
                  <img src="/images/DHRUV_PASSPORT.jpg" alt="" />
                </div>
                <h3>Dhruv Mishra <br /><span>Thrilled Gamer</span></h3>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="gb-swiper-slide">
          <div className="gb-testimonialBox">
          <div  className="gb-quote"> <img src="/images/quote.png" alt="" /></div>
            <div className="gb-content">
              <p>"I have discovered gaming heaven at Gamer's Burnout! With their exceptional gaming equipment, extensive game library, and affordable prices, they have truly surpassed my expectations. The staff is incredibly friendly and knowledgeable, making my experience even more enjoyable."</p>
              <div className="gb-details">
                <div className="gb-imgBx">
                  <img src="/images/DHRUV_PASSPORT.jpg" alt="" />
                </div>
                <h3>Dhruv Mishra <br /><span>Thrilled Gamer</span></h3>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="gb-swiper-slide">
          <div className="gb-testimonialBox">
          <div  className="gb-quote"> <img src="/images/quote.png" alt="" /></div>
            <div className="gb-content">
              <p>"I have discovered gaming heaven at Gamer's Burnout! With their exceptional gaming equipment, extensive game library, and affordable prices, they have truly surpassed my expectations. The staff is incredibly friendly and knowledgeable, making my experience even more enjoyable."</p>
              <div className="gb-details">
                <div className="gb-imgBx">
                  <img src="/images/DHRUV_PASSPORT.jpg" alt="" />
                </div>
                <h3>Dhruv Mishra <br /><span>Thrilled Gamer</span></h3>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="gb-swiper-slide">
          <div className="gb-testimonialBox">
          <div  className="gb-quote"> <img src="/images/quote.png" alt="" /></div>
            <div className="gb-content">
              <p>"I have discovered gaming heaven at Gamer's Burnout! With their exceptional gaming equipment, extensive game library, and affordable prices, they have truly surpassed my expectations. The staff is incredibly friendly and knowledgeable, making my experience even more enjoyable."</p>
              <div className="gb-details">
                <div className="gb-imgBx">
                  <img src="/images/DHRUV_PASSPORT.jpg" alt="" />
                </div>
                <h3>Dhruv Mishra <br /><span>Thrilled Gamer</span></h3>
              </div>
            </div>
          </div>
        </SwiperSlide>


      </Swiper>
    </>
  );
}

export default Testimonial;
