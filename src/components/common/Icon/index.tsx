import React from 'react';

const ICON_MAP = {
  mail: '/icons/email-icon.svg',
  github: '/icons/github-icon.svg',
  linkedIn: '/icons/linkedIn-icon.svg',
  eye: '/icons/eye.svg',
} as const;

export type IconKey = keyof typeof ICON_MAP;

export type IconOwnProps = {
  name: IconKey;
  size: number;
  className?: string;
  alt?: string;
};

const Icon = ({ name, size, className, alt }: IconOwnProps) => {
  return (
    <img src={ICON_MAP[name]} alt={alt ?? name} width={size} height={size} className={className} />
  );
};

export default Icon;
