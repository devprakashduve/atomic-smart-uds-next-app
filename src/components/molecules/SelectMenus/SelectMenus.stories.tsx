import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import SelectMenus from '.';

export default {
  title: 'Components/Molecules/SelectMenus',
  component: SelectMenus,
} as Meta;

const Template: StoryFn = (args) => <SelectMenus {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Add default props here
};

export const WithOptions = Template.bind({});
WithOptions.args = {
  // Add props with options here
};
