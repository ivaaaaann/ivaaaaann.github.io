import React from 'react';
import { heroStyle } from './hero.css';

export interface HeroProps {
  width: number;
  height: number;
  src: string;
  alt: string;
}

const Hero = ({ width, height, src, alt }: HeroProps) => {
  return <img className={heroStyle} width={width} height={height} src={src} alt={alt} />;
};

export default Hero;
