import React from 'react';
import '../css/bmclub.css';

function BmClub() {
  return (
    <section className="bmclub">
      <article className='club-left'>
        <img
          src={`${process.env.PUBLIC_URL}/images/section/club2.png`} 
          alt='배민클럽이미지(섹션용)'
          className='club-img'
        />
        <p className='bm-han-pro bm-title'>배민클럽</p>
      </article>

      <article className='club-right'>
        <h3 className='poem-title bm-kku'>배민클럽 외않써?</h3>
        <p className='poem-text bm-kku'>
          달에 1990원만 내면<br />
          모두 무료배달<br />
          100원만 얹어서 2090원 내면<br />
          티빙 멤버십까지 가능한데<br />
          <br />
          배민클럽 외않써?<br />
          <br />
          한달에 두번 치킨 할인 가능<br />
          배민클럽 전용 쿠폰팩으로<br />
          제휴 혜택, 신선식품 마트 할인 등<br />
          폭넓은 할인도 가능한데<br />
          <br />
          배민클럽 외않써?
        </p>
      </article>
    </section>
  );
}

export default BmClub;
