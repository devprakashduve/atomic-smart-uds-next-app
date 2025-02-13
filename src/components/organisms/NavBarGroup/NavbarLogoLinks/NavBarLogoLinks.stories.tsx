import { Meta, StoryFn } from '@storybook/react';
import NavBarLogoLinks from '.';

export default {
  title: 'Components/Organisms/NavBarGroup/NavBarLogoLinks',
  component: NavBarLogoLinks,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<typeof NavBarLogoLinks> = (args) => (
  <NavBarLogoLinks {...args} />
);

export const Default = Template.bind({});
Default.args = {
  logo: '/images/logo.png',
  links: [
    {
      name: 'Home',
      href: '#',
    },
    {
      name: 'About',
      href: '#',
      subLinks: [
        {
          name: 'Our Team',
          href: '#',
          subLinks: [
            { name: 'Member 1', href: '#' },
            { name: 'Member 2', href: '#' },
          ],
        },
        {
          name: 'Our Story',
          href: '#',
        },
      ],
    },
    {
      name: 'Services',
      href: '#',
      subLinks: [
        {
          name: 'Consulting',
          href: '#',
        },
        {
          name: 'Development',
          href: '#',
        },
      ],
    },
    {
      name: 'Contact',
      href: '#',
    },
  ],
  backgroundColor: 'bg-gray-100',
};

export const DarkMode = Template.bind({});
DarkMode.args = {
  ...Default.args,
  backgroundColor: 'bg-gray-900 text-white',
};
