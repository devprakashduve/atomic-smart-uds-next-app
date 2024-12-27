import React, { useState } from 'react';
import { SliderProps } from './SliderProps.interface';
import './../../../../app/globals.css';
import './Slider.css';

const Slider: React.FC<SliderProps> = ({
  min,
  max,
  value: initialValue,
  step = 1,
  onChange,
  setStep,
  color,
  disabled = false,
}) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    setValue(newValue);
    onChange(newValue);
    setStep(newValue); // Update step based on the new value
  };

  return (
    <div className="slider-container">
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        step={step}
        onChange={handleChange}
        className={`slider-thumb ${disabled ? 'slider-disabled' : ''} bg-${color}`}
        disabled={disabled}
      />
      <div className="slider-value">{value}</div>
    </div>
  );
};

export default Slider;
