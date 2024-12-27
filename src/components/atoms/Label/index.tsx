import React from 'react';
import { LabelProps } from './LabelProps.interface';
import './../../../app/globals.css';
import './Label.css';

const Label: React.FC<LabelProps> = ({ text, htmlFor }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="label-base mb-2 block text-sm font-bold text-gray-700"
    >
      {text}
    </label>
  );
};

export default Label;
