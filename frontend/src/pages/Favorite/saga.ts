import { call, put, all, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import qs from 'querystring';

import {
  storeFavorites,
  ON_GET_FAVORITES,
  ON_DISLIKE_IMAGE,
  removeDislikedImage,
} from './redux';
import {
  GetFavoritesAction,
  DislikeImageAction,
} from './types';

function* onGetFavorites({ categoryId }: GetFavoritesAction) {
  try {
    const {data} = yield call(
      axios.get,
      `/api/cat/favorites?${qs.stringify({category_id: categoryId})}`
    );
    if (data.status === 'success') {
      yield put(storeFavorites(data));
    }
  } catch (error) {
    console.error(error);
  }
};

function* onDislikeImage({image, onSuccess, onError}: DislikeImageAction) {
  try {
    const {data} = yield call(axios.post, '/api/cat/dislike', {...image});
    if (data.status === 'success') {
      yield put(removeDislikedImage({imageId: image.id}));
      yield onSuccess();
    } else {
      yield onError();
    }
  } catch (error) {
    yield onError();
    console.error(error);
  }
}

export default function* () {
  yield all([
    takeLatest(ON_GET_FAVORITES, onGetFavorites),
    takeLatest(ON_DISLIKE_IMAGE, onDislikeImage),
  ]);
}
