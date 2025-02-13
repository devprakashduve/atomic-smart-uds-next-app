import React, { useState } from 'react';
import { SearchBarProps } from './SearchBarProps.interface';
import './SearchBar.css';
import Input from '@/Components/Atoms/InputGroup/Input';
import { InputType } from '@/Components/Atoms/InputGroup/Input/InputProps.interface';

const dummyData = [
  'Apple',
  'Banana',
  'Cherry',
  'Date',
  'Elderberry',
  'Fig',
  'Grape',
  'Honeydew',
];

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  placeholder = 'Search...',
  onChange,
  onSearch,
  className,
}) => {
  const [inputValue, setInputValue] = useState(value);
  const [filteredData, setFilteredData] = useState<string[]>(dummyData);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(inputValue);
    }
    const results = dummyData.filter((item) =>
      item.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredData(results);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && onSearch) {
      onSearch(inputValue);
    }
  };

  return (
    <div className={` ${className || ''}`}>
      <Input
        type={InputType.TEXT}
        value={inputValue}
        placeholder={placeholder}
        onChange={(e: any) => handleInputChange(e)}
        onKeyPress={(e: any) => handleKeyPress(e)}
        name={'search'}
        showIcon={true}
        customIconName="search"
      />
      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
