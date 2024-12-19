import React from 'react';
import { ImageProps } from './ImageProps.interface';
import './Image.css';

const Image: React.FC<ImageProps> = ({ src, alt, width, height }) => {
    return (
        <img src={src} alt={alt} width={width} height={height} className="image-base" />
    );
};

export default Image;