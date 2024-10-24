'use client';
import React from 'react';
import '../../../styles.css';

interface VideoPlayerProps {
  url: string;
  width: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ url, width }) => {
  return (
    <div className={`aspect-[16/9] w-full bg-black w-[${width}]`}>
      <iframe
        width='100%'
        height='100%'
        src={url}
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen
      ></iframe>
    </div>
  );
};
