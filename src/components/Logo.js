import React from 'react';
import '../css/logo.css';

function Logo() {
  return (
    <div className="fixed-logo">
      <img src={`${process.env.PUBLIC_URL}/images/logo/logo-999.png`} alt="배민 로고 블랙" />
    </div>
  );
}

export default Logo;