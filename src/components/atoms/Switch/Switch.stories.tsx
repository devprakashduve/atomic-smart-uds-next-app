import Switch from '.';

export default {
  title: 'Components/Atoms/Switch',
  component: Switch,
};

export const DefaultSwitch = {
  args: {
    checked: false,
    onChange: (checked: boolean) => console.log(checked),
    color: 'blue',
    disabled: false,
  },
};

export const CheckedSwitch = {
  args: {
    checked: true,
    onChange: (checked: boolean) => console.log(checked),
    color: 'green',
    disabled: false,
  },
};

export const DisabledSwitch = {
  args: {
    checked: false,
    onChange: (checked: boolean) => console.log(checked),
    color: 'red',
    disabled: true,
  },
};
