import ProgressBar from './index';

export default {
  title: 'Components/Atoms/ProgressBar',
  component: ProgressBar,
};

export const BasicProgressBar = {
  args: {
    value: 50,
    max: 100,
    color: 'blue',
    height: '4px',
    striped: false,
  },
};

export const StripedProgressBar = {
  args: {
    value: 70,
    max: 100,
    color: 'green',
    height: '6px',
    striped: true,
  },
};

export const FullProgressBar = {
  args: {
    value: 100,
    max: 100,
    color: 'red',
    height: '8px',
    striped: false,
  },
};
