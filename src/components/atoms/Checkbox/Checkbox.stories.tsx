import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Checkbox from './index';
import { CheckboxProps } from './CheckboxProps.interface';

export default {
    title: 'Atoms/Checkbox',
    component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args: CheckboxProps) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
    checked: false,
    onChange: (e) => console.log(e.target.checked),
    label: 'Checkbox Label',
};