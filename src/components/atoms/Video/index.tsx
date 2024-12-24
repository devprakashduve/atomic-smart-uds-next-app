import React from 'react';
import './Video.css';
import { VideoProps } from './VideoProps.interface';

const Video: React.FC<VideoProps> = ({
  src,
  alt = '',
  controls = true,
  autoplay = false,
  loop = false,
  muted = false,
  width = '100%',
  height = 'auto',
}) => {
  return (
    <div className="video-container">
      <video
        src={src}
        controls={controls}
        autoPlay={autoplay}
        loop={loop}
        muted={muted}
        width={width}
        height={height}
        className="video-element"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
