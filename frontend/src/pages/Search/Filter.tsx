import React, { useCallback, useEffect } from "react";
import {Select, MenuItem, InputLabel, FormControl, Button, Grid, SelectChangeEvent} from "@mui/material";
import _map from 'lodash/map';
import {useDispatch} from "react-redux";

import {IFilterOption} from '../../shared/types';
import {ORDERS, TYPES, CATEGORIES, BREEDS} from '../../shared/constants';
import {SearchImagePayload, UpdateFilterPayload} from "./types";
import {useSelector} from "react-redux";
import {RootState} from "../../config/store";
import {updateFilter} from "./redux";

interface IFilter {
  onSearch: (params: SearchImagePayload) => void
};

export default ({onSearch}: IFilter) => {
  const dispatch = useDispatch();
  const filters = useSelector((state: RootState) => state.search.filters);
  const {order, type, category, breed, page} = filters;

  useEffect(() => {
    onSearch(filters);
  }, [order, type, category, breed, page]);

  const onUpdateFilter = useCallback((newFilters: UpdateFilterPayload) => {
    dispatch(updateFilter(newFilters));
  }, [dispatch]);

  const handleFilterChange = (e: SelectChangeEvent) => {
    const newFilters = {...filters, [e.target.name]: e.target.value, page: 0};
    onUpdateFilter(newFilters);
  };

  const handleMore = () => {
    const newFilters = {...filters, page: page + 1};
    onUpdateFilter(newFilters);
  };

  const renderDropDownItem = (items: IFilterOption[]) => {
    return _map(items, (item) => <MenuItem key={item.key} value={item.key}>{item.name}</MenuItem>)
  }

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <FormControl sx={{ minWidth: '100%'}}>
            <InputLabel id='order-label'>Order</InputLabel>
            <Select
              labelId='order-label'
              name={'order'}
              label='Order'
              value={order}
              onChange={handleFilterChange}
            >
              {renderDropDownItem(ORDERS)}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl sx={{ minWidth: '100%'}}>
            <InputLabel id='type-label'>Type</InputLabel>
            <Select
              labelId='type-label'
              name={'type'}
              label='Type'
              value={type}
              onChange={handleFilterChange}
            >
              {renderDropDownItem(TYPES)}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl sx={{ minWidth: '100%'}}>
            <InputLabel id='category-label'>Category</InputLabel>
            <Select
              labelId='category-label'
              name={'category'}
              label='Category'
              value={category.toString()}
              onChange={handleFilterChange}
            >
              {renderDropDownItem(CATEGORIES)}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl sx={{ minWidth: '100%'}}>
            <InputLabel id='breed-label'>Breed</InputLabel>
            <Select
              labelId='breed-label'
              name={'breed'}
              label='Breed'
              value={breed}
              onChange={handleFilterChange}
            >
              {renderDropDownItem(BREEDS)}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <Button variant="outlined" onClick={handleMore}>More</Button>
        </Grid>
      </Grid>
    </>
  )
}
