import React from 'react';
import { ImageProps } from './ImageProps.interface';

import './Image.css';
import Image from 'next/image';
import { classNames } from '@/Components/utilities/componentsMethods';

const Img: React.FC<ImageProps> = ({ src, alt, width, height, className }) => {
  const imageClasses = classNames('', className);

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={imageClasses}
    />
  );
};

export default Img;
