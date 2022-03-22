import React from 'react';
import './VideoCard.css';

const VideoCard = () => {
  return (
    <div className='video-card'>
      <div className='action-container'>
        <span className='action-btn'>
          <i class='fas fa-plus-circle'></i>
        </span>
        <span className='action-btn'>
          <i class='far fa-clock'></i>
        </span>
      </div>
      <div className='video-thumbnail'>
        <img src='https://picsum.photos/250/150' alt='' />
      </div>
      <div className='footer'>
        <div className='title'>The Batman</div>
        {/* <div className='card-creator'>Shobit Deshwal</div> */}
        <span>By: userName</span>
        <span>500 Views</span>
      </div>
    </div>
  );
};

export default VideoCard;
