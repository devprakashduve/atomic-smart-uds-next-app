import React from 'react';
import AccordionItem from '../AccordionItem';
import { AccordionProps } from './AccordionProps.interface';
import './Accordion.css';
const Accordion: React.FC<AccordionProps> = ({ items }) => {
  return (
    <div className="accordion-container w-full">
      {items.map((item, index) => (
        <AccordionItem key={index} {...item} />
      ))}
    </div>
  );
};

export default Accordion;
