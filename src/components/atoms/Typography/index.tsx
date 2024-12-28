import React from 'react';
import { TypographyProps } from './TypographyProps.interface';

const Typography: React.FC<TypographyProps> = ({
  children,
  variant,
  size,
  weight,
  color,
  align,
  customClassNames = '',
}) => {
  const classNames = [
    variant === 'heading' && 'text-4xl font-bold',
    variant === 'subheading' && 'text-2xl font-medium',
    variant === 'body' && 'text-base font-normal',
    variant === 'caption' && 'text-sm font-light',
    variant === 'overline' && 'text-xs uppercase font-light',
    variant === 'button' && 'text-lg uppercase font-bold',
    size && `text-${size}`,
    weight && `font-${weight}`,
    color && `text-${color}`,
    align && `text-${align}`,
    customClassNames,
  ]
    .filter(Boolean)
    .join(' ');

  return <span className={classNames}>{children}</span>;
};

export default Typography;
