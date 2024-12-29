import Tag from '.';

export default {
  title: 'Components/Atoms/Tag',
  component: Tag,
};

export const DefaultTag = {
  args: {
    label: 'Tag 1',
    color: 'blue',
    removable: true,
  },
};

export const GreenTag = {
  args: {
    label: 'Tag 2',
    color: 'green',
    removable: false,
  },
};

export const RedTag = {
  args: {
    label: 'Tag 3',
    color: 'red',
    removable: true,
  },
};
