import Tooltip from '.';
import Button from '../Button';
import Paragraph from '../Paragraph';

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
export const Rounded = {
  args: {
    children: 'Hover me',
    content: 'This is a top tooltip',
    isRounded: true,
  },
};

export const Background = {
  args: {
    children: <Button variant={'btn-simple'}>Touch Me</Button>,
    content: 'This is a right tooltip',
    isBackground: true,
  },
};

export const setBackground = {
  args: {
    children: <Button variant={'btn-pill-outline'}>touch Me</Button>,
    content: 'This is a bottom tooltip',
    isBackground: true,
    setBackground: 'bg-secondary-dark',
  },
};
