import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';
import { motion } from 'framer-motion';
import '../css/appdown.css';

function AppDown() {
  return (
    <section className="appdown">
      <article className='appdown-left'>
        <div className='appdownload'>
          <img
            src='/images/app/app-icon.webp'
            alt='어플아이콘'
            className='app-icon'
          />
          <div className='appdown-rowbox'>
            <h1 className='bm-han-pro down-title'>앱 다운받기</h1>

            <a
              href="https://play.google.com/store/apps/details?id=com.sampleapp&hl=ko" 
              target="_blank" 
              rel="noopener noreferrer">
              <img
                src='/images/download/app_google.png'
                alt='구글 다운로드 링크'
                className='appdown-link' />
            </a>

            <a
              href="https://apps.apple.com/kr/app/%EB%B0%B0%EB%8B%AC%EC%9D%98%EB%AF%BC%EC%A1%B1-%EB%AC%B4%EB%A3%8C%EB%B0%B0%EB%8B%AC-%EB%B0%B0%EB%AF%BC%ED%81%B4%EB%9F%BD/id378084485" 
              target="_blank" 
              rel="noopener noreferrer">
              <img
                src='/images/download/app_apple.png'
                alt='애플 다운로드 링크'
                className='appdown-link' />
            </a>
          </div>
        </div>
      </article>

      <article className="appdown-right">
        <h1 className='bm-han-pro mockup-title'>"우리나라 공식 1등 배달앱"</h1>
        <div className='mockup-swiper'>
          <Swiper
            modules={[Autoplay, Pagination]}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              500: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              769: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
          >
            {[...Array(6)].map((_, i) => (
              <SwiperSlide key={i}>
                <img 
                  src={`/images/app/app-${i + 1}-mockup.png`} 
                  alt={`목업${i + 1}`} 
                />
              </SwiperSlide>
            ))}
          </Swiper>

        </div>

        {/* 라이더 애니메이션 */}
        <motion.div
          className="rider-box"
          initial={{ x: '100%', opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', duration: 2 }}
        >
          <img src="/images/section/character.png" alt="배달 라이더" />
          <p className='bm-han-air connect-text'>
            라이더가 되고 싶다면?<br />
           <a 
            href="https://join.baeminconnect.com/" 
            target="_blank" 
            rel="noopener noreferrer">
            배민커넥트 다운로드
          </a>
          </p>
        </motion.div>
      </article>
    </section>
  );
}

export default AppDown;