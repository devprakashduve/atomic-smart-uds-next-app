import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import SelectMenus from '.';
import { SelectMenusProps } from './SelectMenus.interface';

const items = [
  {
    id: 1,
    name: 'Aarav Patel',
    avatar: '/images/avatar.jpg',
  },
  {
    id: 2,
    name: 'Vivaan Singh',
  },
  {
    id: 3,
    name: 'Aditya Sharma',
    avatar: '/images/avatar.jpg',
  },
  {
    id: 4,
    name: 'Vihaan Gupta',
    avatar: '/images/avatar.jpg',
  },
  {
    id: 5,
    name: 'Arjun Reddy',
    avatar: '/images/avatar.jpg',
  },
  {
    id: 6,
    name: 'Krishna Iyer',
    avatar: '/images/avatar.jpg',
  },
  {
    id: 7,
    name: 'Rohan Mehta',
    avatar: '/images/avatar.jpg',
  },
  {
    id: 8,
    name: 'Kabir Khan',
    avatar: '/images/avatar.jpg',
  },
  {
    id: 9,
    name: 'Aryan Joshi',
    avatar: '/images/avatar.jpg',
  },
  {
    id: 10,
    name: 'Ishaan Verma',
    avatar: '/images/avatar.jpg',
  },
  {
    id: 11,
    name: 'Reyansh Sharma',
    avatar: '/images/avatar.jpg',
  },
  {
    id: 12,
    name: 'Ayaan Patel',
    avatar: '/images/avatar.jpg',
  },
  {
    id: 13,
    name: 'Dhruv Kapoor',
    avatar: '/images/avatar.jpg',
  },
  {
    id: 14,
    name: 'Aarush Reddy',
    avatar: '/images/avatar.jpg',
  },
  {
    id: 15,
    name: 'Ansh Mehta',
    avatar: '/images/avatar.jpg',
  },
];

export default {
  title: 'Components/Atoms/InputGroup/SelectMenus',
  component: SelectMenus,
} as Meta;

const Template: StoryFn<SelectMenusProps> = (args) => <SelectMenus {...args} />;

export const Default = Template.bind({});
Default.args = {
  items,
  defaultSelected: items[3],
};

export const WithOptions = Template.bind({});
WithOptions.args = {
  items,
  defaultSelected: items[0],
};
