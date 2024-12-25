import React from 'react';
import { BadgeProps } from './BadgeProps.interface';
import './../../../app/globals.css';
import './Badge.css';
import { classNames } from '@/Components/utilities/componentsMethods';

const Badge: React.FC<BadgeProps> = ({
  customColor,
  scale,
  children,
  variant,
}) => {
  const badgeClass = classNames('badge-base', variant);

  return (
    <span className={badgeClass} style={{ color: customColor }}>
      {children}
    </span>
  );
};

export default Badge;
