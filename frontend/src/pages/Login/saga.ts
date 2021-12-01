import { all, takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';

import {ON_LOG_IN, storeUser} from "./redux";
import {LogInAction} from "./types";

function* onLogIn({params}: LogInAction) {
  try {
    const {data} = yield call(axios.post, '/api/login', {user: params});
    if (data.status === 'success') {
      yield put(storeUser({username: data.username}));
    } else {
      console.error(data.error);
    }
  } catch (error) {
    console.error(error);
  }
}

export default function* () {
  yield all([
    takeLatest(ON_LOG_IN, onLogIn),
  ])
}
