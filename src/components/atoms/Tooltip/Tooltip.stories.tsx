import Tooltip from '.';
import Button from '../Button';

export default {
  title: 'Components/Atoms/Tooltip',
  component: Tooltip,
};

export const DefaultTooltip = {
  args: {
    children: (
      <Button disabled={false} variant={'btn-pill-outline'}>
        Touch Me
      </Button>
    ),
    content: 'This is a top tooltip',
  },
};
export const TopTooltip = {
  args: {
    children: 'Hover me',
    content: 'This is a top tooltip',
  },
};

export const RightTooltip = {
  args: {
    children: 'Hover me',
    content: 'This is a right tooltip',
    placement: 'right',
    background: true,
  },
};

export const BottomTooltip = {
  args: {
    children: <Button variant={'btn-pill-outline'}>Touch Me</Button>,
    content: 'This is a bottom tooltip',
    background: true,
    customClassNames: 'border-secondary-dark',
  },
};

export const LeftTooltip = {
  args: {
    children: 'Hover me',
    content: 'This is a left tooltip',
  },
};
