import Paragraph from '.';

export default {
  title: 'Components/Atoms/Paragraph',
  component: Paragraph,
};

export const Default = {
  args: {
    children: 'This is a paragraph.',
  },
};

export const CustomStyle = {
  args: {
    children: 'This is a custom styled paragraph.',
    style: { color: 'blue', fontSize: '18px' },
  },
};
