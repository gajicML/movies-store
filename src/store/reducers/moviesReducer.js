import {
  FETCH_MOVIE_PENDING,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_ERROR
} from "../actions/type";

const initValue = {
  data: [],
  error: ""
};

const moviesReducer = (state = initValue, action) => {
  switch (action.type) {
    case FETCH_MOVIE_PENDING:
      return {
        ...state
      };
    case FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        data: action.payload
      };
    case FETCH_MOVIE_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
export default moviesReducer;
