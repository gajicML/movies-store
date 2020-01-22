import {
  FETCH_MOVIE_PENDING,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_ERROR
} from "./type";

const fetchMoviePending = () => ({
  type: FETCH_MOVIE_PENDING
});

const fetchMovieSuccess = json => ({
  type: FETCH_MOVIE_SUCCESS
});

const fetchMovieError = error => ({
  type: FETCH_MOVIE_ERROR
});
