import React from 'react';
import { LinkProps } from './LinkProps.interface';
import './Link.css';

const Link: React.FC<LinkProps> = ({ href, text, target = '_self' }) => {
  return (
    <a href={href} target={target} className="link-base">
      {text}
    </a>
  );
};

export default Link;
