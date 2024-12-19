import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import RadioButton from './index';
import { RadioButtonProps } from './RadioButtonProps.interface';

export default {
    title: 'Atoms/RadioButton',
    component: RadioButton,
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (args: RadioButtonProps) => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
    checked: false,
    onChange: (e) => console.log(e.target.checked),
    label: 'Radio Button Label',
    name: 'radio-group',
};