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
  onDislikeImage,
} from "./redux";
import {RootState} from "../../config/store";
import {Box} from "@mui/material";

export default () => {
  const dispatch = useDispatch();
  const images = useSelector((state: RootState) => state.search.images);

  const handleSearch = useCallback((params: SearchImagePayload) => {
    dispatch(onSearchImage(params));
  }, [dispatch]);

  const handleLike = useCallback((item: IImage, onSuccess: () => void, onError: () => void) => {
    dispatch(onLikeImage(item, onSuccess, onError));
  }, [dispatch]);

  const handleDislike = useCallback((item: IImage, onSuccess: (item: IImage) => void, onError: () => void) => {
    dispatch(onDislikeImage(item, onSuccess, onError));
  }, [dispatch]);

  return (
    <>
      <Box sx={{width: '50%', height: '50%', margin: "0 auto"}}>
        <Filter onSearch={handleSearch} />
        <ImageGallery images={images} onLike={handleLike} onDislike={handleDislike} />
      </Box>
    </>
  );
}
