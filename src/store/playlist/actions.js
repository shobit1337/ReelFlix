import {
  GET_ALL_PLAYLIST,
  GET_PLAYLIST,
  CREATE_PLAYLIST,
  DELETE_PLAYLIST,
  ADD_TO_PLAYLIST,
  DELETE_FROM_PLAYLIST,
} from './action.types';

import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const getAllPlaylists = async (dispatch, token) => {
  try {
    let { data } = await axios.get(`${API_URL}/user/playlists`, {
      headers: { authorization: token },
    });
    if (data.playlists) {
      dispatch({ type: GET_ALL_PLAYLIST, payload: data.playlists });
      return data.playlists;
    }
    dispatch({ type: GET_ALL_PLAYLIST, payload: [] });
    return [];
  } catch (err) {
    throw new Error('Failed to get Playlist.');
  }
};

export const createPlaylist = async (dispatch, token, playlist) => {
  try {
    let { data } = await axios.post(
      `${API_URL}/user/playlists`,
      { playlist: playlist },
      {
        headers: { authorization: token },
      }
    );
    if (data.playlists) {
      dispatch({ type: CREATE_PLAYLIST, payload: data.playlists });
      return data.playlists;
    }
    return [];
  } catch (err) {
    throw new Error('Failed to create Playlist.');
  }
};

export const deletePlaylist = async (dispatch, token, playlistId) => {
  try {
    let { data } = await axios.delete(
      `${API_URL}/user/playlists/${playlistId}`,
      {
        headers: { authorization: token },
      }
    );
    if (data.playlists) {
      dispatch({ type: DELETE_PLAYLIST, payload: data.playlists });
      return data.playlists;
    }
    return [];
  } catch (err) {
    throw new Error('Failed to delete playlist.');
  }
};

export const getPlaylist = async (dispatch, token, playlistId) => {
  try {
    let { data } = await axios.get(`${API_URL}/user/playlists/${playlistId}`, {
      headers: { authorization: token },
    });
    if (data.playlist) {
      dispatch({ type: GET_PLAYLIST, payload: data.playlist });
      return data.playlist;
    }
    return null;
  } catch (err) {
    throw new Error('Failed to get playlist.');
  }
};

export const addToPlaylist = async (dispatch, token, playlistId, video) => {
  try {
    let { data } = await axios.post(
      `${API_URL}/user/playlists/${playlistId}`,
      { video },
      {
        headers: { authorization: token },
      }
    );
    if (data.playlist) {
      dispatch({ type: ADD_TO_PLAYLIST, payload: data.playlist });
      return data.playlist;
    }
    dispatch({ type: ADD_TO_PLAYLIST, payload: [] });
    return [];
  } catch (err) {
    throw new Error('Failed to add to playlist.');
  }
};

export const deleteFromPlaylist = async (
  dispatch,
  token,
  playlistId,
  videoId
) => {
  try {
    let { data } = await axios.delete(
      `${API_URL}/user/playlists/${playlistId}/${videoId}`,
      {
        headers: { authorization: token },
      }
    );
    if (data.playlist) {
      dispatch({ type: DELETE_FROM_PLAYLIST, payload: data.playlist });
      return data.playlist;
    }
    return [];
  } catch (err) {
    throw new Error('Failed to remove the history.');
  }
};
