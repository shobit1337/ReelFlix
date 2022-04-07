<p align="center">
  <a href="https://ReelFlix.netlify.app/" >
    <img src="https://reelflix.netlify.app/static/media/logo.73ac4238.png" alt="ReelFlix logo" width="200" height="165">
  </a>
</p>

<h3 align="center">ReelFlix</h3>

<p align="center">
  <br>
  <a href="https://ReelFlix.netlify.app/"><strong>Try it out now »</strong></a>
  <br>
  <br>
  <a href="https://github.com/shobit1337/ReelFlix/issues">Report bug</a>
  ·
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

- 📂 ReelFlix
  - 📄 [README.md](README.md)
  - 📄 [node_modules](node_modules)
  - 📄 [package.json](package.json)
  - 📂 **public**
    - 📄 [\_redirects](public/_redirects)
    - 📄 [favicon.ico](public/favicon.ico)
    - 📄 [index.html](public/index.html)
  - 📂 **src**
    - 📄 [App.css](src/App.css)
    - 📄 [App.jsx](src/App.jsx)
    - 📄 [Routes.jsx](src/Routes.jsx)
    - 📂 **backend**
      - 📂 **controllers**
        - 📄 [AuthController.js](src/backend/controllers/AuthController.js)
        - 📄 [CategoryController.js](src/backend/controllers/CategoryController.js)
        - 📄 [DislikeController.js](src/backend/controllers/DislikeController.js)
        - 📄 [HistoryController.js](src/backend/controllers/HistoryController.js)
        - 📄 [LikeController.js](src/backend/controllers/LikeController.js)
        - 📄 [PlaylistController.js](src/backend/controllers/PlaylistController.js)
        - 📄 [VideoController.js](src/backend/controllers/VideoController.js)
        - 📄 [WatchLaterController.js](src/backend/controllers/WatchLaterController.js)
      - 📂 **db**
        - 📄 [categories.js](src/backend/db/categories.js)
        - 📄 [playlists.js](src/backend/db/playlists.js)
        - 📄 [users.js](src/backend/db/users.js)
        - 📄 [videos.js](src/backend/db/videos.js)
      - 📂 **utils**
        - 📄 [authUtils.js](src/backend/utils/authUtils.js)
    - 📂 **components**
      - 📂 **Auth**
        - 📄 [ForgotPassword.jsx](src/components/Auth/ForgotPassword.jsx)
        - 📄 [Login.jsx](src/components/Auth/Login.jsx)
        - 📄 [Signup.jsx](src/components/Auth/Signup.jsx)
      - 📂 **CreatePlaylist**
        - 📄 [CreatePlaylist.jsx](src/components/CreatePlaylist/CreatePlaylist.jsx)
      - 📂 **Footer**
        - 📄 [Footer.jsx](src/components/Footer/Footer.jsx)
      - 📂 **ListSection**
        - 📄 [ListSection.jsx](src/components/ListSection/ListSection.jsx)
      - 📂 **Modal**
        - 📄 [Modal.css](src/components/Modal/Modal.css)
        - 📄 [Modal.jsx](src/components/Modal/Modal.jsx)
      - 📂 **Navbar**
        - 📄 [Navbar.css](src/components/Navbar/Navbar.css)
        - 📄 [Navbar.jsx](src/components/Navbar/Navbar.jsx)
      - 📂 **PlaylistCard**
        - 📄 [PlaylistCard.css](src/components/PlaylistCard/PlaylistCard.css)
        - 📄 [PlaylistCard.jsx](src/components/PlaylistCard/PlaylistCard.jsx)
      - 📂 **SearchBar**
        - 📄 [SearchBar.css](src/components/SearchBar/SearchBar.css)
        - 📄 [SearchBar.jsx](src/components/SearchBar/SearchBar.jsx)
      - 📂 **SelectPlaylist**
        - 📄 [SelectPlaylist.css](src/components/SelectPlaylist/SelectPlaylist.css)
        - 📄 [SelectPlaylist.jsx](src/components/SelectPlaylist/SelectPlaylist.jsx)
      - 📂 **Sidebar**
        - 📄 [Sidebar.css](src/components/Sidebar/Sidebar.css)
        - 📄 [Sidebar.jsx](src/components/Sidebar/Sidebar.jsx)
      - 📂 **VideoCard**
        - 📄 [VideoCard.css](src/components/VideoCard/VideoCard.css)
        - 📄 [VideoCard.jsx](src/components/VideoCard/VideoCard.jsx)
      - 📄 [index.js](src/components/index.js)
    - 📂 **context**
      - 📄 [auth\-context.js](src/context/auth-context.js)
      - 📄 [playlist\-context.js](src/context/playlist-context.js)
    - 📂 **hooks**
      - 📄 [useOnClickOutside.jsx](src/hooks/useOnClickOutside.jsx)
    - 📄 [index.js](src/index.js)
    - 📄 [logo.png](src/logo.png)
    - 📂 **pages**
      - 📂 **HistoryPage**
        - 📄 [HistoryPage.jsx](src/pages/HistoryPage/HistoryPage.jsx)
      - 📂 **HomePage**
        - 📄 [HomePage.css](src/pages/HomePage/HomePage.css)
        - 📄 [HomePage.jsx](src/pages/HomePage/HomePage.jsx)
      - 📂 **LikesPage**
        - 📄 [LikesPage.jsx](src/pages/LikesPage/LikesPage.jsx)
      - 📂 **ListingPage**
        - 📄 [ListingPage.css](src/pages/ListingPage/ListingPage.css)
        - 📄 [ListingPage.jsx](src/pages/ListingPage/ListingPage.jsx)
      - 📂 **PlaylistPage**
        - 📄 [PlaylistPage.jsx](src/pages/PlaylistPage/PlaylistPage.jsx)
        - 📂 **components**
          - 📂 **CreatePlayListModal**
            - 📄 [CreatePlaylistModal.jsx](src/pages/PlaylistPage/components/CreatePlayListModal/CreatePlaylistModal.jsx)
          - 📂 **PlaylistList**
            - 📄 [PlaylistList.jsx](src/pages/PlaylistPage/components/PlaylistList/PlaylistList.jsx)
          - 📂 **PlaylistView**
            - 📄 [PlaylistView.css](src/pages/PlaylistPage/components/PlaylistView/PlaylistView.css)
            - 📄 [PlaylistView.jsx](src/pages/PlaylistPage/components/PlaylistView/PlaylistView.jsx)
      - 📂 **VideoPage**
        - 📄 [VideoPage.css](src/pages/VideoPage/VideoPage.css)
        - 📄 [VideoPage.jsx](src/pages/VideoPage/VideoPage.jsx)
        - 📂 **components**
          - 📂 **LikeDislikeSection**
            - 📄 [LikeDislikeSection.css](src/pages/VideoPage/components/LikeDislikeSection/LikeDislikeSection.css)
            - 📄 [LikeDislikeSection.jsx](src/pages/VideoPage/components/LikeDislikeSection/LikeDislikeSection.jsx)
          - 📂 **MoreVideos**
            - 📄 [MoreVideos.jsx](src/pages/VideoPage/components/MoreVideos/MoreVideos.jsx)
          - 📄 [index.js](src/pages/VideoPage/components/index.js)
      - 📂 **WatchLaterPage**
        - 📄 [WatchLaterPage.jsx](src/pages/WatchLaterPage/WatchLaterPage.jsx)
      - 📄 [index.js](src/pages/index.js)
    - 📂 **routing**
      - 📂 **PrivateLink**
        - 📄 [PrivateLink.jsx](src/routing/PrivateLink/PrivateLink.jsx)
      - 📂 **PrivateRoute**
        - 📄 [PrivateRoute.jsx](src/routing/PrivateRoute/PrivateRoute.jsx)
      - 📄 [index.js](src/routing/index.js)
    - 📄 [server.js](src/server.js)
    - 📂 **store**
      - 📂 **auth**
        - 📄 [action.types.js](src/store/auth/action.types.js)
        - 📄 [actions.js](src/store/auth/actions.js)
        - 📄 [reducer.js](src/store/auth/reducer.js)
      - 📂 **playlist**
        - 📄 [action.types.js](src/store/playlist/action.types.js)
        - 📄 [actions.js](src/store/playlist/actions.js)
        - 📄 [reducer.js](src/store/playlist/reducer.js)
    - 📂 **utils**
      - 📂 **auth**
      - 📂 **category**
        - 📄 [index.js](src/utils/category/index.js)
      - 📂 **history**
        - 📄 [index.js](src/utils/history/index.js)
      - 📂 **like\-dislike**
        - 📄 [index.js](src/utils/like-dislike/index.js)
      - 📂 **playlist**
      - 📂 **videos**
        - 📄 [index.js](src/utils/videos/index.js)
      - 📂 **watchLater**
        - 📄 [index.js](src/utils/watchLater/index.js)
  - 📄 [yarn.lock](yarn.lock)

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
