import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import AppFooter from '.';
import { AppFooterProps } from './AppFooterProps.interface';

export default {
  title: 'Organisms/AppFooter',
  component: AppFooter,
} as Meta;

const Template: StoryFn<AppFooterProps> = (args) => <AppFooter {...args} />;

export const DefaultFooter = Template.bind({});
DefaultFooter.args = {
  copyrightText: '© 2024 My Company. All Rights Reserved.',
  links: [
    { label: 'Privacy Policy', url: 'https://www.example.com/privacy' },
    { label: 'Terms of Service', url: 'https://www.example.com/terms' },
    { label: 'Contact Us', url: 'https://www.example.com/contact' },
  ],
};
