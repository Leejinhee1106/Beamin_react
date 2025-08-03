import React from 'react';
import '../css/appfeature.css';

const cardData = [
  {
    title: '음식주문',
    desc: '배달/주문/별점/거리/찜 순으로\n원하는 기준에 맞게 식당을 검색하고\n당신의 만족스런 한끼를 주문하세요!',
    img: `${process.env.PUBLIC_URL}/images/section/food.png`,
  },
  {
    title: '빠른배달',
    desc: '바쁘디 바쁜 현대사회!\n빠르게 배달 받고 싶을 땐? 한집배달\n효율이 최고야!\n배달비 아끼고 싶다면? 알뜰배달',
    img: `${process.env.PUBLIC_URL}/images/section/character.png`,
  },
  {
    title: '다양한 쇼핑',
    desc: '배민은 음식주문앱이라고?\n음식주문 뿐만 아닌 전자기기, 꽃,\n도서, 문구, 대형마트 등..\n다양한 쇼핑도 즐길 수 있어요!',
    img: `${process.env.PUBLIC_URL}/images/section/category.png`,
  },
  {
    title: 'B마트',
    desc: '365일 연중무휴 초신속배달!\n필요한 건 무엇이든\n한시간 안에 배달돼요',
    img: `${process.env.PUBLIC_URL}/images/section/bmart.png`,
  },
];

function AppFeature() {
  return (
    <section className="appfeature">
      <p className='feature-notice bm-han-air'>*전국 일부 지역 및 가게 제외</p>
      <div className='feature-cardwrap'>
        {cardData.map((card, idx) => (
          <div className="feature-card" key={idx}>
            <img src={card.img} alt={card.title} />
            <h3 className='bm-han-pro'>{card.title}</h3>
            <p className='bm-han-air'>
              {card.desc.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AppFeature;
