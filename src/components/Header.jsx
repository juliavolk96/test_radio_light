import React from 'react';
import HeaderMenu from './blocks/Second_HeaderMenu';
import ReactSlider from './ReactSlider';

const Header = () => {
  return (
    <div className='header'>
      <div className="header-container">
        <HeaderMenu/>
        <ReactSlider/>
      </div>
    </div>
  );
}

export default Header;