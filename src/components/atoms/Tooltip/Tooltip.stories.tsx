import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Tooltip from './index';
import { TooltipProps } from './TooltipProps.interface';

export default {
 title: 'Components/Atoms/Tooltip',
  component: Tooltip,
} as Meta;

const Template: StoryFn<TooltipProps> = (args) => <Tooltip {...args} />;

export const TopTooltip = Template.bind({});
TopTooltip.args = {
  text: 'This is a top tooltip',
  position: 'top',
  color: 'black',
};

export const RightTooltip = Template.bind({});
RightTooltip.args = {
  text: 'This is a right tooltip',
  position: 'right',
  color: 'blue',
};

export const BottomTooltip = Template.bind({});
BottomTooltip.args = {
  text: 'This is a bottom tooltip',
  position: 'bottom',
  color: 'red',
};

export const LeftTooltip = Template.bind({});
LeftTooltip.args = {
  text: 'This is a left tooltip',
  position: 'left',
  color: 'white',
};
