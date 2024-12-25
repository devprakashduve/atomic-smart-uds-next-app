import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import NavBar from '.';
import { NavBarProps } from './NavbarProps.interface';
export default {
  title: 'Components/Organisms/NavBar',
  component: NavBar,
} as Meta;

const Template: StoryFn<NavBarProps> = (args) => <NavBar {...args} />;

export const DefaultNavBar = Template.bind({});
DefaultNavBar.args = {
  logo: 'https://via.placeholder.com/150x50?text=Logo', // Example logo URL
  links: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ],
};
