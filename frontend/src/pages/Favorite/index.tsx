import React, {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Box} from "@mui/material";

import Filter from './Filter';
import ImageGallery from "../../components/ImageGallery";
import {
  onGetFavorites,
  onDislikeImage,
} from './redux';
import {RootState} from "../../config/store";
import {IImage} from "../../shared/types";

export default () => {
  const dispatch = useDispatch();
  const images = useSelector((state: RootState) => state.favorite.images);

  const onLoad = useCallback(
    (categoryId) => {
      console.log('categoryId: ', categoryId);
      dispatch(onGetFavorites(categoryId));
    }, [dispatch]);

  const handleDislike = useCallback((item: IImage, onSuccess: () => void, onError: () => void) => {
    dispatch(onDislikeImage(item, onSuccess, onError));
  }, [dispatch]);

  return (
    <>
      <Box sx={{width: '50%', height: '50%', margin: "0 auto"}}>
        <Filter onGetFavorites={onLoad} />
        <ImageGallery images={images} onDislike={handleDislike} />
      </Box>
    </>
  )
}
