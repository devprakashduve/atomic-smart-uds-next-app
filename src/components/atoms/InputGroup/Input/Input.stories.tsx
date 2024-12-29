import Input from '.';

export default {
  title: 'Components/Atoms/InputGroup/Input',
  component: Input,
  argTypes: {
    value: { control: 'text' },
    name: { control: 'text' },
    onChange: { action: 'changed' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    type: {
      control: 'select',
      options: ['text', 'password', 'number', 'email', 'tel', ''],
    },
    label: { control: 'text' },
    id: { control: 'text' },
    customClassNames: { control: 'text' },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    isRequired: { control: 'boolean' },
    rounded: { control: 'boolean' },
    roundedFull: { control: 'boolean' },
  },
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
    isRequired: true,
    onChange: (value: string) => console.log(value),
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
    onChange: (value: string) => console.log(value),
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
    onChange: (value: string) => console.log(value),
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
    onChange: (value: string) => console.log(value),
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
    onChange: (value: string) => console.log(value),
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
    onChange: (value: string) => console.log(value),
  },
};
