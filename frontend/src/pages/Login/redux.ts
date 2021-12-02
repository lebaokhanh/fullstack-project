import {
  LogInAction,
  LogInPayload, StoreUserPayload, USER_STATE, CheckLoginAction, LogOutAction
} from './types';
import {createAction, createReducer} from "@reduxjs/toolkit";

const actionFormatter = (action: string): string => `user.${action}`;

export const ON_LOG_IN = actionFormatter('ON_LOG_IN');
export const STORE_USER = actionFormatter('STORE_USER');
export const ON_CHECK_LOGIN = actionFormatter('ON_CHECK_LOGIN');
export const ON_LOG_OUT = actionFormatter('ON_LOG_OUT');

export const onLogIn = (params: LogInPayload): LogInAction => ({
  type: ON_LOG_IN, params,
});

export const storeUser = createAction<StoreUserPayload>(STORE_USER);

export const onCheckLogin = (): CheckLoginAction => ({
  type: ON_CHECK_LOGIN,
});

export const onLogOut = (): LogOutAction => ({
  type: ON_LOG_OUT,
});

const INITIAL_STATE: USER_STATE = {
  username: null,
  loggedIn: false,
}

export default createReducer(INITIAL_STATE, builder => {
  builder.addCase(storeUser, (state, {payload}) => {
    return {...state, username: payload.username, loggedIn: payload.loggedIn}
  });
})
