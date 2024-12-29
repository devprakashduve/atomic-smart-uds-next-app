import Paragraph from '.';

export default {
  title: 'Components/Atoms/Paragraph',
  component: Paragraph,
};

export const Thin = {
  args: {
    children: 'This is a paragraph.',
    customClassNames: 'font-light',
    thin: true,
  },
};

export const Normal = {
  args: {
    children: 'This is a paragraph.',
    customClassNames: 'font-light',
    normal: true,
  },
};

export const Bold = {
  args: {
    children: 'This is a custom styled paragraph.',
    customClassNames: 'font-dark',
    bold: true,
  },
};
