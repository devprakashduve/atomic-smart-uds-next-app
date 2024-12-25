import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import SearchBar from '.';
import { SearchBarProps } from './SearchBarProps.interface';

export default {
  title: 'Components/Molecules/SearchBar',
  component: SearchBar,
} as Meta;

const Template: StoryFn<SearchBarProps> = (args) => {
  const [value, setValue] = useState(args.value);

  return (
    <SearchBar
      {...args}
      value={value}
      onChange={(newValue) => setValue(newValue)}
      onSearch={(query) => console.log('Search Query:', query)}
    />
  );
};

export const DefaultSearchBar = Template.bind({});
DefaultSearchBar.args = {
  value: '',
  placeholder: 'Search...',
};
