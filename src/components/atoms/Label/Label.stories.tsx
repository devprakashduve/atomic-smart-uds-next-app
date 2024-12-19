import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Label from './index';
import { LabelProps } from './LabelProps.interface';

export default {
    title: 'Atoms/Label',
    component: Label,
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args: LabelProps) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
    text: 'Label Text',
    htmlFor: 'input-id',
};