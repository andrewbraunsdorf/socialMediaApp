import { TEST_DISPATCH } from "./types";

// register user where we call the request and redirect to the login page on success.  if there is an error we want to go to a seperate auth reducer

//Register User
export const registerUser = (userData) => {
  // export const registeruser = userData => {
  return {
    type: TEST_DISPATCH,
    payload: userData
  };
};