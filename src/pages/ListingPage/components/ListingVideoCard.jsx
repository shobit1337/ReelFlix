import React, { useState, useEffect } from 'react';
import './ListingVideoCard.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/auth-context';
import { getWatchLater, addWatchLater } from '../../../utils/watchLater';
import SelectPlaylist from '../../../components/SelectPlaylist/SelectPlaylist';

export const ListingVideoCard = ({ video }) => {
  const { _id, views, likes, creator, title } = video;
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isWatchLater, setIsWatchLater] = useState(null);

  const [isSelectPlaylistModalOpen, setIsSelectPlaylistModalOpen] =
    useState(false);

  const handleAddToPlaylist = async () => {
    if (!user.userDetails) {
      navigate('/login');
    }
    setIsSelectPlaylistModalOpen(true);
  };

  const handleAddToWatchLater = async () => {
    if (!user.userDetails) {
      navigate('/login');
    }
    const data = await addWatchLater(user.encodedToken, video);
    if (data) {
      setIsWatchLater(true);
    }
  };

  useEffect(() => {
    (async () => {
      const response = await getWatchLater(user.encodedToken);
      if (response?.some((vid) => vid._id === _id)) {
        setIsWatchLater(true);
      }
    })();
  }, [_id, user]);

  return (
    <div className='video-listing-card'>
      <div className='action-container'>
        <span
          className='action-btn cursor-pointer'
          onClick={handleAddToPlaylist}>
          <i className='fas fa-plus-circle'></i>
        </span>
        {!isWatchLater && (
          <span
            className='action-btn cursor-pointer'
            onClick={handleAddToWatchLater}>
            <i className='far fa-clock'></i>
          </span>
        )}
      </div>
      <div className='video-thumbnail d-flex flex-center'>
        <img
          src={`https://i.ytimg.com/vi/${video.videoId}/0.jpg`}
          alt='video-thumbnail'
          loading='lazy'
        />
      </div>
      <div
        className='footer p-xxxxs pt-0'
        onClick={() => navigate(`/video/${_id}`)}>
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
