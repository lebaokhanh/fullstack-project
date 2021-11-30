import React from "react";

import ImageListItem from '@mui/material/ImageListItem';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {StyledImageList, StyledImageListItemBar, StyledIconButton} from "./styles";
import {IImage} from "../../shared/types";

interface IImageGallery {
  images: IImage[];
}

const ImageGallery = ({images}: IImageGallery) => {
  const handleClick = (item: IImage) => {
    console.log('on image clicked')
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
