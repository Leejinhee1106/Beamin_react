import React from 'react';
import '../css/gift.css';

function BmGift() {
  return (
    <section className="bmgift">
      <article className='gift-left'>
        <img src='/images/section/foryou.png' 
        alt='선물박스'
        className='gift-img'/>
        <p className='bm-han-pro'>선물하기</p>
      </article>

      <article className='gift-right'>
        <h1 className="gift-title bm-han-pro">
          <span className="highlight">마음</span>도 <span className="highlight">배달</span>드려요
        </h1>
        <p className="gift-text bm-han-pro">때에 맞게, 상황에 맞게, 당신을 위한 카테고리</p>

        <div className="gift-grid">
          {[
            { src: 'Rectangle 1.png', label: '할인상품권' },
            { src: 'Rectangle 2.png', label: '치킨상품권' },
            { src: 'Rectangle 3.png', label: '추천선물' },
            { src: 'Rectangle 4.png', label: '배민상품권' },
            { src: 'Rectangle 5.png', label: '인기선물' },
            { src: 'Rectangle 6.png', label: '생일선물' },
          ].map((item, idx) => (
            <div className="gift-item" key={idx}>
              <img src={`/images/gift-category/${item.src}`} alt={item.label} />
              <p className="bm-han-pro">{item.label}</p>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}

export default BmGift;