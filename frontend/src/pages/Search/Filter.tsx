import React, {useEffect, useState} from "react";
import { Select, MenuItem, InputLabel, FormControl, Button, Grid } from "@mui/material";
import _map from 'lodash/map';

import {IFilterOption} from '../../shared/types';
import {ORDERS, TYPES, CATEGORIES, BREEDS} from '../../shared/constants';
import {SearchImagePayload} from "./types";

interface IFilter {
  onSearch: (params: SearchImagePayload) => void
};

export default ({onSearch}: IFilter) => {
  const [order, setOrder] = useState(ORDERS[0].key);
  const [type, setType] = useState(TYPES[0].key);
  const [category, setCategory] = useState(CATEGORIES[0].key);
  const [breed, setBreed] = useState(BREEDS[0].key);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const newPage = 0;
    onSearch({ order, type, category, breed, page: newPage});
    setPage(newPage);
  }, [order, type, category, breed]);

  const handleMore = () => {
    const newPage = page + 1;
    onSearch({ order, type, category, breed, page: newPage});
    setPage(newPage);
  }

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
              onChange={(e) => setOrder(e.target.value)}
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
              onChange={(e) => setType(e.target.value)}
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
              value={category}
              onChange={(e) => setCategory(Number(e.target.value))}
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
              onChange={(e) => setBreed(e.target.value)}
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
