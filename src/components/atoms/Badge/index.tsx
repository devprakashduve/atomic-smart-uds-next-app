import React from 'react';
import { BadgeProps } from './BadgeProps.interface';
import './Badge.css';
import { classNames } from '@/Components/utilities/componentsMethods';

const Badge: React.FC<BadgeProps> = ({
  customColor,
  scale,
  children,
  variant,
}) => {
  const badgeClass = classNames(
    `badge-base ${'text-' + scale + 'xl'}`,
    variant
  );

  return <span className={badgeClass}>{children}</span>;
};

export default Badge;
