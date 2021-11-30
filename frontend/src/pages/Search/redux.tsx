import { createAction, createReducer } from '@reduxjs/toolkit';

import {
  SearchState,
  StoreImagesSuccessPayload,
  SearchImageAction,
  SearchImagePayload,
} from './types';

const actionFormatter = (action: string): string => `search.${action}`;

export const ON_SEARCH_IMAGE = actionFormatter('ON_SEARCH_IMAGE');
export const STORE_IMAGES = actionFormatter('STORE_IMAGES');

export const onSearchImage = (params: SearchImagePayload): SearchImageAction => ({
  type: ON_SEARCH_IMAGE, params,
});

export const storeImages = createAction<StoreImagesSuccessPayload>(STORE_IMAGES);

const INITIAL_STATE: SearchState = {
  images: []
};

export default createReducer(INITIAL_STATE, (builder) => {
  builder.addCase(storeImages, (state, {payload}) => {
    return {...state, images: payload.images};
  });
});
