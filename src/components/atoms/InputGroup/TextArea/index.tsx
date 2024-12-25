import React from 'react';
import { TextAreaProps } from './TextAreaProps.interface';
import './../../../../app/globals.css';
import './TextArea.css';

const TextArea: React.FC<TextAreaProps> = ({
  value,
  onChange,
  placeholder = '',
  disabled = false,
}) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      className={`textarea-base ${disabled ? 'textarea-disabled' : ''} `}
    />
  );
};

export default TextArea;
