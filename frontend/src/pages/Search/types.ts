import {IImage} from "../../shared/types";
import {
  ON_SEARCH_IMAGE,
  ON_LIKE_IMAGE,
  ON_DISLIKE_IMAGE, UPDATE_FILTER,
} from './redux';

export interface SearchState {
  images: IImage[];
  filters: UpdateFilterPayload;
}

export interface UpdateFilterPayload {
  order: string;
  type: string;
  category: number;
  breed: string;
  page: number;
}

export interface UpdateFilterAction {
  type: typeof UPDATE_FILTER;
  payload: UpdateFilterPayload;
}

export type SearchImagePayload = | UpdateFilterPayload;

export interface SearchImageAction {
  type: typeof ON_SEARCH_IMAGE;
  params: SearchImagePayload
}

export interface StoreImagesSuccessPayload {
  status: string;
  images: IImage[];
}

export interface LikeImageAction {
  type: typeof ON_LIKE_IMAGE;
  image: IImage;
  onSuccess: () => void;
  onError: () => void;
}

export interface RefreshImageListPayload {
  imageId: string;
  liked: boolean;
}

export interface DislikeImageAction extends LikeImageAction {
  type: typeof ON_DISLIKE_IMAGE;
}
