import axios from 'axios';
import { GET_ERRORS } from "./types";

// register user where we call the request and redirect to the login page on success.  if there is an error we want to go to a seperate auth reducer

//Register User
export const registerUser = userData => dispatch => {
  // export const registeruser = userData => {
  // wait for response then move on 
  axios
    .post('/api/users/register', userData)
    // want to redirect
    .then(res => console.log(res.data))
    // this is where thunk comes in and you have to dispatch with the type of get_errors
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};