import React from 'react';
import { HeadingProps } from './HeadingProps.interface';



const Heading: React.FC<HeadingProps> = ({ text, level = 1 }) => {
    const Tag = `h${level}` as keyof JSX.IntrinsicElements;

    return <Tag>{text}</Tag>;
};

export default Heading;