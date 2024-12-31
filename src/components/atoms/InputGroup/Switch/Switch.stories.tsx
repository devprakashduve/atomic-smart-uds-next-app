import Switch from '.';

export default {
  title: 'Components/Atoms/InputGroup/Switch',
  component: Switch,
};

export const Default = {
  args: {
    label: 'I agree to the terms and conditions',
    checked: false,
    name: 'switch',
  },
};

export const Checked = {
  args: {
    label: 'I agree to the terms and conditions',
    checked: true,
    name: 'switch',
  },
};
