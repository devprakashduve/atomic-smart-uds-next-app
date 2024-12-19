import React from 'react';
import { ParagraphProps } from './ParagraphProps.interface';



const Paragraph: React.FC<ParagraphProps> = ({ children, className }) => {
    return <p className={className}>{children}</p>;
};

export default Paragraph;