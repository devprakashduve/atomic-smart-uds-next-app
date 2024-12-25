import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Pagination from '.';

export default {
  title: 'Components/Organisms/Pagination',
  component: Pagination,
} as Meta;

const Template: StoryFn = (args) => <Pagination {...args} />;

export const Default = Template.bind({});
Default.args = {
  currentPage: 1,
  totalPages: 10,
  onPageChange: (page: any) => console.log(`Page changed to: ${page}`),
};
