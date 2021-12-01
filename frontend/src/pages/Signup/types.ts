import {ON_SIGN_UP} from "./redux";

export interface SignUpPayload {
  username: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export interface SignUpAction {
  type: typeof ON_SIGN_UP;
  params: SignUpPayload;
}
