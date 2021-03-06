import React from 'react';
import { Link } from 'react-router-dom';
import { PrivateLink } from '../../routing';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className='sidebar'>
      <ul>
        <Link to='/'>
          <li>๐  Home</li>
        </Link>
        <Link to='/browse'>
          <li>๐  Browse</li>
        </Link>
        <PrivateLink to='/playlist'>
          <li>๐ฆ Playlist</li>
        </PrivateLink>
        <PrivateLink to='/likes'>
          <li>๐งก Liked Videos</li>
        </PrivateLink>
        <PrivateLink to='/watch-later'>
          <li>โฒ Watch Later</li>
        </PrivateLink>
        <PrivateLink to='/history'>
          <li>โณ History</li>
        </PrivateLink>
      </ul>
    </aside>
  );
};

export default Sidebar;
