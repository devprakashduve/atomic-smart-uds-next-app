import React from 'react';

import Navbar from '.';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Organisms/Navbar',
  component: Navbar,
} as Meta<typeof Navbar>;

const Template: StoryFn<typeof Navbar> = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const DefaultNavBar = Template.bind({});
DefaultNavBar.args = {
  logo: '/images/avatar.jpg', // Example logo URL
  links: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ],
};

export const CustomNavBar = Template.bind({});
CustomNavBar.args = {
  logo: '/images/avatar.jpg', // Custom logo URL
  links: [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Profile', href: '/profile' },
    { name: 'Settings', href: '/settings' },
    { name: 'Logout', href: '/logout' },
  ],
};

export const NavBarWithDropdown = Template.bind({});
NavBarWithDropdown.args = {
  logo: '/images/avatar.jpg', // Dropdown logo URL
  links: [
    { name: 'Home', href: '/' },
    {
      name: 'Services',
      href: '/services',
      subLinks: [
        { name: 'Web Development', href: '/services/web-development' },
        { name: 'App Development', href: '/services/app-development' },
      ],
    },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ],
};
