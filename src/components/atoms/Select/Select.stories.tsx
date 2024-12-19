import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Select from './index';
import { SelectProps } from './SelectProps.interface';

export default {
    title: 'Atoms/Select',
    component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args: SelectProps) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
    options: [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
    ],
    value: 'option1',
    onChange: (e) => console.log(e.target.value),
};