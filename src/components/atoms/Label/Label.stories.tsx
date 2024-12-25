import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Label from './index';
import { LabelProps } from './LabelProps.interface';

export default {
  title: 'Components/Atoms/Label',
  component: Label,
} as Meta<typeof Label>;

const Template: StoryFn<typeof Label> = (args: LabelProps) => (
  <Label {...args} />
);

export const Default = Template.bind({});
Default.args = {
  text: 'Label Text',
  htmlFor: 'input-id',
};
