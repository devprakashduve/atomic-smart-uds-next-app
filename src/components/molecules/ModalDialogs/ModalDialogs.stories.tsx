import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ModalDialogs from '.';

export default {
  title: 'Components/Molecules/ModalDialogs',
  component: ModalDialogs,
} as Meta;

const Template: StoryFn = (args) => <ModalDialogs {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Add default props here
};

export const WithCustomTitle = Template.bind({});
WithCustomTitle.args = {
  title: 'Custom Title',
  // Add other props here
};
