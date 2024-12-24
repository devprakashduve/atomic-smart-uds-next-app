import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Tag from './index';
import { TagProps } from './TagProps.interface';

export default {
  title: 'Atoms/Tag',
  component: Tag,
} as Meta;

const Template: StoryFn<TagProps> = (args) => <Tag {...args} />;

export const DefaultTag = Template.bind({});
DefaultTag.args = {
  label: 'Tag 1',
  color: 'blue',
  removable: true,
};

export const GreenTag = Template.bind({});
GreenTag.args = {
  label: 'Tag 2',
  color: 'green',
  removable: false,
};

export const RedTag = Template.bind({});
RedTag.args = {
  label: 'Tag 3',
  color: 'red',
  removable: true,
};
