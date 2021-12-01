import {all, call, takeLatest} from 'redux-saga/effects';
import axios from 'axios';

import {ON_SIGN_UP} from "./redux";
import {SignUpAction} from "./types";

function* onSignUp({params}: SignUpAction) {
  try {
    const {data} = yield call(axios.post, '/api/user', {user: params})
    if (data.status === 'success') {
      yield console.log('success');
    } else {
      console.error(data.error);
    }
  } catch (error) {
    console.error(error);
  }
}

export default () => {
  return all([
    takeLatest(ON_SIGN_UP, onSignUp)
  ]);
}
