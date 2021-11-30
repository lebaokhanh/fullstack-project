import {IImage} from "../../shared/types";
import {
  ON_SEARCH_IMAGE,
  ON_LIKE_IMAGE,
} from './redux';

export interface SearchState {
  images: IImage[];
}

export interface SearchImagePayload {
  order: string;
  type: string;
  category: number;
  breed: string;
  page: number;
}

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
