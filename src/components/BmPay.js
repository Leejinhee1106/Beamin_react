import React from 'react';
import '../css/pay.css';

function BmPay() {
  return (
    <section className="bmpay">
       <article className='pay-left'>
        <img src='/images/section/payment.png' 
        alt='배민페이'
        className='pay-img'/>
        <p className='bm-han-pro'>배민페이머니</p>
      </article>

      <article className='pay-right bm-han-pro'>
        <div className='pay-text'>
          <h1 className='pay-title'>
            먹은 만큼 포인트로 적립되는<br/>
            <span className='pay-font-big'>배민페이머니</span>
          </h1>
          <p className='pay-subtitle'>
            배민페이머니로 주문하면 포인트 0.5% 적립
          </p>
        </div>
        
        <img src='/images/download/app_qr.png'
        alt='큐알코드'
        className='qr'/>

        <p className='qr-text'>배민페이로 결제하고 포인트 챙겨가자!</p>
      </article>
    </section>
  );
}

export default BmPay;