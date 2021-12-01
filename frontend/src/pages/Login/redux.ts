import {
  LogInAction,
  LogInPayload, StoreUserPayload, USER_STATE,
} from './types';
import {createAction, createReducer} from "@reduxjs/toolkit";

const actionFormatter = (action: string): string => `user.${action}`;

export const ON_LOG_IN = actionFormatter('ON_LOG_IN');
export const STORE_USER = actionFormatter('STORE_USER');

export const onLogIn = (params: LogInPayload): LogInAction => ({
  type: ON_LOG_IN, params,
});

export const storeUser = createAction<StoreUserPayload>(STORE_USER);

const INITIAL_STATE: USER_STATE = {
  username: '',
}

export default createReducer(INITIAL_STATE, builder => {
  builder.addCase(storeUser, (state, {payload}) => {
    return {...state, username: payload.username}
  });
})
