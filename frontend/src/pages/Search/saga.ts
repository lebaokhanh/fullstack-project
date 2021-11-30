import { call, all, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import qs from 'query-string';

import {
  ON_SEARCH_IMAGE,
  storeImages,
} from "./redux";


export function* onSearchImage({params}: any) {
  try {
    const { data } = yield call(axios.get, `/api/cat/search?${qs.stringify(params)}`);
    if (data.status === 'success') {
      yield put(storeImages(data));
    }
  } catch (error) {
    console.error(error);
  }
}

export default function* favouriteWatcher() {
  yield all([
    takeLatest(ON_SEARCH_IMAGE, onSearchImage),
  ]);
};
