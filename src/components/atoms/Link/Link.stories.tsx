import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Link from './index';
import { LinkProps } from './LinkProps.interface';

export default {
  title: 'Components/Atoms/Link',
  component: Link,
} as Meta<typeof Link>;

const Template: StoryFn<typeof Link> = (args: LinkProps) => (
  <Link {...args} />
);

export const Default = Template.bind({});
Default.args = {
  href: '#',
  text: 'Link Text',
  target: '_self',
};
