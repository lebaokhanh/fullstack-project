import {
  SignUpAction,
  SignUpPayload
} from './types';

const actionFormatter = (action: string): string => `user.${action}`;

export const ON_SIGN_UP = actionFormatter('ON_SIGN_UP');

export const onSignUp = (params: SignUpPayload): SignUpAction => ({
  type: ON_SIGN_UP, params,
});
