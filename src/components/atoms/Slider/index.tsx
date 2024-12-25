import React from 'react';
import './../../../app/globals.css';
import './Slider.css';
import { SliderProps } from './SliderProps.interface';



const Slider: React.FC<SliderProps> = ({
  min,
  max,
  value,
  step = 1,
  onChange,
  setStep,
  color = 'blue',
  disabled = false,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
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
