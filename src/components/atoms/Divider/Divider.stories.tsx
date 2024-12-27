import Divider from './index';

export default {
  title: 'Components/Atoms/Divider',
  component: Divider,
};

export const HorizontalThin = {
  args: {
    orientation: 'horizontal',
    thickness: 'thin',
    color: 'gray',
  },
};

export const HorizontalMedium = {
  args: {
    orientation: 'horizontal',
    thickness: 'medium',
    color: 'blue',
  },
};

export const VerticalThick = {
  args: {
    orientation: 'vertical',
    thickness: 'thick',
    color: 'red',
  },
};
