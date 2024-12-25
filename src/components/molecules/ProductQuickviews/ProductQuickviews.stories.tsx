import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ProductQuickviews from '.';
import './../../../app/globals.css';

export default {
  title: 'Components/Molecules/ProductQuickviews',
  component: ProductQuickviews,
} as Meta;

const Template: StoryFn = (args) => <ProductQuickviews {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Add default props here
};
