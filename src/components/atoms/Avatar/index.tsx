import React from 'react';

import { AvatarProps } from './AvatarProps.interface';
import './../../../app/globals.css';
import './Avatar.css';
import { classNames } from '@/Components/utilities/componentsMethods';

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size = 50,
  customClassNames,
}) => {
  const classes = classNames('avatar', customClassNames);
  return (
    <img className={classes} src={src} alt={alt} width={size} height={size} />
  );
};

export default Avatar;
