import React from 'react';
import { HeadingProps } from './HeadingProps.interface';
import './Heading.css';

const Heading: React.FC<HeadingProps> = ({
  level,
  children,
  color = 'black',
  align = 'left',
  weight = 'normal',
}) => {
  const levelClasses = {
    1: 'heading-1',
    2: 'heading-2',
    3: 'heading-3',
    4: 'heading-4',
    5: 'heading-5',
    6: 'heading-6',
  };

  const weightClasses = {
    light: 'font-light',
    normal: 'font-normal',
    bold: 'font-bold',
  };

  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const headingClass = `${levelClasses[level]} ${weightClasses[weight]} ${alignClasses[align]} text-${color}`;

  return React.createElement(
    `h${level}`,
    { className: headingClass },
    children
  );
};

export default Heading;
