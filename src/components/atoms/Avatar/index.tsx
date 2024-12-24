import React from 'react';

import { AvatarProps } from './AvatarProps.interface';
import './../../../app/globals.css';
import './Avatar.css';

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size = 50,
  className = '',
}) => {
  return (
    <img
      className={'avatar ' + className}
      src={src}
      alt={alt}
      width={size}
      height={size}
    />
  );
};

export default Avatar;
