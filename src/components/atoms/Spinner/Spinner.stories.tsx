import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Spinner from './index';
import { SpinnerProps } from './SpinnerProps.interface';

export default {
    title: 'Atoms/Spinner',
    component: Spinner,
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args: SpinnerProps) => <Spinner {...args} />;

export const Default = Template.bind({});
Default.args = {
    size: 24,
    color: 'currentColor',
};