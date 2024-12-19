import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Badge from './index';
import { BadgeProps } from './BadgeProps.interface';

export default {
    title: 'Atoms/Badge',
    component: Badge,
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args: BadgeProps) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
    text: 'Default Badge',
};

export const Primary = Template.bind({});
Primary.args = {
    text: 'Primary Badge',
    variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
    text: 'Secondary Badge',
    variant: 'secondary',
};