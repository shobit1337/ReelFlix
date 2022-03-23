import { createContext, useContext, useReducer } from 'react';
import { playlistsReducer, initialState } from '../store/playlist/reducer';

const PlaylistsContext = createContext();

const PlaylistsProvider = ({ children }) => {
  const [playlists, dispatchPlaylists] = useReducer(
    playlistsReducer,
    initialState
  );

  return (
    <PlaylistsContext.Provider value={{ playlists, dispatchPlaylists }}>
      {children}
    </PlaylistsContext.Provider>
  );
};

const usePlaylists = () => useContext(PlaylistsContext);

export { PlaylistsProvider, usePlaylists };
