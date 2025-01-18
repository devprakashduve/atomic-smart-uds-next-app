import RadioButton from '.';

export default {
  title: 'Components/Atoms/InputGroup/RadioButton',
  component: RadioButton,
  argTypes: {
    initialChecked: { control: 'boolean' },
    onChange: { action: 'changed' },
    label: { control: 'text' },
    name: { control: 'text' },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
  },
};

export const SizeSM = {
  args: {
    initialChecked: false,
    onChange: (value: boolean) => console.log(value),
    label: 'Radio Button Label',
    name: 'radio-group',
    size: 'sm',
  },
};
export const SizeMD = {
  args: {
    initialChecked: false,
    onChange: (value: boolean) => console.log(value),
    label: 'Radio Button Label',
    name: 'radio-group',
    size: 'md',
  },
};
export const SizeLG = {
  args: {
    initialChecked: false,
    onChange: (value: boolean) => console.log(value),
    label: 'Radio Button Label',
    name: 'radio-group',
    size: 'lg',
  },
};
