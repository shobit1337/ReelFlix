import React from 'react';
import VideoCard from '../VideoCard/VideoCard';

const ListSection = ({ title, videos }) => {
  return (
    <div className='list-section'>
      <h4 className='title text-light'>{title}:</h4>
      <div className='category-list'>
        {videos.length &&
          videos.map((video) => <VideoCard key={video._id} video={video} />)}
      </div>
    </div>
  );
};

export default ListSection;
