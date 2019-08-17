import { GET_ERRORS } from '../actions/types';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      // payload is going to include err.response.data from authActions
      return action.payload;
    default:
      return state;
  }
}