import { createContext, useContext, useReducer, useEffect } from 'react';
import { getAllPlaylists } from '../store/playlist/actions';
import { playlistsReducer, initialState } from '../store/playlist/reducer';
import { useAuth } from './auth-context';

const PlaylistsContext = createContext();

const PlaylistsProvider = ({ children }) => {
  const { user } = useAuth();

  const [playlists, dispatchPlaylists] = useReducer(
    playlistsReducer,
    initialState
  );

  useEffect(() => {
    if (user.userDetails) {
      getAllPlaylists(dispatchPlaylists, user.encodedToken);
    }
  }, [dispatchPlaylists, user]);

  return (
    <PlaylistsContext.Provider value={{ playlists, dispatchPlaylists }}>
      {children}
    </PlaylistsContext.Provider>
  );
};

const usePlaylists = () => useContext(PlaylistsContext);

export { PlaylistsProvider, usePlaylists };
