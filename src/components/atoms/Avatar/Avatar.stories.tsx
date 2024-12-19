import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Avatar from './index';
import { AvatarProps } from './AvatarProps.interface';

export default {
    title: 'Atoms/Avatar',
    component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args: AvatarProps) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
    src: 'https://via.placeholder.com/50',
    alt: 'Avatar',
    size: 50,
};

export const WithInitials = Template.bind({});
WithInitials.args = {
    initials: 'JD',
    alt: 'Avatar with Initials',
};