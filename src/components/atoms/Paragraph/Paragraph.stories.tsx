import React from 'react';
import { Meta, Story } from '@storybook/react';
import Paragraph from '.';
import { ParagraphProps } from './ParagraphProps.interface';

export default {
    title: 'Atoms/Paragraph',
    component: Paragraph,
} as Meta;

const Template: Story<ParagraphProps> = (args: React.JSX.IntrinsicAttributes & ParagraphProps) => <Paragraph {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'This is a paragraph.',
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
    children: 'This is a custom styled paragraph.',
    style: { color: 'blue', fontSize: '18px' },
};