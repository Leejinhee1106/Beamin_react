import React from 'react';
import { motion } from 'framer-motion';
import '../css/intro.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

function Intro() {
  const icons = [
    'bmart.png',
    'category.png',
    'character.png',
    'club.png',
    'food.png',
    'foryou.png',
    'payment.png',
  ];

  return (
    <section className="intro">
      {/* 텍스트 */}
      <div className="intro-text">
        <motion.p
          className="intro-title bm-jirou"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          우리가 어떤 민족입니까?
        </motion.p>

        <motion.p
          className="intro-subtitle bm-jirou"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
        >
          “배달의 민족”
        </motion.p>
      </div>

      {/* Swiper 무한 슬라이더 */}
      <div className="icon-swiper">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={5}
          loop={true}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={3000}
          allowTouchMove={false} // 터치 X, 자동만
        >
          {icons.map((icon, i) => (
            <SwiperSlide key={i}>
              <img src={`/images/section/${icon}`} alt={`아이콘 ${i}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 캐릭터 이미지 */}
      <div className="intro-character">
        <img src="/images/section/face-character.svg" alt="배민 캐릭터" />
      </div>
    </section>
  );
}

export default Intro;