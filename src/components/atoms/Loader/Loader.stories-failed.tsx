import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { LoaderProps } from './LoaderProps.interface';
import Loader from '.';

export default {
  title: 'Components/Atoms/Loader',
  component: Loader,
} as Meta;

const Template: StoryFn<LoaderProps> = (args) => <Loader {...args} />;

export const SmallLoader = Template.bind({});
SmallLoader.args = {
  size: 'small',
  color: 'blue',
  speed: 'normal',
};

export const MediumLoader = Template.bind({});
MediumLoader.args = {
  size: 'medium',
  color: 'green',
  speed: 'slow',
};

export const LargeLoader = Template.bind({});
LargeLoader.args = {
  size: 'large',
  color: 'red',
  speed: 'fast',
};
