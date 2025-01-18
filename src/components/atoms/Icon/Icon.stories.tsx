import Icon from './index';

export default {
  title: 'Components/Atoms/Icon',
  component: Icon,
  argTypes: {
    name: {
      control: {
        type: 'select',
        options: [
          'search',
          'openEye',
          'closeEye',
          'phone',
          'envelop',
          'user',
          'facebook',
        ],
      },
    },
    customClassNames: {
      control: 'text',
    },
    children: {
      control: 'text',
    },
  },
};

export const Default = {
  args: {
    name: 'Search',
  },
};
