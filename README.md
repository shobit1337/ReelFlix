<p align="center">
  <a href="https://ReelFlix.netlify.app/" >
    <img src="https://reelflix.netlify.app/static/media/logo.73ac4238.png" alt="ReelFlix logo" width="200" height="165">
  </a>
</p>

<h3 align="center">ReelFlix</h3>

<p align="center">
  <br>
  <a href="https://ReelFlix.netlify.app/"><strong>Try it out now ยป</strong></a>
  <br>
  <br>
  <a href="https://github.com/shobit1337/ReelFlix/issues">Report bug</a>
  ยท
  <a href="https://github.com/shobit1337/ReelFlix/issues">Request feature</a>
</p>

## ReelFlix

ReelFlix is a video library app, similar to youtube. It has all basic features of that youtube provides. It is made with React for frontend and MirageJs for backend.

## Table of contents

- [What's included](#whats-included)
- [Contributing](#running-documentation-locally-and-contributing)
- [Creators](#creator)
- [Thanks](#thanks)
- [license](#license)

## What's included

Within the download you'll find the following directories and files.

<details>
  <summary>Contents</summary>

- ๐ ReelFlix
  - ๐ [README.md](README.md)
  - ๐ [node_modules](node_modules)
  - ๐ [package.json](package.json)
  - ๐ **public**
    - ๐ [\_redirects](public/_redirects)
    - ๐ [favicon.ico](public/favicon.ico)
    - ๐ [index.html](public/index.html)
  - ๐ **src**
    - ๐ [App.css](src/App.css)
    - ๐ [App.jsx](src/App.jsx)
    - ๐ [Routes.jsx](src/Routes.jsx)
    - ๐ **backend**
      - ๐ **controllers**
        - ๐ [AuthController.js](src/backend/controllers/AuthController.js)
        - ๐ [CategoryController.js](src/backend/controllers/CategoryController.js)
        - ๐ [DislikeController.js](src/backend/controllers/DislikeController.js)
        - ๐ [HistoryController.js](src/backend/controllers/HistoryController.js)
        - ๐ [LikeController.js](src/backend/controllers/LikeController.js)
        - ๐ [PlaylistController.js](src/backend/controllers/PlaylistController.js)
        - ๐ [VideoController.js](src/backend/controllers/VideoController.js)
        - ๐ [WatchLaterController.js](src/backend/controllers/WatchLaterController.js)
      - ๐ **db**
        - ๐ [categories.js](src/backend/db/categories.js)
        - ๐ [playlists.js](src/backend/db/playlists.js)
        - ๐ [users.js](src/backend/db/users.js)
        - ๐ [videos.js](src/backend/db/videos.js)
      - ๐ **utils**
        - ๐ [authUtils.js](src/backend/utils/authUtils.js)
    - ๐ **components**
      - ๐ **Auth**
        - ๐ [ForgotPassword.jsx](src/components/Auth/ForgotPassword.jsx)
        - ๐ [Login.jsx](src/components/Auth/Login.jsx)
        - ๐ [Signup.jsx](src/components/Auth/Signup.jsx)
      - ๐ **CreatePlaylist**
        - ๐ [CreatePlaylist.jsx](src/components/CreatePlaylist/CreatePlaylist.jsx)
      - ๐ **Footer**
        - ๐ [Footer.jsx](src/components/Footer/Footer.jsx)
      - ๐ **ListSection**
        - ๐ [ListSection.jsx](src/components/ListSection/ListSection.jsx)
      - ๐ **Modal**
        - ๐ [Modal.css](src/components/Modal/Modal.css)
        - ๐ [Modal.jsx](src/components/Modal/Modal.jsx)
      - ๐ **Navbar**
        - ๐ [Navbar.css](src/components/Navbar/Navbar.css)
        - ๐ [Navbar.jsx](src/components/Navbar/Navbar.jsx)
      - ๐ **PlaylistCard**
        - ๐ [PlaylistCard.css](src/components/PlaylistCard/PlaylistCard.css)
        - ๐ [PlaylistCard.jsx](src/components/PlaylistCard/PlaylistCard.jsx)
      - ๐ **SearchBar**
        - ๐ [SearchBar.css](src/components/SearchBar/SearchBar.css)
        - ๐ [SearchBar.jsx](src/components/SearchBar/SearchBar.jsx)
      - ๐ **SelectPlaylist**
        - ๐ [SelectPlaylist.css](src/components/SelectPlaylist/SelectPlaylist.css)
        - ๐ [SelectPlaylist.jsx](src/components/SelectPlaylist/SelectPlaylist.jsx)
      - ๐ **Sidebar**
        - ๐ [Sidebar.css](src/components/Sidebar/Sidebar.css)
        - ๐ [Sidebar.jsx](src/components/Sidebar/Sidebar.jsx)
      - ๐ **VideoCard**
        - ๐ [VideoCard.css](src/components/VideoCard/VideoCard.css)
        - ๐ [VideoCard.jsx](src/components/VideoCard/VideoCard.jsx)
      - ๐ [index.js](src/components/index.js)
    - ๐ **context**
      - ๐ [auth\-context.js](src/context/auth-context.js)
      - ๐ [playlist\-context.js](src/context/playlist-context.js)
    - ๐ **hooks**
      - ๐ [useOnClickOutside.jsx](src/hooks/useOnClickOutside.jsx)
    - ๐ [index.js](src/index.js)
    - ๐ [logo.png](src/logo.png)
    - ๐ **pages**
      - ๐ **HistoryPage**
        - ๐ [HistoryPage.jsx](src/pages/HistoryPage/HistoryPage.jsx)
      - ๐ **HomePage**
        - ๐ [HomePage.css](src/pages/HomePage/HomePage.css)
        - ๐ [HomePage.jsx](src/pages/HomePage/HomePage.jsx)
      - ๐ **LikesPage**
        - ๐ [LikesPage.jsx](src/pages/LikesPage/LikesPage.jsx)
      - ๐ **ListingPage**
        - ๐ [ListingPage.css](src/pages/ListingPage/ListingPage.css)
        - ๐ [ListingPage.jsx](src/pages/ListingPage/ListingPage.jsx)
      - ๐ **PlaylistPage**
        - ๐ [PlaylistPage.jsx](src/pages/PlaylistPage/PlaylistPage.jsx)
        - ๐ **components**
          - ๐ **CreatePlayListModal**
            - ๐ [CreatePlaylistModal.jsx](src/pages/PlaylistPage/components/CreatePlayListModal/CreatePlaylistModal.jsx)
          - ๐ **PlaylistList**
            - ๐ [PlaylistList.jsx](src/pages/PlaylistPage/components/PlaylistList/PlaylistList.jsx)
          - ๐ **PlaylistView**
            - ๐ [PlaylistView.css](src/pages/PlaylistPage/components/PlaylistView/PlaylistView.css)
            - ๐ [PlaylistView.jsx](src/pages/PlaylistPage/components/PlaylistView/PlaylistView.jsx)
      - ๐ **VideoPage**
        - ๐ [VideoPage.css](src/pages/VideoPage/VideoPage.css)
        - ๐ [VideoPage.jsx](src/pages/VideoPage/VideoPage.jsx)
        - ๐ **components**
          - ๐ **LikeDislikeSection**
            - ๐ [LikeDislikeSection.css](src/pages/VideoPage/components/LikeDislikeSection/LikeDislikeSection.css)
            - ๐ [LikeDislikeSection.jsx](src/pages/VideoPage/components/LikeDislikeSection/LikeDislikeSection.jsx)
          - ๐ **MoreVideos**
            - ๐ [MoreVideos.jsx](src/pages/VideoPage/components/MoreVideos/MoreVideos.jsx)
          - ๐ [index.js](src/pages/VideoPage/components/index.js)
      - ๐ **WatchLaterPage**
        - ๐ [WatchLaterPage.jsx](src/pages/WatchLaterPage/WatchLaterPage.jsx)
      - ๐ [index.js](src/pages/index.js)
    - ๐ **routing**
      - ๐ **PrivateLink**
        - ๐ [PrivateLink.jsx](src/routing/PrivateLink/PrivateLink.jsx)
      - ๐ **PrivateRoute**
        - ๐ [PrivateRoute.jsx](src/routing/PrivateRoute/PrivateRoute.jsx)
      - ๐ [index.js](src/routing/index.js)
    - ๐ [server.js](src/server.js)
    - ๐ **store**
      - ๐ **auth**
        - ๐ [action.types.js](src/store/auth/action.types.js)
        - ๐ [actions.js](src/store/auth/actions.js)
        - ๐ [reducer.js](src/store/auth/reducer.js)
      - ๐ **playlist**
        - ๐ [action.types.js](src/store/playlist/action.types.js)
        - ๐ [actions.js](src/store/playlist/actions.js)
        - ๐ [reducer.js](src/store/playlist/reducer.js)
    - ๐ **utils**
      - ๐ **auth**
      - ๐ **category**
        - ๐ [index.js](src/utils/category/index.js)
      - ๐ **history**
        - ๐ [index.js](src/utils/history/index.js)
      - ๐ **like\-dislike**
        - ๐ [index.js](src/utils/like-dislike/index.js)
      - ๐ **playlist**
      - ๐ **videos**
        - ๐ [index.js](src/utils/videos/index.js)
      - ๐ **watchLater**
        - ๐ [index.js](src/utils/watchLater/index.js)
  - ๐ [yarn.lock](yarn.lock)

</details>

## Features/ Functionality in Reelflix:

- Home page
- Video listing page
- Filter Videos
- Search video
- Individual video page
- Like video
- Watch Later Video
- History video
- Create playlist
- Comment on video
- Authentication:
  - User Signup
  - User Login

## Built with -

- React JS
- React Context API + useReducer
- MirageJS for mock backend apis
- React Router v6
- Vanilla CSS integrated with CloudUI Component Library

## Running documentation locally and Contributing

- Clone this repo: `git clone https://github.com/shobit1337/ReelFlix.git`
- Run `yarn install`
- To run the project in your local server `yarn start`
- Live server will be started and make changes accordingly.

## Creator

**Shobit Deshwal**

- <https://twitter.com/shobit1337>
- <https://github.com/shobit1337>

## Thanks

<a href="https://www.netlify.com/">
  <img src="https://www.netlify.com/v3/img/components/full-logo-light.svg" alt="Netlify" width="147" height="40">
</a>

Thanks to [Netlify](https://www.netlify.com/) for providing us with Deploy Previews!

<a href="https://fontawesome.com/">
  <img src="https://seeklogo.com/images/F/font-awesome-logo-3010FE2434-seeklogo.com.png" alt="fontawesome" width="40" height="40">
</a>

Thanks to [FontAwesome](https://fontawesome.com/) for providing us with Free Icons!

## License

Code released under the MIT Licence.
