import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextArea from './index';
import { TextAreaProps } from './TextAreaProps.interface';

export default {
  title: 'Components/Atoms/TextArea',
  component: TextArea,
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args: TextAreaProps) => (
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
