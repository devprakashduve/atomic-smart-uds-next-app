import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { SwitchProps } from './SwitchProps.interface';
import Switch from '.';

export default {
  title: 'Atoms/Switch',
  component: Switch,
} as Meta;

const Template: StoryFn<SwitchProps> = (args) => <Switch {...args} />;

export const DefaultSwitch = Template.bind({});
DefaultSwitch.args = {
  checked: false,
  onChange: (checked) => console.log(checked),
  color: 'blue',
  disabled: false,
};

export const CheckedSwitch = Template.bind({});
CheckedSwitch.args = {
  checked: true,
  onChange: (checked) => console.log(checked),
  color: 'green',
  disabled: false,
};

export const DisabledSwitch = Template.bind({});
DisabledSwitch.args = {
  checked: false,
  onChange: (checked) => console.log(checked),
  color: 'red',
  disabled: true,
};
