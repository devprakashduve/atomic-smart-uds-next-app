import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Slider from './index';
import { SliderProps } from './SliderProps.interface';

export default {
  title: 'Components/Atoms/Slider',
  component: Slider,
} as Meta;

const Template: StoryFn<SliderProps> = (args) => <Slider {...args} />;

export const BasicSlider = Template.bind({});
BasicSlider.args = {
  min: 0,
  max: 100,
  value: 50,
  onChange: (value) => console.log(value),
  color: 'blue',
  disabled: false,
};

export const DisabledSlider = Template.bind({});
DisabledSlider.args = {
  min: 0,
  max: 100,
  value: 50,
  onChange: (value) => console.log(value),
  color: 'green',
  disabled: true,
};

export const CustomStepSlider = Template.bind({});
CustomStepSlider.args = {
  min: 0,
  max: 100,
  value: 25,
  step: 5,
  onChange: (value) => console.log(value),
  color: 'red',
  disabled: false,
};
