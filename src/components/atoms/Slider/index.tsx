import React from 'react';
import './Slider.css';
import { SliderProps } from './SliderProps.interface';

const Slider: React.FC<SliderProps> = ({
  min,
  max,
  value,
  step = 1,
  onChange,
  color = 'blue',
  disabled = false,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(event.target.value));
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
