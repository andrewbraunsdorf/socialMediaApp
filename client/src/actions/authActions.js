import axios from 'axios';
import { GET_ERRORS } from "./types";

//Register User
export const registerUser = (userData, history) => dispatch => {
  axios
    .post('/api/users/register', userData)
    // with react router it is easy to redirect to 
    .then(res => history.push('/login'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// inside a component but cant do this in an action
// this.PaymentResponse.history.push('/dashboard')