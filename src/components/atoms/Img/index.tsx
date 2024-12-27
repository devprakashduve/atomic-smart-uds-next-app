import React from 'react';
import { ImageProps } from './ImageProps.interface';
import './../../../app/globals.css';
import './Image.css';
import Image from 'next/image';
import { classNames } from '@/Components/utilities/componentsMethods';

const Img: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  customClassNames,
}) => {
  const imageClasses = classNames('', customClassNames);

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
