import React from 'react';
// import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoryFn, Meta } from '@storybook/react';
import Badge from './index';
import { BadgeProps } from './BadgeProps.interface';

export default {
 title: 'Components/Atoms/Badge',
  component: Badge,
} as Meta<typeof Badge>;

const Template: StoryFn<typeof Badge> = (args: BadgeProps) => (
  <Badge {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: <span>&#10753;</span>,
};

export const Primary = Template.bind({});
Primary.args = {
  children: <span>&#10753;</span>,
  variant: 'badge-primary',
  customColor: 'green',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: <span>&#10753;</span>,
  variant: 'badge-secondary',
  customColor: 'red',
  scale: '5',
};
