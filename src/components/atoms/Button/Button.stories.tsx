import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button from '.';
import { ButtonProps } from './ButtonProps.interface';

export default {
  title: 'Components/Atoms/Button',
  component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  variant: 'btn-simple',
  disabled: false,
  children: 'Submit',
};

export const Pill = Template.bind({});
Pill.args = {
  variant: 'btn-pill',
  disabled: false,
  children: 'Submit',
};

export const PillOutline = Template.bind({});
PillOutline.args = {
  variant: 'btn-pill-outline',
  disabled: false,
  children: (
    <>
      <span>Download</span>
      <svg
        className="ml-2 h-4 w-4 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
      </svg>
    </>
  ),
};

export const Outline = Template.bind({});
Outline.args = {
  variant: 'btn-outline',
  children: 'submit',
};

export const Bordered = Template.bind({});
Bordered.args = {
  variant: 'btn-bordered',
  children: 'Submit',
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'btn-disabled',
  children: 'Submit',
};
export const ThreeD = Template.bind({});
ThreeD.args = {
  variant: 'btn-three-d',
  children: 'Submit',
};
export const Elevated = Template.bind({});
Elevated.args = {
  variant: 'btn-elevated',
  children: 'Submit',
};
export const Groups = Template.bind({});
Groups.args = {
  variant: 'btn-groups',
  children: 'Submit',
};
export const Icons = Template.bind({});
Icons.args = {
  variant: 'btn-icon',
  children: (
    <>
      <svg
        className="mr-2 h-4 w-4 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
      </svg>
      <span>Download</span>
    </>
  ),
  disabled: false,
};
