import Video from '.';

export default {
  title: 'Components/Atoms/Video',
  component: Video,
};

export const DefaultVideo = {
  args: {
    src: 'https://www.w3schools.com/html/movie.mp4',
    alt: 'Sample Video',
    controls: true,
    autoplay: false,
    loop: false,
    muted: false,
    width: '100%',
    height: 'auto',
  },
};

export const AutoplayVideo = {
  args: {
    src: 'https://www.w3schools.com/html/movie.mp4',
    alt: 'Autoplay Video',
    controls: true,
    autoplay: true,
    loop: false,
    muted: true,
    width: '100%',
    height: 'auto',
  },
};

export const LoopingVideo = {
  args: {
    src: 'https://www.w3schools.com/html/movie.mp4',
    alt: 'Looping Video',
    controls: true,
    autoplay: false,
    loop: true,
    muted: false,
    width: '100%',
    height: 'auto',
  },
};
