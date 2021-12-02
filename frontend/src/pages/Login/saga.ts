import { all, takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';

import {ON_CHECK_LOGIN, ON_LOG_IN, ON_LOG_OUT, storeUser} from "./redux";
import {LogInAction} from "./types";

function* onLogIn({params}: LogInAction) {
  try {
    const {data} = yield call(axios.post, '/api/login', {user: params});
    if (data.status === 'success') {
      yield put(storeUser({username: data.username, loggedIn: data.loggedIn}));
    } else {
      console.error(data.error);
    }
  } catch (error) {
    console.error(error);
  }
}

function* onCheckLogin() {
  try {
    const {data} = yield call(axios.post, '/api/logged_in');
    if (data.status === 'success') {
      yield put(storeUser({username: data.username, loggedIn: data.loggedIn}));
    } else {
      console.error(data)
    }
  } catch (error) {
    console.error(error);
  }
}

function* onLogOut() {
  try {
    const {data} = yield call(axios.post, '/api/logout');
    if (data.status === 'success') {
      yield put(storeUser({username: null, loggedIn: false}));
    }
  } catch (error) {
    console.error(error);
  }
}

export default function* () {
  yield all([
    takeLatest(ON_LOG_IN, onLogIn),
    takeLatest(ON_CHECK_LOGIN, onCheckLogin),
    takeLatest(ON_LOG_OUT, onLogOut),
  ])
}
