import Checkbox from '.';

export default {
  title: 'Components/Atoms/InputGroup/Checkbox',
  component: Checkbox,
};

export const Default = {
  args: {
    checked: false,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      console.log(e.target.checked),
    label: 'Checkbox Label',
  },
};
