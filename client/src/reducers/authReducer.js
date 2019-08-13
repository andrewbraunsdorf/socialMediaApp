import { TEST_DISPATCH } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  user: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
    // case SET_CURRENT_USER:
    //   return
    case TEST_DISPATCH:
      return {
        ...state,
        user: action.payload
      }
    default:
      return state;
  }
}