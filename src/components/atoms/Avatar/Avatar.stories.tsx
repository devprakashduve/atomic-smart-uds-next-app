import React from 'react';
import { Meta, Story } from '@storybook/react';
import Avatar, { AvatarProps } from './Avatar';

export default {
    title: 'Atoms/Avatar',
    component: Avatar,
} as Meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
    src: 'https://via.placeholder.com/150',
    alt: 'Default Avatar',
};

export const WithInitials = Template.bind({});
WithInitials.args = {
    initials: 'JD',
    alt: 'Avatar with Initials',
};