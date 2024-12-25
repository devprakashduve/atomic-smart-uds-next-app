import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import DropdownMenu from '.';
import { DropdownMenuProps } from './DropdownMenuProps.interface';

export default {
  title: 'Components/Molecules/DropdownMenu',
  component: DropdownMenu,
} as Meta;

const Template: StoryFn<DropdownMenuProps> = (args) => (
  <DropdownMenu {...args} />
);

export const DefaultDropdownMenu = Template.bind({});
DefaultDropdownMenu.args = {
  buttonLabel: 'Open Menu',
  items: [
    { label: 'Action 1', onClick: () => console.log('Action 1 clicked') },
    { label: 'Action 2', onClick: () => console.log('Action 2 clicked') },
    {
      label: 'Action 3',
      onClick: () => console.log('Action 3 clicked'),
      disabled: true,
    },
  ],
};

export const DisabledItemDropdownMenu = Template.bind({});
DisabledItemDropdownMenu.args = {
  buttonLabel: 'Open Menu',
  items: [
    { label: 'Action 1', onClick: () => console.log('Action 1 clicked') },
    {
      label: 'Action 2',
      onClick: () => console.log('Action 2 clicked'),
      disabled: true,
    },
  ],
};
