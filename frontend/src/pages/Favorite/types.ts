import {IImage} from "../../shared/types";

import {
  ON_GET_FAVORITES,
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
