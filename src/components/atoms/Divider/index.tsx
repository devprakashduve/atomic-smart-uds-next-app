import React from 'react';
import './Divider.css';
import { DividerProps } from './DividerProps.interface';
import { classNames } from '@/Components/utilities/componentsMethods';

const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  thickness = 'medium',
  customClassNames,
}) => {
  const orientationClasses = {
    horizontal: 'divider-horizontal',
    vertical: 'divider-vertical',
  };

  const thicknessClasses = {
    thin: 'divider-thin',
    medium: 'divider-medium',
    thick: 'divider-thick',
  };

  const dividerClasses = classNames(
    `divider ${orientationClasses[orientation]} ${thicknessClasses[thickness]} border-primary`,
    customClassNames
  );
  return <div className={dividerClasses} />;
};

export default Divider;
