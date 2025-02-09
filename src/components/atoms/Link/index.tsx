import React from 'react';
import { LinkProps } from './LinkProps.interface';

import './Link.css';
import { classNames } from '@/Components/Utilities/componentsMethods';

const Link: React.FC<LinkProps> = ({
  href,
  text,
  target = '_self',
  children,
  underline = false,
  underlineHover = true,
  className,
  onClick,
}) => {
  const containerClasses = classNames(className);
  return (
    <a
      onClick={onClick}
      href={href}
      target={target}
      className={`link ${underline ? 'underline' : ''} ${underlineHover ? 'hover:underline' : ''} ${containerClasses}`}
    >
      {text || children}
    </a>
  );
};

export default Link;
