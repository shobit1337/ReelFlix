import React from 'react';
import { Link } from 'react-router-dom';
import { PrivateLink } from '../../routing';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className='sidebar'>
      <ul>
        <Link to='/'>
          <li>🏠 Home</li>
        </Link>
        <Link to='/browse'>
          <li>🏠 Browse</li>
        </Link>
        <PrivateLink to='/playlist'>
          <li>🎦 Playlist</li>
        </PrivateLink>
        <PrivateLink to='/likes'>
          <li>🧡 Liked Videos</li>
        </PrivateLink>
        <PrivateLink to='/watch-later'>
          <li>⏲ Watch Later</li>
        </PrivateLink>
        <PrivateLink to='/history'>
          <li>⏳ History</li>
        </PrivateLink>
      </ul>
    </aside>
  );
};

export default Sidebar;
