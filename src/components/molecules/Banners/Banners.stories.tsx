import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Banners from '.';
import { BannersProps } from './Banners.interface';

export default {
  title: 'Components/Molecules/Banners',
  component: Banners,
} as Meta;

const Template: StoryFn<BannersProps> = (
  args: React.JSX.IntrinsicAttributes
) => <Banners {...args} />;

export const Default = Template.bind({});
Default.args = {
  banners: [
    {
      title: 'Banner Title',
      subtitle: 'Banner Subtitle',
      imageUrl: 'https://via.placeholder.com/150',
      linkUrl: 'https://www.example.com',
      altText: 'Banner Alt Text',
      className: 'Banner Class Name',
    },
  ],
};

export const WithCustomProps = Template.bind({});
WithCustomProps.args = {
  banners: [
    {
      title: 'Banner Title2',
      subtitle: 'Banner Subtitle2',
      imageUrl: 'https://via.placeholder.com/150',
      linkUrl: 'https://www.example.com',
      altText: 'Banner Alt Text2',
      className: 'Banner Class Name2',
    },
  ],
};
