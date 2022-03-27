import React, { useState, useEffect } from 'react';
import { VideoCard } from '../../../../components';
import { getAllVideos } from '../../../../utils/videos';

const MoreVideos = () => {
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
    <div className='more-video-section'>
      <h3>Watch More</h3>
      {videoList.length && (
        <div className='d-flex flex-column gap-sm'>
          {videoList.map((video) => (
            <VideoCard key={video._id} video={video} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MoreVideos;
