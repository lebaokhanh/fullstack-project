import { createAction, createReducer } from "@reduxjs/toolkit";

import {
  FavoriteState,
  StoreFavoritesPayload,
  GetFavoritesAction,
} from './types';

const actionFormatter = (action: string) => `favorite.${action}`;

export const ON_GET_FAVORITES = actionFormatter('ON_GET_FAVORITES');
export const STORE_FAVORITES = actionFormatter('STORE_FAVORITES');

export const onGetFavorites = (categoryId: string): GetFavoritesAction => ({
  type: ON_GET_FAVORITES, categoryId,
});

export const storeFavorites = createAction<StoreFavoritesPayload>(STORE_FAVORITES);

const INITIAL_STATE: FavoriteState = {
  images: []
};

export default createReducer(INITIAL_STATE, (builder) => {
  builder.addCase(storeFavorites, (state, {payload}) => (
    {...state, images: payload.images})
  );
});
