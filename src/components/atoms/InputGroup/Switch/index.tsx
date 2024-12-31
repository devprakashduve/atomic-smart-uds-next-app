import React from 'react';
import { SwitchProps } from './Switch.interface';

const Switch = ({ checked, onChange, name, size, title }: SwitchProps) => {
  const [isChecked, setIsChecked] = React.useState(checked);
  const handleToggle = () => {
    setIsChecked(!isChecked);
    onChange && onChange(!checked);
  };

  let boxSize = 'h-5 w-10';
  let thumbSize = '5';

  switch (size) {
    case 'lg':
      boxSize = 'h-8 w-16';
      thumbSize = '8';
      break;
    case 'md':
      boxSize = 'h-6 w-12';
      thumbSize = '6';
      break;
    default:
      boxSize = 'h-5 w-10';
      thumbSize = '5';
      break;
  }

  let setTitle = name;
  title && (setTitle = title);
  return (
    <div className={`relative inline-block ${boxSize}`}>
      <input
        title={setTitle}
        checked={isChecked}
        onChange={handleToggle}
        name={name}
        type="checkbox"
        className={`peer ${boxSize} cursor-pointer appearance-none rounded-full bg-line transition-colors duration-300 checked:bg-line-dark`}
      />
      <label
        htmlFor={name}
        className={`absolute left-0 top-0 h-${thumbSize} w-${thumbSize} cursor-pointer rounded-full border border-slate-300 bg-white shadow-sm transition-transform duration-300 peer-checked:translate-x-full peer-checked:border-line`}
      ></label>
    </div>
  );
};

export default Switch;
