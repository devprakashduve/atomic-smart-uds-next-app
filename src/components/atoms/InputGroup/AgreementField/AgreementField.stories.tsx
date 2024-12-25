import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import AgreementField from '.';
import { AgreementFieldProps } from './AgreementField.interface';

export default {
  title: 'Components/Atoms/InputGroup/AgreementField',
  component: AgreementField,
} as Meta;

const Template: StoryFn<AgreementFieldProps> = (args) => (
  <AgreementField {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'I agree to the terms and conditions',
  checked: false,
};

export const Checked = Template.bind({});
Checked.args = {
  label: 'I agree to the terms and conditions',
  checked: true,
  agreed: true,
};
