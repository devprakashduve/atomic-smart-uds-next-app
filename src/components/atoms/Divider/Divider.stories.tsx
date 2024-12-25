import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Divider from './index';
import { DividerProps } from './DividerProps.interface';

export default {
  title: 'Components/Atoms/Divider',
  component: Divider,
} as Meta;

const Template: StoryFn<DividerProps> = (args) => <Divider {...args} />;

export const HorizontalThin = Template.bind({});
HorizontalThin.args = {
  orientation: 'horizontal',
  thickness: 'thin',
  color: 'gray',
};

export const HorizontalMedium = Template.bind({});
HorizontalMedium.args = {
  orientation: 'horizontal',
  thickness: 'medium',
  color: 'blue',
};

export const VerticalThick = Template.bind({});
VerticalThick.args = {
  orientation: 'vertical',
  thickness: 'thick',
  color: 'red',
};
