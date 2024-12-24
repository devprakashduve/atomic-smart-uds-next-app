import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Menu from '.';
import { MenuProps } from './MenuProps.interface';
import { FaHome, FaUser, FaCog } from 'react-icons/fa';

export default {
  title: 'Molecules/Menu',
  component: Menu,
} as Meta;

const Template: StoryFn<MenuProps> = (args) => <Menu {...args} />;

export const DefaultMenu = Template.bind({});
DefaultMenu.args = {
  items: [
    {
      label: 'Home',
      onClick: () => console.log('Home clicked'),
      icon: <FaHome />,
    },
    {
      label: 'Profile',
      onClick: () => console.log('Profile clicked'),
      icon: <FaUser />,
    },
    {
      label: 'Settings',
      onClick: () => console.log('Settings clicked'),
      icon: <FaCog />,
    },
  ],
};

export const MenuWithDisabledItem = Template.bind({});
MenuWithDisabledItem.args = {
  items: [
    {
      label: 'Home',
      onClick: () => console.log('Home clicked'),
      icon: <FaHome />,
    },
    {
      label: 'Profile',
      onClick: () => console.log('Profile clicked'),
      icon: <FaUser />,
      disabled: true,
    },
    {
      label: 'Settings',
      onClick: () => console.log('Settings clicked'),
      icon: <FaCog />,
    },
  ],
};
