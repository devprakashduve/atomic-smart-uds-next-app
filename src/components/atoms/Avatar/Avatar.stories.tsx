import Avatar from '.';

export default {
  title: 'Components/Atoms/Avatar',
  component: Avatar,
};

export const Default = {
  args: {
    src: '/images/avatar.jpg',
    alt: 'Avatar',
    size: 16,
    width: 250,
    height: 250,
    customClassNames: '',
    circle: false,
    rounded: false,
  },
};

export const RoundedAvatar = {
  args: {
    src: '/images/avatar.jpg',
    alt: 'Avatar',
    size: 16,
    width: 250,
    height: 250,
    customClassNames: '',
    circle: false,
    rounded: true,
  },
};

export const RoundedAvatarLg = {
  args: {
    src: '/images/avatar.jpg',
    alt: 'Avatar',
    size: 16,
    width: 150,
    height: 150,
    customClassNames: 'rounded-lg',
    circle: false,
    rounded: true,
  },
};

export const CircleAvatar = {
  args: {
    initials: 'JD',
    alt: 'Avatar with Initials',
    src: '/images/avatar.jpg',
    size: 16,
    width: 250,
    height: 250,
    customClassNames: '',
    circle: false,
  },
};
