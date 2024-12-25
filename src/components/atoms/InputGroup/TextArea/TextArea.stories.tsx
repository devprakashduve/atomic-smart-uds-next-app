import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import TextArea from './index';
import { TextAreaProps } from './TextAreaProps.interface';

export default {
  title: 'Components/Atoms/InputGroup/TextArea',
  component: TextArea,
} as Meta<typeof TextArea>;

const Template: StoryFn<typeof TextArea> = (args: TextAreaProps) => (
  <TextArea {...args} />
);

export const Default = Template.bind({});
Default.args = {
  value: '',
  onChange: (e) => console.log(e.target.value),
  placeholder: 'Enter text',
};

export const Disabled = Template.bind({});
Disabled.args = {
  value: '',
  onChange: (e) => console.log(e.target.value),
  placeholder: 'Enter text',
  disabled: true,
};
