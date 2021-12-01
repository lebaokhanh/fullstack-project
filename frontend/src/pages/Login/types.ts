import {ON_LOG_IN} from "./redux";

export interface LogInPayload {
  username: string;
  password: string;
}

export interface LogInAction {
  type: typeof ON_LOG_IN;
  params: LogInPayload;
}

export interface StoreUserPayload {
  username: string;
}

export interface USER_STATE {
  username: string;
}
