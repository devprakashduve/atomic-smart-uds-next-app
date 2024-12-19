import React from 'react';
import { Meta, Story } from '@storybook/react';
import Heading from '.';
import { HeadingProps } from './HeadingProps.interface';

export default {
    title: 'Atoms/Heading',
    component: Heading,
} as Meta;

const Template: Story<HeadingProps> = (args) => <Heading {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Default Heading',
    level: 1,
};

export const Level2 = Template.bind({});
Level2.args = {
    children: 'Level 2 Heading',
    level: 2,
};

export const Level3 = Template.bind({});
Level3.args = {
    children: 'Level 3 Heading',
    level: 3,
};