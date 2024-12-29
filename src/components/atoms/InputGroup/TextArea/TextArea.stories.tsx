import TextArea from '.';

export default {
  title: 'Components/Atoms/InputGroup/TextArea',
  component: TextArea,
};

export const Default = {
  args: {
    value: '',
    onChange: (e: { target: { value: any } }) => console.log(e.target.value),
    placeholder: 'Enter text',
  },
};

export const Disabled = {
  args: {
    value: '',
    onChange: (e: { target: { value: any } }) => console.log(e.target.value),
    placeholder: 'Enter text',
    disabled: true,
  },
};
