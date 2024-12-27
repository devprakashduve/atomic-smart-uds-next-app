import RadioButton from '.';

export default {
  title: 'Components/Atoms/InputGroup/RadioButton',
  component: RadioButton,
};

export const Default = {
  args: {
    checked: false,
    onChange: (e: { target: { checked: any } }) =>
      console.log(e.target.checked),
    label: 'Radio Button Label',
    name: 'radio-group',
  },
};
