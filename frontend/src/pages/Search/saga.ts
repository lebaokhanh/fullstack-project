import { call, all, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import qs from 'query-string';

import {
  ON_SEARCH_IMAGE,
  ON_LIKE_IMAGE,
  storeImages,
  refreshImageList,
} from "./redux";
import {
  LikeImageAction,
} from './types';

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

export function* onLikeImage({image, onSuccess, onError}: LikeImageAction) {
  try {
    const {data} = yield call(axios.post, '/api/cat/like', {...image})
    if (data.status === 'success') {
      yield put(refreshImageList({imageId: image.id, liked: true}))
      yield onSuccess();
    } else {
      yield onError();
    }
  } catch (error) {
    yield onError();
    console.error(error);
  }
}

export default function* favouriteWatcher() {
  yield all([
    takeLatest(ON_SEARCH_IMAGE, onSearchImage),
    takeLatest(ON_LIKE_IMAGE, onLikeImage),
  ]);
};
