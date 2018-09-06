import * as types from "./actionTypes";
import loginApi from "../api/loginApi";

function loginUserFetch() {
  return { type: types.LOGIN_USER_FETCH };
}

function loginUserSuccess() {
    return { type: types.LOGIN_USER_SUCCESS }
}

function loginUserFailure() {
    return { type: types.LOGIN_USER_FAILURE}
}

export function loginUser(credentials) {
    return dispatch => {
        dispatch(loginUserFetch());
        loginApi
            .login(credentials)
            .then(json => { 
                localStorage.setItem('jwt', json.token);
                dispatch(loginUserSuccess(json));
            })
            .catch(error => {
                console.error(error);
                dispatch(loginUserFailure());
            }
        );
    };
}
