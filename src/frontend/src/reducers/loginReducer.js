import * as types from '../actions/actionTypes';

const INITIAL_STATE = {
  jwt: "",
  username: ""
};

export default function loginReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.LOGIN_USER_SUCCESS:
      console.log('Login successful.');
      return {
        ...state
      };

    case types.REGISTER_FAILURE:
      console.log('Login failed.');
      return {
        ...state
      };

    default:
      return state;
  }
}