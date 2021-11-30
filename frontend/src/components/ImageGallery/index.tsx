import React from "react";

import ImageListItem from '@mui/material/ImageListItem';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {StyledImageList, StyledImageListItemBar, StyledIconButton} from "./styles";
import {IImage} from "../../shared/types";

interface IImageGallery {
  images: IImage[];
  onLike?: (item: IImage, onSuccess: () => void, onError: () => void) => void;
  onDislike: (item: IImage, onSuccess: () => void, onError: () => void) => void;
}

const ImageGallery = ({images, onLike, onDislike}: IImageGallery) => {
  const handleClick = (item: IImage) => {
    if (!item.liked && onLike) {
      onLike(item, onLikeSuccess, onLikeError);
    } else {
      onDislike(item, onDislikeSuccess, onDislikeError);
    }
  }

  const onLikeSuccess = () => {
    console.log('onLikeSuccess');
  };

  const onLikeError = () => {
    console.log('onLikeError');
  }

  const onDislikeSuccess = () => {
    console.log('onDislikeSuccess');
  };

  const onDislikeError = () => {
    console.log('onDislikeError');
  }

  return (
    <>
      <StyledImageList cols={3}>
        {images.map((item: any) => {
          return (
            <ImageListItem key={item.id}>
              <img src={item.url}
                   alt={item.id}
                   loading="lazy"
                   style={{objectFit: "cover", width: 167, height: 167}}
              />
              <StyledImageListItemBar
                position="top"
                actionIcon={
                  <StyledIconButton>
                    {item.liked ? <FavoriteIcon onClick={(e) => handleClick(item)}/> :
                      <FavoriteBorderIcon onClick={(e) => handleClick(item)}/>}
                  </StyledIconButton>
                }
                actionPosition="left"
              />
            </ImageListItem>
          );
        })}
      </StyledImageList>
    </>
  )
}

export default ImageGallery;
