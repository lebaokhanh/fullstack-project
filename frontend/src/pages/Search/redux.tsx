import { createAction, createReducer } from '@reduxjs/toolkit';

import {
  SearchState,
  StoreImagesSuccessPayload,
  SearchImageAction,
  SearchImagePayload,
  RefreshImageListPayload
} from './types';
import {IImage} from "../../shared/types";

const actionFormatter = (action: string): string => `search.${action}`;

export const ON_SEARCH_IMAGE = actionFormatter('ON_SEARCH_IMAGE');
export const STORE_IMAGES = actionFormatter('STORE_IMAGES');
export const ON_LIKE_IMAGE = actionFormatter('ON_LIKE_IMAGE');
export const REFRESH_IMAGE_LIST = actionFormatter('REFRESH_IMAGE_LIST');


export const onSearchImage = (params: SearchImagePayload): SearchImageAction => ({
  type: ON_SEARCH_IMAGE, params,
});

export const storeImages = createAction<StoreImagesSuccessPayload>(STORE_IMAGES);

export const onLikeImage = (
  image: IImage,
  onSuccess: (image: IImage) => void,
  onError: () => void
) => ({
  type: ON_LIKE_IMAGE, image, onSuccess, onError
});

export const refreshImageList = createAction<RefreshImageListPayload>(REFRESH_IMAGE_LIST);


const INITIAL_STATE: SearchState = {
  images: []
};

export default createReducer(INITIAL_STATE, (builder) => {
  builder.addCase(storeImages, (state, {payload}) => {
    return {...state, images: payload.images};
  });
  builder.addCase(refreshImageList, (state, {payload}) => {
    const images = state.images;
    const {imageId, liked} = payload;
    const updatedImages = images.map((image) => image.id === imageId ? {...image, liked} : image)
    return {...state, images: updatedImages};
  });
});
