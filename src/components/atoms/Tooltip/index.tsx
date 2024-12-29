import React, { useState, useRef, useEffect } from 'react';
import { TooltipProps } from './TooltipProps.interface';
import { classNames } from '@/Components/utilities/componentsMethods';

const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  placement = 'top',
  background = false,
  customClassNames,
}) => {
  const [show, setShow] = useState(false);
  const [tooltipStyle, setTooltipStyle] = useState({});
  const tooltipRef = useRef<HTMLDivElement>(null);

  const toolTipClasses = classNames(
    `absolute text-sm px-3 py-1 rounded shadow-lg`,
    !background
      ? `border border-primary text-primary`
      : 'bg-primary text-white',
    customClassNames
  );

  useEffect(() => {
    if (tooltipRef.current) {
      const rect = tooltipRef.current.getBoundingClientRect();
      const adjustment = {
        top: {
          top: `-${rect.height + 8}px`,
          left: '50%',
          transform: 'translateX(-50%)',
        },
        bottom: {
          top: 'calc(100% + 8px)',
          left: '50%',
          transform: 'translateX(-50%)',
        },
        left: {
          top: '50%',
          left: `-${rect.width + 8}px`,
          transform: 'translateY(-50%)',
        },
        right: {
          top: '50%',
          left: 'calc(100% + 8px)',
          transform: 'translateY(-50%)',
        },
      };
      setTooltipStyle(adjustment[placement]);
    }
  }, [placement, show]);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && (
        <div ref={tooltipRef} className={toolTipClasses} style={tooltipStyle}>
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
