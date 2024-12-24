import React from 'react';
import './Typography.css';
import { TypographyProps } from './TypographyProps.interface';

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
