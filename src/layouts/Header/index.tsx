import React from 'react';
import { containerStyle, wrapStyle, textStyle } from './header.css';

const Header = () => {
  return (
    <header className={containerStyle}>
      <nav className={wrapStyle}>
        <p className={textStyle}>헤더입니다</p>
      </nav>
    </header>
  );
};

export default Header;
