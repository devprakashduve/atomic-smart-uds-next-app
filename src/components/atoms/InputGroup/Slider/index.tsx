import React, { useState } from 'react';
import { SliderProps } from './SliderProps.interface';
import './Slider.css';
import { classNames } from '@/Components/utilities/componentsMethods';

const Slider: React.FC<SliderProps> = ({
  min,
  max,
  value: initialValue,
  step = 1,
  onChange,
  setStep,
  disabled = false,
  customClassNames = 'h-2',
}) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    setValue(newValue);
    onChange(newValue);
    setStep(newValue); // Update step based on the new value
  };

  const sliderClass = classNames(customClassNames);

  return (
    <div className="slider-container">
      <input
        title="slider"
        type="range"
        min={min}
        max={max}
        value={value}
        step={step}
        onChange={handleChange}
        className={`slider-thumb ${disabled ? 'slider-disabled' : ''} ${sliderClass}`}
        disabled={disabled}
      />
      <div className="slider-value">{value}</div>
    </div>
  );
};

export default Slider;
