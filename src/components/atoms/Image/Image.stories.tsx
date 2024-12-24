import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Image from './index';
import { ImageProps } from './ImageProps.interface';

export default {
  title: 'Atoms/Image',
  component: Image,
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args: ImageProps) => (
  <Image {...args} />
);

export const Default = Template.bind({});
Default.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Placeholder Image',
  width: 150,
};
