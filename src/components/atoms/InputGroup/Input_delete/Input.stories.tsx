import Input from '.';

export default {
  title: 'Components/Atoms/InputGroup/Input_Delete',
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
    showIcon: true,
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
    showIcon: true,
  },
};

export const TelWithCustomIcon = {
  args: {
    id: 'tel',
    name: 'tel',
    placeholder: 'Enter phone number',
    value: '',
    disabled: false,
    type: 'tel',
    label: 'Telephone Input',
    onChange: (value: string) => console.log(value),
    showIcon: true,
    customIconSVG: (
      <svg
        className="h-6"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z" />
      </svg>
    ),
  },
};
