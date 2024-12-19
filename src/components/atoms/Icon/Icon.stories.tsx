import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Icon from './index';
import { IconProps } from './IconProps.interface';

export default {
    title: 'Atoms/Icon',
    component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args: IconProps) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
    name: 'icon-name',
    size: 24,
    color: 'currentColor',
};