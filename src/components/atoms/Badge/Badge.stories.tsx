import React from 'react';
import { Meta, Story } from '@storybook/react';
import Badge, { BadgeProps } from './Badge';

export default {
    title: 'Atoms/Badge',
    component: Badge,
} as Meta;

const Template: Story<BadgeProps> = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'Default Badge',
};

export const Primary = Template.bind({});
Primary.args = {
    label: 'Primary Badge',
    variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Secondary Badge',
    variant: 'secondary',
};