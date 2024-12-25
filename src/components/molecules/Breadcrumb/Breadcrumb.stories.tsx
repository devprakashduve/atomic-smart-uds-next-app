import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Breadcrumbs from '.';
import { BreadcrumbProps } from './BreadcrumbProps.interface';

export default {
  title: 'Components/Molecules/Breadcrumbs',
  component: Breadcrumbs,
} as Meta;

const Template: StoryFn<BreadcrumbProps> = (args) => <Breadcrumbs {...args} />;

export const DefaultBreadcrumbs = Template.bind({});
DefaultBreadcrumbs.args = {
  items: [
    { label: 'Home', href: '/' },
    { label: 'Category', href: '/category' },
    { label: 'Subcategory', href: '/subcategory' },
  ],
};

export const WithoutLinks = Template.bind({});
WithoutLinks.args = {
  items: [{ label: 'Home' }, { label: 'Category' }, { label: 'Subcategory' }],
};
