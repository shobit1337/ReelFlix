import React from 'react';
import ListSection from '../../components/ListSection/ListSection';
import './HomePage.css';

const HomePage = () => {
  return (
    <div>
      <h3 className='section-title'>Home of Reelflix!</h3>
      <ListSection title='Latest Release' />
      <ListSection title='Most Popular' />
      <ListSection title='Thriller' />
      <ListSection title='Romance' />
    </div>
  );
};

export default HomePage;
