import React, { useState } from 'react';
import { RadioButtonProps } from './RadioButtonProps.interface';
import './../../../../app/globals.css';
import './RadioButton.css';

const RadioButton: React.FC<RadioButtonProps> = ({
  checked: initialChecked,
  onChange,
  label,
  name,
}) => {
  const [checked, setChecked] = useState(initialChecked);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <label className="radio-label">
      <input
        type="radio"
        checked={checked}
        onChange={handleChange}
        name={name}
        className="radio-input"
      />
      {label}
    </label>
  );
};

export default RadioButton;
