import {
  FETCH_MOVIE_PENDING,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_ERROR
} from "../actions/type";

const initValue = {
  data: [],
  loading: false,
  error: ""
};

const moviesReducer = (state = initValue, action) => {
  switch (action.type) {
    case FETCH_MOVIE_PENDING:
      return {
        ...state,
        loading: true
      };
    case FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case FETCH_MOVIE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
export default moviesReducer;
