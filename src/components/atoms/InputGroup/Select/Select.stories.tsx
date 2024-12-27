import Select from '.';

export default {
  title: 'Components/Atoms/InputGroup/Select',
  component: Select,
};

export const Default = {
  args: {
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
    ],
    defaultValue: 'option1',
    onChange: (e: { target: { value: any } }) => console.log(e.target.value),
  },
};
