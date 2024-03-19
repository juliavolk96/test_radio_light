import React from 'react';
import Header from './Header';
import LeftColumn from './LeftColumn';
import MainColumn from './MainColumn';
import RightColumn from './RightColumn';
import Footer from './Footer';

const AppContainer= () => {
  return (
    <div className='app-container'>
      <Header/>
      <div className="shadow">
        <div className="main">
          <LeftColumn/>
          <MainColumn/>
          <RightColumn/>
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default AppContainer;