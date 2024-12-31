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
      { value: 'option3', label: 'Option 3' },
      { value: 'option4', label: 'Option 4' },
    ],
    defaultValue: 'option1',
    onChange: (e: { target: { value: any } }) => console.log(e.target.value),
  },
};
