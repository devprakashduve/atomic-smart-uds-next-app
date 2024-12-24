import React from 'react';
import { LabelProps } from './LabelProps.interface';
import './Label.css';

const Label: React.FC<LabelProps> = ({ text, htmlFor }) => {
  return (
    <label htmlFor={htmlFor} className="label-base">
      {text}
    </label>
  );
};

export default Label;
