import React from 'react';
// import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoryFn, Meta } from '@storybook/react';
import Avatar from './index';
import { AvatarProps } from './AvatarProps.interface';

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
} as Meta<typeof Avatar>;

const Template: StoryFn<typeof Avatar> = (args: AvatarProps) => (
  <Avatar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Avatar',
  size: 50,
};

export const WithInitials = Template.bind({});
WithInitials.args = {
  initials: 'JD',
  alt: 'Avatar with Initials',
  src: 'https://via.placeholder.com/250',
};
