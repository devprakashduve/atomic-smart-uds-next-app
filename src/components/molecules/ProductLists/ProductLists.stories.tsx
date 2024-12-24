import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ProductLists from '.';

export default {
  title: 'Molecules/ProductLists',
  component: ProductLists,
} as Meta;

const Template: StoryFn = (args) => <ProductLists {...args} />;

export const Default = Template.bind({});
Default.args = {
  products: [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 },
  ],
};
