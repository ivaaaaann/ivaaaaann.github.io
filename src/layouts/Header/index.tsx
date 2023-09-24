import React from 'react';
import {
  containerStyle,
  wrapStyle,
  titleWrapStyle,
  titleStyle,
  boldTitleStyle,
  anchorWrapStyle,
  anchorStyle,
} from './header.css';

const Header = () => {
  return (
    <header className={containerStyle}>
      <nav className={wrapStyle}>
        <h1 className={titleWrapStyle}>
          <a href="/">
            <span className={titleStyle}>Ivan's</span>
            <span className={boldTitleStyle}>Youth</span>
          </a>
        </h1>
        <div className={anchorWrapStyle}>
          <a href="/about" className={anchorStyle}>
            About
          </a>
          <a href="/project" className={anchorStyle}>
            Project
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
