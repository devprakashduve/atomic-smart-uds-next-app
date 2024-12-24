import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Video from './index';
import { VideoProps } from './VideoProps.interface';

export default {
  title: 'Atoms/Video',
  component: Video,
} as Meta;

const Template: StoryFn<VideoProps> = (args) => <Video {...args} />;

export const DefaultVideo = Template.bind({});
DefaultVideo.args = {
  src: 'https://www.w3schools.com/html/movie.mp4',
  alt: 'Sample Video',
  controls: true,
  autoplay: false,
  loop: false,
  muted: false,
  width: '100%',
  height: 'auto',
};

export const AutoplayVideo = Template.bind({});
AutoplayVideo.args = {
  src: 'https://www.w3schools.com/html/movie.mp4',
  alt: 'Autoplay Video',
  controls: true,
  autoplay: true,
  loop: false,
  muted: true,
  width: '100%',
  height: 'auto',
};

export const LoopingVideo = Template.bind({});
LoopingVideo.args = {
  src: 'https://www.w3schools.com/html/movie.mp4',
  alt: 'Looping Video',
  controls: true,
  autoplay: false,
  loop: true,
  muted: false,
  width: '100%',
  height: 'auto',
};
