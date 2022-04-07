import React, { useState, useEffect, useCallback, useRef } from 'react';
import './ListingPage.css';
import { getAllVideos, getPaginatedVideos } from '../../utils/videos';
import { ListingVideoCard } from './components/ListingVideoCard';
import Loader from '../../components/Loader/Loader';

const ListingPage = () => {
  const [videoList, setVideoList] = useState([]);
  const [loading, setLoading] = useState(false);

  const [list, setList] = useState([]);

  const [pageInfo, setPageInfo] = useState({
    nextPage: 0,
    startIndex: 0,
    endIndex: 0,
    totalProducts: 0,
    totalPages: 0,
  });

  const [page, setPage] = useState(1);

  //Infinite
  const loader = useRef(null);
  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '20px',
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  useEffect(() => {
    // Geting Infinite Results
    if (videoList.length) {
      (async () => {
        let data = [];
        setLoading(true);
        await setTimeout(() => {
          data = getPaginatedVideos(videoList, page, 3);
          console.log(data);
          setList([...new Set([...list, ...data.list])]);
          setPageInfo(data.info);
          setLoading(false);
        }, 1000);
      })();
    }
  }, [page, videoList]);

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
        {list.length &&
          list.map((video) => (
            <ListingVideoCard key={video._id} video={video} />
          ))}
      </div>
      {loading && <Loader />}
      <div ref={loader} />
    </div>
  );
};

export default ListingPage;
