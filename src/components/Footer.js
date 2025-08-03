import React from 'react';
import { motion } from 'framer-motion';
import '../css/footer.css';

function Footer() {
  return (
    <section className="footer">
      <img 
        className="footer-bg" 
        src={`${process.env.PUBLIC_URL}/images/section/footer-bg.png`} 
        alt="footer background" 
      />
      {/* 나머지 컨텐츠 */}
      <div className="footer-content">

        {/* 로고 */}
        <div className="footer-logo">
          <img 
            src={`${process.env.PUBLIC_URL}/images/logo/logo-fff.png`} 
            alt="배민 로고 화이트" 
          />
        </div>

        {/* 푸터 오른쪽 상단 */}
        <div className='f-righttop bm-kku'>

          {/* sns 연결 */}
          <ul className='sns'>
            <li>
              <a href='https://www.instagram.com/baemin_official/'
              target="_blank" 
              rel="noopener noreferrer">
                인스타
              </a>
            </li>
            <li>
              <a href='https://www.youtube.com/@baemin_official'
              target="_blank" 
              rel="noopener noreferrer">
                유튜브
              </a>
            </li>
            <li>
              <a href='https://www.facebook.com/smartbaedal/'
              target="_blank" 
              rel="noopener noreferrer">
                페이스북
              </a>
            </li>
            <li>
              <a href='https://blog.naver.com/smartbaedal'
              target="_blank" 
              rel="noopener noreferrer">
                블로그
              </a>
            </li>
          </ul>

          {/* 배달의 민족 관련 사이트 */}
          <ul className='site'>
            <li>
              <a href='https://ceo.baemin.com/'
              target="_blank" 
              rel="noopener noreferrer">
                배민외식업광장
              </a>
            </li>
            <li>
              <a href='https://www.woowahan.com/'
              target="_blank" 
              rel="noopener noreferrer">
                우아한형제들
              </a>
            </li>
            <li>
              <a href='https://join.baeminconnect.com/'
              target="_blank" 
              rel="noopener noreferrer">
                배민커넥트
              </a>
            </li>
          </ul>
        </div>

      </div>{/* 오른쪽 상단 박스 끝 */}

      <div className="footer-main bm-kku">
        {['오늘도', '우리는', '행복을', '배달합니다.'].map((word, i) => (
          <motion.span
            key={i}
            className="footer-word"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.3, duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: false }}
          >
            {word}
          </motion.span>
        ))}
      </div>

      <div className='f-leftbottom'>
        <p className='flb-title bm-han-pro'>(주)우아한 형제들</p>
        <p className='flb-desc bm-han-air'>
          주소 : 서울특별시 송파구 위례성대로 2 장은빌딩 <br/>
          대표자명 : 김범석 <br/>
          사업자등록번호: 120-87-65763 <br/>
          사업자정보확인 <br/>
          통신판매업: 2012-서울송파-0515 <br/>
          전자금융분쟁처리 TEL : 1600-0987 FAX : 050-6050-0400 MAIL : help@woowahan.com
        </p>
      </div>
    </section>
  );
}

export default Footer;
