import Input from '.';

export default {
  title: 'Components/Atoms/InputGroup/Input',
  component: Input,
};

export const Default = {
  args: {
    id: 'default',
    name: 'default',
    placeholder: 'Enter text',
    value: '',
    disabled: false,
    type: 'text',
    label: 'Default Input',
  },
};

export const WithValue = {
  args: {
    id: 'with-value',
    name: 'with-value',
    placeholder: 'Enter text',
    value: 'Sample text',
    disabled: false,
    type: 'text',
    label: 'Input with Value',
  },
};

export const Disabled = {
  args: {
    id: 'disabled',
    name: 'disabled',
    placeholder: 'Enter text',
    value: '',
    disabled: true,
    type: 'text',
    label: 'Disabled Input',
  },
};

export const Password = {
  args: {
    id: 'password',
    name: 'password',
    placeholder: 'Enter password',
    value: '',
    disabled: false,
    type: 'password',
    label: 'Password Input',
  },
};

export const Number = {
  args: {
    id: 'number',
    name: 'number',
    placeholder: 'Enter number',
    value: '',
    disabled: false,
    type: 'number',
    label: 'Number Input',
  },
};

export const Email = {
  args: {
    id: 'email',
    name: 'email',
    placeholder: 'Enter email',
    value: '',
    disabled: false,
    type: 'email',
    label: 'Email Input',
  },
};

export const Tel = {
  args: {
    id: 'tel',
    name: 'tel',
    placeholder: 'Enter phone number',
    value: '',
    disabled: false,
    type: 'tel',
    label: 'Telephone Input',
  },
};
