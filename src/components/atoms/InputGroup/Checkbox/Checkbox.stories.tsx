import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Checkbox from './index';
import { CheckboxProps } from './CheckboxProps.interface';

export default {
  title: 'Components/Atoms/InputGroup/Checkbox',
  component: Checkbox,
} as Meta<typeof Checkbox>;

const Template: StoryFn<typeof Checkbox> = (args: CheckboxProps) => (
  <Checkbox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  checked: false,
  onChange: (e) => console.log(e.target.checked),
  label: 'Checkbox Label',
};
