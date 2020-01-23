import {
  FETCH_MOVIE_PENDING,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_ERROR,
  FETCH_TOP_MOVIES
} from "./type";

const MOVIE_DB_API_KEY = "abc6ac3532a6ce1c8313d30773b32578";
const MOVIE_DB_BASE_URL = "https://api.themoviedb.org/3";

const fetchMoviePending = () => ({
  type: FETCH_MOVIE_PENDING
});

const fetchMovieSuccess = json => ({
  type: FETCH_MOVIE_SUCCESS,
  payload: json
});

const fetchMovieError = error => ({
  type: FETCH_MOVIE_ERROR,
  payload: error
});

const fetchTopMovies = () => ({
  type: FETCH_TOP_MOVIES
});

export const fetchMovie = name => {
  return async dispatch => {
    dispatch(fetchMoviePending());
    try {
      const url = `${MOVIE_DB_BASE_URL}/search/movie?api_key=${MOVIE_DB_API_KEY}&language=en-US&query=${name}`;
      const response = await fetch(url);
      const result = await response.json(response);

      dispatch(fetchMovieSuccess(result));
    } catch (error) {
      dispatch(fetchMovieError(error));
    }
  };
};
