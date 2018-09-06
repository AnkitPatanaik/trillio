import * as types from '../actions/actionTypes';
import jwtDecode from 'jwt-decode';

const INITIAL_STATE = {
  isAuthenticated : false,
  username: "",
};

export default function loginReducer(state = INITIAL_STATE, action) {
  let payload = '';
  if (localStorage.jwt != null && localStorage.jwt !== 'undefined') {
    payload = jwtDecode(localStorage.jwt);
  }
  switch (action.type) {
    case types.LOGIN_USER_SUCCESS:
      console.log('Login successful.');
      return {
        ...state,
        username: payload.username,
        isAuthenticated: true,
      };

    case types.LOGIN_USER_FAILURE:
      console.log('Login failed.');
      return {
        ...state
      };

    default:
      return state;
  }
}