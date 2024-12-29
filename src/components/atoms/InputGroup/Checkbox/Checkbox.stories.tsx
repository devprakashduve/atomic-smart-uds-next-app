import Checkbox from '.';

export default {
  title: 'Components/Atoms/InputGroup/Checkbox',
  component: Checkbox,
};

export const Checked = {
  args: {
    checked: true,
    toggleChecked: (value: boolean) => console.log(value),
    label: 'Dummy Label',
  },
};

export const unChecked = {
  args: {
    checked: false,
    toggleChecked: (value: boolean) => console.log(value),
    label: 'Dummy Label',
  },
};

export const SizeSM = {
  args: {
    checked: true,
    toggleChecked: (value: boolean) => console.log(value),
    label: 'Dummy Label',
    size: 'sm',
  },
};
export const SizeMD = {
  args: {
    checked: true,
    toggleChecked: (value: boolean) => console.log(value),
    label: 'Dummy Label',
    size: 'md',
  },
};
export const SizeLG = {
  args: {
    checked: true,
    toggleChecked: (value: boolean) => console.log(value),
    label: 'Dummy Label',
    size: 'lg',
  },
};
