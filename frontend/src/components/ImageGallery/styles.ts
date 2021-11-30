import styled from 'styled-components';
import {ImageListItemBar, ImageList, IconButton} from "@mui/material";

export const StyledImageList = styled(ImageList)`
  transform: translateZ(0);
  
`;

export const StyledImageListItemBar = styled(ImageListItemBar)`
  background: linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%);
`;

export const StyledIconButton = styled(IconButton)`
  color: #eb1e85;
`;
