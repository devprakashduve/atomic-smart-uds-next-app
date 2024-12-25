import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { TextProps } from './TextProps.interface';
import Text from '.';

export default {
 title: 'Components/Atoms/Text',
  component: Text,
} as Meta;

const Template: StoryFn<TextProps> = (args) => <Text {...args} />;

export const NormalText = Template.bind({});
NormalText.args = {
  content: 'This is a normal text',
  type: 'normal',
  size: 'medium',
  color: 'black',
  weight: 'normal',
};

export const HeadingText = Template.bind({});
HeadingText.args = {
  content: 'This is a heading text',
  type: 'heading',
  size: 'large',
  color: 'blue',
  weight: 'bold',
};

export const SubheadingText = Template.bind({});
SubheadingText.args = {
  content: 'This is a subheading text',
  type: 'subheading',
  size: 'medium',
  color: 'gray',
  weight: 'light',
};
