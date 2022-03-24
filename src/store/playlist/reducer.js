import {
  GET_ALL_PLAYLIST,
  GET_PLAYLIST,
  CREATE_PLAYLIST,
  DELETE_PLAYLIST,
  ADD_TO_PLAYLIST,
  DELETE_FROM_PLAYLIST,
} from './action.types';

const initialState = [];

const playlistsReducer = (state, action) => {
  switch (action.type) {
    case GET_ALL_PLAYLIST:
      return [...action.payload];

    case GET_PLAYLIST:
      return [...state];

    case CREATE_PLAYLIST:
      return [...action.payload];

    case DELETE_PLAYLIST:
      return [...action.payload];

    case ADD_TO_PLAYLIST:
      return state.map((playlist) =>
        playlist._id === action.payload._id
          ? { ...playlist, ...action.payload }
          : playlist
      );

    case DELETE_FROM_PLAYLIST:
      return state.map((playlist) =>
        playlist._id === action.payload._id
          ? { ...playlist, ...action.payload }
          : playlist
      );

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export { playlistsReducer, initialState };
