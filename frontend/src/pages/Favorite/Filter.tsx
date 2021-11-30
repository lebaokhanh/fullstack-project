import React, {useEffect, useState} from "react";
import { Select, MenuItem, InputLabel, FormControl, Button, Grid } from "@mui/material";
import _map from 'lodash/map';

import {CATEGORIES} from '../../shared/constants';
import {IFilterOption} from '../../shared/types';

interface FilterProps {
  onGetFavorites: (categoryId: number) => void;
}

export default ({ onGetFavorites }: FilterProps) => {
  const [category, setCategory] = useState(CATEGORIES[0].key);

  useEffect(() => {
    onGetFavorites(category);
  }, [category]);

  const handleRefresh = () => {
    onGetFavorites(category);
  }

  const renderDropDownItem = (items: IFilterOption[]) => {
    return _map(items, (item) => <MenuItem key={item.key} value={item.key}>{item.name}</MenuItem>)
  }

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
              onChange={(e) => setCategory(Number(e.target.value))}
            >
              {renderDropDownItem(CATEGORIES)}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <Button variant="outlined" onClick={handleRefresh}>Refresh</Button>
        </Grid>
      </Grid>
    </>
  )
}
