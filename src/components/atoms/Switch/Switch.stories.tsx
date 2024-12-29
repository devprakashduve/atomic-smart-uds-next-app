import Switch from '.';

export default {
  title: 'Components/Atoms/Switch',
  component: Switch,
};

export const DefaultSwitch = {
  args: {
    checked: false,
    onChange: (checked: boolean) => console.log(checked),
    disabled: false,
    textForOn: 'On',
    textForOff: 'Off',
  },
};

export const CheckedSwitch = {
  args: {
    checked: true,
    onChange: (checked: boolean) => console.log(checked),
    disabled: false,
  },
};

export const withoutIcon = {
  args: {
    checked: true,
    onChange: (checked: boolean) => console.log(checked),
    disabled: false,
    disableIcons: true,
    textForOn: 'On',
    textForOff: 'Off',
  },
};

export const NoBackground = {
  args: {
    checked: true,
    onChange: (checked: boolean) => console.log(checked),
    disabled: false,
    disableIcons: false,
    textForOn: 'On',
    textForOff: 'Off',
    noBackground: true,
  },
};

export const DisabledSwitch = {
  args: {
    checked: false,
    onChange: (checked: boolean) => console.log(checked),
    disabled: true,
  },
};
