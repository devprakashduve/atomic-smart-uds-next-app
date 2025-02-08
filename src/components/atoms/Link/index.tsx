import React from 'react';
import { LinkProps } from './LinkProps.interface';

import './Link.css';

const Link: React.FC<LinkProps> = ({
  href,
  text,
  target = '_self',
  children,
}) => {
  return (
    <a href={href} target={target} className="link-base">
      {text || children}
    </a>
  );
};

export default Link;
