import React from 'react';

import { TextProps } from './TextProps.interface';
import './Text.css';

const Text: React.FC<TextProps> = ({
  content,
  type = 'normal',
  size = 'medium',
  color = 'black',
  weight = 'normal',
}) => {
  return <p className={`text ${type} ${size} ${color} ${weight}`}>{content}</p>;
};

export default Text;
