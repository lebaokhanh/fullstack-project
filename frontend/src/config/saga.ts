import { all } from 'redux-saga/effects';

import searchWatcher from '../pages/Search/saga';

export default function* saga() {
  yield all([
    searchWatcher(),
  ]);
};
