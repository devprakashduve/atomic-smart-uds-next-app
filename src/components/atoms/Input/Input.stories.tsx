import React from 'react';
import { composeStory, Meta, ComponentStory } from '@storybook/react';
import Input from './index';
import { InputProps } from './InputProps.interface';

export default {
    title: 'Atoms/Input',
    component: Input,
} as Meta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args: InputProps) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
    value: '',
    onChange: (e: { target: { value: any; }; }) => console.log(e.target.value),
    placeholder: 'Enter text',
};

export const Disabled = Template.bind({});
Disabled.args = {
    value: '',
    onChange: (e: { target: { value: any; }; }) => console.log(e.target.value),
    placeholder: 'Enter text',
    disabled: true,
};