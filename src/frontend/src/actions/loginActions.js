import * as types from "./actionTypes";
import loginApi from "../api/loginApi";

function loginUserFetch() {
  return { type: types.LOGIN_USER_FAILURE };
}

function loginUserSuccess() {
    return { type: types.LOGIN_USER_SUCCESS }
}

function loginUserFailure() {
    return { type: types.LOGIN_USER_FAILURE}
}

export function loginUser(credentials) {
    return dispatch => {
        dispatch(registerUserFetch());
        loginApi
            .login(credentials)
            .then(json => dispatch(loginUserSuccess(json)))
            .catch(error => {
                console.error(error);
                dispatch(loginUserFailure());
            }
        );
    };
}