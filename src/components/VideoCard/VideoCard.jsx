import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth-context';
import SelectPlaylist from '../SelectPlaylist/SelectPlaylist';
import './VideoCard.css';

const VideoCard = ({ video }) => {
  const { _id, views, likes, creator, title } = video;
  const { user } = useAuth();
  const navigate = useNavigate();

  const [isSelectPlaylistModalOpen, setIsSelectPlaylistModalOpen] =
    useState(false);

  const handleAddToPlaylist = async () => {
    if (!user.userDetails) {
      navigate('/login');
    }
    setIsSelectPlaylistModalOpen(true);
  };

  const handleAddToWatchLater = () => {
    if (!user.userDetails) {
      navigate('/login');
    }
  };

  return (
    <div className='video-card'>
      <div className='action-container'>
        <span className='action-btn' onClick={handleAddToPlaylist}>
          <i className='fas fa-plus-circle'></i>
        </span>
        <span className='action-btn' onClick={handleAddToWatchLater}>
          <i className='far fa-clock'></i>
        </span>
      </div>
      <div className='video-thumbnail'>
        <img
          src={`https://picsum.photos/seed/${_id}/250/150`}
          alt='video-thumbnail'
          loading='eager'
          style={{ minWidth: '250px', minHeight: '150px' }}
        />
      </div>
      <div className='footer p-xxxxs pt-0'>
        <div className='title'>{title}</div>
        <span>By: {creator}</span>
        <div className='d-flex justify-between'>
          <span>{likes} Likes</span>
          <span>{views} Views</span>
        </div>
      </div>
      {isSelectPlaylistModalOpen && (
        <SelectPlaylist
          setIsModalOpen={setIsSelectPlaylistModalOpen}
          video={video}
        />
      )}
    </div>
  );
};

export default VideoCard;
