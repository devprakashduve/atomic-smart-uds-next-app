import Typography from '.';

export default {
  title: 'Components/Atoms/Typography',
  component: Typography,
};

export const HeadingTypography = {
  args: {
    content: 'This is a heading',
    variant: 'heading',
    size: 'large',
    weight: 'bold',
    color: 'blue',
    align: 'center',
  },
};

export const SubheadingTypography = {
  args: {
    content: 'This is a subheading',
    variant: 'subheading',
    size: 'medium',
    weight: 'normal',
    color: 'gray',
    align: 'left',
  },
};

export const BodyTypography = {
  args: {
    content: 'This is body text',
    variant: 'body',
    size: 'medium',
    weight: 'normal',
    color: 'black',
    align: 'left',
  },
};

export const CaptionTypography = {
  args: {
    content: 'This is a caption',
    variant: 'caption',
    size: 'small',
    weight: 'light',
    color: 'white',
    align: 'right',
  },
};

export const OverlineTypography = {
  args: {
    content: 'This is an overline',
    variant: 'overline',
    size: 'small',
    weight: 'normal',
    color: 'gray',
    align: 'left',
  },
};

export const ButtonTypography = {
  args: {
    content: 'This is button text',
    variant: 'button',
    size: 'medium',
    weight: 'bold',
    color: 'blue',
    align: 'center',
  },
};
