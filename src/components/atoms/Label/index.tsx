import React from 'react';
import { LabelProps } from './LabelProps.interface';

import './Label.css';
import { classNames } from '@/Components/utilities/componentsMethods';

const Label: React.FC<LabelProps> = ({ children, htmlFor, className }) => {
  const labelClass = classNames(`label-base block`, className);
  return (
    <label htmlFor={htmlFor} className={labelClass}>
      {children}
    </label>
  );
};

export default Label;
