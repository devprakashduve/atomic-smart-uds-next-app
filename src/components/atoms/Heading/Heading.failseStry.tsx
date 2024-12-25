import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { HeadingProps } from './HeadingProps.interface';
import Heading from '.';

export default {
 title: 'Components/Atoms/Heading',
  component: Heading,
} as Meta;

const Template: StoryFn<HeadingProps> = (args) => <Heading {...args} />;

export const Heading1 = Template.bind({});
Heading1.args = {
  level: 1,
  children: 'This is a Level 1 Heading',
  color: 'blue',
  align: 'center',
  weight: 'bold',
};

export const Heading2 = Template.bind({});
Heading2.args = {
  level: 2,
  children: 'This is a Level 2 Heading',
  color: 'red',
  align: 'left',
  weight: 'normal',
};

export const Heading3 = Template.bind({});
Heading3.args = {
  level: 3,
  children: 'This is a Level 3 Heading',
  color: 'green',
  align: 'right',
  weight: 'light',
};
