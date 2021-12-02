import {ON_CHECK_LOGIN, ON_LOG_IN, ON_LOG_OUT} from "./redux";

export interface LogInPayload {
  username: string;
  password: string;
}

export interface LogInAction {
  type: typeof ON_LOG_IN;
  params: LogInPayload;
}

export interface CheckLoginAction {
  type: typeof ON_CHECK_LOGIN;
}

export interface LogOutAction {
  type: typeof ON_LOG_OUT;
}

export interface StoreUserPayload {
  username: string | null;
  loggedIn: boolean;
}

export interface USER_STATE {
  username: string | null;
  loggedIn: boolean;
}
