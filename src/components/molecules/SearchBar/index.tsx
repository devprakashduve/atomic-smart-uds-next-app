import React, { useState } from 'react';
import { SearchBarProps } from './SearchBarProps.interface';
import './SearchBar.css';

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  placeholder = 'Search...',
  onChange,
  onSearch,
  className,
}) => {
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    onChange(newValue);
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(inputValue);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && onSearch) {
      onSearch(inputValue);
    }
  };

  return (
    <div className={`search-bar-container ${className || ''}`}>
      <input
        type="text"
        value={inputValue}
        placeholder={placeholder}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        className="search-bar-input"
      />
      <button onClick={handleSearch} className="search-bar-button">
        🔍
      </button>
    </div>
  );
};

export default SearchBar;
