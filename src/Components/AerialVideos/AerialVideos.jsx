import React from 'react';
import VideoEmbed from './VideoEmbed';

const videos = [
  {
    videoId: '1BorN9Tn88A',
    title: 'Ignite Semi-Pro Aerials',
    description: 'Video Description',
    date: 'Date',
    tags: ['Ignite', 'tag2', 'lyra'],
    apparatus: 'Lyra',
  },
  {
    videoId: 'd5ZAAZ0dxRQ',
    title: 'Cupid Aerials',
    description: 'Video Description',
    date: 'Date',
    tags: ['valentine', 'tag2', 'lyra'],
    apparatus: 'Lyra',
  },
  {
    videoId: '3fF_UaZjGO8',
    title: 'Ignite Elite Aerials',
    description: 'Video Description',
    date: 'Date',
    tags: ['tag1', 'tag2', 'lyra'],
    apparatus: 'Lyra',
  },
  {
    videoId: '6zdq1NUm9GU',
    title: 'Ignite Intermediate Aerials',
    description: 'Video Description',
    date: 'Date',
    tags: ['tag1', 'tag2', 'lyra'],
    apparatus: 'Lyra',
  },
  {
    videoId: 'Iiqi0zfeweE',
    title: 'Halloween Aerials',
    description: 'Video Description',
    date: 'Date',
    tags: ['halloween', 'tag2', 'lyra'],
    apparatus: 'Lyra',
  },
  {
    videoId: '5-wGQpy2Zfg',
    title: 'Ignite Beginner Aerials',
    description: 'Video Description',
    date: 'Date',
    tags: ['tag1', 'tag2', 'lyra'],
    apparatus: 'Lyra',
  },
];

function AerialVideos() {
  return (
    <div>
      <h3 className='performance-category'>Aerial Performances</h3>
      {videos.map((vid, index) => (
        <VideoEmbed key={index} {...vid} />
      ))}
    </div>
  );
}

export default AerialVideos;