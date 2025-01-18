import React from 'react';
import { LabelProps } from './LabelProps.interface';

import './Label.css';
import { classNames } from '@/Components/utilities/componentsMethods';

const Label: React.FC<LabelProps> = ({
  children,
  htmlFor,
  customClassNames,
}) => {
  const labelClass = classNames(`label-base block`, customClassNames);
  return (
    <label htmlFor={htmlFor} className={labelClass}>
      {children}
    </label>
  );
};

export default Label;
