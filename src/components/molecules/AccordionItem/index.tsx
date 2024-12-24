import React, { useState } from 'react';
import { AccordionItemProps } from './AccordionItemProps.interface';
import './AccordionItem.css';

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  isOpen = false,
}) => {
  const [isExpanded, setIsExpanded] = useState(isOpen);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="accordion-item mb-4">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3 className="accordion-title text-lg font-semibold">{title}</h3>
        <span className={`accordion-icon ${isExpanded ? 'open' : ''}`}>+</span>
      </div>
      {isExpanded && (
        <div className="accordion-content rounded-md bg-gray-100 p-4">
          {content}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
