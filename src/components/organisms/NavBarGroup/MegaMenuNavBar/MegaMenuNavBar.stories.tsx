import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import MegaMenuNavBar from './index';
import { MegaMenuNavBarProps } from './MegaMenuNavBar.interface';

export default {
  title: 'Components/Organisms/NavBarGroup/MegaMenuNavBar',
  component: MegaMenuNavBar,
} as Meta;

const Template: StoryFn<MegaMenuNavBarProps> = (args) => (
  <MegaMenuNavBar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  logo: '/images/avatar.jpg',
  links: [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Services',
      href: '#',
      subLinks: [
        {
          name: 'Web Development',
          href: '/services/web-development',
          subLinks: [
            {
              name: 'Frontend',
              href: '/services/web-development/frontend',
            },
            {
              name: 'Backend',
              href: '/services/web-development/backend',
            },
          ],
        },
        {
          name: 'Mobile Development',
          href: '/services/mobile-development',
        },
      ],
    },
    {
      name: 'About',
      href: '/about',
    },
  ],
  backgroundColor: 'bg-gray-100',
};
