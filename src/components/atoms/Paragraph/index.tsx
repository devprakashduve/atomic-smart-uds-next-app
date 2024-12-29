import React from 'react';
import { ParagraphProps } from './ParagraphProps.interface';
import './Paragraph.css';
import { classNames } from '@/Components/utilities/componentsMethods';

const Paragraph: React.FC<ParagraphProps> = ({
  children,
  customClassNames,
  thin,
  normal=true,
  bold,
}) => {
  const paraClass = classNames(
    thin && 'font-thin',
    normal && 'font-normal',
    bold && 'font-bold',
    customClassNames
  );
  return <p className={paraClass}>{children}</p>;
};

export default Paragraph;
