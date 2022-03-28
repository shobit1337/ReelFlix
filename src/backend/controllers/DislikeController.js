import { Response } from 'miragejs';
import { requiresAuth } from '../utils/authUtils';

/**
 * All the routes related to Disliked Videos are present here.
 * These are private routes.
 * Client needs to add "authorization" header with JWT token in it to access it.
 * */

/**
 * This handler handles getting videos from user's Dislikes.
 * send GET Request at /api/user/dislikes
 * */
export const getDislikedVideosHandler = function (schema, request) {
  const user = requiresAuth.call(this, request);
  try {
    if (!user) {
      return new Response(
        404,
        {},
        {
          errors: ['The email you entered is not Registered. Not Found error'],
        }
      );
    }
    // Returing User's Dislikes
    return new Response(200, {}, { dislikes: user.dislikes });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles adding videos to user's dislikes.
 * send POST Request at /api/user/dislikes
 * body contains {video}
 * */

export const addItemToDislikedVideos = function (schema, request) {
  const user = requiresAuth.call(this, request);
  if (user) {
    const { video } = JSON.parse(request.requestBody);
    // check if video present in db
    const foundVideo = this.db.videos.findBy({ _id: video._id });
    if (foundVideo) {
      if (user.dislikes.some((item) => item._id === video._id)) {
        return new Response(
          409,
          {},
          {
            errors: ['The video is already in your disliked videos'],
          }
        );
      }

      user.dislikes.push(video);
      // Updating dislike in Videos DB
      this.db.videos.update(foundVideo, { dislikes: foundVideo.dislikes + 1 });
      // Returing Video's dislikes
      return new Response(201, {}, { dislikes: foundVideo.dislikes + 1 });
    }
    return new Response(
      404,
      {},
      {
        errors: ['This Video is not present in db. Not Found error'],
      }
    );
  }
  return new Response(
    404,
    {},
    {
      errors: ['The email you entered is not Registered. Not Found error'],
    }
  );
};

/**
 * This handler handles removing videos from user's dislikes.
 * send DELETE Request at /api/user/dislikes/:videoId
 * */

export const removeItemFromDislikedVideos = function (schema, request) {
  const user = requiresAuth.call(this, request);
  if (user) {
    const videoId = request.params.videoId;
    const foundVideo = this.db.videos.findBy({ _id: videoId });
    if (foundVideo) {
      const filteredDislikes = user.dislikes.filter(
        (item) => item._id !== videoId
      );

      // Updating dislikes in Users
      this.db.users.update({ dislikes: filteredDislikes });
      // Updating dislikes in Videos DB
      this.db.videos.update(foundVideo, { dislikes: foundVideo.dislikes - 1 });
      // Returing Video's dislikes
      return new Response(200, {}, { dislikes: foundVideo.dislikes - 1 });
    }
    return new Response(
      404,
      {},
      {
        errors: ['This Video is not present in db. Not Found error'],
      }
    );
  }
  return new Response(
    404,
    {},
    { errors: ['The user you request does not exist. Not Found error.'] }
  );
};
