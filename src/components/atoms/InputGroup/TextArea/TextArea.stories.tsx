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

export const MaxLength = {
  args: {
    value: '',
    onChange: (e: { target: { value: any } }) => console.log(e.target.value),
    placeholder: 'Enter text',
    disabled: false,
    MaxLength: 10,
    showCharCount: true,
  },
};
