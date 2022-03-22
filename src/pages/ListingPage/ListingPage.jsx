import React from 'react';
import './ListingPage.css';
import VideoCard from '../../components/VideoCard/VideoCard';

const ListingPage = ({ title = 'Listing Page' }) => {
  return (
    <div className='listing-section'>
      <h3 className='section-title'>{title}</h3>
      <header className='section-header'>
        <span>Sort by: Date Added</span>
        <span>Filter: Date Added</span>
      </header>
      <div className='listing-container'>
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

export default ListingPage;
