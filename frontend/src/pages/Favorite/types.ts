import {IImage} from "../../shared/types";

import {
  ON_GET_FAVORITES,
  ON_DISLIKE_IMAGE,
} from './redux';

export interface FavoriteState {
  images: IImage[];
}

export interface StoreFavoritesPayload {
  status: string
  images: IImage[];
}

export interface GetFavoritesAction {
  type: typeof ON_GET_FAVORITES;
  categoryId: string;
}

export interface DislikeImageAction {
  type: typeof ON_DISLIKE_IMAGE;
  image: IImage;
  onSuccess: () => void;
  onError: () => void;
}

export interface RemoveDislikedImagePayload {
  imageId: string
}
