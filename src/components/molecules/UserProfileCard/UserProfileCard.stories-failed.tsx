import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { UserProfileCardProps } from './UserProfileCardProps.interface';
import UserProfileCard from '.';

export default {
  title: 'Molecules/UserProfileCard',
  component: UserProfileCard,
} as Meta;

const Template: StoryFn<UserProfileCardProps> = (args) => (
  <UserProfileCard {...args} />
);

export const DefaultUserProfile = Template.bind({});
DefaultUserProfile.args = {
  name: 'John Doe',
  avatarUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
  bio: 'Software engineer passionate about technology and open-source.',
  email: 'john.doe@example.com',
  phone: '123-456-7890',
  website: 'https://johndoe.dev',
};
