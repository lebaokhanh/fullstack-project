import { all } from 'redux-saga/effects';

import searchWatcher from '../pages/Search/saga';
import favoriteWatcher from "../pages/Favorite/saga";
import signUpWatcher from "../pages/Signup/saga";
import loginWatcher from "../pages/Login/saga";

export default function* saga() {
  yield all([
    searchWatcher(),
    favoriteWatcher(),
    signUpWatcher(),
    loginWatcher(),
  ]);
};
