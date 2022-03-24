import React, { useState, useEffect } from 'react';
import './ListingPage.css';
import VideoCard from '../../components/VideoCard/VideoCard';
import { getAllVideos } from '../../utils/videos';

const ListingPage = () => {
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    (async () => {
      let data = await getAllVideos();
      setVideoList(data);
    })();
    return () => {
      setVideoList([]);
    };
  }, []);

  return (
    <div className='listing-section'>
      <h3 className='section-title'>Browser Movies</h3>
      <header className='section-header'>
        <span>Sort by: Date Added</span>
        <span>Filter: Date Added</span>
      </header>
      <div className='listing-container'>
        {videoList.map((video) => (
          <VideoCard key={video._id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default ListingPage;
