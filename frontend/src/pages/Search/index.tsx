import React, {useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";

import Filter from "./Filter";
import ImageGallery from '../../components/ImageGallery';
import {
  SearchImagePayload,
} from './types';
import {IImage} from "../../shared/types";
import {
  onSearchImage,
  onLikeImage,
} from "./redux";
import {RootState} from "../../config/store";

export default () => {
  const dispatch = useDispatch();
  const images = useSelector((state: RootState) => state.search.images);

  const handleSearch = useCallback((params: SearchImagePayload) => {
    dispatch(onSearchImage(params));
  }, [dispatch]);

  const handleLike = useCallback((item: IImage, onSuccess: () => void, onError: () => void) => {
    dispatch(onLikeImage(item, onSuccess, onError));
  }, [dispatch]);

  return (
    <>
      <Filter onSearch={handleSearch} />
      <ImageGallery images={images} onLike={handleLike} />
    </>
  );
}
