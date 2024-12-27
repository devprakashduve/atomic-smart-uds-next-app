import Text from '.';

export default {
  title: 'Components/Atoms/Text',
  component: Text,
};

export const NormalText = {
  args: {
    content: 'This is a normal text',
    type: 'normal',
    size: 'medium',
    color: 'black',
    weight: 'normal',
  },
};

export const HeadingText = {
  args: {
    content: 'This is a heading text',
    type: 'heading',
    size: 'large',
    color: 'blue',
    weight: 'bold',
  },
};

export const SubheadingText = {
  args: {
    content: 'This is a subheading text',
    type: 'subheading',
    size: 'medium',
    color: 'gray',
    weight: 'light',
  },
};
