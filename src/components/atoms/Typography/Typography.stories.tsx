import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Typography from './index';
import { TypographyProps } from './TypographyProps.interface';

export default {
  title: 'Atoms/Typography',
  component: Typography,
} as Meta;

const Template: StoryFn<TypographyProps> = (args) => <Typography {...args} />;

export const HeadingTypography = Template.bind({});
HeadingTypography.args = {
  content: 'This is a heading',
  variant: 'heading',
  size: 'large',
  weight: 'bold',
  color: 'blue',
  align: 'center',
};

export const SubheadingTypography = Template.bind({});
SubheadingTypography.args = {
  content: 'This is a subheading',
  variant: 'subheading',
  size: 'medium',
  weight: 'normal',
  color: 'gray',
  align: 'left',
};

export const BodyTypography = Template.bind({});
BodyTypography.args = {
  content: 'This is body text',
  variant: 'body',
  size: 'medium',
  weight: 'normal',
  color: 'black',
  align: 'left',
};

export const CaptionTypography = Template.bind({});
CaptionTypography.args = {
  content: 'This is a caption',
  variant: 'caption',
  size: 'small',
  weight: 'light',
  color: 'white',
  align: 'right',
};
