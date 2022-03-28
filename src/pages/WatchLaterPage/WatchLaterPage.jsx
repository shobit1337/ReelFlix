import React, { useState, useEffect } from 'react';
import { VideoCard } from '../../components';
import { useAuth } from '../../context/auth-context';

import {
  deleteAllWatchLater,
  deleteWatchLater,
  getWatchLater,
} from '../../utils/watchLater';

const WatchLaterPage = () => {
  const [videoList, setVideoList] = useState([]);
  const { user } = useAuth();

  const handleDeleteAllWatchLater = async () => {
    await deleteAllWatchLater(user.encodedToken);
    setVideoList([]);
  };

  const handleDeleteFromWatchLater = async (videoId) => {
    let updatedWatchLater = await deleteWatchLater(user.encodedToken, videoId);
    setVideoList([...updatedWatchLater].reverse());
  };

  useEffect(() => {
    (async () => {
      const data = await getWatchLater(user.encodedToken);
      setVideoList([...data].reverse());
    })();
    return () => {
      setVideoList([]);
    };
  }, [user]);

  return (
    <div className='listing-section'>
      <h3 className='section-title'>My WatchLater</h3>
      <header className='d-flex justify-end'>
        <button
          className='btn btn-danger btn-xs'
          onClick={handleDeleteAllWatchLater}>
          Clear Watch Later
        </button>
      </header>
      <div className='listing-container mt-sm'>
        {videoList.length ? (
          videoList.map((video) => (
            <div key={video._id} className='playlist-video-card'>
              <VideoCard video={video} />
              <span
                className='delete-video-btn cursor-pointer'
                onClick={() => handleDeleteFromWatchLater(video._id)}>
                ❌
              </span>
            </div>
          ))
        ) : (
          <div className='text-secondary text-center text-md flex-grow'>
            {' '}
            Your WatchLater is Empty.
          </div>
        )}
      </div>
    </div>
  );
};

export default WatchLaterPage;
