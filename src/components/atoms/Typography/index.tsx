import React from 'react';

import { TypographyProps } from './TypographyProps.interface';
import './../../../app/globals.css';
import './Typography.css';

const Typography: React.FC<TypographyProps> = ({
  content,
  variant = 'body',
  size = 'medium',
  weight = 'normal',
  color = 'black',
  align = 'left',
}) => {
  return (
    <div
      className={`typography ${variant} ${size} ${weight} ${color} ${align}`}
    >
      {content}
    </div>
  );
};

export default Typography;

export const typographyVariants = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  body: 'body',
  caption: 'caption',
};

export const typographySizes = {
  small: 'small',
  medium: 'medium',
  large: 'large',
};

export const typographyWeights = {
  light: 'light',
  normal: 'normal',
  bold: 'bold',
};

export const typographyColors = {
  black: 'black',
  white: 'white',
  gray: 'gray',
  red: 'red',
  blue: 'blue',
};

export const typographyAlignments = {
  left: 'left',
  center: 'center',
  right: 'right',
};
