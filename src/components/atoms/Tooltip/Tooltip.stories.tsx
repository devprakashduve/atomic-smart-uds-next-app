import Tooltip from '.';

export default {
  title: 'Components/Atoms/Tooltip',
  component: Tooltip,
};

export const TopTooltip = {
  args: {
    text: 'This is a top tooltip',
    position: 'top',
    color: 'black',
  },
};

export const RightTooltip = {
  args: {
    text: 'This is a right tooltip',
    position: 'right',
    color: 'blue',
  },
};

export const BottomTooltip = {
  args: {
    text: 'This is a bottom tooltip',
    position: 'bottom',
    color: 'red',
  },
};

export const LeftTooltip = {
  args: {
    text: 'This is a left tooltip',
    position: 'left',
    color: 'white',
  },
};
