import React from 'react';
import Badge from './index';

export default {
  title: 'Components/Atoms/Badge',
  component: Badge,
};

export const Default = {
  args: {
    children: <span>&#10753;</span>,
    variant: 'badge-primary',
    customColor: 'purple',
    scale: '3',
  },
};

export const Primary = {
  args: {
    children: <span>&#10753;</span>,
    variant: 'badge-primary',
    customColor: 'green',
    scale: '3',
  },
};

export const Secondary = {
  args: {
    children: <span>&#10753;</span>,
    variant: 'badge-secondary',
    customColor: 'red',
    scale: '5',
  },
};
