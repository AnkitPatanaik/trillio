import * as types from './actionTypes';
import registerApi from '../api/registrationApi';

function registerUserFetch() {
  return { type: types.REGISTER_USER_FETCH };
}

function registerSuccess(json) {
  console.log(json);
  return { type: types.REGISTER_SUCCESS };
}

function registerFailure() {
  return { type: types.REGISTER_FAILURE };
}

export function registerUser(credentials) {
  return (dispatch) => {
    dispatch(registerUserFetch());
    registerApi
      .register(credentials)
      .then(json => dispatch(registerSuccess(json)))
      .catch((error) => {
        console.error(error);
        dispatch(registerFailure());
      });
  };
}