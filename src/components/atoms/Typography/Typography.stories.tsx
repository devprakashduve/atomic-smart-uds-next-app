import Typography from '.';
import Button from '../Button';

export default {
  title: 'Typography',
  component: Typography,
  argTypes: {
    children: {
      control: 'text',
      description:
        'The text children to be displayed within the Typography component.',
      table: { type: { summary: 'string' } },
    },
    variant: {
      control: { type: 'select' },
      options: [
        'heading',
        'subheading',
        'body',
        'caption',
        'overline',
        'button',
      ],
      description: 'Defines the visual style of the Typography component.',
      table: {
        type: {
          summary: 'heading | subheading | body | caption | overline | button',
        },
      },
    },
    size: {
      control: { type: 'select' },
      options: [
        'xs',
        'sm',
        'base',
        'lg',
        'xl',
        '2xl',
        '3xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
      ],
      description: 'Specifies the size of the text.',
      table: {
        type: {
          summary:
            'xs | sm | base | lg | xl | 2xl | 3xl | 4xl | 5xl | 6xl | 7xl',
        },
      },
    },
    weight: {
      control: { type: 'select' },
      options: ['light', 'normal', 'medium', 'bold', 'black'],
      description: 'Sets the font weight of the text.',
      table: { type: { summary: 'light | normal | medium | bold | black' } },
    },
    color: {
      control: { type: 'select' },
      options: [
        'primary-light',
        'primary',
        'primary-dark',
        'secondary-light',
        'secondary',
        'secondary-dark',
        'accent-light',
        'accent',
        'accent-dark',
        'error',
        'warning',
        'info',
        'success',
        'neutral',
      ],
      description: 'Determines the color of the text.',
      table: {
        type: {
          summary:
            'primary-light | primary | primary-dark | secondary-light | secondary | secondary-dark | accent-light | accent | accent-dark | error | warning | info | success | neutral',
        },
      },
    },
    align: {
      control: { type: 'select' },
      options: ['left', 'center', 'right'],
      description: 'Aligns the text children.',
      table: { type: { summary: 'left | center | right' } },
    },
  },
};
export const Colors = {
  args: {
    children: (
      <>
        <Button
          disabled={false}
          variant=" m-2 bg-primary-dark"
          roundedFull={true}
        >
          primary-dark
        </Button>

        <Button disabled={false} variant=" m-2 bg-primary" roundedFull={true}>
          primary
        </Button>

        <Button
          disabled={false}
          variant=" m-2 bg-primary-light"
          roundedFull={true}
        >
          primary-light
        </Button>

        <Button disabled={false} variant=" m-2 bg-secondary" roundedFull={true}>
          secondary
        </Button>

        <Button
          disabled={false}
          variant=" m-2 bg-secondary-dark"
          roundedFull={true}
        >
          secondary-dark
        </Button>

        <Button
          disabled={false}
          variant=" m-2 bg-secondary-light"
          roundedFull={true}
        >
          secondary-light
        </Button>

        <Button
          disabled={false}
          variant=" m-2 bg-accent-dark"
          roundedFull={true}
        >
          accent-dark
        </Button>

        <Button disabled={false} variant=" m-2 bg-accent" roundedFull={true}>
          accent
        </Button>

        <Button
          disabled={false}
          variant=" m-2 bg-accent-light"
          roundedFull={true}
        >
          accent-light
        </Button>

        <Button disabled={false} variant=" m-2 bg-error" roundedFull={true}>
          error
        </Button>

        <Button disabled={false} variant=" m-2 bg-warning" roundedFull={true}>
          warning
        </Button>

        <Button disabled={false} variant=" m-2 bg-info" roundedFull={true}>
          info
        </Button>

        <Button disabled={false} variant=" m-2 bg-success" roundedFull={true}>
          success
        </Button>

        <Button disabled={false} variant=" m-2 bg-neutral" roundedFull={true}>
          neutral
        </Button>
      </>
    ),
    variant: '',
    size: '',
    weight: '',
    color: '',
    align: '',
  },
};
export const Default = {
  args: {
    children: 'This is a default typography component',
    variant: 'body',
    size: 'base',
    weight: 'normal',
    color: 'accent',
    align: 'left',
  },
};

export const Heading = {
  args: {
    children: 'This is a heading',
    variant: 'heading',
    size: '2xl',
    weight: 'bold',
    color: 'primary',
    align: 'left',
  },
};

export const Subheading = {
  args: {
    children: 'This is a subheading',
    variant: 'subheading',
    size: '2xl',
    weight: 'medium',
    color: 'secondary',
    align: 'left',
  },
};

export const Caption = {
  args: {
    children: 'This is a caption',
    variant: 'caption',
    size: 'sm',
    weight: 'light',
    color: 'accent',
    align: 'right',
  },
};

export const ButtonText = {
  args: {
    children: 'Click Me',
    variant: 'button',
    size: 'lg',
    weight: 'bold',
    color: 'primary-dark',
    align: 'center',
  },
};

export const Overline = {
  args: {
    children: 'This is an overline',
    variant: 'overline',
    size: 'xs',
    weight: 'normal',
    color: 'accent-light',
    align: 'left',
  },
};

export const LargeBodyText = {
  args: {
    children: 'This is a large body text',
    variant: 'body',
    size: '6xl',
    weight: 'medium',
    color: 'secondary-dark',
    align: 'center',
  },
};

export const SmallBodyText = {
  args: {
    children: 'This is a small body text',
    variant: 'body',
    size: 'xs',
    weight: 'light',
    color: 'primary-light',
    align: 'right',
  },
};
export const ErrorText = {
  args: {
    children: 'This is an error message',
    variant: 'body',
    size: 'base',
    weight: 'bold',
    color: 'error',
    align: 'center',
  },
};
export const HighlightedText = {
  args: {
    children: 'This is highlighted text',
    variant: 'body',
    size: 'lg',
    weight: 'bold',
    color: 'accent-dark',
    align: 'center',
  },
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#000000' },
      ],
    },
  },
};
