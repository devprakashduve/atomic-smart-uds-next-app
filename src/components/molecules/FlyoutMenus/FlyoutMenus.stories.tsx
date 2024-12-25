import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import FlyoutMenus from '.';
import { FlyoutMenuProps } from './FlyoutMenu.interface';

export default {
  title: 'Components/Molecules/FlyoutMenus',
  component: FlyoutMenus,
} as Meta;

const Template: StoryFn<FlyoutMenuProps> = (
  args: React.JSX.IntrinsicAttributes
) => <FlyoutMenus {...args} />;

export const Default = Template.bind({});
Default.args = {
  isOpen: true,
  onClose: () => {
    console.log('onClose');
  },
  items: [
    {
      id: '1',
      label: 'Menu Item 1',
      onClick: () => console.log('Menu Item 1 clicked'),
    },
    {
      id: '2',
      label: 'Menu Item 2',
      onClick: () => console.log('Menu Item 2 clicked'),
    },
    {
      id: '3',
      label: 'Menu Item 3',
      onClick: () => console.log('Menu Item 3 clicked'),
    },
  ],
};

export const WithCustomProps = Template.bind({});
WithCustomProps.args = {
  isOpen: true,
  onClose: () => {
    console.log('onClose');
  },
  items: [
    {
      id: '1',
      label: 'Menu Item 1',
      onClick: () => console.log('Menu Item 1 clicked'),
    },
    {
      id: '2',
      label: 'Menu Item 2',
      onClick: () => console.log('Menu Item 2 clicked'),
    },
    {
      id: '3',
      label: 'Menu Item 3',
      onClick: () => console.log('Menu Item 3 clicked'),
    },
  ],
};
