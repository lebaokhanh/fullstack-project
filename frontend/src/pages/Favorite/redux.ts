import { createAction, createReducer } from "@reduxjs/toolkit";
import _filter from 'lodash/filter';

import {
  FavoriteState,
  StoreFavoritesPayload,
  GetFavoritesAction,
  RemoveDislikedImagePayload,
} from './types';
import {IImage} from "../../shared/types";

const actionFormatter = (action: string) => `favorite.${action}`;

export const ON_GET_FAVORITES = actionFormatter('ON_GET_FAVORITES');
export const STORE_FAVORITES = actionFormatter('STORE_FAVORITES');
export const ON_DISLIKE_IMAGE = actionFormatter('ON_DISLIKE_IMAGE');
export const REMOVE_DISLIKED_IMAGE = actionFormatter('REMOVE_DISLIKED_IMAGE');

export const onGetFavorites = (categoryId: string): GetFavoritesAction => ({
  type: ON_GET_FAVORITES, categoryId,
});

export const storeFavorites = createAction<StoreFavoritesPayload>(STORE_FAVORITES);

export const onDislikeImage = (image: IImage, onSuccess: () => void, onError: () => void) => ({
  type: ON_DISLIKE_IMAGE, image, onSuccess, onError,
});

export const removeDislikedImage = createAction<RemoveDislikedImagePayload>(REMOVE_DISLIKED_IMAGE);

const INITIAL_STATE: FavoriteState = {
  images: []
};

export default createReducer(INITIAL_STATE, (builder) => {
  builder.addCase(storeFavorites, (state, {payload}) => (
    {...state, images: payload.images})
  );
  builder.addCase(removeDislikedImage, (state, {payload}) => {
    const newImages = _filter(state.images, (image) => image.id !== payload.imageId);
    return {...state, images: newImages};
  })
});
