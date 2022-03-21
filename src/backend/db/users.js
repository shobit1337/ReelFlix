import { formatDate } from '../utils/authUtils';
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have likes (Likes are set to 0 by default), History Array, Playlists Array (added Watch Later Playlist in it by default) by default
 * */

export const users = [
  {
    _id: 'db67c06f-f504-4e07-b94c-470405a756bf',
    firstName: 'shobit',
    lastName: 'deshwal',
    email: 'shobit@test.com',
    password: 'test',
    createdAt: formatDate(),
    updatedAt: formatDate(),
    playlist: [],
    liked: [],
    history: [],
    watchLater: [],
  },
  {
    _id: 'bb18575a-f811-438f-aa46-c4cc21b4a3b8',
    firstName: 'test',
    lastName: 'zero',
    email: 'test@test.com',
    password: 'test',
    createdAt: formatDate(),
    updatedAt: formatDate(),
    playlist: [
      {
        playlistName: 'Neog Picks',
        videos: [
          {
            _id: 'ab3babf0-1efc-4086-aa19-4dc7ed4f0b41',
            addedAt: formatDate(),
          },
        ],
      },
    ],
    liked: [
      { _id: 'ab3babf0-1efc-4086-aa19-4dc7ed4f0b41' },
      { _id: 'c0b12fe9-80c6-4247-8ea8-3e10aa3df0fc' },
    ],
    history: [
      { _id: 'ab3babf0-1efc-4086-aa19-4dc7ed4f0b41', addedAt: formatDate() },
    ],
    watchLater: [
      { _id: 'ab3babf0-1efc-4086-aa19-4dc7ed4f0b41', addedAt: formatDate() },
    ],
  },
  {
    _id: '4f2ed292-5136-4804-81ac-7bb6b22bd8f0',
    firstName: 'test',
    lastName: 'two',
    email: 'test1@test.com',
    password: 'test',
    createdAt: formatDate(),
    updatedAt: formatDate(),
    playlist: [],
    liked: [],
    history: [],
    watchLater: [],
  },
  {
    _id: 'ab4ff1e6-9e61-49f4-9d36-3bd76c67b390',
    firstName: 'test',
    lastName: 'one',
    email: 'test2@test.com',
    password: 'test',
    createdAt: formatDate(),
    updatedAt: formatDate(),
    playlist: [],
    liked: [],
    history: [],
    watchLater: [],
  },
];
