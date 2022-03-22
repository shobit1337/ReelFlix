import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className='sidebar'>
      <ul>
        <Link to='/'>
          <li>🏠 Home</li>
        </Link>
        <Link to='/playlist'>
          <li>🎦 Playlist</li>
        </Link>
        <Link to='/likes'>
          <li>🧡 Liked Videos</li>
        </Link>
        <Link to='/watch-later'>
          <li>⏲ Watch Later</li>
        </Link>
        <Link to='/history'>
          <li>⏳ History</li>
        </Link>
      </ul>
    </aside>
  );
};

export default Sidebar;
