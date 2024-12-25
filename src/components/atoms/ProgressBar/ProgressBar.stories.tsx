import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ProgressBar from './index';
import { ProgressBarProps } from './ProgressBarProps.interface';

export default {
  title: 'Components/Atoms/ProgressBar',
  component: ProgressBar,
} as Meta;

const Template: StoryFn<ProgressBarProps> = (args) => <ProgressBar {...args} />;

export const BasicProgressBar = Template.bind({});
BasicProgressBar.args = {
  value: 50,
  max: 100,
  color: 'blue',
  height: '4px',
  striped: false,
};

export const StripedProgressBar = Template.bind({});
StripedProgressBar.args = {
  value: 70,
  max: 100,
  color: 'green',
  height: '6px',
  striped: true,
};

export const FullProgressBar = Template.bind({});
FullProgressBar.args = {
  value: 100,
  max: 100,
  color: 'red',
  height: '8px',
  striped: false,
};
