import React, { useState, useEffect } from 'react';
import { VideoCard } from '../../components';
import { useAuth } from '../../context/auth-context';
import {
  deleteAllHistory,
  deleteHistory,
  getHistory,
} from '../../utils/history';

const HistoryPage = () => {
  const [videoList, setVideoList] = useState([]);
  const { user } = useAuth();

  const handleDeleteAllHistory = async () => {
    await deleteAllHistory(user.encodedToken);
    setVideoList([]);
  };

  const handleDeleteFromHistory = async (videoId) => {
    let updatedHistory = await deleteHistory(user.encodedToken, videoId);
    setVideoList(updatedHistory);
  };

  useEffect(() => {
    (async () => {
      const data = await getHistory(user.encodedToken);
      setVideoList([...data].reverse());
    })();
    return () => {
      setVideoList([]);
    };
  }, [user]);

  return (
    <div className='listing-section'>
      <h3 className='section-title'>My History</h3>
      <header className='d-flex justify-end'>
        <button
          className='btn btn-danger btn-xs'
          onClick={handleDeleteAllHistory}>
          Clear History
        </button>
      </header>
      <div className='listing-container mt-sm'>
        {videoList.length ? (
          videoList.map((video) => (
            <div key={video._id} className='playlist-video-card'>
              <VideoCard video={video} />
              <span
                className='delete-video-btn cursor-pointer'
                onClick={() => handleDeleteFromHistory(video._id)}>
                ❌
              </span>
            </div>
          ))
        ) : (
          <div className='text-secondary text-center text-md flex-grow'>
            {' '}
            Your History is Empty.
          </div>
        )}
      </div>
    </div>
  );
};

export default HistoryPage;
