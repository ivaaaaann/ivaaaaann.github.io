import React from 'react';
import {
  containerStyle,
  wrapStyle,
  titleWrapStyle,
  titleStyle,
  boldTitleStyle,
  anchorWrapStyle,
  resumeAnchorStyle,
} from './header.css';
import Flex from '../../components/common/Flex';

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
        <Flex align="center" gap={12}>
          <div className={anchorWrapStyle}>
            <a href="/resume" className={resumeAnchorStyle}>
              Resume
            </a>
          </div>
        </Flex>
      </nav>
    </header>
  );
};

export default Header;
