import React, { useState, useEffect } from 'react';
import ListSection from '../../components/ListSection/ListSection';
import { getAllVideos } from '../../utils/videos';
import './HomePage.css';

const HomePage = () => {
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
    <div>
      <h3 className='section-title'>Home of Reelflix! 🍿🕶</h3>
      {videoList.length && (
        <>
          {' '}
          <ListSection title='Latest Release' videos={videoList} />
          <ListSection
            title='Sci-fi'
            videos={videoList.filter((video) =>
              video.category.includes('Sci-fi')
            )}
          />
          <ListSection
            title='Action'
            videos={videoList.filter((video) =>
              video.category.includes('Action')
            )}
          />
          <ListSection
            title='Romance'
            videos={videoList.filter((video) =>
              video.category.includes('Romance')
            )}
          />
        </>
      )}
    </div>
  );
};

export default HomePage;
