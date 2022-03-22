import React from 'react';
import VideoCard from '../VideoCard/VideoCard';

const ListSection = ({ title }) => {
  return (
    <div className='list-section'>
      <h4 className='title text-light'>{title}:</h4>
      <div className='category-list'>
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </div>
  );
};

export default ListSection;
