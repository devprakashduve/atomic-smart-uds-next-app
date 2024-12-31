import React, { useState } from 'react';
import { TextAreaProps } from './TextAreaProps.interface';
import './TextArea.css';

const TextArea: React.FC<TextAreaProps> = ({
  value,
  onChange,
  placeholder = '',
  disabled = false,
  maxLength,
  showCharCount = false,
}) => {
  const [text, setText] = useState(value); // Set the initial value of the input to the value prop

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value); // Update the state with the new value

    onChange && onChange(event); // Call the parent onChange function
  };
  return (
    <div className="relative">
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder={placeholder}
        disabled={disabled}
        maxLength={maxLength}
        className={`textarea-base ${disabled ? 'textarea-disabled' : ''}`}
      />
      {showCharCount && maxLength && (
        <div className="text-sm">
          {text.length}/{maxLength}
        </div>
      )}
    </div>
  );
};

export default TextArea;
