export const ADD_SONGS = "ADD_SONGS";
export const ADD_ALBUM = "ADD_ALBUM";
const songEndpoint = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";
const albumEndpoit = "https://striveschool-api.herokuapp.com/api/deezer/album/";

export const getSongsAction = songType => {
  return async dispatch => {
    try {
      const resp = await fetch(songEndpoint + songType);
      if (resp.ok) {
        const songs = await resp.json();

        dispatch({
          type: ADD_SONGS,
          payload: {
            key: songType,
            data: songs.data,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAlbumAction = id => {
  return async dispatch => {
    try {
      const resp = await fetch(albumEndpoit + id);
      if (resp.ok) {
        const album = await resp.json();

        dispatch({
          type: ADD_ALBUM,
          payload: {
            id,
            data: album,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
