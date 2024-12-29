import Divider from './index';

export default {
  title: 'Components/Atoms/Divider',
  component: Divider,
};

export const HorizontalThin = {
  args: {
    orientation: 'horizontal',
    thickness: 'thin',
  },
};

export const HorizontalMedium = {
  args: {
    orientation: 'horizontal',
    thickness: 'medium',
  },
};

export const HorizontalThick = {
  args: {
    orientation: 'vertical',
    thickness: 'thick',
  },
};

export const HorizontalThickDark = {
  args: {
    orientation: 'vertical',
    thickness: 'thick',
    customClassNames: 'border-primary-dark',
  },
};
