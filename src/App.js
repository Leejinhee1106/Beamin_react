import React, { useState } from 'react';
import './index.css';

import ReactFullpage from '@fullpage/react-fullpage';

import Logo from './components/Logo';
import Intro from './components/Intro';
import AppDown from './components/AppDown';
import AppFeature from './components/AppFeature';
import BmClub from './components/BmClub';
import BmGift from './components/BmGift';
import BmPay from './components/BmPay';
import Footer from './components/Footer';

function App() {
  const [currentSection, setCurrentSection] = useState(0);

  return (
    <>
      {currentSection !== 6 && <Logo currentSection={currentSection} />}

      <ReactFullpage
        licenseKey={''}
        scrollingSpeed={700}
        navigation
        controlArrows={false}
        slidesNavigation={true}
        afterLoad={(origin, destination) => {
          setCurrentSection(destination.index);
        }}
        render={() => {
          return (
            <div id="fullpage-wrapper">
              <div className="section"><Intro /></div>
              <div className="section"><AppDown /></div>
              <div className="section"><AppFeature /></div> {/* 가로 슬라이드 */}
              <div className="section"><BmClub /></div>
              <div className="section"><BmGift /></div>
              <div className="section"><BmPay /></div>
              <div className="section"><Footer /></div>
            </div>
          );
        }}
      />
    </>
  );
}

export default App;
