import React, {useCallback, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import { Select, MenuItem, InputLabel, FormControl, Button, Grid } from "@mui/material";
import _map from 'lodash/map';

import {CATEGORIES} from '../../shared/constants';
import {IFilterOption} from '../../shared/types';
import {useSelector} from "react-redux";
import {RootState} from "../../config/store";
import {updateCategory} from './redux';

interface FilterProps {
  onGetFavorites: (categoryId: number) => void;
}

export default ({ onGetFavorites }: FilterProps) => {
  const dispatch = useDispatch();
  const category = useSelector((state: RootState) => state.favorite.filters.category)

  useEffect(() => {
    onGetFavorites(category);
    console.log('fetch favorites - category: ', category);
  }, [category]);

  const renderDropDownItem = (items: IFilterOption[]) => {
    return _map(items, (item) => <MenuItem key={item.key} value={item.key}>{item.name}</MenuItem>)
  }

  const onCategoryChange = useCallback((category) => {
    dispatch(updateCategory({category: category}));
  }, [dispatch]);

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <FormControl sx={{ minWidth: '100%'}}>
            <InputLabel id='category-label'>Category</InputLabel>
            <Select
              labelId='category-label'
              id={'category-select'}
              label='Category'
              value={category}
              onChange={(e) => onCategoryChange(Number(e.target.value))}
            >
              {renderDropDownItem(CATEGORIES)}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </>
  )
}