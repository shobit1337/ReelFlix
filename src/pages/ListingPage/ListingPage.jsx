import React, { useState, useEffect, useCallback, useRef } from 'react';
import './ListingPage.css';
import { getAllVideos, getPaginatedVideos } from '../../utils/videos';
import { ListingVideoCard, Filters } from './components';
import Loader from '../../components/Loader/Loader';

const ListingPage = () => {
  const [videoList, setVideoList] = useState([]);
  const [filteredVideoList, setFilteredVideoList] = useState(null);
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
    if (filteredVideoList?.length) {
      (async () => {
        let data = [];
        setLoading(true);
        await setTimeout(() => {
          data = getPaginatedVideos(filteredVideoList, page, 4);
          setList([...new Set([...data.list])]);
          setPageInfo(data.info);
          setLoading(false);
        }, 1000);
      })();
    }
  }, [page, filteredVideoList]);

  useEffect(() => {
    (async () => {
      let data = await getAllVideos();
      setVideoList(data);
      setFilteredVideoList(data);
    })();
    return () => {
      setVideoList([]);
      setFilteredVideoList([]);
    };
  }, []);

  return (
    <div className='listing-section'>
      <h3 className='section-title'>Browser Movies</h3>
      <header className='section-header'>
        <Filters list={videoList} setList={setFilteredVideoList} />
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
